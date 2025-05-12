import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-teal-50 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-rose-100 to-teal-100 px-3 py-1 text-sm text-rose-700">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-rose-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Your Journey with FertiTerra
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We've designed a simple, supportive process to help you understand and improve your fertility health.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12">
          <div className="relative flex flex-col items-center space-y-4 rounded-xl border border-rose-100 p-6 bg-white shadow-md transform transition-transform hover:scale-105">
            <div className="absolute -top-4 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 px-4 py-1 text-lg font-bold text-white">
              1
            </div>
            <h3 className="text-xl font-bold text-rose-700">Assessment</h3>
            <p className="text-center text-muted-foreground">
              Complete our comprehensive fertility questionnaire to help us understand your unique health profile.
            </p>
            <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="h-6 w-6 text-rose-400" />
            </div>
          </div>
          <div className="relative flex flex-col items-center space-y-4 rounded-xl border border-purple-100 p-6 bg-white shadow-md transform transition-transform hover:scale-105">
            <div className="absolute -top-4 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 px-4 py-1 text-lg font-bold text-white">
              2
            </div>
            <h3 className="text-xl font-bold text-purple-700">Consultation</h3>
            <p className="text-center text-muted-foreground">
              Connect with a fertility specialist for a personalized 15-minute video consultation.
            </p>
            <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="h-6 w-6 text-purple-400" />
            </div>
          </div>
          <div className="relative flex flex-col items-center space-y-4 rounded-xl border border-teal-100 p-6 bg-white shadow-md transform transition-transform hover:scale-105">
            <div className="absolute -top-4 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-4 py-1 text-lg font-bold text-white">
              3
            </div>
            <h3 className="text-xl font-bold text-teal-700">Personalized Plan</h3>
            <p className="text-center text-muted-foreground">
              Receive a tailored care plan based on your needs—whether you're trying to conceive, managing
              perimenopause, or focusing on general wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
