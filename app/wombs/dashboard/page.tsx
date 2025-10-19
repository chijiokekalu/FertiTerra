"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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
  Target,
  Loader2,
  CheckCircle,
} from "lucide-react"
import { logout, isAuthenticated, getStoredUser } from "@/lib/cognito-auth"

interface User {
  name?: string
  email: string
  sub: string
  email_verified?: boolean
  picture?: string
}

export default function WombsDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [currentTab, setCurrentTab] = useState("dashboard")
  const [cycleDay] = useState(14)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push("/wombs")
      return
    }

    // Get user data
    const userData = getStoredUser()
    if (userData) {
      setUser(userData)
    }

    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    logout()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="text-center">
          <Loader2 className="h-16 w-16 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-700">Loading your fertility journey...</p>
          <p className="text-sm text-gray-500 mt-2">Preparing your personalized dashboard</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const displayName = user.name || user.email.split("@")[0]
  const initials = displayName.charAt(0).toUpperCase()
  const avatarUrl =
    user.picture ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=9333ea&color=fff&size=100`

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
                <p className="text-xs text-gray-500">by FertiTerra Technologies</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>

              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium">{displayName}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 justify-end">
                    {user.email}
                    {user.email_verified && <CheckCircle className="h-3 w-3 text-green-500" />}
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={avatarUrl || "/placeholder.svg"}
                    alt={displayName}
                    className="w-10 h-10 rounded-full border-2 border-purple-200"
                  />
                  {user.email_verified && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle className="h-2.5 w-2.5 text-white" />
                    </div>
                  )}
                </div>
              </div>

              <Button id="logout-wombs-btn" variant="ghost" size="icon" onClick={handleLogout} title="Logout">
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
                    <h2 className="text-2xl font-bold mb-2">Welcome back, {displayName}! 👋</h2>
                    <p className="text-purple-100">
                      You're on Day {cycleDay} of your cycle. Keep tracking for better insights!
                    </p>
                    {user.email_verified && (
                      <div className="mt-2 inline-flex items-center gap-1 bg-white/20 rounded-full px-3 py-1 text-xs">
                        <CheckCircle className="h-3 w-3" />
                        Verified Account
                      </div>
                    )}
                  </div>
                  <Heart className="h-16 w-16 opacity-20" />
                </div>
              </CardContent>
            </Card>

            {/* User Profile Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={avatarUrl || "/placeholder.svg"}
                      alt={displayName}
                      className="w-24 h-24 rounded-full border-4 border-white/60 shadow-lg"
                    />
                    {user.email_verified && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-md">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{displayName}</h3>
                    <p className="text-purple-100 mb-3 flex items-center gap-2">
                      {user.email}
                      {user.email_verified && (
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Verified</span>
                      )}
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/20">Premium Member</Badge>
                      <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/20">
                        21 Day Streak 🔥
                      </Badge>
                    </div>
                  </div>
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
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => setCurrentTab("cycle")}
                  >
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
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
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
          </TabsContent>

          {/* Other tabs */}
          <TabsContent value="cycle" className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Cycle Tracking</CardTitle>
                <CardDescription>Track your menstrual cycle and fertile window</CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Cycle tracking features coming soon...</p>
                  <p className="text-sm text-gray-500 mt-2">Start logging your daily data to see insights here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>AI Insights</CardTitle>
                <CardDescription>Personalized fertility recommendations</CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-pink-300 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">AI insights coming soon...</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Our AI will analyze your data to provide personalized insights
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="telemedicine" className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Telemedicine</CardTitle>
                <CardDescription>Connect with fertility specialists</CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-16 w-16 text-rose-300 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Telemedicine features coming soon...</p>
                  <p className="text-sm text-gray-500 mt-2">Book video consultations with certified specialists</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>Connect with others on similar journeys</CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Community features coming soon...</p>
                  <p className="text-sm text-gray-500 mt-2">Join support groups and connect with others</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
