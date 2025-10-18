"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Heart,
  TrendingUp,
  Video,
  Users,
  Smartphone,
  Apple,
  Loader2,
  Shield,
  CheckCircle2,
} from "lucide-react"
import { login, handleCallback, checkLoggedIn } from "@/lib/cognito-auth"

export default function WombsApp() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initAuth = async () => {
      // Check if we're returning from Cognito with a code
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get("code")

      if (code) {
        setIsAuthenticating(true)
        setError(null)

        try {
          const success = await handleCallback()

          if (success) {
            // Redirect to dashboard after successful authentication
            setTimeout(() => {
              router.push("/wombs/dashboard")
            }, 1000)
          } else {
            setError("Authentication failed. Please try again.")
            setIsAuthenticating(false)
          }
        } catch (err) {
          console.error("Authentication error:", err)
          setError("An error occurred during authentication. Please try again.")
          setIsAuthenticating(false)
        }

        setIsLoading(false)
        return
      }

      // Check if user is already logged in
      const isLoggedIn = await checkLoggedIn()
      if (isLoggedIn) {
        router.push("/wombs/dashboard")
      } else {
        setIsLoading(false)
      }
    }

    initAuth()
  }, [router])

  const handleLoginClick = () => {
    setError(null)
    login()
  }

  if (isLoading || isAuthenticating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="text-center">
          <Loader2 className="h-16 w-16 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-700">
            {isAuthenticating ? "Authenticating with Cognito..." : "Loading Wombs..."}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {isAuthenticating ? "Please wait while we verify your credentials" : "Preparing your fertility journey"}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/images/fertiterra-logo.png" alt="Wombs by FertiTerra" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Wombs
                </h1>
                <p className="text-xs text-gray-500">by FertiTerra Technologies</p>
              </div>
            </div>

            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - App Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Heart className="h-4 w-4 text-rose-500" />
                <span className="text-sm font-medium">Africa's #1 Fertility Companion</span>
              </div>
              <h1 className="text-5xl font-bold leading-tight">
                Your Complete
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Fertility Journey
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Track your cycle, get AI-powered insights, connect with specialists, and join a supportive community—all
                in one beautiful app.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <Calendar className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-sm">Smart Cycle Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">AI-powered predictions and personalized insights</p>
                </CardContent>
              </Card>

              <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <TrendingUp className="h-8 w-8 text-pink-600 mb-2" />
                  <CardTitle className="text-sm">AI Health Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Personalized recommendations based on your data</p>
                </CardContent>
              </Card>

              <Card className="border-rose-100 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <Video className="h-8 w-8 text-rose-600 mb-2" />
                  <CardTitle className="text-sm">Telemedicine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Connect with fertility specialists instantly</p>
                </CardContent>
              </Card>

              <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <Users className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-sm">Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Join thousands on similar journeys</p>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600">10,000+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600">95%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600">5</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>

            {/* Download Info */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Mobile App Coming Soon!</h3>
              <p className="mb-4 text-purple-100">
                Get early access to our iOS and Android apps. Sign in now to use the web version.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 border-white/20"
                  disabled
                >
                  <Apple className="mr-2 h-5 w-5" />
                  App Store (Soon)
                </Button>
                <Button
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 border-white/20"
                  disabled
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Play Store (Soon)
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Login Card */}
          <div className="lg:sticky lg:top-24">
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Welcome to Wombs</CardTitle>
                <CardDescription>Your fertility journey starts here</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-sm flex items-start gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Authentication Error</p>
                      <p className="mt-1">{error}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <Button
                    id="login-wombs-btn"
                    onClick={handleLoginClick}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12 text-base font-semibold"
                  >
                    Sign In with Cognito
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-4 text-gray-500">Secure AWS Cognito Authentication</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-lg p-5">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <Shield className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">Enterprise-Grade Security</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Your data is protected with AWS Cognito's enterprise-grade security. We use OAuth 2.0 and
                          OpenID Connect for secure authentication.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                    <Heart className="h-4 w-4 text-rose-500" />
                    What you'll get:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Smart cycle tracking & predictions",
                      "AI-powered fertility insights",
                      "Direct access to specialists",
                      "Private community support",
                      "Comprehensive health reports",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-gray-500 mt-4">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-purple-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} FertiTerra Technologies. All rights reserved.</p>
            <p className="mt-2">Making fertility care accessible, affordable, and stigma-free across Africa.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
