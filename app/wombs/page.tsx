"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Heart,
  Activity,
  Bell,
  BookOpen,
  Users,
  Video,
  TestTube,
  TrendingUp,
  MessageCircle,
  LogOut,
  Home,
  Clock,
  Target,
  Award,
} from "lucide-react"

export default function WombsApp() {
  const [user, setUser] = useState<{ email: string; name: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentCycle, setCurrentCycle] = useState(14)
  const [fertileWindow, setFertileWindow] = useState({ start: 12, end: 16 })
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const userEmail = localStorage.getItem("userEmail")

    if (!isLoggedIn || !userEmail) {
      router.push("/wombs/login")
      return
    }

    setUser({
      email: userEmail,
      name: userEmail.split("@")[0],
    })
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    router.push("/wombs/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your Wombs dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Wombs</h1>
                <p className="text-xs text-gray-500">by FertiTerra</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}! 💜</h2>
          <p className="text-gray-600">Track your fertility journey with AI-powered insights</p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="dashboard">
              <Home className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="cycle">
              <Calendar className="w-4 h-4 mr-2" />
              Cycle
            </TabsTrigger>
            <TabsTrigger value="insights">
              <TrendingUp className="w-4 h-4 mr-2" />
              Insights
            </TabsTrigger>
            <TabsTrigger value="telemedicine">
              <Video className="w-4 h-4 mr-2" />
              Consult
            </TabsTrigger>
            <TabsTrigger value="community">
              <Users className="w-4 h-4 mr-2" />
              Community
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-l-4 border-l-purple-600">
                <CardHeader className="pb-3">
                  <CardDescription>Current Cycle Day</CardDescription>
                  <CardTitle className="text-3xl">{currentCycle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={(currentCycle / 28) * 100} className="h-2" />
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-pink-600">
                <CardHeader className="pb-3">
                  <CardDescription>Fertile Window</CardDescription>
                  <CardTitle className="text-2xl">
                    Day {fertileWindow.start}-{fertileWindow.end}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Peak fertility in 2 days</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader className="pb-3">
                  <CardDescription>Tests Completed</CardDescription>
                  <CardTitle className="text-3xl">12</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">3 this month</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600">
                <CardHeader className="pb-3">
                  <CardDescription>Streak</CardDescription>
                  <CardTitle className="text-3xl">28 days</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Keep it up! 🔥</p>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights Alert */}
            <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">AI-Powered Insight</CardTitle>
                      <CardDescription className="text-gray-700">Based on your recent data</CardDescription>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 mb-3">
                  Your luteal phase appears to be shorter than average. This might affect implantation. Consider
                  scheduling a consultation with a specialist to discuss vitamin B6 or progesterone support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Book Consultation
                  </Button>
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Log Today's Data</CardTitle>
                  <CardDescription>Track symptoms, mood, and more</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Log Data</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                    <TestTube className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle>Use Test Kit</CardTitle>
                  <CardDescription>Scan QR code or enter results</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">Scan Test</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Video className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Telemedicine</CardTitle>
                  <CardDescription>Consult with fertility experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Consultation</Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your fertility journey timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { icon: TestTube, title: "LH Test Completed", time: "2 hours ago", color: "text-purple-600" },
                    { icon: Calendar, title: "Period Started", time: "5 days ago", color: "text-pink-600" },
                    { icon: Video, title: "Consultation Booked", time: "1 week ago", color: "text-blue-600" },
                    { icon: BookOpen, title: "Article Read", time: "1 week ago", color: "text-green-600" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <activity.icon className={`w-5 h-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cycle Tab */}
          <TabsContent value="cycle" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cycle Overview</CardTitle>
                <CardDescription>Track your menstrual cycle and fertile window</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Cycle Calendar Visual */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-gray-600">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
                        const isCurrent = day === currentCycle
                        const isFertile = day >= fertileWindow.start && day <= fertileWindow.end
                        const isPeriod = day <= 5

                        return (
                          <div
                            key={day}
                            className={`
                              aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                              ${isCurrent ? "bg-purple-600 text-white ring-4 ring-purple-200" : ""}
                              ${isFertile && !isCurrent ? "bg-pink-200 text-pink-800" : ""}
                              ${isPeriod && !isCurrent && !isFertile ? "bg-red-100 text-red-800" : ""}
                              ${!isCurrent && !isFertile && !isPeriod ? "bg-white text-gray-700" : ""}
                              cursor-pointer hover:scale-105 transition-transform
                            `}
                          >
                            {day}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-100 rounded"></div>
                      <span>Period</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-pink-200 rounded"></div>
                      <span>Fertile Window</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-purple-600 rounded"></div>
                      <span>Today</span>
                    </div>
                  </div>

                  {/* Cycle Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded-lg border">
                      <p className="text-sm text-gray-600 mb-1">Average Cycle Length</p>
                      <p className="text-2xl font-bold text-gray-900">28 days</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border">
                      <p className="text-sm text-gray-600 mb-1">Period Length</p>
                      <p className="text-2xl font-bold text-gray-900">5 days</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border">
                      <p className="text-sm text-gray-600 mb-1">Next Period</p>
                      <p className="text-2xl font-bold text-gray-900">14 days</p>
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Log Today's Symptoms</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Fertility Insights</CardTitle>
                <CardDescription>Personalized recommendations based on your data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Ovulation Prediction",
                      description: "Based on your cycle history, ovulation is predicted for Day 14-16",
                      color: "bg-purple-100",
                      icon: Target,
                    },
                    {
                      title: "Hormone Trends",
                      description: "Your AMH levels are within normal range for your age group",
                      color: "bg-blue-100",
                      icon: TrendingUp,
                    },
                    {
                      title: "Lifestyle Recommendations",
                      description: "Consider increasing vitamin D intake based on recent test results",
                      color: "bg-green-100",
                      icon: Heart,
                    },
                    {
                      title: "Fertility Score",
                      description: "Your fertility score is 85/100 - Very Good",
                      color: "bg-pink-100",
                      icon: Award,
                    },
                  ].map((insight, index) => (
                    <div
                      key={index}
                      className={`${insight.color} rounded-lg p-4 flex items-start space-x-4 hover:shadow-md transition-shadow`}
                    >
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <insight.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                        <p className="text-sm text-gray-700">{insight.description}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Test Results */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Test Results</CardTitle>
                <CardDescription>Track your hormone levels over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "AMH (Anti-Müllerian Hormone)", value: "3.2 ng/mL", status: "Normal", date: "2 days ago" },
                    {
                      name: "FSH (Follicle Stimulating Hormone)",
                      value: "7.5 mIU/mL",
                      status: "Normal",
                      date: "1 week ago",
                    },
                    { name: "LH (Luteinizing Hormone)", value: "12.3 mIU/mL", status: "Peak", date: "Today" },
                    { name: "Estradiol", value: "145 pg/mL", status: "Normal", date: "3 days ago" },
                  ].map((test, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{test.name}</p>
                        <p className="text-sm text-gray-500">{test.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{test.value}</p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            test.status === "Normal"
                              ? "bg-green-100 text-green-800"
                              : test.status === "Peak"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {test.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Add New Test Result</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Telemedicine Tab */}
          <TabsContent value="telemedicine" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Book a Consultation</CardTitle>
                <CardDescription>Connect with fertility specialists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Dr. Amara Okonkwo",
                      specialty: "Reproductive Endocrinologist",
                      price: "$45",
                      rating: 4.9,
                      image: "/placeholder.svg?height=100&width=100&text=Dr.Amara",
                    },
                    {
                      name: "Dr. Sarah Mensah",
                      specialty: "Fertility Specialist",
                      price: "$40",
                      rating: 4.8,
                      image: "/placeholder.svg?height=100&width=100&text=Dr.Sarah",
                    },
                    {
                      name: "Dr. John Kamau",
                      specialty: "OB-GYN",
                      price: "$35",
                      rating: 4.7,
                      image: "/placeholder.svg?height=100&width=100&text=Dr.John",
                    },
                    {
                      name: "Dr. Fatima Hassan",
                      specialty: "Fertility Counselor",
                      price: "$30",
                      rating: 4.9,
                      image: "/placeholder.svg?height=100&width=100&text=Dr.Fatima",
                    },
                  ].map((doctor, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-medium">{doctor.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-purple-600">{doctor.price}</span>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Manage your scheduled consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Dr. Amara Okonkwo</p>
                        <p className="text-sm text-gray-600">Tomorrow, 2:00 PM</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Join Call
                      </Button>
                    </div>
                  </div>

                  <div className="text-center py-8 text-gray-500">
                    <Clock className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <p>No other upcoming appointments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Support</CardTitle>
                <CardDescription>Connect with others on similar journeys</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "TTC Journey Support Group",
                      members: "2,345 members",
                      activity: "24 new posts today",
                      color: "bg-purple-100",
                    },
                    {
                      title: "PCOS Warriors",
                      members: "1,823 members",
                      activity: "15 new posts today",
                      color: "bg-pink-100",
                    },
                    {
                      title: "Fertility Success Stories",
                      members: "3,456 members",
                      activity: "42 new posts today",
                      color: "bg-blue-100",
                    },
                    {
                      title: "Rainbow Baby Moms",
                      members: "987 members",
                      activity: "8 new posts today",
                      color: "bg-green-100",
                    },
                  ].map((group, index) => (
                    <div
                      key={index}
                      className={`${group.color} rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{group.title}</h3>
                          <p className="text-sm text-gray-600">{group.members}</p>
                          <p className="text-xs text-gray-500">{group.activity}</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Discussions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Discussions</CardTitle>
                <CardDescription>Join the conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: "Sarah M.",
                      topic: "Looking for natural ways to boost fertility",
                      replies: 23,
                      time: "2 hours ago",
                    },
                    {
                      user: "Amina K.",
                      topic: "Success story: Pregnant after 2 years!",
                      replies: 156,
                      time: "5 hours ago",
                    },
                    {
                      user: "Grace O.",
                      topic: "Questions about IVF process",
                      replies: 34,
                      time: "1 day ago",
                    },
                  ].map((discussion, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900">{discussion.user}</p>
                        <span className="text-xs text-gray-500">{discussion.time}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{discussion.topic}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {discussion.replies} replies
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">View All Discussions</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* AdSense Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9375281731859570"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-5z+d6-3l-5l+vb"
            data-ad-client="ca-pub-9375281731859570"
            data-ad-slot="9788273687"
          ></ins>
          <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }}></script>
        </div>
      </div>
    </div>
  )
}
