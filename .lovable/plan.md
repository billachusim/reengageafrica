## ReEngage Africa — Voices-First Landing Page

A complete redesign of the parent organization site that puts **ReEngage African Voices** (the pilot project) front and center, with AgriVentures and Global Mobility presented as supporting teasers. Visual direction blends warm editorial tones, cinematic storytelling, and vibrant African cultural texture.

### Visual concept

- **Palette**: Deep charcoal/night base, warm terracotta + ochre accents, parchment cream highlights. African-inspired pattern motifs used sparingly as section dividers and texture overlays.
- **Typography**: Elegant serif (e.g. Fraunces / Playfair) for headings paired with a clean humanist sans (Inter) for body — magazine feel.
- **Motion**: Subtle parallax on hero, scroll-reveal fades, animated waveforms on audio cards, hover lifts on teaser cards.
- **Imagery**: Large portrait-led photography of elders, grain/texture overlays, generous whitespace around content.

### Page structure

```text
┌────────────────────────────────────────────────┐
│ HERO — cinematic                               │
│  • Full-bleed elder portrait + dark gradient    │
│  • Headline: "Wisdom meets the future"          │
│  • Sub: parent-org one-liner                    │
│  • Primary CTA → Voices  • Secondary → Explore  │
│  • Floating audio waveform teaser               │
├────────────────────────────────────────────────┤
│ VOICES SPOTLIGHT (the centerpiece, ~60%)       │
│  • Intro: what Voices is + why it matters       │
│  • Featured Stories grid (3–4 cards)            │
│      cover art • elder name/region • duration   │
│      inline mini audio player w/ waveform       │
│  • Sticky bottom mini-player when one is active │
│  • Big CTA: "Enter ReEngage African Voices →"   │
├────────────────────────────────────────────────┤
│ HOW VOICES WORKS — 3 steps w/ illustrations    │
│  Listen · Preserve · Pass on                    │
├────────────────────────────────────────────────┤
│ OTHER INITIATIVES (teaser cards, compact)      │
│  • AgriVentures   • Global Mobility             │
│  Each: image, 1-line, "Learn more" (anchor)     │
├────────────────────────────────────────────────┤
│ ABOUT ReEngage Africa — short mission block     │
├────────────────────────────────────────────────┤
│ CONTACT / NEWSLETTER — simple form              │
├────────────────────────────────────────────────┤
│ FOOTER — links, socials, credit                 │
└────────────────────────────────────────────────┘
```

Top nav: Logo · Voices · Initiatives · About · Contact · "Enter Voices" button (accent).

### Voices spotlight — details

- **Featured story card**: cover image, elder's name + region, story title, language tag, duration, play/pause button, animated waveform progress bar, share icon.
- **Mini player**: appears fixed at the bottom once a story is played; persists across scroll with play/pause + close.
- **Placeholder samples**: 3–4 short royalty-free audio clips bundled in `public/audio/` with stock elder portraits — clearly marked so you can swap them later.
- **"Enter Voices" CTA** uses a placeholder URL constant (e.g. `VOICES_URL`) at the top of the page so swapping to the real domain is a one-line change.

### Other initiatives (teased)

Compact two-up section. Each card: hero image, short description from the current site, and a "Learn more" link anchored to a future detail page (placeholder route for now). Keeps focus on Voices while honoring the full org scope.

### Sections trimmed from original

Events and Gallery are removed from the homepage to keep Voices dominant. They can be added later as dedicated pages if you want.

### Technical notes

- React + Vite + Tailwind + shadcn/ui (existing stack).
- New design tokens added to `index.css` and `tailwind.config.ts` (terracotta, ochre, cream, charcoal as HSL semantic tokens). No hard-coded colors in components.
- New components: `Hero`, `VoicesSpotlight`, `StoryCard`, `MiniAudioPlayer`, `HowItWorks`, `InitiativesTeaser`, `AboutBlock`, `ContactSection`, `SiteNav`, `SiteFooter`.
- Audio handled via a small `useAudioPlayer` hook + a single shared `<audio>` element so only one clip plays at a time and the sticky mini-player stays in sync.
- Waveform: lightweight CSS/SVG animated bars (no heavy library) for placeholder; easy to upgrade to wavesurfer.js later.
- Fully responsive; mobile gets a vertically stacked Voices feed and a slide-up mini player.
- `VOICES_URL` constant exported from `src/config/links.ts` — update once you share the real link.
- Replaces the placeholder `Index.tsx`; no backend required at this stage.

### What you'll provide later

- Real Voices platform URL.
- Real elder audio clips, portraits, names, and story metadata.
- Final logo asset (current one can be reused if you share it).
