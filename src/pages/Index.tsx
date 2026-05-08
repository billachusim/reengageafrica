import { useEffect } from "react";
import { AudioProvider } from "@/hooks/useAudioPlayer";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { VoicesSpotlight } from "@/components/VoicesSpotlight";
import { HowItWorks } from "@/components/HowItWorks";
import { InitiativesTeaser } from "@/components/InitiativesTeaser";
import { AboutBlock } from "@/components/AboutBlock";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { MiniAudioPlayer } from "@/components/MiniAudioPlayer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { PreviewLimitDialog } from "@/components/PreviewLimitDialog";

const Index = () => {
  useEffect(() => {
    document.title = "ReEngage Africa — Wisdom meets the future";
    const meta = document.querySelector('meta[name="description"]') ?? (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "ReEngage Africa preserves the voices, stories and wisdom of Africa's elders through African Voices, AgriVentures and Global Mobility."
    );
  }, []);

  return (
    <AudioProvider>
      <div className="min-h-screen bg-background">
        <SiteNav />
        <main>
          <Hero />
          <VoicesSpotlight />
          <HowItWorks />
          <InitiativesTeaser />
          <AboutBlock />
          <ContactSection />
        </main>
        <SiteFooter />
        <MiniAudioPlayer />
      </div>
    </AudioProvider>
  );
};

export default Index;
