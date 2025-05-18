import type { NextRequest } from "next/server"

// Verify token from WhatsApp
const VERIFY_TOKEN = "makokoverifytoken"

// WhatsApp API credentials
const WHATSAPP_API_URL = "https://graph.facebook.com/v17.0"
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const mode = searchParams.get("hub.mode")
  const token = searchParams.get("hub.verify_token")
  const challenge = searchParams.get("hub.challenge")

  console.log("Webhook verification attempt:", { mode, token, challenge })

  // Simple verification logic
  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verified successfully")
    // Return ONLY the challenge as plain text
    return new Response(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    })
  }

  console.log("Webhook verification failed")
  return new Response("Verification failed", { status: 403 })
}

export async function POST(request: NextRequest) {
  // Simple acknowledgment for now
  console.log("Received webhook POST")
  return new Response("OK", { status: 200 })
}

async function sendWhatsAppMessage(phoneNumberId: string, to: string, message: string) {
  try {
    console.log("Sending WhatsApp message:", { phoneNumberId, to, messagePreview: message.substring(0, 100) + "..." })

    const response = await fetch(`${WHATSAPP_API_URL}/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: to,
        type: "text",
        text: {
          body: message,
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("WhatsApp API error:", errorData)
      throw new Error(`WhatsApp API error: ${response.status}`)
    }

    const responseData = await response.json()
    console.log("WhatsApp API response:", responseData)
    return responseData
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    throw error
  }
}
