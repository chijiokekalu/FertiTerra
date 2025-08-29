"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function FoundersStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-pink-100/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200/30 rounded-full blur-xl"></div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Putting fertility back into the hands of families
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe every family deserves access to comprehensive, compassionate fertility care. Our mission is to
            democratize fertility health across Africa through innovative technology and personalized support.
          </p>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why We Started</h2>
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              We began FertiTerra because we watched too many families struggle in silence, with few answers and less
              support. The statistics were staggering—1 in 6 couples worldwide face fertility challenges, yet in Africa,
              access to quality fertility care remains limited and often unaffordable.
            </p>
            <p className="text-lg mb-6">
              Our founder's personal journey began with watching her foster mother's decade-long struggle with
              infertility, followed by her biological mother's own challenges conceiving. These experiences revealed the
              emotional toll, financial burden, and lack of accessible resources that families face when trying to build
              their dreams.
            </p>
            <p className="text-lg">
              We realized that technology could bridge this gap—bringing world-class fertility testing, expert
              consultations, and personalized care plans directly to families across Africa. FertiTerra was born from
              the belief that geography should never determine your access to fertility health.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Who We Are</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Adebayo</h3>
                <p className="text-rose-600 font-medium mb-3">CEO & Co-Founder</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reproductive endocrinologist with 15+ years of experience. Former consultant at leading fertility
                  clinics in London and Lagos. Passionate about making fertility care accessible across Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
                <p className="text-blue-600 font-medium mb-3">CMO & Co-Founder</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Healthcare marketing strategist with expertise in digital health platforms. Previously led growth at
                  telehealth startups across emerging markets. Committed to patient-centered care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Amara Okafor</h3>
                <p className="text-green-600 font-medium mb-3">CTO & Co-Founder</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Software engineer and AI specialist with background in healthcare technology. Former tech lead at
                  major health platforms. Focused on building secure, scalable solutions for African healthcare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Science-Backed Testing</h3>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive hormone and fertility tests are developed in partnership with leading laboratories,
                ensuring accurate results that inform personalized care plans.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessible Care Model</h3>
              <p className="text-gray-600 leading-relaxed">
                Through telemedicine and at-home testing, we eliminate geographical barriers and make fertility care
                accessible to families across urban and rural Africa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Holistic Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Beyond testing, we provide ongoing support through fertility counseling, nutrition guidance, and
                connections to trusted specialists when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-l-4 border-rose-500">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">For all families</h3>
                <p className="text-gray-600 text-sm">
                  Fertility care should be accessible regardless of location, income, or background.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparency first</h3>
                <p className="text-gray-600 text-sm">
                  Clear communication about processes, costs, and outcomes builds trust and empowers decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Evidence-led care</h3>
                <p className="text-gray-600 text-sm">
                  Every recommendation is backed by scientific research and clinical best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compassionate support</h3>
                <p className="text-gray-600 text-sm">
                  We understand the emotional journey and provide empathetic care at every step.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Meet Our Full Team?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn more about the dedicated professionals working to make fertility care accessible across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/team">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3">
                Meet the Team
              </Button>
            </Link>
            <Link href="/test-kits">
              <Button
                size="lg"
                variant="outline"
                className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-3 bg-transparent"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
