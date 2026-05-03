import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones, Play } from "lucide-react";
import heroImg from "@/assets/hero-elder.jpg";
import { VOICES_URL } from "@/config/links";
import { Waveform } from "@/components/Waveform";
import { stories } from "@/data/stories";
import { useAudio } from "@/hooks/useAudioPlayer";

export const Hero = () => {
  const featured = stories[0];
  const { toggle, current, isPlaying, progress } = useAudio();
  const isThis = current?.id === featured.id && isPlaying;

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-night text-night-foreground">
      <img
        src={heroImg}
        alt="Elder African woman in traditional headwrap and beaded earrings"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-night" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative container flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-night-foreground/25 bg-night/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-night-foreground/85 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Pilot project · ReEngage African Voices
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl text-balance">
            Wisdom <em className="not-italic text-accent">meets</em> the future.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-night-foreground/85 md:text-lg">
            ReEngage Africa preserves the voices of our elders — their stories, songs, and forgotten
            folklore — and weaves them into a living archive for the generations to come.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-gradient-warm text-primary-foreground shadow-warm hover:opacity-95">
              <a href={VOICES_URL}>
                <Headphones className="mr-2 h-5 w-5" />
                Enter African Voices
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-night-foreground/30 bg-night/20 text-night-foreground hover:bg-night/40 hover:text-night-foreground"
            >
              <a href="#initiatives">
                Explore initiatives <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Floating audio teaser card */}
        <div className="mt-12 max-w-md animate-float md:absolute md:bottom-16 md:right-8 md:mt-0 lg:right-16">
          <div className="rounded-2xl border border-night-foreground/15 bg-night/55 p-4 backdrop-blur-xl shadow-soft">
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggle(featured)}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-warm text-primary-foreground shadow-warm transition-transform hover:scale-105"
                aria-label={isThis ? "Pause story" : "Play story"}
              >
                <Play className="h-5 w-5" fill="currentColor" />
              </button>
              <div className="min-w-0 flex-1">
                <p className="truncate font-serif text-sm font-semibold text-night-foreground">
                  {featured.title}
                </p>
                <p className="truncate text-xs text-night-foreground/70">
                  {featured.elder} · {featured.region}
                </p>
              </div>
              <span className="text-xs text-night-foreground/60">{featured.duration}</span>
            </div>
            <Waveform active={isThis} progress={isThis ? progress : 0.18} className="mt-3" bars={56} />
          </div>
        </div>
      </div>

      {/* Scallop divider into next section */}
      <svg className="absolute bottom-0 left-0 right-0 h-12 w-full text-background" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden>
        <path d="M0,60 C200,0 400,60 600,30 C800,0 1000,60 1200,20 L1200,60 Z" fill="currentColor" />
      </svg>
    </section>
  );
};
