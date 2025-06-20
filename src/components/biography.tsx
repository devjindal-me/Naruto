import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Biography() {
  return (
    <div className="space-y-8 font-body">
      <h2 className="text-3xl font-bold font-headline text-primary">Biography of Naruto Uzumaki</h2>
      
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
        <h3 className="text-2xl font-bold font-headline">Personality</h3>
        <p className="text-muted-foreground">
          Naruto is characterized as boisterous, exuberant, and unorthodox. He inherited his mother's verbal tic, "dattebayo!", which he uses at the end of his sentences. Despite his initial immaturity, Naruto is a kind-hearted individual who is dedicated to his friends and village. His resolve allows him to befriend nearly anyone he meets, and he can change their entire worldview.
        </p>
      </div>

      <Separator />

      <div>
        <h3 className="text-2xl font-bold font-headline mb-4">Key Milestones</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {milestones.map((milestone) => (
            <Card key={milestone.title} className="bg-secondary/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline text-lg">{milestone.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const milestones = [
  { title: "Graduates from the Academy", description: "Successfully creates multiple shadow clones to defeat Mizuki and save Iruka-sensei." },
  { title: "Becomes a Genin", description: "Is assigned to Team 7 under the leadership of Kakashi Hatake, alongside Sasuke Uchiha and Sakura Haruno." },
  { title: "Defeats Pain", description: "Saves the Hidden Leaf Village from destruction and becomes hailed as a hero." },
  { title: "Masters Sage Mode", description: "Learns to harness natural energy at Mount Myōboku, drastically increasing his power." },
  { title: "Befriends Kurama", description: "Gains control over the Nine-Tails' chakra, turning a source of fear into his greatest ally." },
  { title: "Fourth Great Ninja War", description: "Plays a pivotal role in the Allied Shinobi Forces' victory against Obito, Madara, and Kaguya, ending the war and bringing peace." },
  { title: "Becomes Seventh Hokage", description: "Achieves his lifelong dream of becoming the leader and protector of the Hidden Leaf Village." },
];
