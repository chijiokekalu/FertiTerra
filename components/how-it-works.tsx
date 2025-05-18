import { CheckCircle } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How FertiTerra Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Our comprehensive approach to fertility care is designed to be simple, convenient, and effective.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12">
          <div className="flex flex-col items-center space-y-4 rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="rounded-full bg-purple-100 p-3">
              <span className="text-2xl font-bold text-purple-700">1</span>
            </div>
            <h3 className="text-xl font-bold">Order Your Test Kit</h3>
            <p className="text-center text-gray-500">
              Choose the right test kit for your needs and have it delivered discreetly to your door.
            </p>
            <ul className="space-y-2 text-left w-full">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Comprehensive hormone panels</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Easy-to-follow instructions</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Prepaid return shipping</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="rounded-full bg-teal-100 p-3">
              <span className="text-2xl font-bold text-teal-700">2</span>
            </div>
            <h3 className="text-xl font-bold">Complete Your Test</h3>
            <p className="text-center text-gray-500">
              Collect your sample at home and send it back to our CLIA-certified laboratory.
            </p>
            <ul className="space-y-2 text-left w-full">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Simple collection process</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Video instructions available</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Track your sample status</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="rounded-full bg-rose-100 p-3">
              <span className="text-2xl font-bold text-rose-700">3</span>
            </div>
            <h3 className="text-xl font-bold">Get Personalized Care</h3>
            <p className="text-center text-gray-500">
              Receive your results and connect with a fertility specialist to create your personalized plan.
            </p>
            <ul className="space-y-2 text-left w-full">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Detailed results explanation</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Virtual doctor consultation</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Customized treatment plan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
