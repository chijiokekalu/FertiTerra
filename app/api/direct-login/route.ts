import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, password, users } = await request.json()

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    console.log(`Login attempt for: ${email}`)
    console.log(`Received users data:`, users ? Object.keys(users) : "No users data")

    // Check against provided users data (from client-side storage)
    if (users && users[email]) {
      const user = users[email]
      if (user.password === password) {
        return NextResponse.json({
          success: true,
          message: "Login successful",
          user: { email: user.email },
        })
      } else {
        return NextResponse.json({ error: "Invalid password" }, { status: 401 })
      }
    }

    // Fallback to demo accounts
    const demoAccounts = {
      "demo@fertiterra.com": "demo123",
      "test@example.com": "test123",
    }

    if (demoAccounts[email as keyof typeof demoAccounts] === password) {
      return NextResponse.json({
        success: true,
        message: "Login successful with demo account",
        user: { email },
      })
    }

    // Account not found
    return NextResponse.json(
      {
        error: "Account not found. Please sign up first.",
        availableAccounts: Object.keys(users || {}),
        demoAccounts: Object.keys(demoAccounts),
      },
      { status: 401 },
    )
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}
