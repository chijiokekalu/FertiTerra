import { type NextRequest, NextResponse } from "next/server"

const COGNITO_DOMAIN = process.env.COGNITO_DOMAIN || "https://login.fertiterratechnologies.com"
const CLIENT_ID = process.env.COGNITO_CLIENT_ID || "3ufs87b5gdr4e33f9sbbk154vl"
const CLIENT_SECRET = process.env.COGNITO_CLIENT_SECRET || "3ufs87b5gdr4e33f9sbbk154vl"
const REDIRECT_URI = process.env.COGNITO_REDIRECT_URI || "https://fertiterratechnologies.com/wombs"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const code = searchParams.get("code")

    if (!code) {
      return NextResponse.json({ error: "Authorization code missing" }, { status: 400 })
    }

    // Exchange authorization code for tokens
    const tokenUrl = `${COGNITO_DOMAIN}/oauth2/token`

    const body = new URLSearchParams()
    body.append("grant_type", "authorization_code")
    body.append("client_id", CLIENT_ID)
    body.append("code", code)
    body.append("redirect_uri", REDIRECT_URI)

    // Create Basic Auth header
    const authHeader = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")

    const tokenResponse = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authHeader}`,
      },
      body: body.toString(),
    })

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text()
      console.error("Token exchange failed:", errorData)
      return NextResponse.json({ error: "Token exchange failed" }, { status: 500 })
    }

    const tokens = await tokenResponse.json()

    // Get user info using access token
    const userInfoUrl = `${COGNITO_DOMAIN}/oauth2/userInfo`
    const userInfoResponse = await fetch(userInfoUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    })

    if (!userInfoResponse.ok) {
      const errorData = await userInfoResponse.text()
      console.error("User info fetch failed:", errorData)
      return NextResponse.json({ error: "Failed to fetch user info" }, { status: 500 })
    }

    const userInfo = await userInfoResponse.json()

    // Return both tokens and user info
    return NextResponse.json({
      tokens: {
        id_token: tokens.id_token,
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_in: tokens.expires_in,
        token_type: tokens.token_type,
      },
      userInfo: {
        sub: userInfo.sub,
        email: userInfo.email,
        email_verified: userInfo.email_verified,
        name: userInfo.name || userInfo.email,
        picture: userInfo.picture,
      },
    })
  } catch (error) {
    console.error("Error in token exchange:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
