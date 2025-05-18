import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50 py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full bg-rose-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-64 h-64 rounded-full bg-teal-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-4">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700 w-fit">
              Personalized Fertility Care
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-rose-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Your Path to Parenthood Starts Here
            </h1>
            <p className="text-xl text-gray-600 max-w-[600px]">
              Comprehensive fertility testing, personalized treatment plans, and expert care—all from the comfort of
              your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/plans">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
                >
                  Explore Plans
                </Button>
              </Link>
              <Link href="/test-kits">
                <Button variant="outline" size="lg" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                  View Test Kits
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <Image
              src="/images/woman-with-test-kit.png"
              alt="Woman with FertiTerra test kit"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
