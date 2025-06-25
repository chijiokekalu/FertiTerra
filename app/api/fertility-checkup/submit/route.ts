import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Send notification email to FertiTerra
    const notificationResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "fertiterratechnologies@africanimpactinitiative.com",
        type: "fertility_checkup_submission",
        formData: formData,
        message: `New Basic Fertility Checkup submission from ${formData.firstName} ${formData.lastName} (${formData.email})`,
      }),
    })

    // Subscribe to newsletter if opted in
    if (formData.subscribeNewsletter) {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
      })
    }

    // Store form data (in a real app, save to database)
    console.log("Fertility Checkup Form Submission:", {
      timestamp: new Date().toISOString(),
      ...formData,
    })

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Error processing fertility checkup submission:", error)
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 })
  }
}
