import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Lagos, Nigeria",
      content:
        "FertiTerra gave me the answers I'd been searching for. The at-home testing was so convenient, and the consultation helped me understand my fertility health better than any doctor visit I'd had before.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=SM",
    },
    {
      name: "David & Grace K.",
      location: "Nairobi, Kenya",
      content:
        "After trying to conceive for over a year, FertiTerra's TTC plan provided the guidance we needed. We're now expecting our first child!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=DG",
    },
    {
      name: "Amina T.",
      location: "Accra, Ghana",
      content:
        "The community support and expert consultations made all the difference in my fertility journey. I finally felt heard and supported.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=AT",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Families Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from families who've found hope and answers through FertiTerra
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
