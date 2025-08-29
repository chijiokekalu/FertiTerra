import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Shield, Target, ArrowRight, Quote, Linkedin, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FoundersStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-rose-100 text-rose-800 hover:bg-rose-200">Our Story</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Putting fertility back into the hands of <span className="text-rose-500">families</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Born from personal experience and driven by a mission to make fertility care accessible, compassionate,
              and effective for every family across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
                <Link href="/plans/basic-fertility-checkup">Start Your Journey</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-rose-600 text-rose-600 hover:bg-rose-50 bg-transparent"
              >
                <Link href="/consultation">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f9a8d4_1px,transparent_1px)] opacity-20 [background-size:24px_24px]"></div>
      </section>

      {/* Why We Started Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Started FertiTerra</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    My story begins with two remarkable women who shaped my understanding of motherhood and fertility.
                    My foster mother, who raised me with unconditional love, struggled for years to conceive. I watched
                    her navigate a healthcare system that often left her feeling dismissed, frustrated, and alone.
                  </p>
                  <p>
                    My biological mother, a dedicated midwife, spent her career helping other women bring life into the
                    world. Through her, I learned that fertility challenges affect families from all walks of life, yet
                    access to quality care remains limited, especially across Africa.
                  </p>
                  <p>
                    These experiences taught me that fertility isn't just a medical issue—it's deeply personal,
                    emotional, and deserves care that honors the whole person, not just the condition.
                  </p>
                </div>
              </div>
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                <Quote className="h-8 w-8 text-rose-500 mb-4" />
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "Every family deserves access to compassionate, expert fertility care. No one should have to choose
                  between quality healthcare and financial stability."
                </blockquote>
                <cite className="text-sm font-medium text-gray-900">— Chijioke Ugorji Kalu, Founder & CEO</cite>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/founder-story.png"
                alt="Chijioke Ugorji Kalu, Founder of FertiTerra Technologies"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-6 w-6 text-rose-500" />
                  <span className="font-semibold text-gray-900">Our Mission</span>
                </div>
                <p className="text-sm text-gray-600">
                  Making fertility care accessible, affordable, and compassionate for every family across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse team of healthcare professionals, technologists, and advocates united by our shared mission to
              transform fertility care across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Founder & CEO */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/5] relative">
                <Image src="/images/founder-story.png" alt="Chijioke Ugorji Kalu" fill className="object-cover" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Chijioke Ugorji Kalu</CardTitle>
                <CardDescription className="text-rose-600 font-medium">Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Healthcare entrepreneur with 8+ years in digital health innovation. Previously led health tech
                  initiatives across West Africa, focusing on maternal and reproductive health accessibility.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Healthcare Innovation
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Digital Health
                  </Badge>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-rose-600 transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Chief Medical Officer */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/5] relative bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-6xl font-bold text-green-600 opacity-20">SO</div>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Dr. Sarah Okafor</CardTitle>
                <CardDescription className="text-green-600 font-medium">Chief Medical Officer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Board-certified reproductive endocrinologist with 12+ years of experience. Former fertility specialist
                  at Lagos University Teaching Hospital, passionate about evidence-based care.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Reproductive Medicine
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Research
                  </Badge>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Chief Technology Officer */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/5] relative bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-6xl font-bold text-blue-600 opacity-20">MA</div>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Michael Adebayo</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Software architect with 10+ years building scalable healthcare platforms. Former lead engineer at
                  Flutterwave, specializing in secure, HIPAA-compliant health technology solutions.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Health Tech
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Security
                  </Badge>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our approach combines cutting-edge technology with compassionate care to deliver personalized fertility
              solutions that fit your life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-rose-100 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-rose-600" />
                </div>
                <CardTitle className="text-xl">Science-Backed Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Every recommendation is based on the latest fertility research and clinical guidelines. Our medical
                  team stays current with global best practices to ensure you receive evidence-based care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Accessible Care Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We've designed our services to be affordable and accessible, with at-home testing, telemedicine
                  consultations, and flexible payment options that work for families across Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Holistic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Beyond medical care, we provide emotional support, educational resources, and community connections to
                  address every aspect of your fertility journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-rose-600" />
                </div>
                <CardTitle className="text-lg">Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  We understand that fertility challenges are deeply personal. Every interaction is guided by empathy,
                  respect, and genuine care for your wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  We maintain the highest standards in medical care, technology, and service delivery. Your health and
                  trust deserve nothing less than our best.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Quality fertility care shouldn't be a privilege. We're committed to making our services accessible to
                  families regardless of location or economic status.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  We continuously seek new ways to improve fertility care through technology, research, and creative
                  solutions that address real patient needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact So Far</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Since launching FertiTerra, we've been privileged to support thousands of families across Africa on
                  their fertility journeys. Here's what we've accomplished together:
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-rose-50 rounded-2xl">
                  <div className="text-3xl font-bold text-rose-600 mb-2">5,000+</div>
                  <div className="text-sm text-gray-600">Families Supported</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <Quote className="h-8 w-8 text-gray-400 mb-4" />
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "Our success isn't measured just in numbers, but in the joy of families who've found hope, answers,
                  and support when they needed it most. Every positive pregnancy test, every successful treatment, every
                  moment of relief—that's why we do this work."
                </blockquote>
                <cite className="text-sm font-medium text-gray-900">— Chijioke Ugorji Kalu, Founder & CEO</cite>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/woman-with-test-kit.png"
                alt="Happy family celebrating successful fertility journey"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-6 w-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Growing Community</span>
                </div>
                <p className="text-sm text-gray-600">
                  Join thousands of families who've found support, answers, and hope through FertiTerra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the thousands of families who've trusted FertiTerra with their fertility care. Let us help you take
              the next step toward building your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                <Link href="/plans/basic-fertility-checkup">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
              >
                <Link href="/consultation">Speak with Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
