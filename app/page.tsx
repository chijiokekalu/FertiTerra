"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import PlanCards from "@/components/plan-cards"
import TestimonialSection from "@/components/testimonial-section"
import NewsletterSignup from "@/components/newsletter-signup"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, Shield, CheckCircle, ArrowRight, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("awareness")
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Certification Banner */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/rdb-logo.png"
                alt="Rwanda Development Board"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
              <div className="text-center md:text-left">
                <p className="text-sm font-medium text-gray-900">Certified by Rwanda Development Board</p>
                <p className="text-xs text-gray-600">Licensed Healthcare Technology Provider</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
              <Shield className="h-3 w-3 mr-1" />
              Trusted & Verified
            </Badge>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Journey Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Fertility Journey, Supported Every Step</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're planning for the future, trying to conceive, or facing challenges, we're here to guide you
              with personalized care and expert support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/couple-fertility-journey-1.png"
                  alt="Couple planning their fertility journey"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Planning Your Future</h3>
                  <p className="text-sm opacity-90">
                    Understanding your fertility health before you're ready to conceive
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Hormone & fertility testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Personalized insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Future planning guidance</span>
                  </div>
                </div>
                <Link href="/learn/planning-future-children">
                  <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/couple-fertility-journey-2.png"
                  alt="Couple actively trying to conceive"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Trying to Conceive</h3>
                  <p className="text-sm opacity-90">
                    Optimizing your chances with data-driven insights and expert guidance
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Ovulation tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Lifestyle optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Nutritional guidance</span>
                  </div>
                </div>
                <Link href="/learn/trying-to-conceive">
                  <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/couple-fertility-journey-3.png"
                  alt="Couple receiving fertility support and care"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Need Extra Support</h3>
                  <p className="text-sm opacity-90">Comprehensive care when you need specialized fertility treatment</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Specialist consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Advanced diagnostics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Treatment coordination</span>
                  </div>
                </div>
                <Link href="/learn/struggling-to-conceive">
                  <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700">
                    Find Support
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <Image
                src="/images/supportive-hands.png"
                alt="Supportive hands representing care and compassion"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-rose-100 rounded-full p-4">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">You're Not Alone in This Journey</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fertility challenges affect 1 in 6 couples worldwide, yet many face this journey in isolation. At
                FertiTerra, we believe that with the right support, information, and care, every family can navigate
                their path to parenthood with confidence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-rose-100 rounded-full p-2 mt-1">
                    <Users className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Support</h3>
                    <p className="text-gray-600 text-sm">Connect with others who understand your journey</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Guidance</h3>
                    <p className="text-gray-600 text-sm">Access to fertility specialists and counselors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Heart className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Care</h3>
                    <p className="text-gray-600 text-sm">Tailored treatment plans based on your unique needs</p>
                  </div>
                </div>
              </div>
              <Link href="/community">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                  Join Our Community
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Provider Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900">World-Class Care, Accessible to All</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our network of certified fertility specialists, reproductive endocrinologists, and healthcare providers
                ensures you receive the highest standard of care, regardless of your location across Africa.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-rose-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Certified Specialists</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
              <Link href="/appointments">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Book Consultation
                  <Calendar className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/images/healthcare-provider-hands.png"
                alt="Healthcare provider hands showing care and professionalism"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -left-4 bg-green-100 rounded-full p-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Checkup Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <Image
                src="/images/woman-health-checkup.png"
                alt="Woman receiving comprehensive health checkup"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-100 rounded-full p-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Comprehensive Fertility Health Assessment</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Basic Fertility Checkup provides a complete picture of your reproductive health through advanced
                hormone testing, personalized analysis, and expert consultation—all from the comfort of your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Comprehensive hormone panel (AMH, FSH, LH, Estradiol, and more)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Personalized fertility insights and recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">30-minute consultation with fertility specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">At-home sample collection kit</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/plans/basic-fertility-checkup">
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                    Book Your Checkup - ₦45,000
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/test-kits">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-rose-600 text-rose-600 hover:bg-rose-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Empowering Fertility Health Across Africa</h2>
              <p className="text-lg text-gray-600">
                Discover how we're making fertility care accessible, educational, and supportive for every family.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="awareness" className="text-sm">
                  Awareness & Education
                </TabsTrigger>
                <TabsTrigger value="testing" className="text-sm">
                  At-Home Testing
                </TabsTrigger>
                <TabsTrigger value="support" className="text-sm">
                  Expert Support
                </TabsTrigger>
              </TabsList>

              <TabsContent value="awareness" className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Fertility Awareness and Education"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Breaking the Silence: Fertility Awareness in Africa
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Join us in our mission to educate and empower families across Africa with comprehensive fertility
                      health information. This video explores the importance of fertility awareness and how knowledge
                      can transform lives.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>12 min watch</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>10K+ views</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="testing" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          Revolutionary At-Home Fertility Testing
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Our comprehensive hormone and fertility test kit brings laboratory-grade testing to your home.
                          Get insights into your reproductive health with our easy-to-use collection kit and detailed
                          analysis.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">Tests 12+ key fertility hormones</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">Results in 3-5 business days</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">Personalized recommendations</span>
                          </div>
                        </div>
                        <Link href="/test-kits/hormone-fertility">
                          <Button className="bg-rose-600 hover:bg-rose-700">
                            Order Your Test Kit
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                      <div className="relative">
                        <Image
                          src="/images/woman-with-test-kit.png"
                          alt="Woman using at-home fertility test kit"
                          width={400}
                          height={300}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="support" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support When You Need It Most</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-rose-100 rounded-full p-2 mt-1">
                            <Users className="h-4 w-4 text-rose-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Fertility Specialists</h4>
                            <p className="text-gray-600 text-sm">
                              Board-certified reproductive endocrinologists available for consultation
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 rounded-full p-2 mt-1">
                            <Heart className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Fertility Counselors</h4>
                            <p className="text-gray-600 text-sm">
                              Emotional support and guidance throughout your journey
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 rounded-full p-2 mt-1">
                            <Shield className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Care Coordinators</h4>
                            <p className="text-gray-600 text-sm">
                              Dedicated support to navigate your treatment options
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Available Consultations</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Hormone & Fertility Advisor Call</li>
                            <li>• Private Gynaecologist Consultation</li>
                            <li>• Fertility Nutrition Consultation</li>
                            <li>• Fertility Counselling Sessions</li>
                            <li>• Egg Freezing Consultation</li>
                          </ul>
                        </div>
                        <Link href="/appointments">
                          <Button className="w-full bg-green-600 hover:bg-green-700">
                            Book a Consultation
                            <Calendar className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <PlanCards />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      <Footer />
    </div>
  )
}
