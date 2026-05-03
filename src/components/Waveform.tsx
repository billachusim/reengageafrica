import { cn } from "@/lib/utils";

type Props = {
  active?: boolean;
  progress?: number; // 0..1
  bars?: number;
  className?: string;
  onSeek?: (ratio: number) => void;
};

// Deterministic pseudo-random heights so bars look like a waveform but are stable.
const heights = (n: number) =>
  Array.from({ length: n }, (_, i) => {
    const x = Math.sin(i * 1.7) * Math.cos(i * 0.7) + Math.sin(i * 0.3);
    return 0.35 + Math.abs(x) * 0.55;
  });

export const Waveform = ({ active = false, progress = 0, bars = 48, className, onSeek }: Props) => {
  const hs = heights(bars);
  return (
    <div
      className={cn("flex h-10 w-full items-center gap-[3px] cursor-pointer select-none", className)}
      onClick={(e) => {
        if (!onSeek) return;
        const rect = e.currentTarget.getBoundingClientRect();
        onSeek((e.clientX - rect.left) / rect.width);
      }}
      role={onSeek ? "slider" : undefined}
      aria-label="Audio progress"
    >
      {hs.map((h, i) => {
        const filled = i / bars <= progress;
        return (
          <span
            key={i}
            className={cn(
              "block w-[3px] rounded-full transition-colors",
              filled ? "bg-primary" : "bg-foreground/20",
              active && "animate-wave"
            )}
            style={{
              height: `${h * 100}%`,
              animationDelay: `${(i % 8) * 0.08}s`,
            }}
          />
        );
      })}
    </div>
  );
};
