export async function GET(request) {
  // Get the query params
  const { searchParams } = new URL(request.url)
  const mode = searchParams.get("hub.mode")
  const token = searchParams.get("hub.verify_token")
  const challenge = searchParams.get("hub.challenge")

  // Log verification attempt
  console.log("Webhook verification attempt:", { mode, token })

  // Hardcoded verify token for simplicity
  const VERIFY_TOKEN = "makokoverifytoken"

  // Check if token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED")
      return new Response(challenge, {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      })
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      return new Response("Forbidden", { status: 403 })
    }
  }

  return new Response("Bad Request", { status: 400 })
}

export async function POST(request) {
  // Simple acknowledgment for now
  console.log("Received webhook POST")
  return new Response("OK", { status: 200 })
}
