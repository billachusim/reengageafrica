import { Headphones, Mic, Share2 } from "lucide-react";

const steps = [
  {
    icon: Mic,
    title: "We listen",
    body: "Our local teams sit with elders in their homes and villages, recording the stories they want to leave behind. Elders can also self-record anytime through Agadi, our WhatsApp chatbot.",
  },
  {
    icon: Headphones,
    title: "We preserve",
    body: "Every recording is carefully archived in its original language, with translations and context for the future.",
  },
  {
    icon: Share2,
    title: "We pass it on",
    body: "Stories travel back to families, schools, and communities — keeping wisdom alive across generations.",
  },
];

export const HowItWorks = () => (
  <section className="relative bg-secondary/40 py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">How African Voices works</p>
        <h2 className="mt-3 font-serif text-3xl md:text-5xl text-balance">
          Three quiet acts of remembrance
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isListen = s.title === "We listen";
          return (
            <div
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="absolute right-6 top-6 font-serif text-5xl text-primary/15">
                0{i + 1}
              </span>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-warm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              {isListen && (
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Agadi on WhatsApp
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
