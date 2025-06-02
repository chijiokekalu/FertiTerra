import { NextResponse } from "next/server"
import { mockDB } from "@/lib/mock-db"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Log the current users for debugging
    console.log("Current users during login:", mockDB.listUsers())
    console.log("Checking login for:", email)
    console.log("User exists:", mockDB.hasUser(email))

    // Check if user exists
    const user = mockDB.getUser(email)

    if (!user) {
      // For debugging, let's add a special case for test accounts
      if (email === "test@example.com" && password === "test123") {
        return NextResponse.json({
          success: true,
          message: "Login successful with test account",
          user: { email: "test@example.com" },
        })
      }

      return NextResponse.json(
        {
          error: "Account not found. Please sign up first.",
          debug: {
            userCount: mockDB.users.size,
            availableUsers: mockDB.listUsers(),
          },
        },
        { status: 401 },
      )
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
