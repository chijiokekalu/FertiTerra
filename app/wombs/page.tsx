"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  Heart,
  Activity,
  TrendingUp,
  Users,
  Video,
  Bell,
  LogOut,
  Droplet,
  Thermometer,
  MessageSquare,
  BookOpen,
  Award,
  ArrowRight,
  Clock,
  Star,
  Target,
} from "lucide-react"

interface User {
  name: string
  email: string
  avatar?: string
}

export default function WombsApp() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [currentTab, setCurrentTab] = useState("dashboard")
  const [cycleDay, setCycleDay] = useState(14)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("wombs_user")
    if (userData) {
      setUser(JSON.parse(userData))
      setIsLoading(false)
    } else {
      router.push("/wombs/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("wombs_user")
    router.push("/wombs/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your fertility journey...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/images/fertiterra-logo.png" alt="Wombs by FertiTerra" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Wombs
                </h1>
                <p className="text-xs text-gray-500">by FertiTerra</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              </div>

              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5 text-red-500" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
          {/* Navigation Tabs */}
          <TabsList className="grid grid-cols-5 w-full max-w-4xl mx-auto bg-white p-2 shadow-md">
            <TabsTrigger value="dashboard" className="flex flex-col gap-1 py-3">
              <Activity className="h-5 w-5" />
              <span className="text-xs">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="cycle" className="flex flex-col gap-1 py-3">
              <Calendar className="h-5 w-5" />
              <span className="text-xs">Cycle</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex flex-col gap-1 py-3">
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs">Insights</span>
            </TabsTrigger>
            <TabsTrigger value="telemedicine" className="flex flex-col gap-1 py-3">
              <Video className="h-5 w-5" />
              <span className="text-xs">Consult</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex flex-col gap-1 py-3">
              <Users className="h-5 w-5" />
              <span className="text-xs">Community</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Welcome Banner */}
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.name}! 👋</h2>
                    <p className="text-purple-100">
                      You're on Day {cycleDay} of your cycle. Keep tracking for better insights!
                    </p>
                  </div>
                  <Heart className="h-16 w-16 opacity-20" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Calendar className="h-8 w-8 text-purple-600" />
                    <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100">Active</Badge>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">Day {cycleDay}</p>
                  <p className="text-sm text-gray-500">Current Cycle Day</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Target className="h-8 w-8 text-pink-600" />
                    <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100">High</Badge>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">65%</p>
                  <p className="text-sm text-gray-500">Fertility Score</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="h-8 w-8 text-rose-600" />
                    <Badge className="bg-rose-100 text-rose-600 hover:bg-rose-100">12 Tests</Badge>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-500">Test Completion</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Award className="h-8 w-8 text-amber-600" />
                    <Badge className="bg-amber-100 text-amber-600 hover:bg-amber-100">7 Days</Badge>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">21</p>
                  <p className="text-sm text-gray-500">Day Streak</p>
                </CardContent>
              </Card>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Thermometer className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Log Today's Data</h3>
                      <p className="text-sm text-gray-500">Track symptoms & BBT</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Log Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Video className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Book Consultation</h3>
                      <p className="text-sm text-gray-500">Talk to a specialist</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-pink-600 text-pink-600 hover:bg-pink-50 bg-transparent"
                    onClick={() => setCurrentTab("telemedicine")}
                  >
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Learn More</h3>
                      <p className="text-sm text-gray-500">Educational resources</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-rose-600 text-rose-600 hover:bg-rose-50 bg-transparent"
                  >
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest fertility tracking updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: Droplet,
                      color: "text-blue-600",
                      bg: "bg-blue-100",
                      title: "Period Started",
                      time: "2 days ago",
                    },
                    {
                      icon: Activity,
                      color: "text-purple-600",
                      bg: "bg-purple-100",
                      title: "LH Test Completed",
                      time: "5 days ago",
                    },
                    {
                      icon: Video,
                      color: "text-pink-600",
                      bg: "bg-pink-100",
                      title: "Consultation with Dr. Amara",
                      time: "1 week ago",
                    },
                    {
                      icon: MessageSquare,
                      color: "text-rose-600",
                      bg: "bg-rose-100",
                      title: "Joined TTC Support Group",
                      time: "2 weeks ago",
                    },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-10 h-10 ${activity.bg} rounded-full flex items-center justify-center`}>
                        <activity.icon className={`h-5 w-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AdSense Ad */}
            <div className="w-full">
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
              <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
            </div>
          </TabsContent>

          {/* Cycle Tracking Tab */}
          <TabsContent value="cycle" className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Cycle Calendar</CardTitle>
                <CardDescription>Track your menstrual cycle and fertile window</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
                    const isPeriod = day <= 5
                    const isFertile = day >= 12 && day <= 16
                    const isToday = day === cycleDay

                    return (
                      <div
                        key={day}
                        className={`
                          aspect-square rounded-lg flex items-center justify-center text-sm font-medium cursor-pointer
                          transition-all hover:scale-110
                          ${isPeriod ? "bg-red-100 text-red-600 hover:bg-red-200" : ""}
                          ${isFertile ? "bg-green-100 text-green-600 hover:bg-green-200" : ""}
                          ${isToday ? "ring-2 ring-purple-600 bg-purple-100 text-purple-600" : ""}
                          ${!isPeriod && !isFertile && !isToday ? "bg-gray-50 hover:bg-gray-100" : ""}
                        `}
                      >
                        {day}
                      </div>
                    )
                  })}
                </div>

                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100 rounded"></div>
                    <span className="text-sm">Period</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-100 rounded"></div>
                    <span className="text-sm">Fertile Window</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-100 ring-2 ring-purple-600 rounded"></div>
                    <span className="text-sm">Today</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Cycle Length</h3>
                  <p className="text-3xl font-bold text-purple-600">28 days</p>
                  <p className="text-sm text-gray-500 mt-1">Average cycle length</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Period Duration</h3>
                  <p className="text-3xl font-bold text-red-600">5 days</p>
                  <p className="text-sm text-gray-500 mt-1">Average period length</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Next Period</h3>
                  <p className="text-3xl font-bold text-pink-600">14 days</p>
                  <p className="text-sm text-gray-500 mt-1">Expected in 14 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Log Symptoms */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Log Today's Data</CardTitle>
                <CardDescription>Track symptoms, mood, and other observations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Symptoms</label>
                  <div className="flex flex-wrap gap-2">
                    {["Cramps", "Headache", "Bloating", "Mood Swings", "Fatigue", "Tender Breasts"].map((symptom) => (
                      <Badge
                        key={symptom}
                        variant="outline"
                        className="cursor-pointer hover:bg-purple-100 hover:border-purple-600"
                      >
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Basal Body Temperature (°C)</label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="36.5"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Any additional observations..."
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Save Entry
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <Card className="border-0 shadow-md bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">AI-Powered Insights</h2>
                    <p className="text-purple-100">Personalized recommendations based on your data</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">12 New Insights</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Updated Today</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Fertility Score */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Your Fertility Score</CardTitle>
                <CardDescription>Based on your cycle data and test results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      65%
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Good fertility potential</p>
                  </div>
                  <div className="w-24 h-24 rounded-full border-8 border-purple-200 flex items-center justify-center">
                    <Target className="h-10 w-10 text-purple-600" />
                  </div>
                </div>
                <Progress value={65} className="h-3 mb-2" />
                <p className="text-sm text-gray-600">
                  Your fertility score has increased by 8% this month. Keep tracking for better accuracy!
                </p>
              </CardContent>
            </Card>

            {/* Personalized Recommendations */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>AI-generated insights based on your unique data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: Thermometer,
                    title: "Temperature Tracking",
                    description: "Your BBT shows a consistent pattern. Continue tracking to confirm ovulation timing.",
                    priority: "High",
                    color: "purple",
                  },
                  {
                    icon: Activity,
                    title: "LH Surge Detected",
                    description:
                      "Your LH levels indicate ovulation in the next 24-36 hours. This is your peak fertility window.",
                    priority: "Critical",
                    color: "red",
                  },
                  {
                    icon: Heart,
                    title: "Lifestyle Improvements",
                    description:
                      "Consider reducing caffeine intake and increasing water consumption for optimal fertility.",
                    priority: "Medium",
                    color: "pink",
                  },
                  {
                    icon: BookOpen,
                    title: "Recommended Reading",
                    description: "New article available: Understanding AMH Levels and What They Mean for You",
                    priority: "Low",
                    color: "blue",
                  },
                ].map((rec, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 bg-${rec.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <rec.icon className={`h-6 w-6 text-${rec.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{rec.title}</h3>
                        <Badge variant="outline" className={`text-xs border-${rec.color}-600 text-${rec.color}-600`}>
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{rec.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-3" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Test Results */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Recent Test Results</CardTitle>
                <CardDescription>Your hormone levels and fertility markers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "AMH (Anti-Müllerian Hormone)", value: "2.5 ng/mL", status: "Normal", color: "green" },
                    {
                      name: "FSH (Follicle Stimulating Hormone)",
                      value: "6.8 mIU/mL",
                      status: "Normal",
                      color: "green",
                    },
                    { name: "LH (Luteinizing Hormone)", value: "12.3 mIU/mL", status: "High", color: "yellow" },
                    { name: "Estradiol", value: "145 pg/mL", status: "Normal", color: "green" },
                  ].map((test, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{test.name}</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{test.value}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          className={`${
                            test.color === "green"
                              ? "bg-green-100 text-green-600"
                              : test.color === "yellow"
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-red-100 text-red-600"
                          } hover:${
                            test.color === "green"
                              ? "bg-green-100"
                              : test.color === "yellow"
                                ? "bg-yellow-100"
                                : "bg-red-100"
                          }`}
                        >
                          {test.status}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">5 days ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Telemedicine Tab */}
          <TabsContent value="telemedicine" className="space-y-6">
            <Card className="border-0 shadow-md bg-gradient-to-r from-pink-600 to-rose-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Video className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Expert Consultations</h2>
                    <p className="text-pink-100">Connect with fertility specialists from anywhere</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available Doctors */}
            <div>
              <h3 className="text-xl font-bold mb-4">Available Specialists</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Dr. Amara Okonkwo",
                    specialty: "Reproductive Endocrinologist",
                    rating: 4.9,
                    reviews: 127,
                    price: "$50",
                    availability: "Available Today",
                    image: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Dr. Fatima Hassan",
                    specialty: "Fertility Specialist",
                    rating: 4.8,
                    reviews: 98,
                    price: "$45",
                    availability: "Available Tomorrow",
                    image: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Dr. Thabo Mwangi",
                    specialty: "OB/GYN",
                    rating: 4.9,
                    reviews: 156,
                    price: "$55",
                    availability: "Available Today",
                    image: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Dr. Zainab Ahmed",
                    specialty: "Fertility Counselor",
                    rating: 5.0,
                    reviews: 203,
                    price: "$40",
                    availability: "Available Today",
                    image: "/placeholder.svg?height=100&width=100",
                  },
                ].map((doctor, i) => (
                  <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600">
                          {doctor.name.charAt(4)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{doctor.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{doctor.rating}</span>
                            </div>
                            <span className="text-sm text-gray-400">({doctor.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-bold text-purple-600">{doctor.price}</p>
                              <Badge className="bg-green-100 text-green-600 hover:bg-green-100 mt-1">
                                {doctor.availability}
                              </Badge>
                            </div>
                            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Appointments */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      doctor: "Dr. Amara Okonkwo",
                      date: "Today, 3:00 PM",
                      type: "Follow-up Consultation",
                      status: "Confirmed",
                    },
                    {
                      doctor: "Dr. Zainab Ahmed",
                      date: "Tomorrow, 10:00 AM",
                      type: "Initial Consultation",
                      status: "Confirmed",
                    },
                  ].map((apt, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <Video className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{apt.doctor}</h3>
                          <p className="text-sm text-gray-600">{apt.type}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{apt.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">{apt.status}</Badge>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          Join Call
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <Card className="border-0 shadow-md bg-gradient-to-r from-rose-600 to-pink-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Support Community</h2>
                    <p className="text-rose-100">Connect with others on similar journeys</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Groups */}
            <div>
              <h3 className="text-xl font-bold mb-4">Support Groups</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "TTC (Trying to Conceive)",
                    members: 12450,
                    posts: 3421,
                    description: "Share your journey with others trying to conceive",
                    icon: Heart,
                    color: "purple",
                  },
                  {
                    name: "PCOS Warriors",
                    members: 8932,
                    posts: 2156,
                    description: "Support and advice for those with PCOS",
                    icon: Activity,
                    color: "pink",
                  },
                  {
                    name: "IVF Journey",
                    members: 6721,
                    posts: 1834,
                    description: "Connect with others going through IVF",
                    icon: Target,
                    color: "rose",
                  },
                  {
                    name: "Success Stories",
                    members: 15678,
                    posts: 4567,
                    description: "Celebrate victories and inspire hope",
                    icon: Award,
                    color: "amber",
                  },
                ].map((group, i) => (
                  <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-${group.color}-100 rounded-full flex items-center justify-center`}
                        >
                          <group.icon className={`h-6 w-6 text-${group.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{group.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">{group.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{group.members.toLocaleString()} members</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{group.posts.toLocaleString()} posts</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Join Group
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Discussions */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Recent Discussions</CardTitle>
                <CardDescription>Latest posts from the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Just got my first positive OPK! 🎉",
                      author: "Sarah M.",
                      group: "TTC (Trying to Conceive)",
                      time: "2 hours ago",
                      replies: 23,
                      likes: 67,
                    },
                    {
                      title: "Tips for managing PCOS symptoms naturally",
                      author: "Amina K.",
                      group: "PCOS Warriors",
                      time: "5 hours ago",
                      replies: 41,
                      likes: 134,
                    },
                    {
                      title: "Starting IVF next week - feeling nervous",
                      author: "Jennifer L.",
                      group: "IVF Journey",
                      time: "1 day ago",
                      replies: 56,
                      likes: 89,
                    },
                    {
                      title: "BFP after 2 years! Never give up hope ❤️",
                      author: "Maria R.",
                      group: "Success Stories",
                      time: "2 days ago",
                      replies: 142,
                      likes: 567,
                    },
                  ].map((post, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center text-sm font-bold text-purple-600">
                        {post.author.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{post.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <span className="font-medium">{post.author}</span>
                          <span>•</span>
                          <span>{post.group}</span>
                          <span>•</span>
                          <span>{post.time}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.replies} replies</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes} likes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
