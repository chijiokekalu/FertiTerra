import { type NextRequest, NextResponse } from "next/server"
import { processUserMessage, storeUserData, getUserData } from "@/lib/user-service"

// Verify token from WhatsApp
const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || "makoko_fertility_verify_token"

// WhatsApp API credentials
const WHATSAPP_API_URL = "https://graph.facebook.com/v17.0"
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  // Handle the webhook verification request from WhatsApp
  const mode = searchParams.get("hub.mode")
  const token = searchParams.get("hub.verify_token")
  const challenge = searchParams.get("hub.challenge")

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED")
      return new NextResponse(challenge, { status: 200 })
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      return new NextResponse("Forbidden", { status: 403 })
    }
  }

  return new NextResponse("Bad Request", { status: 400 })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Check if this is a WhatsApp message
    if (
      body.object === "whatsapp_business_account" &&
      body.entry &&
      body.entry[0].changes &&
      body.entry[0].changes[0] &&
      body.entry[0].changes[0].value.messages &&
      body.entry[0].changes[0].value.messages[0]
    ) {
      const phoneNumberId = body.entry[0].changes[0].value.metadata.phone_number_id
      const from = body.entry[0].changes[0].value.messages[0].from // Extract the sender's phone number
      const messageId = body.entry[0].changes[0].value.messages[0].id
      const messageBody = body.entry[0].changes[0].value.messages[0].text?.body

      if (messageBody) {
        // Get user data or create new user
        const userData = await getUserData(from)

        // Process the user message to determine intent and context
        const { intent, response, updatedUserData } = await processUserMessage(messageBody, userData)

        // Store updated user data
        await storeUserData(from, updatedUserData)

        // Send the response back to the user via WhatsApp API
        await sendWhatsAppMessage(phoneNumberId, from, response)
      }
    }

    return new NextResponse("OK", { status: 200 })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

async function sendWhatsAppMessage(phoneNumberId: string, to: string, message: string) {
  try {
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

    return await response.json()
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    throw error
  }
}
