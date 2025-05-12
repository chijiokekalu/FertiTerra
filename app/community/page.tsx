import Link from "next/link"
import Image from "next/image"
import {
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Filter,
  MessageCircle,
  Search,
  Video,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CartButton } from "@/components/cart-button"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/fertiterra-logo.png"
              alt="FertiTerra Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/plans" className="text-sm font-medium">
              Plans
            </Link>
            <Link href="/test-kits" className="text-sm font-medium">
              Test Kits
            </Link>
            <Link href="/blog" className="text-sm font-medium">
              Blog
            </Link>
            <Link href="/community" className="text-sm font-medium">
              Community
            </Link>
          </nav>
          <div className="ml-4 flex items-center gap-2">
            <CartButton />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 via-rose-50 to-teal-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
            <div className="absolute top-1/4 -right-24 w-72 h-72 rounded-full bg-rose-200 opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-24 left-1/3 w-60 h-60 rounded-full bg-teal-200 opacity-20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-gradient-to-r from-purple-100 to-rose-100 px-3 py-1 text-sm text-purple-700 mb-4">
                FertiTerra Community
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-600 via-rose-600 to-teal-600 bg-clip-text text-transparent">
                Connect & Learn Together
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Join a supportive community of women on similar fertility journeys.
              </p>
              <div className="flex w-full max-w-md flex-col gap-2 min-[400px]:flex-row mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search discussions..."
                    className="pl-8 bg-white/80 backdrop-blur-sm border-purple-100"
                  />
                </div>
                <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-8 md:py-12">
          <Tabs defaultValue="discussions" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Discussions</CardTitle>
                  <CardDescription>Join conversations with other members</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 hover:border-purple-200 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Jane Doe</div>
                          <div className="text-xs text-muted-foreground">Posted 2 days ago</div>
                        </div>
                        <Badge className="ml-auto bg-purple-100 text-purple-700 hover:bg-purple-200">TTC</Badge>
                      </div>
                      <h3 className="font-medium mb-2 text-purple-700">Success with the TTC Plan!</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        After 8 months of trying, I'm happy to share that I'm now 6 weeks pregnant! The hormone testing
                        and personalized plan really made a difference...
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>24 comments</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-purple-600">
                          Read More
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 hover:border-rose-200 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Sarah Miller</div>
                          <div className="text-xs text-muted-foreground">Posted 3 days ago</div>
                        </div>
                        <Badge className="ml-auto bg-rose-100 text-rose-700 hover:bg-rose-200">Perimenopause</Badge>
                      </div>
                      <h3 className="font-medium mb-2 text-rose-700">
                        Perimenopause symptoms - what's working for you?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        I've been experiencing hot flashes and mood swings. My doctor recommended some lifestyle
                        changes, but I'd love to hear what's working for others...
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>32 comments</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-rose-600">
                          Read More
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 hover:border-teal-200 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback>LW</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Lisa Wong</div>
                          <div className="text-xs text-muted-foreground">Posted 5 days ago</div>
                        </div>
                        <Badge className="ml-auto bg-teal-100 text-teal-700 hover:bg-teal-200">Nutrition</Badge>
                      </div>
                      <h3 className="font-medium mb-2 text-teal-700">Nutrition tips for fertility</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        I've been making some dietary changes based on my doctor's recommendations. Here are some
                        recipes and meal plans that have been working for me...
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>18 comments</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-teal-600">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Discussions
                  </Button>
                </CardFooter>
              </Card>

              <div className="flex justify-center">
                <Button className="bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start a New Discussion
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="appointments" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                        Your Upcoming Appointments
                      </CardTitle>
                      <CardDescription>Manage your scheduled consultations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border border-purple-100 p-4 bg-gradient-to-r from-purple-50 to-white">
                          <div className="flex items-center gap-4">
                            <div className="text-center min-w-[60px] rounded-lg bg-purple-100 p-2">
                              <div className="text-lg font-bold text-purple-700">15</div>
                              <div className="text-xs text-purple-700">May</div>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">Follow-up Consultation</div>
                              <div className="text-sm text-muted-foreground flex items-center gap-2">
                                <Clock className="h-3 w-3" /> 10:00 AM - 10:30 AM
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Doctor" />
                                  <AvatarFallback>SJ</AvatarFallback>
                                </Avatar>
                                <span className="text-sm">Dr. Sarah Johnson</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                              >
                                <Video className="mr-2 h-3 w-3" /> Join Call
                              </Button>
                              <Button variant="outline" size="sm" className="text-purple-700 border-purple-200">
                                Reschedule
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-rose-100 p-4 bg-gradient-to-r from-rose-50 to-white">
                          <div className="flex items-center gap-4">
                            <div className="text-center min-w-[60px] rounded-lg bg-rose-100 p-2">
                              <div className="text-lg font-bold text-rose-700">22</div>
                              <div className="text-xs text-rose-700">May</div>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">Hormone Test Results Review</div>
                              <div className="text-sm text-muted-foreground flex items-center gap-2">
                                <Clock className="h-3 w-3" /> 2:00 PM - 2:30 PM
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Doctor" />
                                  <AvatarFallback>MB</AvatarFallback>
                                </Avatar>
                                <span className="text-sm">Dr. Michael Brown</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button
                                size="sm"
                                disabled
                                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 opacity-50"
                              >
                                <Video className="mr-2 h-3 w-3" /> Join Call
                              </Button>
                              <Button variant="outline" size="sm" className="text-rose-700 border-rose-200">
                                Reschedule
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-teal-100 p-4 bg-gradient-to-r from-teal-50 to-white">
                          <div className="flex items-center gap-4">
                            <div className="text-center min-w-[60px] rounded-lg bg-teal-100 p-2">
                              <div className="text-lg font-bold text-teal-700">29</div>
                              <div className="text-xs text-teal-700">May</div>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">Nutrition Consultation</div>
                              <div className="text-sm text-muted-foreground flex items-center gap-2">
                                <Clock className="h-3 w-3" /> 11:00 AM - 11:45 AM
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Nutritionist" />
                                  <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                                <span className="text-sm">Emma Rodriguez, RD</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button
                                size="sm"
                                disabled
                                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 opacity-50"
                              >
                                <Video className="mr-2 h-3 w-3" /> Join Call
                              </Button>
                              <Button variant="outline" size="sm" className="text-teal-700 border-teal-200">
                                Reschedule
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Appointments
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                        Schedule New Appointment
                      </CardTitle>
                      <CardDescription>Book a consultation with our specialists</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4 hover:border-rose-200 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-rose-100 p-2">
                              <Calendar className="h-5 w-5 text-rose-700" />
                            </div>
                            <div>
                              <div className="font-medium">Fertility Consultation</div>
                              <div className="text-sm text-muted-foreground">30 minutes • $75</div>
                            </div>
                            <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>

                        <div className="rounded-lg border p-4 hover:border-purple-200 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-purple-100 p-2">
                              <Calendar className="h-5 w-5 text-purple-700" />
                            </div>
                            <div>
                              <div className="font-medium">Test Results Review</div>
                              <div className="text-sm text-muted-foreground">20 minutes • $50</div>
                            </div>
                            <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>

                        <div className="rounded-lg border p-4 hover:border-teal-200 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-teal-100 p-2">
                              <Calendar className="h-5 w-5 text-teal-700" />
                            </div>
                            <div>
                              <div className="font-medium">Nutrition Consultation</div>
                              <div className="text-sm text-muted-foreground">45 minutes • $90</div>
                            </div>
                            <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>

                        <div className="rounded-lg border p-4 hover:border-rose-200 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-rose-100 p-2">
                              <Calendar className="h-5 w-5 text-rose-700" />
                            </div>
                            <div>
                              <div className="font-medium">Follow-up Consultation</div>
                              <div className="text-sm text-muted-foreground">15 minutes • $35</div>
                            </div>
                            <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600">
                        View All Appointment Types
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                    Meet Our Specialists
                  </CardTitle>
                  <CardDescription>Our team of fertility experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Dr. Sarah Johnson",
                        title: "OB/GYN, Fertility Specialist",
                        color: "rose",
                        bio: "Specializes in reproductive endocrinology with over 15 years of experience helping women achieve pregnancy.",
                      },
                      {
                        name: "Dr. Michael Brown",
                        title: "Reproductive Endocrinologist",
                        color: "purple",
                        bio: "Expert in hormonal disorders and advanced fertility treatments, including IVF and egg freezing.",
                      },
                      {
                        name: "Emma Rodriguez, RD",
                        title: "Fertility Nutritionist",
                        color: "teal",
                        bio: "Specializes in nutrition for hormone balance, PCOS, and optimizing fertility through diet.",
                      },
                    ].map((specialist, index) => (
                      <div
                        key={index}
                        className="rounded-lg border p-6 hover:shadow-md transition-all"
                        style={{
                          borderColor:
                            specialist.color === "rose"
                              ? "rgb(254 205 211)"
                              : specialist.color === "purple"
                                ? "rgb(233 213 255)"
                                : "rgb(204 251 241)",
                          background: `linear-gradient(to bottom right, white, ${
                            specialist.color === "rose"
                              ? "rgb(254 205 211 / 10%)"
                              : specialist.color === "purple"
                                ? "rgb(233 213 255 / 10%)"
                                : "rgb(204 251 241 / 10%)"
                          })`,
                        }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <Avatar className="h-24 w-24 mb-4">
                            <AvatarImage src="/placeholder.svg?height=96&width=96" alt={specialist.name} />
                            <AvatarFallback>
                              {specialist.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <h3 className="font-bold text-lg mb-1">{specialist.name}</h3>
                          <p
                            className="text-sm mb-3"
                            style={{
                              color:
                                specialist.color === "rose"
                                  ? "rgb(225 29 72)"
                                  : specialist.color === "purple"
                                    ? "rgb(147 51 234)"
                                    : "rgb(13 148 136)",
                            }}
                          >
                            {specialist.title}
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">{specialist.bio}</p>
                          <Button
                            className="w-full"
                            style={{
                              background:
                                specialist.color === "rose"
                                  ? "linear-gradient(to right, rgb(244 63 94), rgb(225 29 72))"
                                  : specialist.color === "purple"
                                    ? "linear-gradient(to right, rgb(168 85 247), rgb(147 51 234))"
                                    : "linear-gradient(to right, rgb(20 184 166), rgb(13 148 136))",
                              color: "white",
                            }}
                          >
                            Book Appointment
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Specialists
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                        Educational Resources
                      </CardTitle>
                      <CardDescription>Guides, videos, and tools to support your journey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="rounded-lg border border-purple-100 overflow-hidden group hover:shadow-md transition-all">
                            <div className="aspect-video bg-purple-50 relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Video className="h-12 w-12 text-purple-200" />
                              </div>
                              <div className="absolute bottom-2 right-2 bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                                15:24
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium text-purple-700 group-hover:text-purple-800 transition-colors">
                                Understanding Your Menstrual Cycle
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1 mb-3">
                                A comprehensive guide to tracking and understanding your cycle for fertility awareness.
                              </p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-0 h-auto text-purple-600 hover:text-purple-700"
                              >
                                Watch Video
                              </Button>
                            </div>
                          </div>

                          <div className="rounded-lg border border-teal-100 overflow-hidden group hover:shadow-md transition-all">
                            <div className="aspect-video bg-teal-50 relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Video className="h-12 w-12 text-teal-200" />
                              </div>
                              <div className="absolute bottom-2 right-2 bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs">
                                12:08
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium text-teal-700 group-hover:text-teal-800 transition-colors">
                                Nutrition for Hormone Balance
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1 mb-3">
                                Learn about key nutrients and foods that support optimal hormone health and fertility.
                              </p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-0 h-auto text-teal-600 hover:text-teal-700"
                              >
                                Watch Video
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-medium text-lg">Downloadable Guides</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-4 p-4 rounded-lg border border-rose-100 hover:shadow-sm transition-all">
                              <div className="rounded-lg bg-rose-50 p-2">
                                <FileText className="h-6 w-6 text-rose-400" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-rose-700">Fertility Tracking Guide</h4>
                                <p className="text-sm text-muted-foreground mt-1 mb-2">
                                  A comprehensive guide to tracking your fertility signs and symptoms.
                                </p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="p-0 h-auto text-rose-600 hover:text-rose-700"
                                >
                                  <Download className="h-4 w-4 mr-1" /> Download PDF
                                </Button>
                              </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg border border-purple-100 hover:shadow-sm transition-all">
                              <div className="rounded-lg bg-purple-50 p-2">
                                <FileText className="h-6 w-6 text-purple-400" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-purple-700">PCOS Management Plan</h4>
                                <p className="text-sm text-muted-foreground mt-1 mb-2">
                                  Strategies for managing PCOS symptoms and improving fertility.
                                </p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="p-0 h-auto text-purple-600 hover:text-purple-700"
                                >
                                  <Download className="h-4 w-4 mr-1" /> Download PDF
                                </Button>
                              </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg border border-teal-100 hover:shadow-sm transition-all">
                              <div className="rounded-lg bg-teal-50 p-2">
                                <FileText className="h-6 w-6 text-teal-400" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-teal-700">Fertility-Friendly Recipes</h4>
                                <p className="text-sm text-muted-foreground mt-1 mb-2">
                                  30 nutritious recipes designed to support reproductive health.
                                </p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="p-0 h-auto text-teal-600 hover:text-teal-700"
                                >
                                  <Download className="h-4 w-4 mr-1" /> Download PDF
                                </Button>
                              </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg border border-rose-100 hover:shadow-sm transition-all">
                              <div className="rounded-lg bg-rose-50 p-2">
                                <FileText className="h-6 w-6 text-rose-400" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-rose-700">Perimenopause Symptom Tracker</h4>
                                <p className="text-sm text-muted-foreground mt-1 mb-2">
                                  A printable tracker to monitor perimenopause symptoms and patterns.
                                </p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="p-0 h-auto text-rose-600 hover:text-rose-700"
                                >
                                  <Download className="h-4 w-4 mr-1" /> Download PDF
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-medium text-lg">Interactive Tools</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-lg border border-purple-100 p-4 bg-gradient-to-r from-purple-50 to-white">
                              <h4 className="font-medium text-purple-700 mb-2">Ovulation Calculator</h4>
                              <p className="text-sm text-muted-foreground mb-4">
                                Calculate your fertile window based on your cycle length and last period date.
                              </p>
                              <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                                Use Calculator
                              </Button>
                            </div>

                            <div className="rounded-lg border border-teal-100 p-4 bg-gradient-to-r from-teal-50 to-white">
                              <h4 className="font-medium text-teal-700 mb-2">Symptom Tracker</h4>
                              <p className="text-sm text-muted-foreground mb-4">
                                Track your fertility signs, symptoms, and patterns to identify your most fertile days.
                              </p>
                              <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700">
                                Start Tracking
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Resources
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                        Recommended Reading
                      </CardTitle>
                      <CardDescription>Books and articles selected by our experts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Taking Charge of Your Fertility",
                            author: "Toni Weschler",
                            color: "rose",
                            type: "Book",
                          },
                          {
                            title: "The Fertility Diet",
                            author: "Jorge Chavarro, MD",
                            color: "purple",
                            type: "Book",
                          },
                          {
                            title: "Understanding Hormone Testing Results",
                            author: "Dr. Jessica Wong",
                            color: "teal",
                            type: "Article",
                          },
                          {
                            title: "Perimenopause: Navigating the Transition",
                            author: "Dr. Amanda Lee",
                            color: "rose",
                            type: "Article",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-lg border hover:shadow-sm transition-all"
                            style={{
                              borderColor:
                                item.color === "rose"
                                  ? "rgb(254 205 211)"
                                  : item.color === "purple"
                                    ? "rgb(233 213 255)"
                                    : "rgb(204 251 241)",
                            }}
                          >
                            <div
                              className="rounded-lg p-2 flex-shrink-0"
                              style={{
                                backgroundColor:
                                  item.color === "rose"
                                    ? "rgb(254 205 211 / 30%)"
                                    : item.color === "purple"
                                      ? "rgb(233 213 255 / 30%)"
                                      : "rgb(204 251 241 / 30%)",
                              }}
                            >
                              {item.type === "Book" ? (
                                <BookOpen
                                  className="h-5 w-5"
                                  style={{
                                    color:
                                      item.color === "rose"
                                        ? "rgb(225 29 72)"
                                        : item.color === "purple"
                                          ? "rgb(147 51 234)"
                                          : "rgb(13 148 136)",
                                  }}
                                />
                              ) : (
                                <FileText
                                  className="h-5 w-5"
                                  style={{
                                    color:
                                      item.color === "rose"
                                        ? "rgb(225 29 72)"
                                        : item.color === "purple"
                                          ? "rgb(147 51 234)"
                                          : "rgb(13 148 136)",
                                  }}
                                />
                              )}
                            </div>
                            <div>
                              <h4
                                className="font-medium text-sm"
                                style={{
                                  color:
                                    item.color === "rose"
                                      ? "rgb(225 29 72)"
                                      : item.color === "purple"
                                        ? "rgb(147 51 234)"
                                        : "rgb(13 148 136)",
                                }}
                              >
                                {item.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">by {item.author}</p>
                              <div className="flex justify-between items-center mt-2">
                                <Badge
                                  className="text-xs"
                                  style={{
                                    backgroundColor:
                                      item.color === "rose"
                                        ? "rgb(254 205 211)"
                                        : item.color === "purple"
                                          ? "rgb(233 213 255)"
                                          : "rgb(204 251 241)",
                                    color:
                                      item.color === "rose"
                                        ? "rgb(190 18 60)"
                                        : item.color === "purple"
                                          ? "rgb(126 34 206)"
                                          : "rgb(15 118 110)",
                                  }}
                                >
                                  {item.type}
                                </Badge>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-auto p-0 text-xs"
                                  style={{
                                    color:
                                      item.color === "rose"
                                        ? "rgb(225 29 72)"
                                        : item.color === "purple"
                                          ? "rgb(147 51 234)"
                                          : "rgb(13 148 136)",
                                  }}
                                >
                                  {item.type === "Book" ? "Learn More" : "Read Article"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600">
                        View All Recommendations
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Workshops, webinars, and community gatherings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 hover:border-purple-200 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-center min-w-[60px] rounded-lg bg-purple-100 p-2">
                          <div className="text-lg font-bold text-purple-700">15</div>
                          <div className="text-xs text-purple-700">May</div>
                        </div>
                        <div>
                          <div className="font-medium text-purple-700">Fertility Nutrition Workshop</div>
                          <div className="text-xs text-muted-foreground">Virtual • 7:00 PM - 8:30 PM</div>
                        </div>
                        <Badge className="ml-auto bg-purple-100 text-purple-700 hover:bg-purple-200">Workshop</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Join our nutritionist for a workshop on foods that support fertility and hormonal balance.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <Avatar key={i} className="border-2 border-background h-7 w-7">
                              <AvatarImage src={`/placeholder.svg?height=28&width=28&text=${i + 1}`} />
                              <AvatarFallback>U{i + 1}</AvatarFallback>
                            </Avatar>
                          ))}
                          <div className="flex items-center justify-center h-7 w-7 rounded-full bg-muted text-xs">
                            +18
                          </div>
                        </div>
                        <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                          Register
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 hover:border-rose-200 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-center min-w-[60px] rounded-lg bg-rose-100 p-2">
                          <div className="text-lg font-bold text-rose-700">22</div>
                          <div className="text-xs text-rose-700">May</div>
                        </div>
                        <div>
                          <div className="font-medium text-rose-700">Q&A with Dr. Johnson</div>
                          <div className="text-xs text-muted-foreground">Virtual • 6:00 PM - 7:00 PM</div>
                        </div>
                        <Badge className="ml-auto bg-rose-100 text-rose-700 hover:bg-rose-200">Q&A</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        An open Q&A session with our fertility specialist, Dr. Sarah Johnson.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <Avatar key={i} className="border-2 border-background h-7 w-7">
                              <AvatarImage src={`/placeholder.svg?height=28&width=28&text=${i + 1}`} />
                              <AvatarFallback>U{i + 1}</AvatarFallback>
                            </Avatar>
                          ))}
                          <div className="flex items-center justify-center h-7 w-7 rounded-full bg-muted text-xs">
                            +24
                          </div>
                        </div>
                        <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
                          Register
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 hover:border-teal-200 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-center min-w-[60px] rounded-lg bg-teal-100 p-2">
                          <div className="text-lg font-bold text-teal-700">29</div>
                          <div className="text-xs text-teal-700">May</div>
                        </div>
                        <div>
                          <div className="font-medium text-teal-700">Perimenopause Support Group</div>
                          <div className="text-xs text-muted-foreground">Virtual • 5:30 PM - 6:30 PM</div>
                        </div>
                        <Badge className="ml-auto bg-teal-100 text-teal-700 hover:bg-teal-200">Support Group</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Connect with other women navigating perimenopause and share experiences and tips.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <Avatar key={i} className="border-2 border-background h-7 w-7">
                              <AvatarImage src={`/placeholder.svg?height=28&width=28&text=${i + 1}`} />
                              <AvatarFallback>U{i + 1}</AvatarFallback>
                            </Avatar>
                          ))}
                          <div className="flex items-center justify-center h-7 w-7 rounded-full bg-muted text-xs">
                            +12
                          </div>
                        </div>
                        <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </CardFooter>
              </Card>

              <div className="flex justify-center">
                <Button className="bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600">
                  <Calendar className="mr-2 h-4 w-4" />
                  Suggest an Event
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="bg-gray-50 border-t py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/images/fertiterra-logo.png"
              alt="FertiTerra Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Empowering women with personalized fertility insights and support.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plans" className="text-muted-foreground hover:text-foreground transition-colors">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/test-kits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Test Kits
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} FertiTerra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
