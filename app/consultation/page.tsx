"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { useAuth } from "@/context/auth-context"
import { CalendarIcon, Clock, Video, Star, MapPin, ArrowRight } from "lucide-react"

// Mock data for doctors
const doctors = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Reproductive Endocrinologist",
    image: "/images/doctor-1.jpg",
    specialties: ["Fertility", "PCOS", "IVF"],
    experience: "12 years",
    rating: 4.9,
    reviewCount: 124,
    bio: "Dr. Sarah Johnson is a board-certified reproductive endocrinologist with over 12 years of experience helping women navigate their fertility journey. She specializes in PCOS, recurrent pregnancy loss, and fertility preservation.",
    education: [
      "Fellowship in Reproductive Endocrinology and Infertility, Yale University",
      "Residency in Obstetrics and Gynecology, Johns Hopkins Hospital",
      "MD, Harvard Medical School",
    ],
    nextAvailable: "Tomorrow",
  },
  {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    title: "OB/GYN, Fertility Specialist",
    image: "/images/doctor-2.jpg",
    specialties: ["Hormonal Health", "Endometriosis", "Fertility Preservation"],
    experience: "8 years",
    rating: 4.8,
    reviewCount: 98,
    bio: "Dr. Michael Chen is an OB/GYN with specialized training in reproductive medicine. He focuses on hormonal health, endometriosis management, and fertility preservation options for women of all ages.",
    education: [
      "Fellowship in Reproductive Medicine, UCSF Medical Center",
      "Residency in Obstetrics and Gynecology, Mayo Clinic",
      "MD, Stanford University School of Medicine",
    ],
    nextAvailable: "Today",
  },
  {
    id: "dr-amara-patel",
    name: "Dr. Amara Patel",
    title: "Reproductive Immunologist",
    image: "/images/doctor-3.jpg",
    specialties: ["Recurrent Pregnancy Loss", "Immunology", "Unexplained Infertility"],
    experience: "15 years",
    rating: 4.9,
    reviewCount: 156,
    bio: "Dr. Amara Patel specializes in reproductive immunology, focusing on recurrent pregnancy loss and unexplained infertility. Her integrative approach combines conventional medicine with evidence-based complementary therapies.",
    education: [
      "Fellowship in Reproductive Immunology, Baylor College of Medicine",
      "Residency in Obstetrics and Gynecology, Mount Sinai Hospital",
      "MD, University of Pennsylvania School of Medicine",
    ],
    nextAvailable: "In 2 days",
  },
  {
    id: "dr-james-wilson",
    name: "Dr. James Wilson",
    title: "Reproductive Urologist",
    image: "/images/doctor-4.jpg",
    specialties: ["Male Fertility", "Sperm Health", "Reproductive Surgery"],
    experience: "10 years",
    rating: 4.7,
    reviewCount: 87,
    bio: "Dr. James Wilson is a reproductive urologist specializing in male fertility issues. He works with couples to address sperm health concerns and provides surgical interventions when necessary.",
    education: [
      "Fellowship in Male Reproductive Medicine, Cleveland Clinic",
      "Residency in Urology, UCLA Medical Center",
      "MD, Columbia University College of Physicians and Surgeons",
    ],
    nextAvailable: "Tomorrow",
  },
]

// Mock data for available time slots
const timeSlots = [
  { time: "9:00 AM", available: true },
  { time: "10:00 AM", available: false },
  { time: "11:00 AM", available: true },
  { time: "1:00 PM", available: true },
  { time: "2:00 PM", available: true },
  { time: "3:00 PM", available: false },
  { time: "4:00 PM", available: true },
]

