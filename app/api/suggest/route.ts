// app/api/suggest/route.ts
import { NextRequest, NextResponse } from 'next/server'

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export async function POST(req: NextRequest) {
  const { userInput } = await req.json()

  const system_prompt = `You are an expert assistant that recommends the best LLM-based approach for a user-described use case. Be sure to provide the simplest method that meets the user's needs, and explain why it is the best choice. If the user describes a complex task, suggest starting with a simpler method first. Also suggest a more complex option if appropriate, but emphasize starting simple.
    Classify the input into one of these categories:
    - Single-Shot Prompting ✨
    - Few-Shot or Chain-of-Thought Prompting 🔄
    - RAG (Retrieval-Augmented Generation) 📚
    - Multi-Step Agent Workflow ⚙️
    - Fine-Tuning or Custom Model 🧪

    Respond in JSON format like this:
    {"method": "...", "reason": "...", "tips": "...", "complex": "..."}`

  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: system_prompt
        },
        {
          role: 'user',
          content: userInput
        }
      ]
    })
  })

  if (!response.ok) {
    return NextResponse.json({ error: 'OpenAI API call failed' }, { status: 500 })
  }

  const result = await response.json()
  try {
    const content = result.choices[0].message.content
    const jsonStart = content.indexOf('{')
    const json = JSON.parse(content.slice(jsonStart))
    return NextResponse.json(json)
  } catch (err) {
    return NextResponse.json({ error: 'Could not parse OpenAI model output' }, { status: 500 })
  }
}
