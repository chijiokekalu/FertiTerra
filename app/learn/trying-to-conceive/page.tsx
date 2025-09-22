"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Clock, Users, CheckCircle, ArrowRight, Star, Calendar, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TryingToConcievePage() {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Personalized Care",
      description: "Tailored fertility plans based on your unique health profile and goals",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "24/7 Support",
      description: "Round-the-clock access to fertility specialists and support resources",
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Expert Team",
      description: "Access to leading fertility doctors, nutritionists, and counselors",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: "Proven Results",
      description: "Evidence-based treatments with high success rates",
    },
  ]

  const features = [
    "Comprehensive fertility assessment",
    "Personalized treatment plans",
    "Regular monitoring and adjustments",
    "Nutritional guidance and meal plans",
    "Stress management and counseling",
    "Partner support and education",
    "Advanced diagnostic testing",
    "Medication management",
    "Lifestyle optimization coaching",
    "24/7 emergency support",
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Lagos, Nigeria",
      rating: 5,
      text: "After 3 years of trying, FertiTerra's TTC plan helped us conceive within 8 months. The personalized approach made all the difference.",
    },
    {
      name: "David & Amara K.",
      location: "Accra, Ghana",
      rating: 5,
      text: "The comprehensive support and expert guidance gave us hope when we needed it most. We're now proud parents of twins!",
    },
    {
      name: "Fatima A.",
      location: "Nairobi, Kenya",
      rating: 5,
      text: "The TTC plan addressed not just the medical aspects but also the emotional journey. Highly recommend to anyone struggling with fertility.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                Trying to Conceive Plan
              </Badge>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Your Journey to Parenthood Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive fertility support designed specifically for couples trying to conceive. Get personalized
                care, expert guidance, and the emotional support you need on your fertility journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/plans/ttc">
                  <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg">
                    Start Your TTC Plan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="px-8 py-3 rounded-full text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/couple-fertility-journey-1.png"
                alt="Couple on fertility journey"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">85% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Our TTC Plan?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses every aspect of your fertility journey, from medical care to
              emotional support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Comprehensive TTC Support</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our Trying to Conceive plan includes everything you need for a successful fertility journey, backed by
                medical expertise and compassionate care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/healthcare-provider-hands.png"
                alt="Healthcare provider consultation"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">Months Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl opacity-90">
              Real stories from couples who achieved their dream of parenthood with our TTC plan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm opacity-80">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Start Your TTC Journey Today</h2>
          <p className="text-xl text-gray-600 mb-12">Comprehensive fertility support with flexible payment options</p>

          <Card className="max-w-md mx-auto p-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-purple-600">TTC Plan</CardTitle>
              <CardDescription className="text-lg">Complete fertility support package</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-2">$299</div>
                <div className="text-gray-600">per month</div>
                <div className="text-sm text-purple-600 mt-2">12-month commitment</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Comprehensive fertility assessment</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Monthly specialist consultations</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 support and monitoring</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Personalized treatment plans</span>
                </div>
              </div>

              <Link href="/plans/ttc">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-full text-lg">
                  Start Your TTC Plan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <p className="text-sm text-gray-600 mt-4 text-center">30-day money-back guarantee</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of couples who have successfully conceived with our comprehensive TTC plan. Your dream of
            parenthood is within reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plans/ttc">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg bg-transparent"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
