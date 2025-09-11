'use server';

/**
 * @fileOverview Defines a Genkit flow for defining key terms within chapter content using an LLM.
 *
 * - defineKeyTerm - A function that handles the definition of key terms.
 * - DefineKeyTermInput - The input type for the defineKeyTerm function.
 * - DefineKeyTermOutput - The return type for the defineKeyTerm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DefineKeyTermInputSchema = z.object({
  term: z.string().describe('The key term to define.'),
  context: z.string().describe('The surrounding context of the term within the chapter.'),
});
export type DefineKeyTermInput = z.infer<typeof DefineKeyTermInputSchema>;

const DefineKeyTermOutputSchema = z.object({
  definition: z.string().describe('The definition of the key term.'),
  relatedSections: z.array(z.string()).optional().describe('Optional: Links or references to related sections within the chapter.'),
});
export type DefineKeyTermOutput = z.infer<typeof DefineKeyTermOutputSchema>;

export async function defineKeyTerm(input: DefineKeyTermInput): Promise<DefineKeyTermOutput> {
  return defineKeyTermFlow(input);
}

const defineKeyTermPrompt = ai.definePrompt({
  name: 'defineKeyTermPrompt',
  input: {schema: DefineKeyTermInputSchema},
  output: {schema: DefineKeyTermOutputSchema},
  prompt: `You are an expert in political science. Please provide a clear and concise definition for the term: {{{term}}}. Consider the following context when crafting your definition: {{{context}}}. If applicable, list related sections or concepts that would further help in understanding the term.`,
});

const defineKeyTermFlow = ai.defineFlow(
  {
    name: 'defineKeyTermFlow',
    inputSchema: DefineKeyTermInputSchema,
    outputSchema: DefineKeyTermOutputSchema,
  },
  async input => {
    const {output} = await defineKeyTermPrompt(input);
    return output!;
  }
);
