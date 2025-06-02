"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { userStorage } from "@/lib/user-storage"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [userCount, setUserCount] = useState(0)

  useEffect(() => {
    // Load current user count
    setUserCount(userStorage.getUserCount())
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    setMessageType("")

    // Client-side validation
    if (!email || !password || !confirmPassword) {
      setMessage("All fields are required")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    // Check if user already exists
    if (userStorage.hasUser(email)) {
      setMessage("Account already exists. Please log in instead.")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    try {
      // Add user to client-side storage
      const userAdded = userStorage.addUser(email, password)

      if (userAdded) {
        // Also call the API for any server-side processing
        const response = await fetch("/api/direct-signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, confirmPassword }),
        })

        const result = await response.json()

        if (result.success) {
          setMessage("Account created successfully! You can now log in.")
          setMessageType("success")

          // Store credentials for auto-login
          localStorage.setItem("lastSignupEmail", email)
          localStorage.setItem("lastSignupPassword", password)

          // Update user count
          setUserCount(userStorage.getUserCount())

          // Clear form
          setEmail("")
          setPassword("")
          setConfirmPassword("")
        } else {
          setMessage(result.error || "Signup failed")
          setMessageType("error")
        }
      } else {
        setMessage("Failed to create account. User may already exist.")
        setMessageType("error")
      }
    } catch (error) {
      setMessage("Connection error. Account saved locally, you can still log in.")
      setMessageType("success")
      console.error("Signup error:", error)
    }

    setIsLoading(false)
  }

  const checkUsers = () => {
    const users = userStorage.listUsers()
    alert(`Registered users (${users.length}):\n${users.join("\n")}`)
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
            Create your account
          </h1>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
            Join FertiTerra to track your fertility journey and connect with specialists
          </p>
        </div>

        {/* Signup Form */}
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
              {messageType === "success" && (
                <div style={{ marginTop: "0.5rem" }}>
                  <Link href="/login" style={{ color: "#166534", textDecoration: "underline" }}>
                    Go to login page →
                  </Link>
                </div>
              )}
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
              placeholder="At least 6 characters"
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

          {/* Confirm Password Field */}
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
              Confirm password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
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

          {/* Features Preview */}
          <div
            style={{
              backgroundColor: "#fef7f7",
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid #fecaca",
              marginTop: "0.5rem",
            }}
          >
            <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#be185d", marginBottom: "0.5rem" }}>
              What you'll get access to:
            </p>
            <ul style={{ fontSize: "0.875rem", color: "#be185d", margin: 0, paddingLeft: "1rem" }}>
              <li>🌸 Track menstrual cycles and ovulation</li>
              <li>📚 Read expert fertility health content</li>
              <li>👩‍⚕️ Book video consultations with doctors</li>
              <li>📊 Get personalized health insights</li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: isLoading ? "#9ca3af" : "#111827",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "background-color 0.2s",
            }}
          >
            {isLoading ? "Creating account..." : "Create account"}
          </button>
        </form>

        {/* Footer Links */}
        <div style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.875rem" }}>
          <div>
            <span style={{ color: "#6b7280" }}>Already have an account? </span>
            <Link href="/login" style={{ color: "#e11d48", textDecoration: "none" }}>
              Log in
            </Link>
          </div>
        </div>

        {/* Debug Info */}
        {process.env.NODE_ENV !== "production" && (
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <button
              onClick={checkUsers}
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Check registered users ({userCount})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
