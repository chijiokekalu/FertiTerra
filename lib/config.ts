/**
 * Application Configuration
 * Centralized configuration for environment variables and app settings
 */

export const config = {
  // Site Configuration
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://fertiterratechnologies.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://fertiterratechnologies.com",

  // AWS Cognito
  cognito: {
    domain: process.env.COGNITO_DOMAIN || "",
    clientId: process.env.COGNITO_CLIENT_ID || "",
    clientSecret: process.env.COGNITO_CLIENT_SECRET || "",
    redirectUri: process.env.COGNITO_REDIRECT_URI || "",
    logoutUri: process.env.COGNITO_LOGOUT_URI || "",
    scopes: process.env.COGNITO_SCOPES || "openid email profile",
    region: process.env.NEXT_PUBLIC_REGION || "us-east-1",
  },

  // Supabase
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
    jwtSecret: process.env.SUPABASE_JWT_SECRET || "",
  },

  // Database
  database: {
    url: process.env.NEON_NEON_DATABASE_URL || "",
    neonUrl: process.env.NEON_DATABASE_URL || "",
    postgresUrl: process.env.POSTGRES_URL || "",
    postgresPrismaUrl: process.env.POSTGRES_PRISMA_URL || "",
    postgresUrlNonPooling: process.env.POSTGRES_URL_NON_POOLING || "",
  },

  // Redis/Upstash
  redis: {
    kvUrl: process.env.KV_URL || "",
    kvRestApiUrl: process.env.KV_REST_API_URL || "",
    kvRestApiToken: process.env.KV_REST_API_TOKEN || "",
    kvRestApiReadOnlyToken: process.env.KV_REST_API_READ_ONLY_TOKEN || "",
    redisUrl: process.env.REDIS_URL || "",
  },

  // Upstash Search
  upstashSearch: {
    restUrl: process.env.UPSTASH_SEARCH_REST_URL || "",
    restToken: process.env.UPSTASH_SEARCH_REST_TOKEN || "",
    restReadonlyToken: process.env.UPSTASH_SEARCH_REST_READONLY_TOKEN || "",
  },

  // Vercel Blob Storage
  blob: {
    readWriteToken: process.env.BLOB_READ_WRITE_TOKEN || "",
  },

  // AI/API Keys
  ai: {
    groqApiKey: process.env.GROQ_API_KEY || "",
  },

  // WhatsApp
  whatsapp: {
    verifyToken: process.env.WHATSAPP_VERIFY_TOKEN || "",
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || "",
    accessToken: process.env.WHATSAPP_ACCESS_TOKEN || "",
  },

  // Feature Flags
  features: {
    enableWhatsAppBot: Boolean(process.env.WHATSAPP_ACCESS_TOKEN),
    enableInstagramBot: Boolean(process.env.INSTAGRAM_ACCESS_TOKEN),
    enableSupabaseAuth: Boolean(
      process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("http") &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
        !process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("your-supabase"),
    ),
    enableCognitoAuth: Boolean(
      process.env.COGNITO_CLIENT_ID && !process.env.COGNITO_CLIENT_ID?.includes("your-client"),
    ),
    enablePayments: true,
    enableBlog: true,
    enableShop: true,
  },

  // Application Settings
  app: {
    name: "FertiTerra Technologies",
    description: "Empowering reproductive health through technology",
    supportEmail: "support@fertiterratechnologies.com",
    defaultLocale: "en",
  },
} as const

// Type-safe config access
export type Config = typeof config

// Helper function to get base URL
export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    // Browser should use relative url
    return ""
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    // Production
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  if (process.env.VERCEL_URL) {
    // Vercel deployment
    return `https://${process.env.VERCEL_URL}`
  }

  // Development
  return "http://localhost:3000"
}

// Helper function to construct absolute URLs
export function getAbsoluteUrl(path: string): string {
  const baseUrl = getBaseUrl()
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

// Validate required environment variables
export function validateEnv() {
  const requiredEnvVars = ["NEXT_PUBLIC_SITE_URL"]

  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar])

  if (missingEnvVars.length > 0) {
    console.warn(`⚠️  Missing environment variables: ${missingEnvVars.join(", ")}`)
  }

  // Check optional but recommended vars
  if (!config.features.enableSupabaseAuth && !config.features.enableCognitoAuth) {
    console.warn("⚠️  No authentication provider configured (Supabase or Cognito)")
  }

  return missingEnvVars.length === 0
}

// Helper to get configured auth provider
export function getAuthProvider(): "cognito" | "supabase" | "none" {
  if (config.features.enableCognitoAuth) return "cognito"
  if (config.features.enableSupabaseAuth) return "supabase"
  return "none"
}
