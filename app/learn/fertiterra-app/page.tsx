"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Heart,
  TrendingUp,
  Video,
  Users,
  BookOpen,
  Activity,
  Bell,
  FileText,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Download,
  Star,
  Shield,
  Zap,
  Globe,
} from "lucide-react"
import { Header } from "@/components/header"

export default function FertiTerraAppPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleAppDownloadClick = () => {
    alert(
      "The Wombs app is not yet available on the App Store or Play Store. Fill out the form below to be notified when it launches!",
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm font-medium">Africa's First AI-Powered Fertility App</span>
                </div>
                <h1 className="text-5xl font-bold leading-tight">
                  Wombs App
                  <span className="block text-purple-100">Your Complete Fertility Companion</span>
                </h1>
                <p className="text-xl text-purple-50">
                  Track your cycle, get AI-powered insights, connect with fertility specialists, and join a supportive
                  community—all in one beautiful app designed specifically for African women.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-gray-100 text-lg"
                    onClick={handleAppDownloadClick}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download App
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href="/wombs">Try Web Version</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                    <span>4.8/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>10,000+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    <span>5 Countries</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <Image
                    src="/placeholder.svg?height=600&width=300&text=Wombs+App+Screenshot"
                    alt="Wombs App Interface"
                    width={300}
                    height={600}
                    className="rounded-2xl shadow-2xl mx-auto"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Heart className="h-8 w-8 text-rose-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <Activity className="h-8 w-8 text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why We Built Wombs</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Infertility affects 8-12% of couples worldwide, with even higher rates in Africa—25% in Nigeria and 12%
                in Rwanda. Yet access to fertility care remains limited due to high costs, geographic barriers, and
                cultural stigma.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-rose-100 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Limited Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Few fertility specialists and clinics, especially in rural areas, making expert care hard to access.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-100 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>High Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Traditional fertility treatments are prohibitively expensive for most African families.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-pink-100 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle>Cultural Stigma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Deep cultural stigma surrounding infertility prevents many from seeking the help they need.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Everything You Need in One App</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wombs combines cutting-edge AI technology with expert medical guidance to provide comprehensive
                fertility care at your fingertips.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8">
                  <Calendar className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-2xl mb-3">Smart Cycle Tracking</CardTitle>
                  <CardDescription className="text-base">
                    Track your menstrual cycle, ovulation, and fertility windows with AI-powered predictions that learn
                    from your unique patterns.
                  </CardDescription>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {[
                      "Visual 28-day cycle calendar",
                      "Symptom and mood logging",
                      "Basal body temperature tracking",
                      "Fertile window predictions",
                      "Period and ovulation reminders",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8">
                  <TrendingUp className="h-12 w-12 text-pink-600 mb-4" />
                  <CardTitle className="text-2xl mb-3">AI Health Insights</CardTitle>
                  <CardDescription className="text-base">
                    Get personalized recommendations powered by artificial intelligence based on your health data and
                    goals.
                  </CardDescription>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {[
                      "Personalized fertility score",
                      "AI-powered health recommendations",
                      "Test result analysis and interpretation",
                      "Lifestyle optimization suggestions",
                      "Nutrition and supplement guidance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="bg-gradient-to-br from-rose-100 to-rose-50 p-8">
                  <Video className="h-12 w-12 text-rose-600 mb-4" />
                  <CardTitle className="text-2xl mb-3">Telemedicine</CardTitle>
                  <CardDescription className="text-base">
                    Connect with board-certified fertility specialists through secure video consultations from anywhere.
                  </CardDescription>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {[
                      "Instant video consultations",
                      "Chat with fertility experts",
                      "Book appointments seamlessly",
                      "Access medical records",
                      "Prescription management",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8">
                  <Users className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-2xl mb-3">Community Support</CardTitle>
                  <CardDescription className="text-base">
                    Join thousands of women on similar journeys in a safe, supportive, and stigma-free community.
                  </CardDescription>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {[
                      "Private support groups",
                      "Peer-to-peer discussions",
                      "Expert Q&A sessions",
                      "Success stories and inspiration",
                      "Anonymous sharing option",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">More Powerful Features</h2>
              <p className="text-xl text-gray-600">Everything you need for your fertility journey</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-lg">Educational Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Comprehensive library of fertility information, videos, and articles
                  </p>
                </CardContent>
              </Card>

              <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <Activity className="h-8 w-8 text-pink-600 mb-2" />
                  <CardTitle className="text-lg">Test Kit Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Seamlessly sync data from FertiTerra at-home test kits via Bluetooth
                  </p>
                </CardContent>
              </Card>

              <Card className="border-rose-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <Bell className="h-8 w-8 text-rose-600 mb-2" />
                  <CardTitle className="text-lg">Smart Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Get timely notifications for medications, tests, and appointments
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <FileText className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-lg">Health Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Export comprehensive reports to share with your healthcare provider
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Multi-Language Support */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Built for Africa</Badge>
                <h2 className="text-4xl font-bold mb-4">Designed for African Women</h2>
                <p className="text-xl text-gray-600">
                  Wombs is built from the ground up with African users in mind, offering features that address the
                  unique challenges faced across the continent.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-purple-100">
                  <CardHeader>
                    <Globe className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Multi-Language Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Available in multiple African languages:</p>
                    <div className="flex flex-wrap gap-2">
                      {["English", "Swahili", "French", "Yoruba", "Hausa", "Amharic", "Zulu"].map((lang) => (
                        <Badge key={lang} variant="outline" className="border-purple-200">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-pink-100">
                  <CardHeader>
                    <Smartphone className="h-8 w-8 text-pink-600 mb-2" />
                    <CardTitle>Works Offline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Core features work even with limited internet connectivity:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Track cycles offline</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Log symptoms anywhere</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Auto-sync when connected</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600">
                Join thousands of women who trust Wombs for their fertility journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Amina K.",
                  location: "Lagos, Nigeria",
                  text: "Wombs helped me understand my cycle better than ever. The AI insights are spot-on and the community is so supportive!",
                  rating: 5,
                },
                {
                  name: "Grace M.",
                  location: "Nairobi, Kenya",
                  text: "Being able to consult with fertility specialists from home has been life-changing. No more long trips to the city!",
                  rating: 5,
                },
                {
                  name: "Thandiwe N.",
                  location: "Johannesburg, South Africa",
                  text: "The offline mode is perfect for when I'm traveling. I never miss tracking my cycle. Highly recommend!",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <Card key={i} className="border-0 shadow-xl bg-white">
                  <CardHeader>
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Download Notification Form */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Bell className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl mb-2">Get Notified When We Launch</CardTitle>
                  <CardDescription className="text-purple-100 text-lg">
                    The Wombs mobile app is coming soon to iOS and Android. Be the first to know when it's available!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Jane Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="jane@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white">
                            Phone Number (Optional)
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+234 XXX XXX XXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country" className="text-white">
                            Country *
                          </Label>
                          <select
                            id="country"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            required
                            className="w-full bg-white/20 border-white/20 text-white rounded-md px-3 py-2"
                          >
                            <option value="" className="text-gray-900">
                              Select your country
                            </option>
                            <option value="Nigeria" className="text-gray-900">
                              Nigeria
                            </option>
                            <option value="Kenya" className="text-gray-900">
                              Kenya
                            </option>
                            <option value="South Africa" className="text-gray-900">
                              South Africa
                            </option>
                            <option value="Ghana" className="text-gray-900">
                              Ghana
                            </option>
                            <option value="Rwanda" className="text-gray-900">
                              Rwanda
                            </option>
                            <option value="Other" className="text-gray-900">
                              Other
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" required className="mt-1 rounded" />
                        <span className="text-sm text-purple-100">
                          I agree to receive email notifications about the Wombs app launch and updates from FertiTerra
                          Technologies
                        </span>
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-white text-purple-600 hover:bg-gray-100 text-lg"
                      >
                        Notify Me When It Launches
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-purple-100 text-lg mb-6">
                        We'll notify you as soon as the Wombs app is available for download. In the meantime, you can
                        use our web version!
                      </p>
                      <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                        <Link href="/wombs">
                          Try Web Version Now
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Fertility Journey?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of African women taking control of their reproductive health with Wombs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg">
                  <Link href="/wombs">
                    Try Web Version
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg bg-transparent"
                  onClick={handleAppDownloadClick}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download App (Soon)
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/fertiterra-logo.png" alt="FertiTerra" width={40} height={40} />
                <div>
                  <h3 className="font-bold text-lg">Wombs</h3>
                  <p className="text-xs text-gray-600">by FertiTerra Technologies</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Making fertility care accessible, affordable, and stigma-free across Africa.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/wombs" className="text-sm text-gray-600 hover:text-purple-600">
                    Web App
                  </Link>
                </li>
                <li>
                  <Link href="/test-kits" className="text-sm text-gray-600 hover:text-purple-600">
                    Test Kits
                  </Link>
                </li>
                <li>
                  <Link href="/plans/ttc" className="text-sm text-gray-600 hover:text-purple-600">
                    Plans
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about/founders-story" className="text-sm text-gray-600 hover:text-purple-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-600 hover:text-purple-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm text-gray-600 hover:text-purple-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-purple-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-purple-600">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} FertiTerra Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
