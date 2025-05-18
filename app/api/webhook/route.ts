export function GET(request) {
  // Extract query parameters
  const url = new URL(request.url)

  // Get verification parameters
  const mode = url.searchParams.get("hub.mode")
  const token = url.searchParams.get("hub.verify_token")
  const challenge = url.searchParams.get("hub.challenge")

  // Log everything for debugging
  console.log("Webhook verification request received")
  console.log("URL:", request.url)
  console.log("Mode:", mode)
  console.log("Token:", token)
  console.log("Challenge:", challenge)

  // Hardcoded token - make it very simple
  const VERIFY_TOKEN = "abc123"

  // Verification logic
  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Verification successful, returning challenge")

    // Return ONLY the challenge as plain text with correct content type
    return new Response(challenge, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    })
  }

  // Log failure reason
  console.log("Verification failed")
  if (mode !== "subscribe") console.log("Mode mismatch")
  if (token !== VERIFY_TOKEN) console.log("Token mismatch")

  // Return error
  return new Response("Verification failed", { status: 403 })
}

export function POST(request) {
  // Just acknowledge receipt
  return new Response("OK", { status: 200 })
}
