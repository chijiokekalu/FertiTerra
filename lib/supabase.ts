import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

let supabaseClient: ReturnType<typeof createClientComponentClient> | null = null

export const createClient = () => {
  if (!supabaseClient) {
    try {
      supabaseClient = createClientComponentClient()
    } catch (error) {
      console.error("Failed to create Supabase client:", error)
      throw new Error("Supabase configuration error")
    }
  }
  return supabaseClient
}

export const checkSupabaseConfig = () => {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Missing Supabase environment variables")
      return false
    }

    // Test if we can create a client
    createClient()
    return true
  } catch (error) {
    console.error("Supabase configuration check failed:", error)
    return false
  }
}
