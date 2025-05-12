import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Journey with FertiTerra
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We've designed a simple, supportive process to help you understand and improve your fertility health.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12">
          <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6">
            <div className="absolute -top-4 rounded-full bg-rose-500 px-4 py-1 text-lg font-bold text-white">1</div>
            <h3 className="text-xl font-bold">Assessment</h3>
            <p className="text-center text-muted-foreground">
              Complete our comprehensive fertility questionnaire to help us understand your unique health profile.
            </p>
            <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
          <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6">
            <div className="absolute -top-4 rounded-full bg-rose-500 px-4 py-1 text-lg font-bold text-white">2</div>
            <h3 className="text-xl font-bold">Consultation</h3>
            <p className="text-center text-muted-foreground">
              Connect with a fertility specialist for a personalized 15-minute video consultation.
            </p>
            <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
          <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6">
            <div className="absolute -top-4 rounded-full bg-rose-500 px-4 py-1 text-lg font-bold text-white">3</div>
            <h3 className="text-xl font-bold">Personalized Plan</h3>
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
