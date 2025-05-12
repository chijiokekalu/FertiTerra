import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-rose-50 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-100 to-rose-100 px-3 py-1 text-sm text-purple-700">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
              Hear From Our Community
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Real stories from women who found support and success with FertiTerra.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
          <Card className="overflow-hidden border-purple-100 shadow-md transform transition-transform hover:scale-105">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-60 w-full md:h-auto md:w-1/3 bg-gradient-to-br from-purple-100 to-purple-200">
                  <Image
                    src="/placeholder.svg?height=300&width=200"
                    alt="Woman smiling"
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 bg-gradient-to-br from-white to-purple-50">
                  <Quote className="h-8 w-8 text-purple-300 mb-2" />
                  <p className="mb-4 italic text-purple-900">
                    "After months of trying, FertiTerra's TTC plan gave me the guidance I needed. The hormone testing
                    and personalized plan made all the difference. I'm now 12 weeks pregnant!"
                  </p>
                  <div>
                    <p className="font-semibold text-purple-700">Maria L.</p>
                    <p className="text-sm text-purple-600">TTC Plan Member</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-rose-100 shadow-md transform transition-transform hover:scale-105">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-60 w-full md:h-auto md:w-1/3 bg-gradient-to-br from-rose-100 to-rose-200">
                  <Image
                    src="/placeholder.svg?height=300&width=200"
                    alt="Woman smiling"
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 bg-gradient-to-br from-white to-rose-50">
                  <Quote className="h-8 w-8 text-rose-300 mb-2" />
                  <p className="mb-4 italic text-rose-900">
                    "The perimenopause plan helped me understand what was happening to my body. The doctor was
                    compassionate and knowledgeable, and the community support has been invaluable."
                  </p>
                  <div>
                    <p className="font-semibold text-rose-700">Sarah K.</p>
                    <p className="text-sm text-rose-600">Perimenopause Plan Member</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
