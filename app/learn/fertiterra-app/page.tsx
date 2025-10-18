"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Calendar,
  Heart,
  TrendingUp,
  Video,
  Users,
  Globe,
  Smartphone,
  Apple,
  Star,
  Shield,
  Zap,
  BookOpen,
  MessageSquare,
  Bell,
  BarChart,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export default function FertiTerraAppPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send to your backend or form service
    // For now, we'll just show the success message
    setFormSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-rose-600/10" />
        <div className="container relative mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
              <Heart className="h-5 w-5 text-rose-500" />
              <span className="text-sm font-medium">Africa's First AI-Powered Fertility App</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Meet the
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                FertiTerra App
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Your complete fertility companion. Track your cycle, get AI-powered insights, connect with specialists,
              and join a supportive community—all in one beautiful app.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.8/5</span>
                <span className="text-sm text-gray-600">(2,450+ reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">10,000+ users</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Globe className="h-5 w-5 text-pink-600" />
                <span className="font-semibold">5 countries</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg"
                onClick={() =>
                  alert(
                    "The app is not yet available on the App Store. Fill the form below to be notified when it launches.",
                  )
                }
              >
                <Apple className="mr-2 h-6 w-6" />
                Download on App Store
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-6 text-lg"
                onClick={() =>
                  alert(
                    "The app is not yet available on Google Play. Fill the form below to be notified when it launches.",
                  )
                }
              >
                <Smartphone className="mr-2 h-6 w-6" />
                Get it on Google Play
              </Button>
            </div>

            <div className="mt-6">
              <Link href="/wombs">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/80 backdrop-blur-sm border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Try Web Version
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Challenge We're Solving</h2>
            <p className="text-xl text-gray-600">
              Infertility affects 8-12% of couples worldwide, with even higher rates in some African countries—25% in
              Nigeria and 12% in Rwanda. Yet access to fertility care remains limited.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Limited Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Few fertility specialists and clinics across Africa, making it difficult for many to get the care they
                  need.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-100 hover:border-pink-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>High Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Traditional fertility treatments are expensive, putting them out of reach for most African families.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-100 hover:border-rose-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-rose-600" />
                </div>
                <CardTitle>Cultural Stigma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deep stigma around infertility prevents open discussion and seeking help, especially for women.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need in One App</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From tracking to treatment, we've built the most comprehensive fertility platform for African women.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Feature 1: Cycle Tracking */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white">
                <Calendar className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Smart Cycle Tracking</h3>
                <p className="text-purple-100">
                  Never miss your fertile window with AI-powered predictions and personalized insights.
                </p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Visual Calendar</p>
                      <p className="text-sm text-gray-600">See your entire cycle at a glance with color-coded days</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Symptom Logging</p>
                      <p className="text-sm text-gray-600">Track mood, discharge, symptoms, and more with one tap</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">BBT Tracking</p>
                      <p className="text-sm text-gray-600">Monitor basal body temperature for ovulation confirmation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Period Predictions</p>
                      <p className="text-sm text-gray-600">Get accurate forecasts based on your unique patterns</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2: AI Insights */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-6 text-white">
                <TrendingUp className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">AI Health Insights</h3>
                <p className="text-pink-100">
                  Get personalized recommendations powered by advanced AI and medical expertise.
                </p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Fertility Score</p>
                      <p className="text-sm text-gray-600">Real-time assessment based on your data and test results</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Personalized Recommendations</p>
                      <p className="text-sm text-gray-600">Lifestyle, diet, and timing suggestions tailored to you</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Test Result Analysis</p>
                      <p className="text-sm text-gray-600">Understand your hormone levels with clear explanations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Trend Detection</p>
                      <p className="text-sm text-gray-600">
                        Identify patterns and potential issues before they become problems
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3: Telemedicine */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-rose-600 to-rose-700 p-6 text-white">
                <Video className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Expert Telemedicine</h3>
                <p className="text-rose-100">
                  Connect with certified fertility specialists from the comfort of your home.
                </p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Video Consultations</p>
                      <p className="text-sm text-gray-600">
                        Face-to-face appointments with fertility specialists via secure video
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Chat with Experts</p>
                      <p className="text-sm text-gray-600">Quick questions answered by certified professionals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Easy Appointments</p>
                      <p className="text-sm text-gray-600">Book and manage appointments without leaving the app</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Specialist Matching</p>
                      <p className="text-sm text-gray-600">
                        Find the right doctor for your specific needs and concerns
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 4: Community */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 text-white">
                <Users className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Supportive Community</h3>
                <p className="text-purple-100">
                  Join thousands of women on similar journeys. Share, learn, and support each other.
                </p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Support Groups</p>
                      <p className="text-sm text-gray-600">Join TTC, PCOS, IVF, and other condition-specific groups</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Discussion Forums</p>
                      <p className="text-sm text-gray-600">Ask questions and share experiences anonymously</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Success Stories</p>
                      <p className="text-sm text-gray-600">
                        Get inspired by others who've achieved their fertility goals
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Expert Q&A Sessions</p>
                      <p className="text-sm text-gray-600">Participate in live sessions with fertility specialists</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-100 hover:border-purple-300 transition-colors">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">Educational Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Access articles, videos, and guides on fertility, pregnancy, and reproductive health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-pink-300 transition-colors">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-pink-600 mb-2" />
                <CardTitle className="text-lg">Test Kit Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Sync results from FertiTerra test kits via Bluetooth or QR code for seamless tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-rose-300 transition-colors">
              <CardHeader>
                <Bell className="h-8 w-8 text-rose-600 mb-2" />
                <CardTitle className="text-lg">Smart Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Never forget to log data, take medication, or test with personalized notifications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-purple-300 transition-colors">
              <CardHeader>
                <BarChart className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Visualize your fertility journey with beautiful charts and trend analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-pink-300 transition-colors">
              <CardHeader>
                <FileText className="h-8 w-8 text-pink-600 mb-2" />
                <CardTitle className="text-lg">Health Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Generate comprehensive reports to share with your doctor or clinic.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-rose-300 transition-colors">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-rose-600 mb-2" />
                <CardTitle className="text-lg">Partner Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Share your journey with your partner and track together as a team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Built for Africa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Built Specifically for Africa</h2>
            <p className="text-xl text-gray-600">
              We understand the unique challenges and context of fertility care in Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Multi-Language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Available in 7 major African languages:</p>
                <div className="flex flex-wrap gap-2">
                  {["English", "Swahili", "French", "Yoruba", "Hausa", "Amharic", "Zulu"].map((lang) => (
                    <span key={lang} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Offline Functionality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Log data and access key features even without internet. Data syncs automatically when you're back
                  online.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Works on Any Device</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimized for low-end Android devices and works smoothly even with limited RAM and storage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real stories from women across Africa</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The FertiTerra app helped me understand my cycle better than any doctor visit. I got pregnant after
                  just 3 months of tracking!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Amina K.</p>
                    <p className="text-sm text-gray-500">Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Being able to consult with a fertility specialist from my phone changed everything. No more taking
                  days off work for appointments!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold">
                    W
                  </div>
                  <div>
                    <p className="font-semibold">Wanjiku M.</p>
                    <p className="text-sm text-gray-500">Nairobi, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The community support feature is incredible. Knowing I'm not alone in this journey has been so
                  comforting. Thank you FertiTerra!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                    T
                  </div>
                  <div>
                    <p className="font-semibold">Thandi N.</p>
                    <p className="text-sm text-gray-500">Johannesburg, South Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Notification Form */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!formSubmitted ? (
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl mb-2">Get Notified When We Launch</CardTitle>
                  <CardDescription className="text-lg">
                    Be among the first to access the FertiTerra mobile app when it becomes available on iOS and Android
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
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
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-3 rounded-md border border-input bg-background"
                      >
                        <option value="">Select your country</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Kenya">Kenya</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg"
                    >
                      Notify Me When Available
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      We'll only use your information to notify you about the app launch. No spam, we promise! 💜
                    </p>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                  <p className="text-xl text-gray-600 mb-8">
                    We'll notify you as soon as the FertiTerra mobile app is available for download.
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-700">In the meantime, you can:</p>
                    <Link href="/wombs">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      >
                        Try the Web Version Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Start Your Fertility Journey Today</h2>
            <p className="text-xl text-gray-600 mb-8">
              Don't wait for the mobile app. Try the web version now and start tracking your fertility journey.
            </p>
            <Link href="/wombs">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white px-12 py-6 text-xl"
              >
                Launch Web App
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
