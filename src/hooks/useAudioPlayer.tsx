import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import type { Story } from "@/data/stories";

type Ctx = {
  current: Story | null;
  isPlaying: boolean;
  progress: number; // 0..1
  duration: number;
  currentTime: number;
  toggle: (story: Story) => void;
  play: (story: Story) => void;
  pause: () => void;
  stop: () => void;
  seek: (ratio: number) => void;
};

const AudioCtx = createContext<Ctx | null>(null);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [current, setCurrent] = useState<Story | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  if (!audioRef.current && typeof window !== "undefined") {
    audioRef.current = new Audio();
    audioRef.current.preload = "metadata";
  }

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCurrentTime(a.currentTime);
    const onMeta = () => setDuration(a.duration || 0);
    const onEnd = () => setIsPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const play = useCallback((story: Story) => {
    const a = audioRef.current;
    if (!a) return;
    if (current?.id !== story.id) {
      a.src = story.audio;
      setCurrent(story);
      setCurrentTime(0);
    }
    a.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [current]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback((story: Story) => {
    if (current?.id === story.id && isPlaying) pause();
    else play(story);
  }, [current, isPlaying, play, pause]);

  const stop = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    setIsPlaying(false);
    setCurrent(null);
  }, []);

  const seek = useCallback((ratio: number) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    a.currentTime = Math.max(0, Math.min(1, ratio)) * a.duration;
  }, []);

  const progress = duration ? currentTime / duration : 0;

  const value = useMemo<Ctx>(() => ({
    current, isPlaying, progress, duration, currentTime, toggle, play, pause, stop, seek,
  }), [current, isPlaying, progress, duration, currentTime, toggle, play, pause, stop, seek]);

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>;
};

export const useAudio = () => {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
};

export const formatTime = (s: number) => {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
};