export default function ConsultationPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [consultationType, setConsultationType] = useState("video")

  const handleBookAppointment = () => {
    if (!user) {
      router.push("/login?redirect=/consultation")
      return
    }

    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time for your appointment")
      return
    }

    // In a real app, this would call an API to book the appointment
    router.push(
      `/consultation/confirmation?doctor=${selectedDoctor.id}&date=${selectedDate.toISOString()}&time=${selectedTime}&type=${consultationType}`,
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-rose-50 to-purple-50 py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Connect with Fertility Specialists</h1>
              <p className="text-lg text-gray-600 mb-6">
                Schedule a secure video consultation with our experienced fertility doctors from the comfort of your
                home.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-rose-500" />
                  <span>Secure video consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-rose-500" />
                  <span>30-minute appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-rose-500" />
                  <span>Same-day appointments available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="doctors" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="doctors">Our Doctors</TabsTrigger>
                <TabsTrigger value="book">Book Appointment</TabsTrigger>
              </TabsList>
              <TabsContent value="doctors" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {doctors.map((doctor) => (
                    <Card
                      key={doctor.id}
                      className={`overflow-hidden cursor-pointer transition-all ${
                        selectedDoctor.id === doctor.id ? "ring-2 ring-rose-500" : ""
                      }`}
                      onClick={() => setSelectedDoctor(doctor)}
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle>{doctor.name}</CardTitle>
                        <CardDescription>{doctor.title}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{doctor.rating}</span>
                          <span className="text-sm text-gray-500">({doctor.reviewCount} reviews)</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {doctor.specialties.map((specialty) => (
                            <Badge key={specialty} variant="outline" className="bg-rose-50">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">Next available: {doctor.nextAvailable}</p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => document.querySelector('[data-value="book"]')?.click()}
                        >
                          Book Appointment
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">About {selectedDoctor.name}</h2>
                  <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Biography</h3>
                        <p className="text-gray-600">{selectedDoctor.bio}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Education & Training</h3>
                        <ul className="space-y-1">
                          {selectedDoctor.education.map((edu, i) => (
                            <li key={i} className="text-gray-600">
                              • {edu}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Specialties</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedDoctor.specialties.map((specialty) => (
                            <Badge key={specialty} className="bg-rose-100 text-rose-800 hover:bg-rose-200">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Experience</h3>
                        <p className="text-gray-600">{selectedDoctor.experience}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Patient Reviews</h3>
                        <div className="flex items-center gap-1 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < Math.floor(selectedDoctor.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{selectedDoctor.rating}</span>
                          <span className="text-sm text-gray-500">({selectedDoctor.reviewCount} reviews)</span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-rose-500 hover:bg-rose-600"
                        onClick={() => document.querySelector('[data-value="book"]')?.click()}
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="book">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
                      <Card>
                        <CardHeader>
                          <CardTitle>Select Appointment Type</CardTitle>
                          <CardDescription>Choose how you'd like to meet with your doctor</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div
                              className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all ${
                                consultationType === "video"
                                  ? "border-rose-500 bg-rose-50"
                                  : "border-gray-200 hover:border-rose-200 hover:bg-rose-50/50"
                              }`}
                              onClick={() => setConsultationType("video")}
                            >
                              <Video
                                className={`h-8 w-8 mb-2 ${
                                  consultationType === "video" ? "text-rose-500" : "text-gray-400"
                                }`}
                              />
                              <h3 className="font-medium">Video Consultation</h3>
                              <p className="text-sm text-center text-gray-500 mt-1">
                                Meet with your doctor via secure video call
                              </p>
                            </div>
                            <div
                              className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all ${
                                consultationType === "in-person"
                                  ? "border-rose-500 bg-rose-50"
                                  : "border-gray-200 hover:border-rose-200 hover:bg-rose-50/50"
                              }`}
                              onClick={() => setConsultationType("in-person")}
                            >
                              <MapPin
                                className={`h-8 w-8 mb-2 ${
                                  consultationType === "in-person" ? "text-rose-500" : "text-gray-400"
                                }`}
                              />
                              <h3 className="font-medium">In-Person Visit</h3>
                              <p className="text-sm text-center text-gray-500 mt-1">
                                Visit our clinic for a face-to-face appointment
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <Card>
                        <CardHeader>
                          <CardTitle>Select Date & Time</CardTitle>
                          <CardDescription>Choose when you'd like to meet with {selectedDoctor.name}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <p className="text-sm font-medium mb-2">Date</p>
                              <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                className="border rounded-md p-3"
                                disabled={(date) => {
                                  // Disable dates in the past
                                  return date < new Date(new Date().setHours(0, 0, 0, 0))
                                }}
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-2">Available Times</p>
                              <div className="grid grid-cols-2 gap-2">
                                {timeSlots.map((slot) => (
                                  <Button
                                    key={slot.time}
                                    variant={selectedTime === slot.time ? "default" : "outline"}
                                    className={
                                      !slot.available
                                        ? "opacity-50 cursor-not-allowed"
                                        : selectedTime === slot.time
                                          ? "bg-rose-500 hover:bg-rose-600"
                                          : ""
                                    }
                                    disabled={!slot.available}
                                    onClick={() => setSelectedTime(slot.time)}
                                  >
                                    {slot.time}
                                  </Button>
                                ))}
                              </div>
                              <p className="text-sm text-gray-500 mt-4">
                                All appointments are 30 minutes. Times shown are in your local timezone.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className="w-full bg-rose-500 hover:bg-rose-600"
                            onClick={handleBookAppointment}
                            disabled={!selectedDate || !selectedTime}
                          >
                            Book Appointment
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Your Selection</h3>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={selectedDoctor.image || "/placeholder.svg"}
                              alt={selectedDoctor.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-base">{selectedDoctor.name}</CardTitle>
                            <CardDescription>{selectedDoctor.title}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="pt-2 border-t">
                          <p className="text-sm font-medium">Appointment Type</p>
                          <p className="text-sm text-gray-500">
                            {consultationType === "video" ? "Video Consultation" : "In-Person Visit"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Date & Time</p>
                          <p className="text-sm text-gray-500">
                            {selectedDate
                              ? `${selectedDate.toLocaleDateString("en-US", {
                                  weekday: "long",
                                  month: "long",
                                  day: "numeric",
                                })}`
                              : "Select a date"}
                            {selectedTime ? ` at ${selectedTime}` : ""}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Consultation Fee</p>
                          <p className="text-sm text-gray-500">$150 (30 minutes)</p>
                          <p className="text-xs text-gray-400 mt-1">
                            May be covered by insurance. We'll verify your benefits before the appointment.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="mt-6 space-y-4">
                      <h3 className="text-lg font-semibold">What to Expect</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="bg-rose-100 text-rose-600 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">
                            1
                          </div>
                          <p className="text-sm text-gray-600">
                            Complete a brief health questionnaire before your appointment to help your doctor prepare.
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="bg-rose-100 text-rose-600 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">
                            2
                          </div>
                          <p className="text-sm text-gray-600">
                            {consultationType === "video"
                              ? "Join your secure video call at the scheduled time. No downloads required."
                              : "Arrive 15 minutes before your appointment time for check-in."}
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="bg-rose-100 text-rose-600 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">
                            3
                          </div>
                          <p className="text-sm text-gray-600">
                            Discuss your concerns, get expert advice, and receive a personalized care plan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Why Choose FertiTerra Telemedicine</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our telemedicine platform connects you with top fertility specialists from the comfort of your home.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Convenient Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Connect with fertility specialists from anywhere, eliminating travel time and reducing stress.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Expert Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our doctors are board-certified reproductive endocrinologists and fertility specialists with years
                    of experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Book appointments that fit your schedule, including evenings and weekends, with same-day options
                    available.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-rose-50 to-purple-50">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to take the first step?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Book a consultation with one of our fertility specialists today and start your journey towards better
                  reproductive health.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
                >
                  <Link href="#book-appointment">
                    Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative w-full max-w-md h-64 md:h-80">
                <Image
                  src="/images/telemedicine-consultation.jpg"
                  alt="Telemedicine consultation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/images/fertiterra-logo.png"
                  alt="FertiTerra Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-sm text-gray-500">
                Empowering women with knowledge and support for their reproductive health journey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/test-kits/hormone-fertility" className="text-sm text-gray-500 hover:text-rose-500">
                    Hormone & Fertility Test
                  </Link>
                </li>
                <li>
                  <Link href="/test-kits/ovulation" className="text-sm text-gray-500 hover:text-rose-500">
                    Ovulation Test
                  </Link>
                </li>
                <li>
                  <Link href="/test-kits/pregnancy" className="text-sm text-gray-500 hover:text-rose-500">
                    Pregnancy Test
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/consultation" className="text-sm text-gray-500 hover:text-rose-500">
                    Doctor Consultations
                  </Link>
                </li>
                <li>
                  <Link href="/treatments" className="text-sm text-gray-500 hover:text-rose-500">
                    Treatment Plans
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm text-gray-500 hover:text-rose-500">
                    Support Groups
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-500 hover:text-rose-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-500 hover:text-rose-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-500 hover:text-rose-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} FertiTerra. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-rose-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-rose-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
