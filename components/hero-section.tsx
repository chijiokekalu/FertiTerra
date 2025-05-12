import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-rose-50 via-purple-50 to-teal-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-rose-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/4 -right-24 w-72 h-72 rounded-full bg-teal-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-60 h-60 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-gradient-to-r from-rose-100 to-purple-100 px-3 py-1 text-sm text-rose-700 mb-4">
              Personalized Fertility Care
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-rose-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Your Fertility Journey Starts Here
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                FertiTerra provides personalized fertility care, expert consultations, and a supportive community—all
                from the comfort of your home.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/questionnaire">
                <Button
                  size="lg"
                  className="gap-1 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
                >
                  Take Free Assessment <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/plans">
                <Button size="lg" variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                  Explore Plans
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm mt-4">
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <CheckCircle className="h-4 w-4 text-rose-500" />
                <span>Expert Doctors</span>
              </div>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <CheckCircle className="h-4 w-4 text-purple-500" />
                <span>Personalized Care</span>
              </div>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <CheckCircle className="h-4 w-4 text-teal-500" />
                <span>Private & Secure</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-200 via-purple-100 to-teal-100 transform rotate-3 scale-105"></div>
              <Image
                src="/images/woman-with-test-kit.png"
                alt="Woman holding FertiTerra test kit with a yellow flower"
                fill
                className="object-cover rounded-xl shadow-lg transform -rotate-2"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
