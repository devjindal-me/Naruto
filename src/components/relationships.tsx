import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function Relationships() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-headline text-primary">Important Bonds</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relationships.map((rel) => (
          <Card key={rel.name} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={rel.image}
                  alt={rel.name}
                  fill
                  className="object-cover rounded-full border-4 border-secondary group-hover:border-primary transition-colors duration-300"
                  data-ai-hint={rel.aiHint}
                />
              </div>
              <CardTitle className="font-headline text-xl">{rel.name}</CardTitle>
              <CardDescription className="flex items-center justify-center gap-2 text-accent font-semibold mt-1">
                <Heart className="w-4 h-4" />
                <span>{rel.relation}</span>
              </CardDescription>
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
