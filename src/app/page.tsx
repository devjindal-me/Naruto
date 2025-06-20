import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function BiographyPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8 font-body">
      <header className="text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          Biography of Naruto Uzumaki
        </h1>
        <p className="text-muted-foreground font-body text-lg mt-2">
          The story of the Hero of the Hidden Leaf.
        </p>
      </header>
      
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4">
          <p className="text-lg leading-relaxed">
            Naruto Uzumaki is a shinobi from Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement, all the while chasing his dream to become Hokage.
          </p>
          <p className="text-muted-foreground">
            In the following years, through many hardships and ordeals, he became a capable ninja regarded as a hero by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf. He soon proved to be one of the main factors in winning the Fourth Great Ninja War, leading him to achieve his dream and become the village's Seventh Hokage.
          </p>
        </div>
        <div className="relative group">
          <Image 
            src="https://placehold.co/400x500.png"
            alt="Naruto Uzumaki Portrait"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="Naruto portrait"
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-6">
        <h2 className="text-3xl font-bold font-headline text-center">Personality</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">
          Naruto is characterized as boisterous, exuberant, and unorthodox. He inherited his mother's verbal tic, "dattebayo!", which he uses at the end of his sentences. Despite his initial immaturity, Naruto is a kind-hearted individual who is dedicated to his friends and village. His resolve allows him to befriend nearly anyone he meets, and he can change their entire worldview.
        </p>
      </div>
    </div>
  )
}
