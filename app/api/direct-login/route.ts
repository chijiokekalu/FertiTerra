import { NextResponse } from "next/server"

// Mock user database (in a real app, this would be a proper database)
const users = new Map([
  // Add some demo users for testing
  ["demo@fertiterra.com", { email: "demo@fertiterra.com", password: "demo123" }],
  ["test@example.com", { email: "test@example.com", password: "test123" }],
])

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Check if user exists (in a real app, you'd check against a database)
    const user = users.get(email)

    if (!user) {
      return NextResponse.json({ error: "Account not found. Please sign up first." }, { status: 401 })
    }

    // In a real app, you'd hash and compare passwords properly
    if (user.password !== password) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 })
    }

    // Successful login
    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: { email: user.email },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}
