"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"

const teamMembers = [
  {
    name: "Kalu Chijioke Ugorji",
    role: "Founder & CEO",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%283%29-7aJEiLOLhBdqPLyXAdtXXjZ3Hs7kSX.png",
    bio: "Chijioke is a polymath and academic scholar with expertise in technology, engineering, and health sciences. He studied Chemistry at Michael Okpara University, Industrial Engineering at Dangote Academy, and is pursuing advanced studies in software engineering and health sciences. Driven by personal experiences with infertility stigma, he founded FertiTerra to transform fertility care in Africa through AI-driven, affordable, and inclusive solutions.",
  },
  {
    name: "Dr. Lilian Igweze",
    role: "Head of Research & Diagnostics",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%284%29-GtfLldufzdOV2s8XQH6DEVU9gl35rm.png",
    bio: "Lilian is a health researcher and diagnostics specialist with expertise in fertility testing and medical innovation. At FertiTerra, she spearheads research and the development of our fertility test kits, bridging science and accessibility to bring cutting-edge diagnostics to underserved populations.",
  },
  {
    name: "Dr. Simpa Dania",
    role: "Head of Partnerships & Business Development",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%282%29-Mdoo3uuoiddEvG2Zn4eWqKVM58bqpI.png",
    bio: "Simpa is a strategic business leader with extensive experience in building impactful partnerships and scaling ventures across Africa. With a background in entrepreneurship and social innovation, he drives FertiTerra's external collaborations, ensuring strong stakeholder engagement with hospitals, research centers, and industry players.",
  },
  {
    name: "Dr. Kelechi Okoro",
    role: "Head of Public Health Education & Advocacy (Healthertainer)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%285%29-u1y6fcOVsdhFiaBp0mNekdRuPrDHwr.png",
    bio: "Dr. Kelechi, popularly known as The Healthertainer, is a Medical doctor and a passionate health educator and advocate. With years of experience in public health communications, she leads FertiTerra's education and awareness campaigns, reducing stigma around infertility and promoting reproductive health literacy across communities.",
  },
  {
    name: "Dr. Smart Akuma",
    role: "Head of Medical Affairs (Gynecology & Fertility Care)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2825.jpg-eDlS1ieHsDEmaAru7g89kXmLXHgaJF.jpeg",
    bio: "Dr. Smart is a medical doctor and gynecologist with over 7 years of clinical experience in women's reproductive health. He leads FertiTerra's medical advisory, ensuring that all solutions are evidence-based, safe, and patient-centered. His passion lies in helping couples overcome infertility challenges and creating inclusive reproductive health systems across Africa.",
  },
  {
    name: "Joshua Alana",
    role: "Head of Technology & Product Development",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-KmQCJXeTTvjA5VoX5A0RPPP5DxBgf7.png",
    bio: "Joshua is a skilled engineer and innovator with experience in building scalable tech solutions. He leads FertiTerra's digital product development, overseeing the design and implementation of our fertility health app and digital platforms to enhance patient care and user experience.",
  },
  {
    name: "Isaiah Kporon",
    role: "Head of Finance & Impact Measurement",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISAIAH%20-%20Headshot%20%281%29.jpg-n5MeflEirk26mJPEW80MuD73r57iRv.jpeg",
    bio: "Isaiah is a finance professional with a strong background in startup finance, impact investing, and social enterprise accountability. He leads FertiTerra's financial strategy, ensuring sustainability while measuring and reporting the social and health impact of our work.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/about/founders-story"
              className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Founder's Story
            </Link>

            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Meet the Team</h1>
              <p className="text-xl text-gray-600 mb-8">
                We are a multidisciplinary team dedicated to transforming fertility care in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden bg-white"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-rose-600 font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                      <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-green-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Fertility Care?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our mission to make fertility care accessible, affordable, and inclusive across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
