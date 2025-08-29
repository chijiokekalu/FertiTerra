import { Package, Heart, Video, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
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
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How FertiTerra Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey to better reproductive health in four simple steps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
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
  )
}
