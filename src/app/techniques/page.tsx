import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techniques = [
  {
    name: "Rasengan",
    type: "Ninjutsu",
    description: "A spinning ball of chakra formed and held in the palm of the user's hand, which is only known to a handful of shinobi.",
    image: "https://placehold.co/600x400.png",
    aiHint: "blue energy"
  },
  {
    name: "Shadow Clone Jutsu",
    type: "Ninjutsu",
    description: "A technique that creates tangible copies of the user. Naruto's massive chakra reserves allow him to create thousands of clones.",
    image: "https://placehold.co/600x400.png",
    aiHint: "multiple ninjas"
  },
  {
    name: "Sage Mode",
    type: "Senjutsu",
    description: "An empowered state that can be entered by blending natural energy with one's chakra, resulting in a massive boost to all abilities.",
    image: "https://placehold.co/600x400.png",
    aiHint: "glowing eyes"
  },
  {
    name: "Nine-Tails Chakra Mode",
    type: "Jinchūriki",
    description: "A form that Naruto gains after synchronizing with Kurama, granting him immense power, speed, and durability, cloaked in yellow chakra.",
    image: "https://placehold.co/600x400.png",
    aiHint: "yellow aura"
  },
  {
    name: "Summoning Jutsu",
    type: "Ninjutsu",
    description: "A space–time ninjutsu that allows the summoner to transport animals or people across long distances instantly. Naruto summons toads from Mount Myōboku.",
    image: "https://placehold.co/600x400.png",
    aiHint: "giant frog"
  },
  {
    name: "Rasenshuriken",
    type: "Ninjutsu",
    description: "A powerful variation of the Rasengan that incorporates wind nature transformation, creating microscopic wind-blades that damage on a cellular level.",
    image: "https://placehold.co/600x400.png",
    aiHint: "energy shuriken"
  }
];

export default function TechniquesPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8">
      <header className="text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Techniques & Abilities</h1>
        <p className="text-muted-foreground font-body text-lg mt-2">
          The signature moves of Naruto Uzumaki.
        </p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techniques.map((tech) => (
          <Card key={tech.name} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={tech.aiHint}
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="font-headline text-xl font-bold">{tech.name}</h3>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground whitespace-nowrap">{tech.type}</Badge>
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
