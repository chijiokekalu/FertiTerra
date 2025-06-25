import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName } = await request.json()

    // In a real application, integrate with your newsletter service
    // (e.g., Mailchimp, ConvertKit, SendGrid, etc.)

    console.log("Newsletter Subscription:", {
      email,
      firstName,
      lastName,
      timestamp: new Date().toISOString(),
    })

    // Send welcome email
    await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        type: "newsletter_welcome",
        message: `Welcome to FertiTerra newsletter, ${firstName}!`,
      }),
    })

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter",
    })
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}
