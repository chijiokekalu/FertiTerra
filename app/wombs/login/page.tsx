"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Auth } from "aws-amplify"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Heart, Mail, AlertCircle } from "lucide-react"

export default function WombsLogin() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const user = await Auth.signIn(email, password)

      // Fetch user attributes
      const attributes = await Auth.userAttributes(user)
      const customAttrs: Record<string, string> = {}

      attributes.forEach((attr) => {
        customAttrs[attr.Name] = attr.Value
      })

      // Store user data with custom attributes
      const userData = {
        name: customAttrs.given_name || email.split("@")[0],
        email: customAttrs.email,
        given_name: customAttrs.given_name,
        family_name: customAttrs.family_name,
        cycle_length: customAttrs["custom:cycle_length"] || "28",
        fertility_goal: customAttrs["custom:fertility_goal"] || "tracking",
        plan_type: customAttrs["custom:plan_type"] || "free",
        referral_code: customAttrs["custom:referral_code"] || "",
        email_verified: customAttrs.email_verified === "true",
      }

      localStorage.setItem("wombs_user", JSON.stringify(userData))

      if (rememberMe) {
        localStorage.setItem("wombs_remember", "true")
      }

      router.push("/wombs/dashboard")
    } catch (err: any) {
      console.error("Login error:", err)

      if (err.code === "UserNotConfirmedException") {
        setError("Please verify your email address. Check your inbox for the verification code.")
        router.push(`/wombs/verify?email=${encodeURIComponent(email)}`)
      } else if (err.code === "NotAuthorizedException") {
        setError("Incorrect email or password. Please try again.")
      } else {
        setError(err.message || "Failed to sign in. Please try again.")
      }

      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-12 h-12">
              <Image
                src="/images/fertiterra-logo.png"
                alt="Wombs Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Wombs</h1>
              <p className="text-purple-100 text-sm">by FertiTerra Technologies</p>
            </div>
          </div>

          <div className="space-y-6 text-white">
            <h2 className="text-4xl font-bold leading-tight">
              Your fertility journey,
              <br />
              all in one place
            </h2>
            <p className="text-purple-100 text-lg">
              Track your cycle, get AI-powered insights, and connect with fertility specialists from anywhere in Africa.
            </p>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Heart className="h-8 w-8 text-white" />
            <div>
              <p className="font-semibold text-white">50,000+ Users</p>
              <p className="text-purple-100 text-sm">Trust Wombs for their fertility journey</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Mail className="h-8 w-8 text-white" />
            <div>
              <p className="font-semibold text-white">Expert Support</p>
              <p className="text-purple-100 text-sm">Connect with certified fertility specialists</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto mb-4 lg:hidden">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <Image src="/images/fertiterra-logo.png" alt="Wombs Logo" fill className="object-contain" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Wombs
                </h1>
              </div>
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription>Sign in to continue your fertility journey</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <Link href="/wombs/forgot-password" className="text-sm text-purple-600 hover:text-purple-700">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 text-base font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Signing In...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/wombs/signup" className="text-purple-600 hover:text-purple-700 font-semibold">
                  Sign up for free
                </Link>
              </p>
            </CardFooter>
          </Card>

          <p className="text-center text-sm text-gray-600 mt-6">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="text-purple-600 hover:text-purple-700">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-purple-600 hover:text-purple-700">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
