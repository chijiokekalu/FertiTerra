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
import { Eye, EyeOff, Shield, Zap, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WombsSignup() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    given_name: "",
    family_name: "",
    email: "",
    password: "",
    cycle_length: "",
    fertility_goal: "",
    plan_type: "",
    referral_code: "",
    agreeTerms: false,
  })
  const [verificationCode, setVerificationCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.agreeTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    setIsLoading(true)

    try {
      await Auth.signUp({
        username: formData.email,
        password: formData.password,
        attributes: {
          given_name: formData.given_name,
          family_name: formData.family_name,
          email: formData.email,
          "custom:cycle_length": formData.cycle_length || "28",
          "custom:fertility_goal": formData.fertility_goal || "tracking",
          "custom:plan_type": formData.plan_type || "free",
          "custom:referral_code": formData.referral_code || "",
        },
      })
      setCurrentStep(2)
    } catch (err: any) {
      console.error("Signup error:", err)
      setError(err.message || "Failed to create account. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleConfirmSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await Auth.confirmSignUp(formData.email, verificationCode)

      // Auto-login after confirmation
      await Auth.signIn(formData.email, formData.password)
      router.push("/wombs/dashboard")
    } catch (err: any) {
      console.error("Confirmation error:", err)
      setError(err.message || "Invalid verification code. Please try again.")
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    try {
      await Auth.resendSignUp(formData.email)
      alert("Verification code resent to your email!")
    } catch (err: any) {
      console.error("Resend error:", err)
      setError(err.message || "Failed to resend code")
    }
  }

  if (currentStep === 2) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto mb-4">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <Image src="/images/fertiterra-logo.png" alt="Wombs Logo" fill className="object-contain" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Verify Your Email
                </h1>
              </div>
              <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
              <CardDescription>
                We've sent a verification code to <br />
                <strong>{formData.email}</strong>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleConfirmSignup} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="code" className="text-sm font-medium">
                    Verification Code
                  </label>
                  <input
                    id="code"
                    type="text"
                    placeholder="Enter 6-digit code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-center text-2xl tracking-widest"
                    maxLength={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 text-base font-semibold"
                  disabled={isLoading || verificationCode.length !== 6}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Verifying...
                    </div>
                  ) : (
                    "Verify Email"
                  )}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Didn't receive the code? Resend
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
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
              Start your fertility
              <br />
              journey today
            </h2>
            <p className="text-purple-100 text-lg">
              Join thousands of women taking control of their reproductive health with personalized tracking and AI
              insights.
            </p>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Zap className="h-8 w-8 text-white" />
            <div>
              <p className="font-semibold text-white">AI-Powered Insights</p>
              <p className="text-purple-100 text-sm">Get personalized fertility predictions</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Shield className="h-8 w-8 text-white" />
            <div>
              <p className="font-semibold text-white">100% Private & Secure</p>
              <p className="text-purple-100 text-sm">Your data is encrypted and protected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 overflow-y-auto">
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
              <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
              <CardDescription>Start tracking your fertility journey today</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label htmlFor="given_name" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      id="given_name"
                      name="given_name"
                      type="text"
                      placeholder="Jane"
                      value={formData.given_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="family_name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      id="family_name"
                      name="family_name"
                      type="text"
                      placeholder="Doe"
                      value={formData.family_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
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
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all pr-12"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">Must be at least 8 characters</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="cycle_length" className="text-sm font-medium">
                    Average Cycle Length (days)
                  </label>
                  <Select
                    value={formData.cycle_length}
                    onValueChange={(value) => handleSelectChange("cycle_length", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select cycle length" />
                    </SelectTrigger>
                    <SelectContent>
                      {[21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35].map((days) => (
                        <SelectItem key={days} value={days.toString()}>
                          {days} days
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="fertility_goal" className="text-sm font-medium">
                    Fertility Goal
                  </label>
                  <Select
                    value={formData.fertility_goal}
                    onValueChange={(value) => handleSelectChange("fertility_goal", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tracking">General Tracking</SelectItem>
                      <SelectItem value="conceiving">Trying to Conceive</SelectItem>
                      <SelectItem value="preventing">Pregnancy Prevention</SelectItem>
                      <SelectItem value="health">Health Monitoring</SelectItem>
                      <SelectItem value="planning">Future Planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="plan_type" className="text-sm font-medium">
                    Plan Type
                  </label>
                  <Select value={formData.plan_type} onValueChange={(value) => handleSelectChange("plan_type", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free Plan</SelectItem>
                      <SelectItem value="basic">Basic Plan - $9.99/mo</SelectItem>
                      <SelectItem value="premium">Premium Plan - $19.99/mo</SelectItem>
                      <SelectItem value="enterprise">Enterprise Plan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="referral_code" className="text-sm font-medium">
                    Referral Code (Optional)
                  </label>
                  <input
                    id="referral_code"
                    name="referral_code"
                    type="text"
                    placeholder="Enter referral code"
                    value={formData.referral_code}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer leading-tight">
                    I agree to the{" "}
                    <Link href="/terms" className="text-purple-600 hover:text-purple-700">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-purple-600 hover:text-purple-700">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 text-base font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Creating Account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/wombs/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
