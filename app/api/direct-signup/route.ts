import { NextResponse } from "next/server"

// Mock database for demo purposes (in a real app, use a proper database)
const users = new Map()

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    // Check if user already exists
    if (users.has(email)) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 })
    }

    // Store user (in a real app, hash the password and use a database)
    users.set(email, {
      email,
      password, // In production, hash this!
      createdAt: new Date().toISOString(),
    })

    // Send welcome email notification (mock)
    const emailSent = await sendWelcomeEmail(email)

    return NextResponse.json({
      success: true,
      message: "Account created successfully! Please check your email for confirmation.",
      emailSent,
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "An error occurred during signup" }, { status: 500 })
  }
}

// Mock email function (in a real app, use a service like SendGrid, Mailgun, etc.)
async function sendWelcomeEmail(email: string) {
  try {
    // Simulate email sending
    console.log(`📧 Welcome email sent to: ${email}`)

    // In a real app, you would use an email service:
    // await emailService.send({
    //   to: email,
    //   subject: "Welcome to FertiTerra!",
    //   template: "welcome",
    //   data: { email }
    // })

    return true
  } catch (error) {
    console.error("Email sending failed:", error)
    return false
  }
}
