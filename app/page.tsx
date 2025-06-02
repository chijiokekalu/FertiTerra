import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Video,
  Package,
  ArrowRight,
  CheckCircle,
  Heart,
  Users,
  Shield,
  MessageSquare,
  TestTube,
} from "lucide-react"
import { Header } from "@/components/header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
                    src="/images/woman-with-test-kit.png"
                    alt="Happy woman holding FertiTerra test kit at home - comfortable and easy fertility testing"
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

        {/* FertiTerra Plans Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">FertiTerra Plans</h2>
              <p className="text-lg text-gray-600">Choose the plan that best fits your fertility journey</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Basic Fertility Checkup Plan */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-teal-500" />
                    <CardTitle className="text-lg">Basic Fertility Checkup</CardTitle>
                  </div>
                  <CardDescription>For those curious about their fertility health</CardDescription>
                  <div className="text-3xl font-bold text-teal-600 mt-2">$5</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {[
                      "Free 15-minute consultation",
                      "Personalized fertility report",
                      "Medical professional guidance",
                      "Future family planning insights",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
                  >
                    <Link href="/plans/basic">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* TTC Plan */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="bg-rose-50 p-2">
                  <Badge className="bg-rose-500 hover:bg-rose-600">Most Popular</Badge>
                </div>
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <TestTube className="h-5 w-5 text-rose-500" />
                    <CardTitle className="text-lg">Trying to Conceive (TTC)</CardTitle>
                  </div>
                  <CardDescription>For couples actively trying to conceive</CardDescription>
                  <div className="text-3xl font-bold text-rose-600 mt-2">$200</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {[
                      "At-home fertility test kit (70 test strips)",
                      "AMH test & sperm quality analysis",
                      "30-minute expert consultation",
                      "Personalized TTC action plan",
                      "Customer support check",
                      "Monthly subscription options",
                      "Optional community support",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
                  >
                    <Link href="/plans/ttc">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Perimenopausal/Menopausal Health Plan */}
              <Card className="overflow-hidden border-0 shadow-lg opacity-75">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-purple-500" />
                    <CardTitle className="text-lg">Perimenopausal/Menopausal</CardTitle>
                  </div>
                  <CardDescription>For managing hormonal transitions</CardDescription>
                  <div className="text-3xl font-bold text-purple-600 mt-2">$170</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-8">
                    <div className="text-lg font-semibold text-purple-600 mb-2">Coming Soon</div>
                    <p className="text-sm text-gray-600">
                      At-home hormone test kit, personalized menopause management plan, and expert consultation
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled className="w-full opacity-50 cursor-not-allowed">
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>

              {/* General Wellness Plan */}
              <Card className="overflow-hidden border-0 shadow-lg opacity-75">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-500" />
                    <CardTitle className="text-lg">General Wellness & Fertility</CardTitle>
                  </div>
                  <CardDescription>For improving reproductive health</CardDescription>
                  <div className="text-3xl font-bold text-green-600 mt-2">$60</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-8">
                    <div className="text-lg font-semibold text-green-600 mb-2">Coming Soon</div>
                    <p className="text-sm text-gray-600">
                      Lifestyle & nutrition plan, reproductive health insights, and expert consultation
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled className="w-full opacity-50 cursor-not-allowed">
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Additional Features for Available Plans */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card className="border-rose-100 bg-rose-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-rose-500" />
                    TTC Plan Extras
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Optional private messaging with fertility specialist</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Monthly Q&A webinars</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Additional doctor consultations available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Extra test strips can be ordered</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-teal-100 bg-teal-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-500" />
                    Community Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Both available plans include access to our supportive community features:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">WhatsApp/Telegram support groups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Peer support network</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Expert Q&A sessions</span>
                    </li>
                  </ul>
                </CardContent>
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
                  title: "Choose Your Plan",
                  description: "Start with our Basic Checkup or comprehensive TTC plan—whatever feels right for you.",
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

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our fertility plans and services
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-rose-600">About Our Plans</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        How do I know which plan is right for me?
                      </AccordionTrigger>
                      <AccordionContent>
                        The Basic Fertility Checkup is ideal if you're just starting to explore your fertility health or
                        planning for the future. The TTC Plan is best if you're actively trying to conceive and want
                        comprehensive support. Still unsure? Start with our free 15-minute consultation to get
                        personalized guidance.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        What's included in the at-home fertility test kit?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our TTC Plan includes a comprehensive test kit with 70 test strips for tracking ovulation and
                        fertility hormones. For female partners, it includes an AMH test to assess ovarian reserve. For
                        male partners, it includes a sperm quality analysis kit. All tests can be completed at home and
                        include clear instructions.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        Can I upgrade from the Basic Plan to the TTC Plan?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes! You can easily upgrade from the Basic Fertility Checkup to the TTC Plan at any time. We'll
                        apply the $5 you paid for the Basic Plan as a credit toward your TTC Plan purchase.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">When will the other plans be available?</AccordionTrigger>
                      <AccordionContent>
                        We're working hard to launch our Perimenopausal/Menopausal Health Plan and General Wellness &
                        Fertility Support Plan in the coming months. Join our waitlist to be notified as soon as they're
                        available and receive special early access pricing.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-rose-600">Testing & Results</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">How accurate are the at-home tests?</AccordionTrigger>
                      <AccordionContent>
                        Our at-home fertility tests are over 99% accurate when used correctly. They're the same
                        laboratory-grade tests used by fertility clinics, but designed for convenient home use. Each kit
                        includes detailed instructions to ensure accurate results.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-left">How long does it take to get results?</AccordionTrigger>
                      <AccordionContent>
                        For the TTC Plan, ovulation test results are immediate. For hormone tests that require lab
                        analysis (like AMH testing), you'll receive results within 7-10 days after your sample arrives
                        at our lab. Your consultation will be scheduled after all results are available.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                      <AccordionTrigger className="text-left">
                        What happens after I receive my results?
                      </AccordionTrigger>
                      <AccordionContent>
                        After receiving your results, you'll have a consultation with one of our fertility specialists
                        who will explain your results in detail and provide personalized recommendations. For TTC Plan
                        members, you'll also receive a customized action plan with specific steps to optimize your
                        fertility.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                      <AccordionTrigger className="text-left">Can I order additional test strips?</AccordionTrigger>
                      <AccordionContent>
                        Yes! TTC Plan members can order additional test strips at a discounted rate. Simply log into
                        your account and visit the "Order Supplies" section, or contact our customer support team for
                        assistance.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-rose-600">Consultations & Support</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-9">
                      <AccordionTrigger className="text-left">Who are your fertility specialists?</AccordionTrigger>
                      <AccordionContent>
                        Our fertility specialists are board-certified reproductive endocrinologists, OB/GYNs, and
                        fertility nurses with extensive experience in reproductive health. All specialists undergo
                        rigorous vetting and training to ensure they provide compassionate, evidence-based care.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                      <AccordionTrigger className="text-left">How do the consultations work?</AccordionTrigger>
                      <AccordionContent>
                        Consultations take place via secure video call at a time that's convenient for you. The Basic
                        Plan includes a 15-minute consultation, while the TTC Plan includes a comprehensive 30-minute
                        session. You'll receive a link to join your consultation via email, and you can connect from any
                        device with internet access.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                      <AccordionTrigger className="text-left">
                        What kind of support is available after my consultation?
                      </AccordionTrigger>
                      <AccordionContent>
                        Both plans include access to our community support groups via WhatsApp or Telegram. TTC Plan
                        members also receive ongoing customer support checks and can opt for additional services like
                        private messaging with specialists and follow-up consultations at preferential rates.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                      <AccordionTrigger className="text-left">
                        How do the community support groups work?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our community support groups are moderated spaces where you can connect with others on similar
                        fertility journeys. Groups include monthly expert Q&A sessions where specialists answer
                        questions. All groups follow strict privacy and respect guidelines to ensure a safe, supportive
                        environment.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-rose-600">Billing & Practical Matters</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-13">
                      <AccordionTrigger className="text-left">Do you accept insurance for your plans?</AccordionTrigger>
                      <AccordionContent>
                        While we don't directly bill insurance companies, many of our services may be eligible for
                        reimbursement through your insurance provider or HSA/FSA accounts. We provide detailed receipts
                        that you can submit to your insurance for potential reimbursement.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-14">
                      <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
                      <AccordionContent>
                        We accept all major credit cards, PayPal, and Apple Pay. For the TTC Plan, we also offer
                        installment payment options through Affirm or Klarna to make fertility care more accessible.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-15">
                      <AccordionTrigger className="text-left">What is your refund policy?</AccordionTrigger>
                      <AccordionContent>
                        If you're not satisfied with our services, we offer a 30-day money-back guarantee for unused
                        test kits (unopened and in original packaging). Consultation fees are non-refundable once the
                        consultation has taken place. Please contact our customer support team for assistance with
                        returns or refunds.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-16">
                      <AccordionTrigger className="text-left">How is my privacy protected?</AccordionTrigger>
                      <AccordionContent>
                        We take your privacy seriously. All your health information is protected under HIPAA
                        regulations. Your test results and consultations are confidential and securely stored. We never
                        share or sell your personal information. You can review our complete privacy policy for more
                        details.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">Don't see your question answered here? Our team is ready to help.</p>
                <Button asChild className="bg-rose-600 hover:bg-rose-700">
                  <Link href="/contact">Contact Our Support Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Certification Section */}
        <section className="py-12 bg-white">
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
                  <Link href="/plans/basic">Start with Basic Plan</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600 text-lg px-8 py-4"
                >
                  <Link href="/plans/ttc">Choose TTC Plan</Link>
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
              <h3 className="font-semibold mb-4">Plans</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/plans/basic" className="text-sm text-gray-500 hover:text-rose-500">
                    Basic Fertility Checkup
                  </Link>
                </li>
                <li>
                  <Link href="/plans/ttc" className="text-sm text-gray-500 hover:text-rose-500">
                    TTC Plan
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-gray-400">Perimenopausal Plan (Coming Soon)</span>
                </li>
                <li>
                  <span className="text-sm text-gray-400">General Wellness (Coming Soon)</span>
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
                  <Link href="/test-kits" className="text-sm text-gray-500 hover:text-rose-500">
                    At-Home Test Kits
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
