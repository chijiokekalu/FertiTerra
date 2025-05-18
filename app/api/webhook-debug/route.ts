export async function GET(request) {
  // Get all request information
  const url = new URL(request.url)
  const headers = Object.fromEntries(request.headers.entries())
  const params = Object.fromEntries(url.searchParams.entries())

  // Create detailed debug information
  const debugInfo = {
    url: request.url,
    method: request.method,
    headers: headers,
    params: params,
    environment: {
      VERIFY_TOKEN_SET: process.env.WHATSAPP_VERIFY_TOKEN ? "Yes" : "No",
      NODE_ENV: process.env.NODE_ENV,
    },
  }

  // Return all debug information
  return Response.json(debugInfo)
}
