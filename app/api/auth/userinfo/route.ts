import { type NextRequest, NextResponse } from "next/server"

const COGNITO_DOMAIN = process.env.COGNITO_DOMAIN || "https://login.fertiterratechnologies.com"

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Missing or invalid authorization header" }, { status: 401 })
    }

    const accessToken = authHeader.substring(7)

    // Get user info from Cognito
    const userInfoUrl = `${COGNITO_DOMAIN}/oauth2/userInfo`

    const response = await fetch(userInfoUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Failed to get user info:", errorText)
      return NextResponse.json({ error: "Failed to get user info" }, { status: 401 })
    }

    const userInfo = await response.json()

    return NextResponse.json({
      sub: userInfo.sub,
      email: userInfo.email,
      email_verified: userInfo.email_verified,
      name: userInfo.name || userInfo.email,
      picture: userInfo.picture,
    })
  } catch (error) {
    console.error("Error getting user info:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
