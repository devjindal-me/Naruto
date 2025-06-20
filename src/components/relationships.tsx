import Image from "next/image";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function Relationships() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-headline text-primary">Important Bonds</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relationships.map((rel) => (
          <Card key={rel.name} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={rel.image}
                  alt={rel.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={rel.aiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <CardTitle className="font-headline text-xl text-white">{rel.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-primary-foreground/90 font-semibold mt-1">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>{rel.relation}</span>
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const relationships = [
  { name: "Sasuke Uchiha", relation: "Rival & Best Friend", image: "https://placehold.co/300x300.png", aiHint: "dark hair" },
  { name: "Sakura Haruno", relation: "Teammate & Friend", image: "https://placehold.co/300x300.png", aiHint: "pink hair" },
  { name: "Kakashi Hatake", relation: "Teacher & Mentor", image: "https://placehold.co/300x300.png", aiHint: "silver hair" },
  { name: "Jiraiya", relation: "Godfather & Master", image: "https://placehold.co/300x300.png", aiHint: "white hair" },
  { name: "Hinata Hyuga", relation: "Wife", image: "https://placehold.co/300x300.png", aiHint: "dark blue hair" },
  { name: "Iruka Umino", relation: "First Mentor", image: "https://placehold.co/300x300.png", aiHint: "brown hair ponytail" },
];
