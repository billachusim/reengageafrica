import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import type { Story } from "@/data/stories";

const PREVIEW_LIMIT_SECONDS = 10;

type Ctx = {
  current: Story | null;
  isPlaying: boolean;
  progress: number; // 0..1 (over the preview window)
  duration: number; // capped to preview limit
  currentTime: number;
  toggle: (story: Story) => void;
  play: (story: Story) => void;
  pause: () => void;
  stop: () => void;
  seek: (ratio: number) => void;
  limitReached: boolean;
  dismissLimit: () => void;
};

const AudioCtx = createContext<Ctx | null>(null);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [current, setCurrent] = useState<Story | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rawDuration, setRawDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [limitReached, setLimitReached] = useState(false);
  const dismissedRef = useRef(false);

  if (!audioRef.current && typeof window !== "undefined") {
    audioRef.current = new Audio();
    audioRef.current.preload = "metadata";
  }

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      if (a.currentTime >= PREVIEW_LIMIT_SECONDS) {
        a.pause();
        a.currentTime = PREVIEW_LIMIT_SECONDS;
        setCurrentTime(PREVIEW_LIMIT_SECONDS);
        setIsPlaying(false);
        if (!dismissedRef.current) setLimitReached(true);
      } else {
        setCurrentTime(a.currentTime);
      }
    };
    const onMeta = () => setRawDuration(a.duration || 0);
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
    if (a.currentTime >= PREVIEW_LIMIT_SECONDS) {
      a.currentTime = 0;
      setCurrentTime(0);
    }
    dismissedRef.current = false;
    setLimitReached(false);
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
    setLimitReached(false);
  }, []);

  const seek = useCallback((ratio: number) => {
    const a = audioRef.current;
    if (!a) return;
    const target = Math.max(0, Math.min(1, ratio)) * PREVIEW_LIMIT_SECONDS;
    a.currentTime = target;
    setCurrentTime(target);
    if (target < PREVIEW_LIMIT_SECONDS) setLimitReached(false);
  }, []);

  const dismissLimit = useCallback(() => {
    dismissedRef.current = true;
    setLimitReached(false);
  }, []);

  const duration = Math.min(rawDuration || PREVIEW_LIMIT_SECONDS, PREVIEW_LIMIT_SECONDS);
  const progress = duration ? Math.min(currentTime, duration) / duration : 0;

  const value = useMemo<Ctx>(() => ({
    current, isPlaying, progress, duration, currentTime, toggle, play, pause, stop, seek,
    limitReached, dismissLimit,
  }), [current, isPlaying, progress, duration, currentTime, toggle, play, pause, stop, seek, limitReached, dismissLimit]);

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
