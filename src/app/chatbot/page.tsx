"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { askNaruto } from "@/app/actions";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Believe it! I'm Naruto Uzumaki. Ask me anything, dattebayo!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.children[0].children[0] as HTMLDivElement;
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const formData = new FormData();
    formData.append("query", input);

    try {
      const result = await askNaruto(null, formData);

      if (result.error) {
        const botMessage: Message = { role: "bot", content: result.error };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const botMessage: Message = { role: "bot", content: result.response };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      const errorMessage: Message = {
        role: "bot",
        content: "Oops! Something went wrong on my end. Try again in a bit!",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 h-[calc(100vh-80px)] flex flex-col">
       <header className="text-center mb-4 flex-shrink-0">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Chat with Naruto</h1>
        <p className="text-muted-foreground font-body text-lg mt-2">
            Ask me anything, dattebayo!
        </p>
      </header>
      <div className="flex-grow bg-card rounded-lg border p-4 flex flex-col min-h-0">
        <ScrollArea className="flex-grow pr-4" ref={scrollAreaRef}>
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "bot" && (
                  <Avatar className="w-10 h-10 border-2 border-primary">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="Naruto" data-ai-hint="naruto face" />
                    <AvatarFallback>
                      <Bot />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "p-3 rounded-lg max-w-sm md:max-w-md lg:max-w-lg font-body",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <Avatar className="w-10 h-10 border-2 border-secondary">
                    <AvatarFallback>
                      <User />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                 <Avatar className="w-10 h-10 border-2 border-primary">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="Naruto" data-ai-hint="naruto face" />
                    <AvatarFallback>
                      <Bot />
                    </AvatarFallback>
                  </Avatar>
                <div className="p-3 rounded-lg bg-secondary flex items-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2 flex-shrink-0">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Naruto a question..."
            className="flex-grow resize-none bg-background"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as any);
              }
            }}
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
