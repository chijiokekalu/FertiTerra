import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface ContentRequest {
  topic: string
  userId?: string
  userContext?: {
    cyclePhase?: string
    pregnancyStatus?: string
    age?: number
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContentRequest = await request.json()

    if (!body.topic) {
      return new NextResponse(JSON.stringify({ error: "Topic is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Generate educational content using AI
    const { text: content } = await generateText({
      model: openai("gpt-4o"),
      prompt: `
Generate educational content about "${body.topic}" related to fertility health.
${body.userContext ? `User context: ${JSON.stringify(body.userContext)}` : ""}

The content should be:
1. Accurate and evidence-based
2. Easy to understand (avoid complex medical terminology)
3. Culturally sensitive
4. Formatted for WhatsApp (use emojis and clear sections)
5. Concise (maximum 500 words)

Include:
- A brief introduction
- Key facts
- Practical advice
- A conclusion with a positive message
`,
      system:
        "You are a fertility health educator providing accurate, accessible information about reproductive health. Your content is evidence-based, culturally sensitive, and appropriate for all audiences. You avoid making definitive medical claims and encourage users to consult healthcare providers for personal medical advice.",
    })

    return new NextResponse(JSON.stringify({ content }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error generating educational content:", error)
    return new NextResponse(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
