import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface SymptomRequest {
  userId: string
  symptoms: string[]
  cycleDay?: number
  cyclePhase?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: SymptomRequest = await request.json()

    if (!body.userId || !body.symptoms || body.symptoms.length === 0) {
      return new NextResponse(JSON.stringify({ error: "User ID and symptoms are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Generate symptom analysis using AI
    const { text: analysis } = await generateText({
      model: openai("gpt-4o"),
      prompt: `
Analyze the following symptoms in the context of fertility health:
Symptoms: ${body.symptoms.join(", ")}
${body.cycleDay ? `Cycle day: ${body.cycleDay}` : ""}
${body.cyclePhase ? `Cycle phase: ${body.cyclePhase}` : ""}

Provide:
1. A brief explanation of what these symptoms might indicate in relation to the menstrual cycle or fertility
2. Whether these symptoms are common or might warrant medical attention
3. Any lifestyle recommendations that might help
4. A disclaimer that this is not medical advice

Format your response for a WhatsApp message (concise, clear sections).
`,
      system:
        "You are a fertility health educator providing information about reproductive health symptoms. Your analysis is evidence-based but not diagnostic. You always encourage users to consult healthcare providers for personal medical advice, especially for concerning or persistent symptoms.",
    })

    return new NextResponse(JSON.stringify({ analysis }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error analyzing symptoms:", error)
    return new NextResponse(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
