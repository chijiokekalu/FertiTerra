import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { date, time, consultationType } = await request.json()

    // Send notification to doctor
    await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "fertiterratechnologies@africanimpactinitiative.com",
        type: "consultation_scheduled",
        message: `New consultation scheduled for ${date} at ${time} - ${consultationType}`,
      }),
    })

    // In a real app, you would:
    // 1. Save to database
    // 2. Send calendar invites
    // 3. Set up video call room
    // 4. Send confirmation emails

    console.log("Consultation Scheduled:", {
      date,
      time,
      consultationType,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      consultationId: `consult_${Date.now()}`,
      message: "Consultation scheduled successfully",
    })
  } catch (error) {
    console.error("Error scheduling consultation:", error)
    return NextResponse.json({ error: "Failed to schedule consultation" }, { status: 500 })
  }
}
