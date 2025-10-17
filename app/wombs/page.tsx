"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Heart,
  TrendingUp,
  Video,
  Users,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Smartphone,
  Apple,
  Chrome,
} from "lucide-react"

export default function WombsApp() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/wombs/dashboard"
    }, 1500)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/wombs/dashboard"
    }, 1500)
  }

  const handleSocialAuth = (provider: string) => {
    setIsLoading(true)
    // Simulate social auth
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/wombs/dashboard"
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/fertiterra-logo.png"
                alt="FertiTerra"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Wombs
                </h1>
                <p className="text-xs text-gray-600">by FertiTerra Technologies</p>
              </div>
            </Link>
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
                Get early access to our iOS and Android apps. Sign up now to be notified when we launch.
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

          {/* Right Side - Auth Forms */}
          <div className="lg:sticky lg:top-24">
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Welcome to Wombs</CardTitle>
                <CardDescription>Your fertility journey starts here</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="login">Log In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>

                  {/* Login Tab */}
                  <TabsContent value="login" className="space-y-4">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          Remember me
                        </label>
                        <Link href="/forgot-password" className="text-sm text-purple-600 hover:underline">
                          Forgot password?
                        </Link>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        disabled={isLoading}
                      >
                        {isLoading ? "Logging in..." : "Log In"}
                      </Button>
                    </form>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-4 text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        onClick={() => handleSocialAuth("google")}
                        disabled={isLoading}
                        className="w-full"
                      >
                        <Chrome className="mr-2 h-5 w-5" />
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleSocialAuth("apple")}
                        disabled={isLoading}
                        className="w-full"
                      >
                        <Apple className="mr-2 h-5 w-5" />
                        Apple
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Signup Tab */}
                  <TabsContent value="signup" className="space-y-4">
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input
                            id="signup-name"
                            type="text"
                            placeholder="Jane Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                        <p className="text-xs text-gray-500">Must be at least 8 characters</p>
                      </div>

                      <label className="flex items-start gap-2 text-sm">
                        <input type="checkbox" className="rounded mt-1" required />
                        <span className="text-gray-600">
                          I agree to the{" "}
                          <Link href="/terms" className="text-purple-600 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-purple-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </span>
                      </label>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating account..." : "Create Account"}
                      </Button>
                    </form>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-4 text-gray-500">Or sign up with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        onClick={() => handleSocialAuth("google")}
                        disabled={isLoading}
                        className="w-full"
                      >
                        <Chrome className="mr-2 h-5 w-5" />
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleSocialAuth("apple")}
                        disabled={isLoading}
                        className="w-full"
                      >
                        <Apple className="mr-2 h-5 w-5" />
                        Apple
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
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
