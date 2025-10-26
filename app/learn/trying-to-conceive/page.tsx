"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, BookOpen, Calendar, ArrowRight, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function TryingToConcievePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Trying to Conceive</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your comprehensive guide and support system for your fertility journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plans/ttc">
              <Button
                size="lg"
                className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Heart className="mr-2 h-5 w-5" />
                Start Your TTC Plan
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* TTC Plan Highlight */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-rose-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our comprehensive Trying to Conceive (TTC) plan with personalized guidance, expert support, and
              proven strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <Calendar className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Cycle Tracking</h3>
                <p className="opacity-90">Advanced fertility tracking and ovulation prediction</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Support</h3>
                <p className="opacity-90">Access to fertility specialists and counselors</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
                <p className="opacity-90">Tailored recommendations based on your unique needs</p>
              </div>
            </div>
            <Link href="/plans/ttc">
              <Button
                size="lg"
                className="bg-white text-rose-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started with TTC Plan - $99/month
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Understanding TTC */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Understanding Your TTC Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every fertility journey is unique. Learn about the key factors that can influence your path to conception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-rose-600">
                  <Calendar className="h-6 w-6" />
                  Timing & Ovulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Understanding your menstrual cycle and identifying your fertile window is crucial for conception
                  success.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Track ovulation patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Monitor basal body temperature
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Use ovulation predictor kits
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Heart className="h-6 w-6" />
                  Lifestyle Factors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Your lifestyle choices can significantly impact your fertility and chances of conception.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Maintain healthy weight
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Balanced nutrition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Regular exercise routine
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-600">
                  <Users className="h-6 w-6" />
                  Partner Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Both partners' health and fertility factors play important roles in conception success.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sperm health optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Stress management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Regular health checkups
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Success Stories</h2>
            <p className="text-xl text-gray-600">Real stories from couples who achieved their dream of parenthood</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-rose-50 to-purple-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "After 18 months of trying, FertiTerra's TTC plan helped us understand our cycle better. We conceived
                  within 3 months of starting the program!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    S&M
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah & Michael</p>
                    <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The personalized guidance and expert support made all the difference. We now have our beautiful baby
                  girl!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold">
                    A&D
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Amara & David</p>
                    <p className="text-sm text-gray-600">Accra, Ghana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">TTC Resources</h2>
            <p className="text-xl text-gray-600">Helpful tools and information for your fertility journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/learn/planning-future-children" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-rose-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-2">Planning Guide</h3>
                  <p className="text-sm text-gray-600">Comprehensive planning for your fertility journey</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/test-kits/hormone-fertility" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-2">Fertility Testing</h3>
                  <p className="text-sm text-gray-600">At-home hormone and fertility testing kits</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/appointments/gynaecologist" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-indigo-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-2">Expert Consultation</h3>
                  <p className="text-sm text-gray-600">Connect with fertility specialists</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/community" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-2">Community Support</h3>
                  <p className="text-sm text-gray-600">Connect with others on similar journeys</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your TTC Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of couples who have found success with our comprehensive TTC program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plans/ttc">
              <Button
                size="lg"
                className="bg-white text-rose-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                Join TTC Plan - $99/month
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/consultation">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
              >
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
