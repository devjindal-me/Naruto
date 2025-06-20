import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Gallery() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-headline text-primary">Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <Card key={image.src} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={image.aiHint}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const galleryImages = [
  { src: "https://placehold.co/500x500.png", alt: "Naruto as a child", aiHint: "young naruto" },
  { src: "https://placehold.co/500x500.png", alt: "Naruto in Sage Mode", aiHint: "naruto sage" },
  { src: "https://placehold.co/500x500.png", alt: "Team 7", aiHint: "naruto sasuke sakura" },
  { src: "https://placehold.co/500x500.png", alt: "Naruto with Rasengan", aiHint: "naruto rasengan" },
  { src: "https://placehold.co/500x500.png", alt: "Naruto as Hokage", aiHint: "hokage naruto" },
  { src: "https://placehold.co/500x500.png", alt: "Naruto and Kurama", aiHint: "naruto kurama" },
  { src: "https://placehold.co/500x500.png", alt: "Naruto fighting", aiHint: "naruto fighting" },
  { src: "https://placehold.co/500x500.png", alt: "A thoughtful Naruto", aiHint: "naruto thinking" },
];
