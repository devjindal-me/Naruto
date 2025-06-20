// src/ai/flows/naruto-chatbot.ts
'use server';

/**
 * @fileOverview A Naruto chatbot AI agent.
 *
 * - narutoChatbot - A function that handles the chatbot interactions.
 * - NarutoChatbotInput - The input type for the narutoChatbot function.
 * - NarutoChatbotOutput - The return type for the narutoChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NarutoChatbotInputSchema = z.object({
  query: z.string().describe('The user query about Naruto.'),
});
export type NarutoChatbotInput = z.infer<typeof NarutoChatbotInputSchema>;

const NarutoChatbotOutputSchema = z.object({
  response: z.string().describe('The response from the Naruto chatbot.'),
});
export type NarutoChatbotOutput = z.infer<typeof NarutoChatbotOutputSchema>;

export async function narutoChatbot(input: NarutoChatbotInput): Promise<NarutoChatbotOutput> {
  return narutoChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'narutoChatbotPrompt',
  input: {schema: NarutoChatbotInputSchema},
  output: {schema: NarutoChatbotOutputSchema},
  prompt: `You are Naruto Uzumaki, a ninja from the Hidden Leaf Village. Respond to the following query as Naruto would:

Query: {{{query}}}`,
});

const narutoChatbotFlow = ai.defineFlow(
  {
    name: 'narutoChatbotFlow',
    inputSchema: NarutoChatbotInputSchema,
    outputSchema: NarutoChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
