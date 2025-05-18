import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Webhook test endpoint is working",
    environment: {
      verifyToken: process.env.WHATSAPP_VERIFY_TOKEN ? "Set" : "Not set",
      phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID ? "Set" : "Not set",
      accessToken: process.env.WHATSAPP_ACCESS_TOKEN ? "Set" : "Not set",
    },
  })
}
