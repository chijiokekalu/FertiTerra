import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Video, Package, Calendar, ArrowRight, CheckCircle, Heart, Users, Shield } from "lucide-react"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with New Message */}
        <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
              <div className="flex flex-col space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-tight">
                    You deserve better fertility care. <span className="text-rose-500 block">Full stop.</span>
                  </h1>
                  <p className="text-xl text-gray-600 md:text-2xl leading-relaxed">
                    Comprehensive hormone testing, personalized care plans, and direct access to fertility
                    specialists—all designed around you, not outdated systems.
                  </p>
                </div>

                {/* Care Promise */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Heart className="h-8 w-8 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Our Promise to You</h3>
                      <p className="text-gray-600">
                        No more waiting months for appointments. No more feeling dismissed. Get the answers and care you
                        deserve, when you need them.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-lg px-8 py-4"
                  >
                    <Link href="/signup">Start Your Journey</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4">
                    <Link href="/consultation">Speak to a Doctor</Link>
                  </Button>
                </div>
              </div>

              {/* Care & Community Image */}
              <div className="relative mx-auto max-w-lg md:max-w-none">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Doctor+Patient+Care"
                    alt="Compassionate healthcare - doctor consulting with patient in a warm, supportive environment"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />

                  {/* Floating care elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                    <Users className="h-8 w-8 text-purple-500" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                    <Shield className="h-8 w-8 text-green-500" />
                  </div>
                </div>

                {/* Community testimonial overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-rose-200 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Join 10,000+ women</p>
                      <p className="text-xs text-gray-600">taking control of their fertility</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f9a8d4_1px,transparent_1px)] opacity-20 [background-size:24px_24px]"></div>
        </section>

        {/* Why You Deserve Better Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why You Deserve Better</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Traditional fertility care is broken. We're here to fix it with personalized, accessible, and
                compassionate care that puts you first.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Clock,
                  title: "No More Waiting",
                  description:
                    "Get answers in days, not months. Our at-home tests and telemedicine consultations mean faster results and quicker action.",
                  color: "text-rose-500",
                },
                {
                  icon: Heart,
                  title: "Personalized Care",
                  description:
                    "Your fertility journey is unique. Get personalized insights, treatment plans, and support tailored specifically to your needs.",
                  color: "text-purple-500",
                },
                {
                  icon: Users,
                  title: "Expert Community",
                  description:
                    "Connect with fertility specialists, nutritionists, and a supportive community of women on similar journeys.",
                  color: "text-pink-500",
                },
              ].map((feature, i) => (
                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gray-50 mb-4`}>
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Options Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Start Getting Better Care Today</h2>
              <p className="text-lg text-gray-600">Choose how you want to begin your fertility journey</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Test Kit Card */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="bg-rose-50 p-2">
                  <Badge className="bg-rose-500 hover:bg-rose-600">Most Popular</Badge>
                </div>
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-rose-500" />
                    <CardTitle>Advanced Hormone and Fertility Test</CardTitle>
                  </div>
                  <CardDescription>Comprehensive insights into your reproductive health</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-rose-500" />
                    <span>Results in 10 days</span>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Tests 10 key reproductive hormones",
                      "Personalized report with actionable insights",
                      "Includes AMH, FSH, LH, Estradiol, and more",
                      "Free doctor consultation to discuss results",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
                  >
                    <Link href="/test-kits/hormone-fertility">
                      Get Your Test <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Telemedicine Card */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-rose-500" />
                    <CardTitle>Expert Fertility Consultation</CardTitle>
                  </div>
                  <CardDescription>Connect directly with fertility specialists who listen</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-48 w-full overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=192&width=384&text=Video+Consultation"
                      alt="Video consultation with fertility specialist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <ul className="space-y-2">
                    {[
                      "30-minute personalized consultations",
                      "Board-certified fertility specialists",
                      "Same-day or next-day appointments",
                      "Comprehensive treatment planning",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/consultation">
                      Book Consultation <Calendar className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How FertiTerra Works</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Your journey to better reproductive health in four simple steps
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  title: "Choose Your Path",
                  description: "Start with testing, consultation, or both—whatever feels right for you.",
                  icon: Package,
                },
                {
                  title: "Get Personalized Care",
                  description: "Receive detailed insights and recommendations tailored to your unique situation.",
                  icon: Heart,
                },
                {
                  title: "Connect with Experts",
                  description: "Speak with fertility specialists who understand and validate your concerns.",
                  icon: Video,
                },
                {
                  title: "Take Action",
                  description: "Move forward with confidence using your personalized care plan.",
                  icon: CheckCircle,
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-lg">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 text-rose-600 mb-6">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Certification Section */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-gray-500 mb-4">Trusted and certified by</p>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "CQC", image: "/placeholder.svg?height=48&width=80&text=CQC" },
                  { name: "ISO", image: "/placeholder.svg?height=48&width=80&text=ISO" },
                  { name: "CE", image: "/placeholder.svg?height=48&width=80&text=CE" },
                ].map((cert) => (
                  <div key={cert.name} className="h-12 w-auto">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.name}
                      width={80}
                      height={48}
                      className="h-full w-auto opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-purple-600">
          <div className="container">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto text-white">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Ready to get the care you deserve?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of women who've taken control of their fertility journey with FertiTerra's personalized
                testing, expert consultations, and supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-4">
                  <Link href="/signup">Start Your Journey</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600 text-lg px-8 py-4"
                >
                  <Link href="/consultation">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=140&text=FertiTerra"
                  alt="FertiTerra Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-sm text-gray-500">
                Empowering women with the fertility care they deserve—personalized, accessible, and compassionate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/test-kits/hormone-fertility" className="text-sm text-gray-500 hover:text-rose-500">
                    Hormone & Fertility Test
                  </Link>
                </li>
                <li>
                  <Link href="/test-kits/ovulation" className="text-sm text-gray-500 hover:text-rose-500">
                    Ovulation Test
                  </Link>
                </li>
                <li>
                  <Link href="/test-kits/pregnancy" className="text-sm text-gray-500 hover:text-rose-500">
                    Pregnancy Test
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/consultation" className="text-sm text-gray-500 hover:text-rose-500">
                    Doctor Consultations
                  </Link>
                </li>
                <li>
                  <Link href="/treatments" className="text-sm text-gray-500 hover:text-rose-500">
                    Treatment Plans
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm text-gray-500 hover:text-rose-500">
                    Support Groups
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-500 hover:text-rose-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-500 hover:text-rose-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-500 hover:text-rose-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} FertiTerra. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-rose-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-rose-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
