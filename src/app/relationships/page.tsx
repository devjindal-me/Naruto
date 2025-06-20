import Image from "next/image";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart } from "lucide-react";

const relationships = [
  { name: "Sasuke Uchiha", relation: "Rival & Best Friend", image: "https://placehold.co/200x200.png", aiHint: "dark hair" },
  { name: "Sakura Haruno", relation: "Teammate & Friend", image: "https://placehold.co/200x200.png", aiHint: "pink hair" },
  { name: "Kakashi Hatake", relation: "Teacher & Mentor", image: "https://placehold.co/200x200.png", aiHint: "silver hair" },
  { name: "Jiraiya", relation: "Godfather & Master", image: "https://placehold.co/200x200.png", aiHint: "white hair" },
  { name: "Hinata Hyuga", relation: "Wife", image: "https://placehold.co/200x200.png", aiHint: "dark blue hair" },
  { name: "Iruka Umino", relation: "First Mentor", image: "https://placehold.co/200x200.png", aiHint: "brown hair ponytail" },
];

export default function RelationshipsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8">
      <header className="text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Important Bonds</h1>
        <p className="text-muted-foreground font-body text-lg mt-2">
          The people who shaped Naruto's journey.
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
