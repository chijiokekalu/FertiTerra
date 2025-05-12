import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PlanCards() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">Our Plans</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Choose Your Fertility Journey
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Select the plan that best fits your current needs and goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Basic Fertility Checkup</CardTitle>
              <CardDescription>For those curious about their fertility health</CardDescription>
              <div className="mt-4 text-4xl font-bold">$5</div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Personalized fertility report</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>15-minute doctor consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Basic fertility insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Future planning guidance</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/plans/basic" className="w-full">
                <Button className="w-full gap-1">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-rose-200 bg-rose-50/50">
            <CardHeader>
              <div className="rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700 w-fit">Most Popular</div>
              <CardTitle className="mt-2">TTC Plan</CardTitle>
              <CardDescription>For couples trying to conceive</CardDescription>
              <div className="mt-4 text-4xl font-bold">$200</div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>At-home fertility test kits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>AMH & sperm quality analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Personalized TTC action plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>30-minute expert consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Fertility maximizing strategies</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/plans/ttc" className="w-full">
                <Button className="w-full gap-1 bg-rose-500 hover:bg-rose-600">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Perimenopause Plan</CardTitle>
              <CardDescription>For managing hormonal transitions</CardDescription>
              <div className="mt-4 text-4xl font-bold">$170</div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>At-home hormone test kit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Detailed hormone analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Menopause management plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>30-minute doctor consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Symptom management strategies</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/plans/perimenopause" className="w-full">
                <Button className="w-full gap-1">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>General Wellness</CardTitle>
              <CardDescription>For improving reproductive health</CardDescription>
              <div className="mt-4 text-4xl font-bold">$60</div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Reproductive health insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Lifestyle & nutrition plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>30-minute doctor consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Future pregnancy preparation</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/plans/wellness" className="w-full">
                <Button className="w-full gap-1">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
