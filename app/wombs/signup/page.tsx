"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Mail, Lock, Eye, EyeOff, User, Calendar } from "lucide-react"

export default function WombsSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, accept any valid form data
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userEmail", formData.email)
      router.push("/wombs")
    } catch (err) {
      setError("Signup failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
            <CardDescription className="text-base">Join the Wombs community</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-2 text-sm">
              <input type="checkbox" className="mt-1 rounded border-gray-300" required />
              <span className="text-gray-600">
                I agree to the{" "}
                <Link href="/terms" className="text-purple-600 hover:text-purple-700 font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-purple-600 hover:text-purple-700 font-medium">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating account...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </Button>

            <div className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <Link href="/wombs/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* AdSense Ad */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9375281731859570"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-5z+d6-3l-5l+vb"
          data-ad-client="ca-pub-9375281731859570"
          data-ad-slot="9788273687"
        ></ins>
        <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }}></script>
      </div>
    </div>
  )
}
