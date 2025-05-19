import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Video, Package, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#f8f5f2] py-16 md:py-24">
          <div className="container relative z-10">
            <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
              <div className="flex flex-col space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Your fertility journey <span className="text-rose-500">starts with knowledge</span>
                </h1>
                <p className="text-lg text-gray-600 md:text-xl">
                  Comprehensive hormone testing, personalized care plans, and direct access to fertility specialists—all
                  from the comfort of your home.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
                  >
                    <Link href="/test-kits">Take the Test</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/consultation">Speak to a Doctor</Link>
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto max-w-sm md:max-w-none">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Female reproductive system illustration"
                  width={600}
                  height={600}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f9a8d4_1px,transparent_1px)] opacity-25 [background-size:16px_16px]"></div>
        </section>

        {/* Main Options Section */}
        <section className="py-16 bg-white">
          <div className="container">
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
                      Personalise My Test <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Telemedicine Card */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-rose-500" />
                    <CardTitle>Need expert advice?</CardTitle>
                  </div>
                  <CardDescription>Connect directly with fertility specialists</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-48 w-full overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=192&width=384"
                      alt="Doctor consultation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <ul className="space-y-2">
                    {[
                      "30-minute video consultations",
                      "Secure, HIPAA-compliant platform",
                      "Personalized treatment plans",
                      "Flexible scheduling, including evenings",
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
                      Book a Consultation <Calendar className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-[#f8f5f2]">
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
                  title: "Order Your Kit",
                  description: "Choose the test that's right for you and have it delivered to your door.",
                  icon: Package,
                },
                {
                  title: "Complete Your Test",
                  description: "Follow the simple instructions to collect your sample and send it back to our lab.",
                  icon: CheckCircle,
                },
                {
                  title: "Get Your Results",
                  description: "Receive comprehensive results and insights about your fertility health.",
                  icon: Clock,
                },
                {
                  title: "Speak with a Doctor",
                  description: "Connect with our fertility specialists to discuss your results and next steps.",
                  icon: Video,
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-gray-500 mb-4">Regulated and certified by</p>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "CQC", image: "/placeholder.svg?height=48&width=80" },
                  { name: "ISO", image: "/placeholder.svg?height=48&width=80" },
                  { name: "CE", image: "/placeholder.svg?height=48&width=80" },
                ].map((cert) => (
                  <div key={cert.name} className="h-12 w-auto">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.name}
                      width={80}
                      height={48}
                      className="h-full w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <p className="text-center text-sm text-gray-500 mb-8">Partnered with</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src={`/placeholder.svg?height=32&width=120&text=Partner${i}`}
                    alt={`Partner ${i}`}
                    width={120}
                    height={32}
                    className="h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-rose-50 to-purple-50">
          <div className="container">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to take control of your fertility health?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of women who have gained clarity and confidence through FertiTerra's comprehensive
                testing and expert care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
                >
                  <Link href="/test-kits">Take the Test</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/consultation">Speak to a Doctor</Link>
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
                Empowering women with knowledge and support for their reproductive health journey.
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
