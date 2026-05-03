export const AboutBlock = () => (
  <section id="about" className="relative overflow-hidden bg-night py-20 text-night-foreground md:py-28">
    <div className="absolute inset-0 grain pointer-events-none" />
    <div className="container relative grid gap-12 md:grid-cols-12 md:items-center">
      <div className="md:col-span-5">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">About ReEngage Africa</p>
        <h2 className="mt-3 font-serif text-3xl md:text-5xl text-balance">
          We believe Africa's elders are not behind us. They are <em className="not-italic text-accent">ahead of us</em>.
        </h2>
      </div>
      <div className="md:col-span-7 md:pl-10">
        <p className="text-lg leading-relaxed text-night-foreground/85">
          ReEngage Africa exists to bring older generations back to the center of African life —
          not as recipients of care, but as keepers of culture, mentors, entrepreneurs, and
          travelers. Across our initiatives we capture their voices, build with their experience,
          and create spaces where they thrive.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-night-foreground/15 pt-8">
          <div>
            <p className="font-serif text-4xl text-accent">120+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-night-foreground/65">Stories archived</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-accent">14</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-night-foreground/65">Languages</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-accent">9</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-night-foreground/65">Countries</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
