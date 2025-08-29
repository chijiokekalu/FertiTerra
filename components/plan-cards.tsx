import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Video, TestTube, Package, Heart } from "lucide-react"

export default function PlanCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">FertiTerra Plans</h2>
          <p className="text-lg text-gray-600">Choose the plan that best fits your fertility journey</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Basic Fertility Checkup Plan */}
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
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
                <Link href="/plans/basic-fertility-checkup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* TTC Plan */}
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
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
      </div>
    </section>
  )
}
