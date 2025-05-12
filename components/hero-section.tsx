import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-rose-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Fertility Journey Starts Here
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                FertiTerra provides personalized fertility care, expert consultations, and a supportive community—all
                from the comfort of your home.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/questionnaire">
                <Button size="lg" className="gap-1">
                  Take Free Assessment <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/plans">
                <Button size="lg" variant="outline">
                  Explore Plans
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-rose-500" />
                <span>Expert Doctors</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-rose-500" />
                <span>Personalized Care</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-rose-500" />
                <span>Private & Secure</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full">
              <Image
                src="/images/woman-with-test-kit.png"
                alt="Woman holding FertiTerra test kit with a yellow flower"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
