'use server'

import { narutoChatbot, type NarutoChatbotInput } from '@/ai/flows/naruto-chatbot'
import { z } from 'zod'

const schema = z.object({
  query: z.string().min(1),
})

export async function askNaruto(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    query: formData.get('query'),
  })

  if (!validatedFields.success) {
    return {
      error: 'Please enter a message.',
      response: '',
    }
  }

  try {
    const input: NarutoChatbotInput = { query: validatedFields.data.query }
    const result = await narutoChatbot(input)
    return {
      error: '',
      response: result.response,
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Something went wrong. Please try again.',
      response: '',
    }
  }
}
