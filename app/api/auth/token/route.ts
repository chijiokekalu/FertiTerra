import { type NextRequest, NextResponse } from "next/server"

const COGNITO_DOMAIN = process.env.COGNITO_DOMAIN || "https://login.fertiterratechnologies.com"
const CLIENT_ID = process.env.COGNITO_CLIENT_ID || "3ufs87b5gdr4e33f9sbbk154vl"
const CLIENT_SECRET = process.env.COGNITO_CLIENT_SECRET || "3ufs87b5gdr4e33f9sbbk154vl"
const REDIRECT_URI = process.env.COGNITO_REDIRECT_URI || "https://fertiterratechnologies.com/wombs"

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json({ error: "Authorization code is required" }, { status: 400 })
    }

    // Exchange authorization code for tokens
    const tokenUrl = `${COGNITO_DOMAIN}/oauth2/token`

    const params = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      code: code,
      redirect_uri: REDIRECT_URI,
    })

    const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
      body: params.toString(),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Token exchange failed:", errorData)
      return NextResponse.json({ error: "Failed to exchange code for tokens" }, { status: 500 })
    }

    const data = await response.json()

    return NextResponse.json({
      accessToken: data.access_token,
      idToken: data.id_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
    })
  } catch (error) {
    console.error("Error in token exchange:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
