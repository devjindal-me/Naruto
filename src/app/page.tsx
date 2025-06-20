import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Biography } from "@/components/biography"
import { Techniques } from "@/components/techniques"
import { Relationships } from "@/components/relationships"
import { PlotTwists } from "@/components/gallery"
import { Chatbot } from "@/components/chatbot"
import { BookUser, Swords, Users, Zap, Bot, Atom } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-muted/40">
      <main className="container mx-auto p-4 md:p-8">
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-4 mb-2">
             <Atom className="w-12 h-12 text-primary" />
             <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
              Naruto Info Hub
            </h1>
          </div>
          <p className="text-muted-foreground font-body text-lg">
            Your one-stop destination for everything about Naruto Uzumaki!
          </p>
        </header>
        
        <Tabs defaultValue="biography" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-card border h-auto">
            <TabsTrigger value="biography" className="py-2"><BookUser className="mr-2 h-4 w-4" />Biography</TabsTrigger>
            <TabsTrigger value="techniques" className="py-2"><Swords className="mr-2 h-4 w-4" />Techniques</TabsTrigger>
            <TabsTrigger value="relationships" className="py-2"><Users className="mr-2 h-4 w-4" />Relationships</TabsTrigger>
            <TabsTrigger value="plot-twists" className="py-2"><Zap className="mr-2 h-4 w-4" />Plot Twists</TabsTrigger>
            <TabsTrigger value="chatbot" className="py-2"><Bot className="mr-2 h-4 w-4" />Chatbot</TabsTrigger>
          </TabsList>
          
          <TabsContent value="biography" className="mt-6 p-4 md:p-6 bg-card rounded-lg border">
            <Biography />
          </TabsContent>
          <TabsContent value="techniques" className="mt-6 p-4 md:p-6 bg-card rounded-lg border">
            <Techniques />
          </TabsContent>
          <TabsContent value="relationships" className="mt-6 p-4 md:p-6 bg-card rounded-lg border">
            <Relationships />
          </TabsContent>
          <TabsContent value="plot-twists" className="mt-6 p-4 md:p-6 bg-card rounded-lg border">
            <PlotTwists />
          </TabsContent>
          <TabsContent value="chatbot" className="mt-6 p-4 md:p-6 bg-card rounded-lg border">
            <Chatbot />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
