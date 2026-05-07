## Quick updates for ReEngage Africa landing

### 1. Brand logo
- Save the uploaded logo to `src/assets/reengage-logo.png`.
- Replace the placeholder "R" badge in:
  - `SiteNav.tsx` (header, both desktop + mobile)
  - `SiteFooter.tsx` (footer brand block)
- Use the logo in the favicon (`index.html`) and as the OG/social image.
- Sizing: `h-9 w-9` rounded-full container with the logo as `<img>` inside (object-contain) so the multicolor circle stays crisp. Drop the warm gradient background since the logo already has its own colors.

### 2. New realistic elder portraits + slim down audio list
- Generate 3 new cinematic, photoreal portraits matching the hero style (warm rim light, neutral background, dignified close-ups of African elders) using the agent image tool, save to `src/assets/elder-new-1/2/3.jpg`.
- Reduce `src/data/stories.ts` from 4 stories → **3 stories**, each using the new images. Keep title/elder/region/language/duration metadata. Audio URLs stay as the SoundHelix placeholders for now.
- Update `VoicesSpotlight.tsx` grid: featured card on top, 2 secondary cards below — works cleanly on the current 791px viewport too.
- Remove the now-unused old `elder-1..4.jpg` files.

### 3. Email correction
- `ContactSection.tsx` line 42: `hello@reengageafrica.org` → `hello@reengageafrica.com`.
- Check footer / any other refs (none currently, but will grep).

### 4. Whitespace / breathing-room pass
The current page has long flat vertical stretches between sections, especially on tablet (~791px) where `py-20 md:py-32` stacks feel airy but disconnected. Recommended fixes:

- **Tighten vertical rhythm**: drop section padding from `py-20 md:py-32` to `py-16 md:py-24` on `VoicesSpotlight`, `HowItWorks`, `InitiativesTeaser`, `AboutBlock`, `ContactSection` — tighter, more cinematic pacing.
- **Section transitions**: add subtle visual links between sections so whitespace feels intentional, not empty:
  - Soft cream/ochre tinted background on alternating sections (e.g. `HowItWorks` and `AboutBlock` get a `bg-secondary/40` band) so the eye has anchors.
  - Keep the existing scallop divider under the hero; add a thin warm hairline divider (`border-t border-border/60`) between same-bg sections.
- **Constrain max content width**: cap headings/paragraphs at `max-w-3xl` consistently so they don't float lonely in wide containers.
- **Card density**: in `VoicesSpotlight`, reduce gap from `gap-6` to `gap-5` and add a small decorative element (muted ochre dot pattern or single quote-mark watermark) behind the section header to fill negative space meaningfully.
- **Hero bottom**: on tablet the floating audio card sits in awkward space — anchor it to the bottom-right with safer offsets so it visually balances the headline column.

### 5. Technical notes
- Logo import: `import logo from "@/assets/reengage-logo.png"`; rendered as `<img src={logo} alt="ReEngage Africa" className="h-9 w-9 object-contain" />`.
- Image generation: 3 portraits via the agent's standard image tool, 1024x1024, prompt tuned to match hero's warm cinematic style.
- No new dependencies, no backend changes.

### Files touched
- `src/assets/reengage-logo.png` (new, copied from upload)
- `src/assets/elder-new-1.jpg`, `elder-new-2.jpg`, `elder-new-3.jpg` (new)
- delete `src/assets/elder-1..4.jpg`
- `index.html` (favicon)
- `src/components/SiteNav.tsx`, `SiteFooter.tsx` (logo)
- `src/components/ContactSection.tsx` (email)
- `src/data/stories.ts` (3 stories, new images)
- `src/components/VoicesSpotlight.tsx` (spacing, decorative element)
- `src/components/HowItWorks.tsx`, `InitiativesTeaser.tsx`, `AboutBlock.tsx`, `ContactSection.tsx` (padding rhythm + alternating bg)
- `src/components/Hero.tsx` (audio card positioning at tablet)
