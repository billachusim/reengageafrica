import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones } from "lucide-react";
import { useAudio } from "@/hooks/useAudioPlayer";
import { VOICES_URL } from "@/config/links";

export const PreviewLimitDialog = () => {
  const { limitReached, dismissLimit } = useAudio();

  return (
    <Dialog open={limitReached} onOpenChange={(o) => !o && dismissLimit()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-gradient-warm text-primary-foreground shadow-warm">
            <Headphones className="h-5 w-5" />
          </div>
          <DialogTitle className="text-center font-serif text-2xl">
            Hear the rest of the story
          </DialogTitle>
          <DialogDescription className="text-center">
            Listen to the full audio on ReEngage Voices — our living archive of elder stories, songs and folklore.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button asChild size="lg" className="bg-gradient-warm text-primary-foreground shadow-warm hover:opacity-95">
            <a href={VOICES_URL} target="_blank" rel="noopener noreferrer">
              Listen on ReEngage Voices <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
