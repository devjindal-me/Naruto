import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

const plotTwists = [
    {
        title: "Itachi Uchiha's True Motives",
        explanation: "Initially portrayed as a villain who massacred his clan just to test his abilities, it's later revealed that Itachi did so on the orders of the Hidden Leaf elders to prevent a coup d'état, thereby averting a great war. His entire life was a sacrifice for the sake of peace and his beloved younger brother, Sasuke."
    },
    {
        title: "The Identity of Tobi is Obito Uchiha",
        explanation: "The goofy, masked Akatsuki member known as Tobi was dramatically revealed to be Obito Uchiha, Kakashi's childhood friend who was presumed dead. He was manipulated by Madara Uchiha and became a central antagonist, driving much of the series' conflict."
    },
    {
        title: "The Fourth Hokage is Naruto's Father",
        explanation: "Throughout the first part of the series, Naruto's parentage is a mystery. It's a major revelation when he learns that his father was Minato Namikaze, the revered Fourth Hokage, who died sealing the Nine-Tails within his newborn son."
    },
    {
        title: "The Truth About the Nine-Tails Attack",
        explanation: "The devastating attack on Konoha by the Nine-Tailed Fox, which led to the death of Naruto's parents, was not a random natural disaster. It was orchestrated by Obito Uchiha, who extracted the beast from Naruto's mother, Kushina, during childbirth and unleashed it upon the village."
    },
    {
        title: "Pain's True Identity is Nagato Uzumaki",
        explanation: "The seemingly invincible leader of the Akatsuki, Pain, was revealed to be a series of reanimated corpses controlled by Nagato Uzumaki. Nagato was a fellow orphan from the Rain Village and a former student of Jiraiya, who had once believed Nagato was the Child of Prophecy destined to save the world."
    },
    {
        title: "Black Zetsu, the Master Manipulator",
        explanation: "For centuries, Black Zetsu was the secret architect behind shinobi history. Believed to be the manifestation of Madara's will, he was actually the creation of Kaguya Ōtsutsuki, manipulating generations of ninja, including Madara himself, to orchestrate his 'mother's' resurrection."
    },
];

const milestones = [
    { title: "Graduates from the Academy", description: "Successfully creates multiple shadow clones to defeat Mizuki and save Iruka-sensei." },
    { title: "Becomes a Genin", description: "Is assigned to Team 7 under the leadership of Kakashi Hatake, alongside Sasuke Uchiha and Sakura Haruno." },
    { title: "Defeats Pain", description: "Saves the Hidden Leaf Village from destruction and becomes hailed as a hero." },
    { title: "Masters Sage Mode", description: "Learns to harness natural energy at Mount Myōboku, drastically increasing his power." },
    { title: "Befriends Kurama", description: "Gains control over the Nine-Tails' chakra, turning a source of fear into his greatest ally." },
    { title: "Fourth Great Ninja War", description: "Plays a pivotal role in the Allied Shinobi Forces' victory against Obito, Madara, and Kaguya, ending the war and bringing peace." },
    { title: "Becomes Seventh Hokage", description: "Achieves his lifelong dream of becoming the leader and protector of the Hidden Leaf Village." },
];

export default function PlotTwistsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8">
      <header className="text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Plot Twists & Milestones</h1>
        <p className="text-muted-foreground font-body text-lg mt-2">
            The most shocking revelations and pivotal moments in Naruto's story.
        </p>
      </header>
      
      <div>
        <h2 className="text-3xl font-bold font-headline text-primary mb-4">Major Plot Twists</h2>
        <Accordion type="single" collapsible className="w-full">
            {plotTwists.map((twist, index) => (
            <AccordionItem value={`twist-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline font-headline">
                {twist.title}
                </AccordionTrigger>
                <AccordionContent className="text-base pt-2 font-body text-muted-foreground">
                {twist.explanation}
                </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
      </div>

      <Separator />

      <div>
        <h2 className="text-3xl font-bold font-headline text-primary mb-4">Key Milestones</h2>
         <Accordion type="single" collapsible className="w-full">
            {milestones.map((milestone, index) => (
            <AccordionItem value={`milestone-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline font-headline">
                {milestone.title}
                </AccordionTrigger>
                <AccordionContent className="text-base pt-2 font-body text-muted-foreground">
                {milestone.description}
                </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
      </div>

    </div>
  )
}
