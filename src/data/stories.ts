import elder1 from "@/assets/elder-new-1.jpg";
import elder2 from "@/assets/elder-new-2.jpg";
import elder3 from "@/assets/elder-new-3.jpg";

export type Story = {
  id: string;
  title: string;
  elder: string;
  region: string;
  language: string;
  duration: string;
  cover: string;
  audio: string;
};

// Placeholder audio clips (royalty-free SoundHelix samples). Swap with real elder recordings.
export const stories: Story[] = [
  {
    id: "story-1",
    title: "The Tortoise and the Sky",
    elder: "Mama Adaeze",
    region: "Eastern Nigeria",
    language: "Igbo",
    duration: "4:12",
    cover: elder1,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "story-2",
    title: "When the Rains Forgot Us",
    elder: "Baba Sulemana",
    region: "Northern Ghana",
    language: "Dagbani",
    duration: "3:48",
    cover: elder2,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "story-3",
    title: "Songs My Mother Hummed",
    elder: "Gogo Naledi",
    region: "Limpopo, South Africa",
    language: "Sepedi",
    duration: "5:21",
    cover: elder3,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];
