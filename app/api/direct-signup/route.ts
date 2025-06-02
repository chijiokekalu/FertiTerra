import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, password, confirmPassword } = await request.json()

    // Basic validation
    if (!email || !password || !confirmPassword) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    // For this demo, we'll just return success and let the client handle storage
    // In a real app, you would save to a database here

    console.log(`Signup attempt for: ${email}`)

    // Simulate successful signup
    return NextResponse.json({
      success: true,
      message: "Account created successfully! You can now log in.",
      user: { email },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "An error occurred during signup" }, { status: 500 })
  }
}
