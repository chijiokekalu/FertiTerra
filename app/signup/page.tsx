"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [debugInfo, setDebugInfo] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setDebugInfo(null)

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required")
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return
    }

    try {
      // Simple fetch to avoid server-side errors
      const response = await fetch("/api/direct-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        if (data.debug) {
          setDebugInfo(data.debug)
        }
      } else {
        setSuccess(true)
        setDebugInfo(data.debug)

        // Store credentials in localStorage for auto-login
        localStorage.setItem("lastSignupEmail", email)
        localStorage.setItem("lastSignupPassword", password)

        setEmail("")
        setPassword("")
        setConfirmPassword("")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error("Signup error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // Function to check current users in the database
  const checkUsers = async () => {
    try {
      const response = await fetch("/api/debug-users")
      const data = await response.json()
      setDebugInfo(data)
    } catch (err) {
      console.error("Error checking users:", err)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow">
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=40&width=140&text=FertiTerra"
            alt="FertiTerra Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <div>
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join FertiTerra to track your fertility journey and connect with specialists
          </p>
        </div>

        {success ? (
          <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Account created successfully!</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Your account has been created. You can now log in.</p>
                </div>
                <div className="mt-4">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-green-600 hover:text-green-500"
                    onClick={() => {
                      // Pre-fill login form if possible
                      if (typeof window !== "undefined") {
                        localStorage.setItem("prefillEmail", localStorage.getItem("lastSignupEmail") || "")
                      }
                    }}
                  >
                    Go to login page →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
                    placeholder="At least 6 characters"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm password
                </label>
                <div className="mt-1">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-md bg-rose-50 p-4">
              <h3 className="text-sm font-medium text-rose-800">What you'll get access to:</h3>
              <div className="mt-2 text-sm text-rose-700">
                <ul className="list-inside space-y-1">
                  <li className="flex items-center">
                    <span className="mr-2">🩺</span>
                    Track menstrual cycles and ovulation
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📖</span>
                    Read expert fertility health content
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">👩‍⚕️</span>
                    Book video consultations with doctors
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📊</span>
                    Get personalized health insights
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-70"
              >
                {isLoading ? "Creating account..." : "Create account"}
              </button>
            </div>

            <div className="text-center text-sm">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-rose-600 hover:text-rose-500">
                  Log in
                </Link>
              </p>
            </div>

            {/* Debug button - only in development */}
            {process.env.NODE_ENV !== "production" && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button type="button" onClick={checkUsers} className="text-xs text-gray-500 hover:text-gray-700">
                  Check registered users
                </button>

                {debugInfo && (
                  <div className="mt-2 p-2 bg-gray-100 rounded text-xs font-mono overflow-auto max-h-40">
                    <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
                  </div>
                )}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
