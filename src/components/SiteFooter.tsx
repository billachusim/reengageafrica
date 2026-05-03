import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { VOICES_URL } from "@/config/links";

export const SiteFooter = () => (
  <footer className="bg-night text-night-foreground">
    <div className="container grid gap-10 py-16 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-warm font-serif font-bold text-primary-foreground">R</span>
          <span className="font-serif text-lg font-semibold">
            ReEngage <span className="text-primary">Africa</span>
          </span>
        </div>
        <p className="mt-4 max-w-sm text-sm text-night-foreground/70">
          Engaging elders. Enriching Africa. A platform for wisdom, work, and wonder in the second half of life.
        </p>
        <div className="mt-6 flex gap-3">
          {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid h-10 w-10 place-items-center rounded-full border border-night-foreground/15 text-night-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-serif text-sm uppercase tracking-[0.18em] text-night-foreground/60">Initiatives</h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href={VOICES_URL} className="hover:text-primary">African Voices</a></li>
          <li><a href="#initiatives" className="hover:text-primary">AgriVentures</a></li>
          <li><a href="#initiatives" className="hover:text-primary">Global Mobility</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-serif text-sm uppercase tracking-[0.18em] text-night-foreground/60">Organization</h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href="#about" className="hover:text-primary">About</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          <li><a href="#" className="hover:text-primary">Get involved</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-night-foreground/10">
      <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-night-foreground/60 md:flex-row">
        <p>© {new Date().getFullYear()} ReEngage Africa. All rights reserved.</p>
        <p>Made with care for the wisdom of a continent.</p>
      </div>
    </div>
  </footer>
);
