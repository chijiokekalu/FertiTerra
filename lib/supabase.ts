import { createClient, type SupabaseClient } from "@supabase/supabase-js"

/**
 * Singleton browser/client Supabase instance.
 * Works in Next.js because it relies only on
 * standard browser APIs (fetch, crypto, …).
 */
let supabaseClient: SupabaseClient | null = null
let supabaseConfigChecked = false
let supabaseAvailable = false

/**
 * Check if Supabase is properly configured
 */
export const checkSupabaseConfig = (): boolean => {
  if (supabaseConfigChecked) {
    return supabaseAvailable
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Check if environment variables exist and are not placeholders
  const hasValidUrl =
    supabaseUrl &&
    supabaseUrl.startsWith("http") &&
    !supabaseUrl.includes("your-supabase") &&
    supabaseUrl.includes("supabase.co")

  const hasValidKey = supabaseAnonKey && supabaseAnonKey.length > 20 && !supabaseAnonKey.includes("your-supabase")

  supabaseAvailable = Boolean(hasValidUrl && hasValidKey)
  supabaseConfigChecked = true

  if (!supabaseAvailable) {
    console.warn("⚠️  Supabase is not configured. Features requiring Supabase will be disabled.")
    console.warn("   To enable Supabase, set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY")
  }

  return supabaseAvailable
}

/**
 * Create or return existing Supabase client
 * Returns null if Supabase is not properly configured
 */
export const createClientInstance = (): SupabaseClient | null => {
  // Return existing client if already created
  if (supabaseClient) return supabaseClient

  // Check if Supabase is configured
  if (!checkSupabaseConfig()) {
    return null
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  try {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })

    console.log("✅ Supabase client initialized successfully")
    return supabaseClient
  } catch (error) {
    console.error("❌ Failed to initialize Supabase client:", error)
    return null
  }
}

/**
 * Get Supabase client or throw error if not configured
 * Use this when Supabase is required for the feature
 */
export const getSupabaseClient = (): SupabaseClient => {
  const client = createClientInstance()

  if (!client) {
    throw new Error(
      "Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.",
    )
  }

  return client
}

/**
 * Check if Supabase is available
 */
export const isSupabaseAvailable = (): boolean => {
  return checkSupabaseConfig()
}

// Alias for backward compatibility
export { createClientInstance as createClient }
