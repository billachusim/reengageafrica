import { Pause, Play, Share2 } from "lucide-react";
import { useAudio, formatTime } from "@/hooks/useAudioPlayer";
import { Waveform } from "@/components/Waveform";
import type { Story } from "@/data/stories";
import { cn } from "@/lib/utils";

export const StoryCard = ({ story, featured = false }: { story: Story; featured?: boolean }) => {
  const { current, isPlaying, toggle, progress, currentTime, seek } = useAudio();
  const isThis = current?.id === story.id;
  const playing = isThis && isPlaying;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-500",
        "hover:-translate-y-1 hover:shadow-warm",
        featured && "md:flex-row md:col-span-2"
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "aspect-[16/10] md:aspect-auto md:w-1/2" : "aspect-[4/3]")}>
        <img
          src={story.cover}
          alt={`Portrait of ${story.elder}`}
          loading="lazy"
          width={800}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-night/55 px-2.5 py-1 text-[10px] uppercase tracking-wider text-night-foreground backdrop-blur">
            {story.language}
          </span>
          <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] uppercase tracking-wider text-accent-foreground">
            {story.duration}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-night-foreground">
          <p className="text-xs uppercase tracking-[0.18em] opacity-80">{story.region}</p>
          <p className="mt-1 font-serif text-lg font-semibold">{story.elder}</p>
        </div>
      </div>

      <div className={cn("flex flex-col gap-4 p-6", featured && "md:w-1/2 md:p-10")}>
        <h3 className={cn("font-serif font-semibold leading-tight", featured ? "text-3xl" : "text-xl")}>
          {story.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A short story passed down through generations, recorded as part of the ReEngage African Voices archive.
        </p>

        <div className="mt-auto flex items-center gap-3">
          <button
            onClick={() => toggle(story)}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-warm text-primary-foreground shadow-warm transition-transform hover:scale-105"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause className="h-5 w-5" fill="currentColor" /> : <Play className="h-5 w-5" fill="currentColor" />}
          </button>
          <div className="flex-1">
            <Waveform
              active={playing}
              progress={isThis ? progress : 0}
              onSeek={isThis ? seek : undefined}
              bars={48}
            />
            <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
              <span>{isThis ? formatTime(currentTime) : "0:00"}</span>
              <span>{story.duration}</span>
            </div>
          </div>
          <button
            className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Share story"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
};
