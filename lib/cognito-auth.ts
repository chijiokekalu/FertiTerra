// Cognito Authentication utilities for Wombs app

export const COGNITO_CONFIG = {
  domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN || "https://login.fertiterratechnologies.com",
  redirectUri: process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI || "https://fertiterratechnologies.com/wombs",
  logoutUri: process.env.NEXT_PUBLIC_COGNITO_LOGOUT_URI || "https://fertiterratechnologies.com/wombs",
  clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || "3ufs87b5gdr4e33f9sbbk154vl",
  scopes: "openid email profile",
}

// Utility to get query parameter
export function getQueryParam(name: string): string | null {
  if (typeof window === "undefined") return null
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

// Generate random state for CSRF protection
export function generateState(): string {
  return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
}

// Redirect to Cognito login
export function login() {
  const state = generateState()
  localStorage.setItem("oauth_state", state)

  const loginUrl = `${COGNITO_CONFIG.domain}/login?response_type=code&client_id=${COGNITO_CONFIG.clientId}&redirect_uri=${encodeURIComponent(COGNITO_CONFIG.redirectUri)}&scope=${encodeURIComponent(COGNITO_CONFIG.scopes)}&state=${state}`

  window.location.href = loginUrl
}

// Redirect to Cognito logout
export function logout() {
  localStorage.removeItem("wombs_user")
  localStorage.removeItem("wombs_id_token")
  localStorage.removeItem("wombs_access_token")
  localStorage.removeItem("wombs_refresh_token")
  localStorage.removeItem("oauth_state")

  window.location.href = `${COGNITO_CONFIG.domain}/logout?client_id=${COGNITO_CONFIG.clientId}&logout_uri=${encodeURIComponent(COGNITO_CONFIG.logoutUri)}`
}

// Validate state parameter to prevent CSRF
export function validateState(receivedState: string | null): boolean {
  const storedState = localStorage.getItem("oauth_state")
  if (!storedState || !receivedState || storedState !== receivedState) {
    return false
  }
  localStorage.removeItem("oauth_state")
  return true
}

// Fetch user info from backend
export async function fetchUserInfo(accessToken: string) {
  try {
    const response = await fetch("/api/auth/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch user info")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching user info:", error)
    return null
  }
}

// Exchange authorization code for tokens and get user info
export async function exchangeCodeForTokens(code: string) {
  try {
    const response = await fetch(`/api/auth/callback?code=${code}`)

    if (!response.ok) {
      throw new Error("Failed to exchange code for tokens")
    }

    const data = await response.json()
    return {
      tokens: data.tokens,
      userInfo: data.userInfo,
    }
  } catch (error) {
    console.error("Error exchanging code for tokens:", error)
    return null
  }
}

// Handle OAuth callback
export async function handleCallback(): Promise<boolean> {
  const code = getQueryParam("code")
  const state = getQueryParam("state")

  if (!code) return false

  // Validate state
  if (!validateState(state)) {
    console.error("Invalid state parameter")
    return false
  }

  // Exchange code for tokens and get user info
  const result = await exchangeCodeForTokens(code)

  if (!result) {
    console.error("Failed to get tokens and user info")
    return false
  }

  // Store tokens and user info
  localStorage.setItem("wombs_id_token", result.tokens.id_token)
  localStorage.setItem("wombs_access_token", result.tokens.access_token)
  if (result.tokens.refresh_token) {
    localStorage.setItem("wombs_refresh_token", result.tokens.refresh_token)
  }
  localStorage.setItem("wombs_user", JSON.stringify(result.userInfo))

  // Clean up URL
  window.history.replaceState({}, document.title, COGNITO_CONFIG.redirectUri)

  return true
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  const token = localStorage.getItem("wombs_access_token")
  return !!token
}

// Get stored user info
export function getStoredUser() {
  if (typeof window === "undefined") return null
  const userStr = localStorage.getItem("wombs_user")
  if (!userStr) return null
  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

// Check if user is logged in and fetch fresh user info if needed
export async function checkLoggedIn(): Promise<boolean> {
  const accessToken = localStorage.getItem("wombs_access_token")

  if (!accessToken) return false

  try {
    const userInfo = await fetchUserInfo(accessToken)
    if (userInfo) {
      localStorage.setItem("wombs_user", JSON.stringify(userInfo))
      return true
    }
  } catch (error) {
    console.warn("Token invalid or expired, clearing storage")
    localStorage.removeItem("wombs_id_token")
    localStorage.removeItem("wombs_access_token")
    localStorage.removeItem("wombs_refresh_token")
    localStorage.removeItem("wombs_user")
  }

  return false
}
