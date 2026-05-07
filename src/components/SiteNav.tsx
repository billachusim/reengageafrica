import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { VOICES_URL } from "@/config/links";
import { cn } from "@/lib/utils";
import logo from "@/assets/reengage-logo.png";

const links = [
  { href: "#voices", label: "Voices" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="ReEngage Africa"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-contain transition-transform group-hover:scale-105"
          />
          <span
            className={cn(
              "font-serif text-lg font-semibold tracking-tight",
              scrolled ? "text-foreground" : "text-night-foreground"
            )}
          >
            ReEngage <span className="text-primary">Africa</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                scrolled ? "text-foreground/80" : "text-night-foreground/85"
              )}
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-gradient-warm text-primary-foreground shadow-warm hover:opacity-95">
            <a href={VOICES_URL}>
              Enter Voices <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          className={cn(
            "md:hidden rounded-md p-2",
            scrolled ? "text-foreground" : "text-night-foreground"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <div className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/85 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-gradient-warm text-primary-foreground">
              <a href={VOICES_URL} onClick={() => setOpen(false)}>
                Enter Voices <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
