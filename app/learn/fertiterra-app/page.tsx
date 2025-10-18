"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  TrendingUp,
  Video,
  Users,
  Heart,
  Activity,
  BookOpen,
  Bell,
  FileText,
  Bluetooth,
  Globe,
  Smartphone,
  Wifi,
  Star,
  CheckCircle2,
  Apple,
  Download,
  ArrowRight,
  Stethoscope,
  Target,
  Award,
} from "lucide-react"

export default function FertiTerraAppPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send to your backend or email service
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  const handleDownloadClick = () => {
    alert(
      "The FertiTerra app is not yet available on the App Store or Play Store. Fill out the form below to be notified when it launches!",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-white/20">
              Africa's First AI-Powered Fertility App
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet the FertiTerra App</h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Your complete fertility companion—track your cycle, get AI-powered insights, connect with specialists, and
              join a supportive community. All in one beautiful app designed for Africa.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                size="lg"
                onClick={handleDownloadClick}
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8"
              >
                <Apple className="mr-2 h-5 w-5" />
                Download on App Store
              </Button>
              <Button
                size="lg"
                onClick={handleDownloadClick}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Get it on Google Play
              </Button>
            </div>

            <Link href="/wombs">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white/20 text-white hover:bg-white/30 border-white/20 text-lg px-8"
              >
                Try Web Version <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                </div>
                <p className="text-2xl font-bold">4.8/5</p>
                <p className="text-purple-200 text-sm">User Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold">10,000+</p>
                <p className="text-purple-200 text-sm">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold">5</p>
                <p className="text-purple-200 text-sm">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why We Built the FertiTerra App</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Infertility affects 8-12% of couples worldwide, with rates even higher in parts of Africa—25% in Nigeria
              and 12% in Rwanda. We're here to change that.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-purple-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Stethoscope className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Limited Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Most African communities lack fertility specialists, making it difficult for couples to get the care
                    they need.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle>High Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Traditional fertility treatments are expensive and often unaffordable for many African families.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Cultural Stigma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Infertility carries significant stigma, preventing many from seeking the support they deserve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Powerful Features for Your Fertility Journey
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Everything you need to understand and improve your reproductive health
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1: Cycle Tracking */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white">
                  <Calendar className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Smart Cycle Tracking</h3>
                  <p className="text-purple-100">
                    Track your menstrual cycle with precision and get AI-powered predictions
                  </p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Visual calendar with period and fertile window predictions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Symptom and mood logging with customizable tags</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Basal body temperature (BBT) tracking with charts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Ovulation predictions based on your unique patterns</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2: AI Insights */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 text-white">
                  <TrendingUp className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">AI Health Insights</h3>
                  <p className="text-pink-100">Get personalized recommendations powered by advanced AI</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Fertility score based on your cycle data and test results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Personalized recommendations for improving fertility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Hormone test analysis with easy-to-understand insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Pattern detection to identify potential issues early</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3: Telemedicine */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-rose-500 to-rose-600 p-6 text-white">
                  <Video className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Expert Telemedicine</h3>
                  <p className="text-rose-100">Connect with fertility specialists from anywhere in Africa</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span>Video consultations with certified fertility specialists</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span>Secure chat with healthcare providers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span>Easy appointment booking and reminders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span>Prescription delivery to your location</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 4: Community */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white">
                  <Users className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Supportive Community</h3>
                  <p className="text-purple-100">Join thousands of others on similar fertility journeys</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Support groups for TTC, PCOS, IVF, and more</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Anonymous discussions in a safe, stigma-free space</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Success stories to inspire and motivate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Expert Q&A sessions with fertility specialists</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">And So Much More</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-purple-600 mb-3" />
                  <CardTitle>Educational Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Access a library of articles, videos, and guides on fertility, written by experts and tailored for
                    African contexts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-100 hover:border-pink-300 transition-colors">
                <CardHeader>
                  <Bluetooth className="h-10 w-10 text-pink-600 mb-3" />
                  <CardTitle>Test Kit Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Seamlessly sync your FertiTerra at-home test results via Bluetooth or QR code for instant analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-100 hover:border-rose-300 transition-colors">
                <CardHeader>
                  <Bell className="h-10 w-10 text-rose-600 mb-3" />
                  <CardTitle>Smart Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Never miss important dates with customizable reminders for tests, medications, and appointments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
                <CardHeader>
                  <FileText className="h-10 w-10 text-purple-600 mb-3" />
                  <CardTitle>Health Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Generate comprehensive health reports to share with your doctor or clinic for informed care.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-100 hover:border-pink-300 transition-colors">
                <CardHeader>
                  <Activity className="h-10 w-10 text-pink-600 mb-3" />
                  <CardTitle>Partner Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Invite your partner to join your journey with shared insights and coordinated care plans.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-100 hover:border-rose-300 transition-colors">
                <CardHeader>
                  <Award className="h-10 w-10 text-rose-600 mb-3" />
                  <CardTitle>Progress Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Celebrate your fertility journey with achievements, streaks, and motivational milestones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Africa */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built Specifically for Africa</h2>
            <p className="text-xl text-purple-100 mb-12">
              We understand the unique challenges African families face. That's why the FertiTerra app is designed with
              you in mind.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Globe className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Multi-Language Support</h3>
                <p className="text-purple-100 text-sm">
                  Available in English, Swahili, French, Yoruba, Hausa, Amharic, and Zulu—with more languages coming
                  soon.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Wifi className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Offline Functionality</h3>
                <p className="text-purple-100 text-sm">
                  Track your cycle and access resources even without internet connectivity. Data syncs when you're back
                  online.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Smartphone className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Optimized for All Devices</h3>
                <p className="text-purple-100 text-sm">
                  Works seamlessly on low-end smartphones, ensuring everyone can access quality fertility care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-purple-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "FertiTerra helped me understand my cycle better than I ever thought possible. The AI insights are
                    incredibly accurate, and connecting with a specialist was so easy!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                      A
                    </div>
                    <div>
                      <p className="font-semibold">Aisha M.</p>
                      <p className="text-sm text-gray-500">Lagos, Nigeria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "After struggling with PCOS, I found support and guidance through FertiTerra. The community is
                    amazing, and the telemedicine feature changed my life."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold">
                      N
                    </div>
                    <div>
                      <p className="font-semibold">Njeri K.</p>
                      <p className="text-sm text-gray-500">Nairobi, Kenya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "My husband and I were trying for 2 years. FertiTerra's test kit and app helped us identify the
                    right time, and now we're expecting our first baby!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-semibold">
                      T
                    </div>
                    <div>
                      <p className="font-semibold">Thandiwe M.</p>
                      <p className="text-sm text-gray-500">Johannesburg, South Africa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Notification Form */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 p-8 text-white text-center">
                <Download className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Get Notified When We Launch</h2>
                <p className="text-purple-100">
                  Be the first to know when the FertiTerra app is available on iOS and Android!
                </p>
              </div>
              <CardContent className="p-8">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234 XXX XXX XXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Nigeria, Kenya, etc."
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6"
                    >
                      Notify Me When Available
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      We'll notify you as soon as the FertiTerra app is available for download.
                    </p>
                    <Link href="/wombs">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Try Web Version Now <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Fertility Journey Starts Today</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of African families taking control of their reproductive health with FertiTerra.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/wombs">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8"
                >
                  Try Web Version <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" onClick={handleDownloadClick} className="text-lg px-8 bg-transparent">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
