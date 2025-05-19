import { NextResponse } from "next/server"
import { sendTextMessage, sendImageMessage, sendButtonMessage, sendListMessage } from "@/lib/whatsapp-service"

export async function POST(request) {
  try {
    const body = await request.json()
    const { phoneNumber, messageType = "text" } = body

    if (!phoneNumber) {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 })
    }

    let result

    switch (messageType) {
      case "text":
        result = await sendTextMessage(
          phoneNumber,
          "Hello from Makoko! This is a test text message. How can I help you with your fertility health today?",
        )
        break

      case "image":
        result = await sendImageMessage(
          phoneNumber,
          "https://www.who.int/images/default-source/infographics/menstrual-health.jpg",
          "Understanding your menstrual cycle is key to tracking fertility.",
        )
        break

      case "buttons":
        result = await sendButtonMessage(phoneNumber, "What would you like to learn about today?", [
          { id: "ovulation", title: "Ovulation" },
          { id: "period", title: "Menstrual Cycle" },
          { id: "fertility", title: "Fertility" },
        ])
        break

      case "list":
        result = await sendListMessage(phoneNumber, "Here are some fertility topics you might be interested in:", [
          {
            title: "Fertility Topics",
            rows: [
              {
                id: "ovulation",
                title: "Ovulation",
                description: "Learn about ovulation and fertile window",
              },
              {
                id: "cycle",
                title: "Menstrual Cycle",
                description: "Understanding your menstrual cycle",
              },
              {
                id: "nutrition",
                title: "Nutrition & Fertility",
                description: "How diet affects fertility",
              },
            ],
          },
        ])
        break

      default:
        return NextResponse.json({ error: "Invalid message type" }, { status: 400 })
    }

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error("Error sending test message:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
