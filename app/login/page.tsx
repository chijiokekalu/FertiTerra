"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { userStorage } from "@/lib/user-storage"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [availableUsers, setAvailableUsers] = useState<string[]>([])

  const useTestAccount = (testEmail: string, testPassword: string) => {
    setEmail(testEmail)
    setPassword(testPassword)
  }

  // Load available users and auto-fill from signup
  useEffect(() => {
    const users = userStorage.listUsers()
    setAvailableUsers(users)

    // Auto-fill from recent signup
    const lastEmail = localStorage.getItem("lastSignupEmail")
    const lastPassword = localStorage.getItem("lastSignupPassword")
    if (lastEmail && lastPassword) {
      setEmail(lastEmail)
      setPassword(lastPassword)
      // Clear the stored credentials after using them
      localStorage.removeItem("lastSignupEmail")
      localStorage.removeItem("lastSignupPassword")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    setMessageType("")

    // Basic validation
    if (!email || !password) {
      setMessage("Email and password are required")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    try {
      // Get all users from client-side storage
      const allUsers = userStorage.getAllUsers()
      const usersObject = Object.fromEntries(allUsers)

      // Try to login
      const response = await fetch("/api/direct-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          users: usersObject,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setMessage("Login successful! Redirecting to dashboard...")
        setMessageType("success")

        // Store login state
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userEmail", email)

        // Redirect to dashboard
        setTimeout(() => {
          window.location.href = "/dashboard"
        }, 1500)
      } else {
        setMessage(result.error || "Login failed")
        setMessageType("error")

        // Show available accounts for debugging
        if (result.availableAccounts) {
          console.log("Available accounts:", result.availableAccounts)
        }
      }
    } catch (error) {
      setMessage("Connection error. Please try again.")
      setMessageType("error")
      console.error("Login error:", error)
    }

    setIsLoading(false)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Image
            src="/placeholder.svg?height=45&width=160&text=FertiTerra"
            alt="FertiTerra Logo"
            width={160}
            height={45}
            style={{ height: "45px", width: "auto", marginBottom: "1rem" }}
          />
          <h1 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>
            Welcome back
          </h1>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Sign in to your FertiTerra account</p>
        </div>

        {/* Available Users Info */}
        {availableUsers.length > 0 && (
          <div
            style={{
              backgroundColor: "#f0f9ff",
              padding: "0.75rem",
              borderRadius: "8px",
              marginBottom: "1rem",
              fontSize: "0.875rem",
              color: "#0369a1",
            }}
          >
            ✅ {availableUsers.length} registered user{availableUsers.length !== 1 ? "s" : ""} found
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Message Display */}
          {message && (
            <div
              style={{
                padding: "0.75rem",
                borderRadius: "8px",
                backgroundColor: messageType === "success" ? "#dcfce7" : "#fef2f2",
                border: `1px solid ${messageType === "success" ? "#bbf7d0" : "#fecaca"}`,
                color: messageType === "success" ? "#166534" : "#dc2626",
                fontSize: "0.875rem",
              }}
            >
              {message}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "1rem",
                backgroundColor: isLoading ? "#f9fafb" : "white",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Password Field */}
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "1rem",
                backgroundColor: isLoading ? "#f9fafb" : "white",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: isLoading ? "#9ca3af" : "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "background-color 0.2s",
            }}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Footer Links */}
        <div style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.875rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <span style={{ color: "#6b7280" }}>Don't have an account? </span>
            <Link href="/signup" style={{ color: "#e11d48", textDecoration: "none" }}>
              Sign up
            </Link>
          </div>
          <div>
            <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Quick Login Options */}
        <div style={{ marginTop: "1.5rem", borderTop: "1px solid #e5e7eb", paddingTop: "1rem" }}>
          <p style={{ fontSize: "0.75rem", color: "#6b7280", marginBottom: "0.5rem", textAlign: "center" }}>
            Quick login options:
          </p>
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
            <button
              onClick={() => useTestAccount("demo@fertiterra.com", "demo123")}
              style={{
                fontSize: "0.75rem",
                padding: "0.25rem 0.5rem",
                backgroundColor: "#f3f4f6",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                cursor: "pointer",
                color: "#374151",
              }}
            >
              Demo Account
            </button>
            <button
              onClick={() => useTestAccount("test@example.com", "test123")}
              style={{
                fontSize: "0.75rem",
                padding: "0.25rem 0.5rem",
                backgroundColor: "#f3f4f6",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                cursor: "pointer",
                color: "#374151",
              }}
            >
              Test Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
