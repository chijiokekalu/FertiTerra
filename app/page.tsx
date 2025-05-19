import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import HeroSection from "@/components/hero-section"
import TestimonialSection from "@/components/testimonial-section"
import PlanCards from "@/components/plan-cards"
import HowItWorks from "@/components/how-it-works"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <PlanCards />
        <TestimonialSection />

        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-purple-50 to-rose-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 -left-24 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-1/3 -right-24 w-64 h-64 rounded-full bg-rose-200 opacity-20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                  Ready to Start Your Journey?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Take the first step towards understanding and improving your fertility health.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/plans">
                  <Button
                    size="lg"
                    className="gap-1 bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600"
                  >
                    Explore Plans <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/questionnaire">
                  <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                    Take Free Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} FertiTerra. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
