"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Auth } from "aws-amplify"
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
  Settings,
} from "lucide-react"

interface UserData {
  name: string
  email: string
  given_name?: string
  family_name?: string
  cycle_length: string
  fertility_goal: string
  plan_type: string
  referral_code: string
  email_verified: boolean
}

export default function WombsDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [currentTab, setCurrentTab] = useState("dashboard")
  const [cycleDay, setCycleDay] = useState(14)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser()
        const attributes = await Auth.userAttributes(currentUser)

        const customAttrs: Record<string, string> = {}
        attributes.forEach((attr) => {
          customAttrs[attr.Name] = attr.Value
        })

        const userData: UserData = {
          name: customAttrs.given_name || customAttrs.email.split("@")[0],
          email: customAttrs.email,
          given_name: customAttrs.given_name,
          family_name: customAttrs.family_name,
          cycle_length: customAttrs["custom:cycle_length"] || "28",
          fertility_goal: customAttrs["custom:fertility_goal"] || "tracking",
          plan_type: customAttrs["custom:plan_type"] || "free",
          referral_code: customAttrs["custom:referral_code"] || "",
          email_verified: customAttrs.email_verified === "true",
        }

        setUser(userData)
        localStorage.setItem("wombs_user", JSON.stringify(userData))
      } catch (error) {
        console.error("Error loading user data:", error)
        router.push("/wombs/login")
      } finally {
        setIsLoading(false)
      }
    }

    loadUserData()
  }, [router])

  const handleLogout = async () => {
    try {
      await Auth.signOut()
      localStorage.removeItem("wombs_user")
      localStorage.removeItem("wombs_remember")
      router.push("/wombs")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const getFertilityGoalDisplay = (goal: string) => {
    const goals: Record<string, string> = {
      tracking: "General Tracking",
      conceiving: "Trying to Conceive",
      preventing: "Pregnancy Prevention",
      health: "Health Monitoring",
      planning: "Future Planning",
    }
    return goals[goal] || goal
  }

  const getPlanDisplay = (plan: string) => {
    const plans: Record<string, { name: string; color: string }> = {
      free: { name: "Free Plan", color: "bg-gray-100 text-gray-600" },
      basic: { name: "Basic Plan", color: "bg-blue-100 text-blue-600" },
      premium: { name: "Premium Plan", color: "bg-purple-100 text-purple-600" },
      enterprise: { name: "Enterprise Plan", color: "bg-amber-100 text-amber-600" },
    }
    return plans[plan] || plans.free
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

  const displayName = user.given_name || user.name
  const fullName = user.given_name && user.family_name ? `${user.given_name} ${user.family_name}` : user.name
  const initials = `${user.given_name?.charAt(0) || ""}${user.family_name?.charAt(0) || user.name.charAt(0)}`
  const planInfo = getPlanDisplay(user.plan_type)

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
                  <p className="text-sm font-medium">{fullName}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 justify-end">
                    {user.email}
                    {user.email_verified && <CheckCircle className="h-3 w-3 text-green-500" />}
                  </p>
                </div>
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {initials}
                  </div>
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
                    <p className="text-purple-100 mb-2">
                      You're on Day {cycleDay} of your {user.cycle_length}-day cycle.
                    </p>
                    <p className="text-purple-100 text-sm">
                      Goal: <strong>{getFertilityGoalDisplay(user.fertility_goal)}</strong>
                    </p>
                    <div className="mt-3 flex items-center gap-2 flex-wrap">
                      {user.email_verified && (
                        <div className="inline-flex items-center gap-1 bg-white/20 rounded-full px-3 py-1 text-xs">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </div>
                      )}
                      <Badge className={`${planInfo.color} hover:${planInfo.color}`}>{planInfo.name}</Badge>
                      {user.referral_code && (
                        <Badge className="bg-amber-100 text-amber-600 hover:bg-amber-100">
                          Referred: {user.referral_code}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Heart className="h-16 w-16 opacity-20" />
                </div>
              </CardContent>
            </Card>

            {/* Personalized Profile Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 text-white">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white/60">
                        {initials}
                      </div>
                      {user.email_verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-md">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{fullName}</h3>
                      <p className="text-purple-100 text-sm mb-2">{user.email}</p>
                      <div className="flex gap-2">
                        <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/20">
                          {user.cycle_length} Day Cycle
                        </Badge>
                        <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/20">
                          21 Day Streak 🔥
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Settings className="h-5 w-5" />
                  </Button>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <p className="text-xs text-purple-100">Fertility Goal</p>
                    <p className="text-sm font-semibold mt-1">{getFertilityGoalDisplay(user.fertility_goal)}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <p className="text-xs text-purple-100">Current Plan</p>
                    <p className="text-sm font-semibold mt-1">{planInfo.name}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <p className="text-xs text-purple-100">Member Since</p>
                    <p className="text-sm font-semibold mt-1">Dec 2024</p>
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
                  <p className="text-sm text-gray-500">of {user.cycle_length}-day cycle</p>
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

            {/* Personalized Action Cards based on fertility goal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {user.fertility_goal === "conceiving" && (
                <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-pink-50 to-rose-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Ovulation Tracker</h3>
                        <p className="text-sm text-gray-500">Track your fertile window</p>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
                      onClick={() => setCurrentTab("cycle")}
                    >
                      Start Tracking <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )}

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
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Video className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Book Consultation</h3>
                      <p className="text-sm text-gray-500">Talk to a specialist</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
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
                      title:
                        user.fertility_goal === "conceiving" ? "Joined TTC Support Group" : "Joined Community Group",
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

          {/* Other tabs remain the same */}
          <TabsContent value="cycle" className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Cycle Tracking</CardTitle>
                <CardDescription>Track your {user.cycle_length}-day menstrual cycle and fertile window</CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Cycle tracking features coming soon...</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Your {user.cycle_length}-day cycle will be tracked automatically
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>AI Insights</CardTitle>
                <CardDescription>
                  Personalized recommendations for {getFertilityGoalDisplay(user.fertility_goal).toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-pink-300 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">AI insights coming soon...</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Get personalized insights based on your {user.cycle_length}-day cycle
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
                <CardDescription>
                  Connect with others on similar journeys {user.fertility_goal === "conceiving" && "(TTC Support)"}
                </CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Community features coming soon...</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Join support groups focused on {getFertilityGoalDisplay(user.fertility_goal).toLowerCase()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
