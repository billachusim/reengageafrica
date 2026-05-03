import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stories } from "@/data/stories";
import { StoryCard } from "@/components/StoryCard";
import { VOICES_URL } from "@/config/links";

export const VoicesSpotlight = () => {
  return (
    <section id="voices" className="relative bg-background py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs uppercase tracking-[0.18em] text-secondary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            ReEngage African Voices
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl text-balance">
            Forgotten stories. <em className="not-italic text-primary">Remembered voices.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            African Voices is a living audio archive of folklore, songs, and lived wisdom — narrated
            by elders, preserved for their grandchildren, and shared with the world. Press play and
            let an elder take you home.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <StoryCard story={stories[0]} featured />
          {stories.slice(1).map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-warm p-10 text-center text-primary-foreground shadow-warm md:p-14 grain">
          <h3 className="font-serif text-3xl md:text-5xl text-balance">
            Step into the full archive
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Hundreds more stories, in dozens of languages, waiting on the ReEngage African Voices platform.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-night text-night-foreground hover:bg-night/90"
          >
            <a href={VOICES_URL}>
              Enter African Voices <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
