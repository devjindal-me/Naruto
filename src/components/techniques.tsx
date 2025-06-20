import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Techniques() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-headline text-primary">Techniques & Abilities</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techniques.map((tech) => (
          <Card key={tech.name} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="font-headline text-xl">{tech.name}</CardTitle>
                <Badge variant="secondary" className="bg-accent text-accent-foreground">{tech.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-cover rounded-md"
                  data-ai-hint={tech.aiHint}
                />
              </div>
              <CardDescription className="font-body text-base text-muted-foreground flex-grow">
                {tech.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

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
