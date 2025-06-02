import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, type, message } = await request.json()

    // Mock email notification system
    const notifications = {
      welcome: {
        subject: "Welcome to FertiTerra! 🌸",
        body: `Hi there!\n\nWelcome to FertiTerra! We're excited to help you on your fertility journey.\n\nWhat you can do now:\n• Track your menstrual cycles\n• Read expert fertility content\n• Book video consultations with doctors\n• Get personalized health insights\n\nGet started: https://v0-fertility-telemedicine-platform.vercel.app/dashboard\n\nBest regards,\nThe FertiTerra Team`,
      },
      confirmation: {
        subject: "Please confirm your FertiTerra account",
        body: `Hi!\n\nPlease confirm your account by clicking the link below:\n\nhttps://v0-fertility-telemedicine-platform.vercel.app/auth/confirm?email=${email}\n\nIf you didn't create this account, please ignore this email.\n\nBest regards,\nThe FertiTerra Team`,
      },
      appointment: {
        subject: "Appointment Confirmation - FertiTerra",
        body: `Your appointment has been confirmed!\n\nWe'll send you a reminder 24 hours before your consultation.\n\nBest regards,\nThe FertiTerra Team`,
      },
    }

    const notification = notifications[type as keyof typeof notifications] || {
      subject: "FertiTerra Notification",
      body: message || "You have a new notification from FertiTerra.",
    }

    // Log the email (in a real app, send actual email)
    console.log(`📧 Email Notification:`)
    console.log(`To: ${email}`)
    console.log(`Subject: ${notification.subject}`)
    console.log(`Body: ${notification.body}`)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Notification sent successfully",
      details: {
        to: email,
        subject: notification.subject,
        sentAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Notification error:", error)
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 })
  }
}
