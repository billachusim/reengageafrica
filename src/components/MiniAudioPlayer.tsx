import { Pause, Play, X } from "lucide-react";
import { useAudio, formatTime } from "@/hooks/useAudioPlayer";
import { Waveform } from "@/components/Waveform";

export const MiniAudioPlayer = () => {
  const { current, isPlaying, toggle, stop, progress, currentTime, duration, seek } = useAudio();
  if (!current) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-6 sm:pb-6 pointer-events-none">
      <div className="mx-auto flex max-w-3xl items-center gap-3 rounded-2xl border border-night-foreground/15 bg-night/90 px-4 py-3 text-night-foreground shadow-warm backdrop-blur-xl pointer-events-auto animate-fade-up">
        <img
          src={current.cover}
          alt=""
          className="h-12 w-12 shrink-0 rounded-lg object-cover"
        />
        <button
          onClick={() => toggle(current)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-warm text-primary-foreground shadow-warm"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="h-4 w-4" fill="currentColor" />}
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="truncate font-serif text-sm font-semibold">{current.title}</p>
            <span className="hidden text-[11px] text-night-foreground/65 sm:inline">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          <Waveform active={isPlaying} progress={progress} onSeek={seek} bars={48} className="h-6" />
        </div>
        <button
          onClick={stop}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-night-foreground/70 transition-colors hover:bg-night-foreground/10"
          aria-label="Close player"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
