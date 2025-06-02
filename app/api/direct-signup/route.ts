import { NextResponse } from "next/server"

// Mock database for demo purposes
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

    // Store user (in a real app, this would be in a database)
    users.set(email, { email, password: "********" }) // Never store plain text passwords

    // In a real app, you would send a confirmation email here

    return NextResponse.json({ success: true, message: "Account created successfully" })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "An error occurred during signup" }, { status: 500 })
  }
}
