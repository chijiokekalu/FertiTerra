"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Calendar, Users, Star } from "lucide-react"

export default function TryingToConcievePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Trying to Conceive Journey</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Path to Parenthood Starts Here</h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              Comprehensive support, expert guidance, and personalized care for your fertility journey
            </p>

            {/* Stripe Payment Button */}
            <div className="mb-8">
              <a
                href="https://buy.stripe.com/test_9B628rfL1aHwb9W8qqaR200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-[#635bff] hover:bg-[#5a52e8] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
                >
                  Start Your TTC Journey - $200
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>3-Month Comprehensive Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Expert Fertility Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Included in Your TTC Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a successful conception journey, backed by science and delivered with care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-pink-100 hover:border-pink-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Fertility Assessment</CardTitle>
                <CardDescription>Comprehensive evaluation of your reproductive health</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Hormone level testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Ovulation tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Reproductive health screening
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Personalized Plan</CardTitle>
                <CardDescription>Tailored approach based on your unique needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Custom fertility timeline
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Lifestyle recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Nutrition guidance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Expert Support</CardTitle>
                <CardDescription>Access to fertility specialists and counselors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Monthly consultations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    24/7 chat support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Emotional counseling
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your 3-Month Journey</h2>
            <p className="text-xl text-gray-600">A structured approach to maximize your chances of conception</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Month 1: Assessment & Planning</h3>
                  <p className="text-gray-600 mb-4">
                    Complete fertility assessment, establish baseline health metrics, and create your personalized
                    conception plan.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Health Assessment</Badge>
                    <Badge variant="secondary">Hormone Testing</Badge>
                    <Badge variant="secondary">Plan Creation</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Month 2: Optimization & Tracking</h3>
                  <p className="text-gray-600 mb-4">
                    Implement lifestyle changes, track ovulation cycles, and optimize your fertility window timing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Cycle Tracking</Badge>
                    <Badge variant="secondary">Lifestyle Changes</Badge>
                    <Badge variant="secondary">Timing Optimization</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Month 3: Results & Next Steps</h3>
                  <p className="text-gray-600 mb-4">
                    Evaluate progress, celebrate successes, and plan for continued support or next-level interventions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Progress Review</Badge>
                    <Badge variant="secondary">Results Analysis</Badge>
                    <Badge variant="secondary">Future Planning</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real families who achieved their dreams with our TTC program</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "After 8 months of trying, the TTC program helped us understand our cycle better. We conceived in
                  month 2 of the program!"
                </p>
                <div className="font-semibold text-gray-900">Sarah & Michael</div>
                <div className="text-sm text-gray-500">Lagos, Nigeria</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The personalized approach and expert guidance made all the difference. Our baby is now 6 months old!"
                </p>
                <div className="font-semibold text-gray-900">Adaora & Chidi</div>
                <div className="text-sm text-gray-500">Abuja, Nigeria</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The emotional support was just as important as the medical guidance. Highly recommend this program!"
                </p>
                <div className="font-semibold text-gray-900">Kemi & Tunde</div>
                <div className="text-sm text-gray-500">Port Harcourt, Nigeria</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Journey Today</h2>
            <p className="text-xl text-gray-600 mb-8">Comprehensive 3-month program with everything you need</p>

            <Card className="max-w-md mx-auto border-2 border-pink-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl">TTC Complete Program</CardTitle>
                <CardDescription className="text-pink-100">3-Month Comprehensive Support</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">$200</div>
                <div className="text-gray-500 mb-6">One-time payment</div>

                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Complete fertility assessment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Personalized conception plan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Monthly expert consultations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>24/7 support access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Cycle tracking tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Emotional counseling</span>
                  </li>
                </ul>

                <a
                  href="https://buy.stripe.com/test_9B628rfL1aHwb9W8qqaR200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    className="w-full bg-[#635bff] hover:bg-[#5a52e8] text-white py-3 text-lg font-semibold"
                  >
                    Start Your TTC Journey
                  </Button>
                </a>

                <p className="text-sm text-gray-500 mt-4">Secure payment powered by Stripe</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">How long does the program take?</h3>
                <p className="text-gray-600">
                  The TTC program is designed as a comprehensive 3-month journey, with ongoing support available as
                  needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">What if I don't conceive during the 3 months?</h3>
                <p className="text-gray-600">
                  We provide continued support and can help you transition to more advanced fertility treatments if
                  needed. Your health data and progress are valuable for next steps.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Is this program suitable for all ages?</h3>
                <p className="text-gray-600">
                  Our program is designed for women aged 18-45 who are actively trying to conceive. We customize the
                  approach based on your age and health profile.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Do you accept insurance?</h3>
                <p className="text-gray-600">
                  Currently, we operate on a direct-pay model. However, we can provide documentation that may be
                  reimbursable by your insurance provider.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-pink-100">Have questions? Our fertility experts are here to help.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-pink-600 hover:bg-pink-50 border-white">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
