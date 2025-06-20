import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function PlotTwists() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-headline text-primary">Major Plot Twists</h2>
      <p className="text-muted-foreground font-body">
        Some of the most shocking revelations in the Naruto series. Spoiler alert!
      </p>
      <Accordion type="single" collapsible className="w-full">
        {plotTwists.map((twist, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
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
  )
}

const plotTwists = [
  {
    title: "Itachi Uchiha's True Motives",
    explanation: "Initially portrayed as a villain who massacred his clan just to test his abilities, it's later revealed that Itachi did so on the orders of the Hidden Leaf elders to prevent a coup d'état, thereby averting a great war. His entire life was a sacrifice for the sake of peace and his beloved younger brother, Sasuke."
  },
  {
    title: "The Identity of Tobi",
    explanation: "The goofy, masked Akatsuki member known as Tobi was dramatically revealed to be Obito Uchiha, Kakashi's childhood friend who was presumed dead. He was manipulated by Madara Uchiha and became a central antagonist, driving much of the series' conflict."
  },
  {
    title: "The Truth About the Nine-Tails Attack",
    explanation: "The devastating attack on Konoha by the Nine-Tailed Fox, which led to the death of Naruto's parents, was not a random natural disaster. It was orchestrated by Obito Uchiha, who extracted the beast from Naruto's mother, Kushina, during childbirth and unleashed it upon the village."
  },
  {
    title: "Black Zetsu, the Master Manipulator",
    explanation: "For centuries, Black Zetsu was the secret architect behind shinobi history. Believed to be the manifestation of Madara's will, he was actually the creation of Kaguya Ōtsutsuki, manipulating generations of ninja, including Madara himself, to orchestrate his 'mother's' resurrection."
  },
  {
    title: "Pain's True Identity",
    explanation: "The seemingly invincible leader of the Akatsuki, Pain, was revealed to be a series of reanimated corpses controlled by Nagato Uzumaki. Nagato was a fellow orphan from the Rain Village and a former student of Jiraiya, who had once believed Nagato was the Child of Prophecy destined to save the world."
  }
];
