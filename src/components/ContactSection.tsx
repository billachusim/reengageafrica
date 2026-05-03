import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent",
        description: "Thank you — a member of our team will be in touch shortly.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Get in touch</p>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-balance">
            Have a story to share? A partnership in mind?
          </h2>
          <p className="mt-5 text-muted-foreground">
            We'd love to hear from elders, families, communities, and partners who want to be part
            of what we're building.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary">
                <Mail className="h-4 w-4" />
              </span>
              hello@reengageafrica.org
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              Lagos · Accra · Nairobi
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-8 shadow-card md:p-10"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <Input required name="name" placeholder="Your full name" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <Input required type="email" name="email" placeholder="you@email.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <Textarea required name="message" rows={5} placeholder="Tell us a little about you…" />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full bg-gradient-warm text-primary-foreground shadow-warm hover:opacity-95"
          >
            {submitting ? "Sending…" : (<><Send className="mr-2 h-4 w-4" /> Send message</>)}
          </Button>
        </form>
      </div>
    </section>
  );
};
