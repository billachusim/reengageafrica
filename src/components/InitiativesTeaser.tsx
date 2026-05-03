import { ArrowUpRight } from "lucide-react";
import agri from "@/assets/agri.jpg";
import travel from "@/assets/travel.jpg";

const initiatives = [
  {
    tag: "AgriVentures",
    title: "Turning land, time and savings into thriving agribusiness.",
    body: "We help midlife and retired adults build small-scale farms and commercial agricultural ventures across the continent.",
    href: "#agriventures",
    image: agri,
  },
  {
    tag: "Global Mobility",
    title: "Curated travel for those entering their richest chapter.",
    body: "Safe, structured, and meaningful journeys designed for midlife and retired adults — leisure, culture, and community.",
    href: "#mobility",
    image: travel,
  },
];

export const InitiativesTeaser = () => (
  <section id="initiatives" className="bg-background py-20 md:py-28">
    <div className="container">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">More from ReEngage Africa</p>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-balance">
            Beyond Voices, an ecosystem for the wisdom years.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Voices is our pilot. Alongside it, two further initiatives invite elders into productive,
          adventurous and connected later years.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {initiatives.map((i) => (
          <a
            key={i.tag}
            href={i.href}
            className="group relative overflow-hidden rounded-3xl border border-border shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-warm"
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src={i.image}
                alt={i.tag}
                loading="lazy"
                width={1200}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-night-foreground">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent-foreground">
                  ReEngage {i.tag}
                </span>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl text-balance">{i.title}</h3>
                <p className="mt-3 max-w-md text-sm text-night-foreground/85">{i.body}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-night-foreground">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
