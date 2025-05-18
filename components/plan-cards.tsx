import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PlanCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Flexible Options</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Fertility Plan</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Select the plan that best fits your fertility journey and goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12">
          <div className="flex flex-col rounded-xl border bg-white shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-bold">Basic</h3>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Hormone testing kit</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Monthly cycle tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Basic fertility report</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-6 mt-auto">
              <Link href="/plans/basic">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-xl border-2 border-rose-500 bg-white shadow-md relative">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-rose-500 text-white text-sm font-medium rounded-full">
              Most Popular
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">Premium</h3>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-rose-500 mr-2" />
                  <span>Advanced hormone panel</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-rose-500 mr-2" />
                  <span>Monthly doctor consultation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-rose-500 mr-2" />
                  <span>Personalized treatment plan</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-rose-500 mr-2" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-rose-500 mr-2" />
                  <span>Community access</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-6 mt-auto">
              <Link href="/plans/premium">
                <Button className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-xl border bg-white shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-bold">Complete</h3>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold">$499</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-500 mr-2" />
                  <span>Comprehensive testing panel</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-500 mr-2" />
                  <span>Weekly doctor consultations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-500 mr-2" />
                  <span>Advanced treatment options</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-500 mr-2" />
                  <span>Medication management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-500 mr-2" />
                  <span>24/7 concierge support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-500 mr-2" />
                  <span>Partner testing included</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-6 mt-auto">
              <Link href="/plans/complete">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
