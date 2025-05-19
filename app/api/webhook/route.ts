import { processUserMessage, storeUserData, getUserData } from "@/lib/user-service"
import { sendTextMessage, sendButtonMessage } from "@/lib/whatsapp-service"

// Keep the verify token that worked
const VERIFY_TOKEN = "makoko_fertility_verify_token"

export function GET(request) {
  // Extract query parameters
  const url = new URL(request.url)

  // Get verification parameters
  const mode = url.searchParams.get("hub.mode")
  const token = url.searchParams.get("hub.verify_token")
  const challenge = url.searchParams.get("hub.challenge")

  // Verification logic
  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("WEBHOOK_VERIFIED")
    return new Response(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    })
  }

  return new Response("Verification failed", { status: 403 })
}

export async function POST(request) {
  try {
    console.log("Webhook POST received")

    // Parse the request body
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
      const from = body.entry[0].changes[0].value.messages[0].from // Extract the sender's phone number
      const message = body.entry[0].changes[0].value.messages[0]

      // Handle different message types
      if (message.text) {
        // Handle text messages
        const messageContent = message.text.body
        console.log("Received text message:", messageContent)

        // Get user data or create new user
        const userData = await getUserData(from)

        // Process the user message
        const { intent, response, updatedUserData } = await processUserMessage(messageContent, userData)
        console.log("Message processed with intent:", intent)

        // Store updated user data
        await storeUserData(from, updatedUserData)

        // Send the response back to the user
        await sendTextMessage(from, response)

        // If this is a new user who completed onboarding, send a welcome button message
        if (intent === "onboarding" && updatedUserData.onboardingComplete && !userData.onboardingComplete) {
          // Wait a moment before sending the follow-up message
          setTimeout(async () => {
            await sendButtonMessage(from, "What would you like to do next?", [
              { id: "track", title: "Track My Period" },
              { id: "learn", title: "Learn About Fertility" },
              { id: "predict", title: "Predict Ovulation" },
            ])
          }, 2000)
        }
      } else if (message.interactive) {
        // Handle button responses and list responses
        const interactiveType = message.interactive.type
        let selectedValue = ""

        if (interactiveType === "button_reply") {
          selectedValue = message.interactive.button_reply.id
          console.log("Button selected:", selectedValue)
        } else if (interactiveType === "list_reply") {
          selectedValue = message.interactive.list_reply.id
          console.log("List item selected:", selectedValue)
        }

        // Get user data
        const userData = await getUserData(from)

        // Process the selection as if it were a text message
        let processedMessage = ""

        switch (selectedValue) {
          case "track":
            processedMessage = "I want to track my period"
            break
          case "learn":
            processedMessage = "Tell me about fertility"
            break
          case "predict":
            processedMessage = "When is my ovulation day?"
            break
          case "ovulation":
            processedMessage = "What is ovulation?"
            break
          case "period":
            processedMessage = "Tell me about the menstrual cycle"
            break
          case "fertility":
            processedMessage = "How can I improve my fertility?"
            break
          case "nutrition":
            processedMessage = "How does nutrition affect fertility?"
            break
          case "cycle":
            processedMessage = "Explain the menstrual cycle phases"
            break
          default:
            processedMessage = selectedValue // Use the ID directly if no mapping
        }

        // Process the message
        const { intent, response, updatedUserData } = await processUserMessage(processedMessage, userData)

        // Store updated user data
        await storeUserData(from, updatedUserData)

        // Send the response
        await sendTextMessage(from, response)
      } else {
        // Handle other message types (image, audio, etc.)
        console.log("Received non-text message type:", Object.keys(message)[0])
        await sendTextMessage(from, "I can only process text messages at the moment. Please send your query as text.")
      }
    } else if (
      body.object === "whatsapp_business_account" &&
      body.entry &&
      body.entry[0].changes &&
      body.entry[0].changes[0] &&
      body.entry[0].changes[0].value.statuses
    ) {
      // Handle message status updates
      console.log("Received message status update")
    }

    // Always return 200 OK for webhook events
    return new Response("OK", { status: 200 })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return new Response("OK", { status: 200 }) // Still return 200 to acknowledge receipt
  }
}
