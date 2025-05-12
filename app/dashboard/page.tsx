import Link from "next/link"
import { Bell, Calendar, FileText, MessageCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/appointments" className="text-sm font-medium">
              Appointments
            </Link>
            <Link href="/community" className="text-sm font-medium">
              Community
            </Link>
            <Link href="/resources" className="text-sm font-medium">
              Resources
            </Link>
          </nav>
          <div className="ml-4 flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Ada</h1>
            <p className="text-muted-foreground">Track your progress and manage your fertility journey.</p>
          </div>
          <Button>
            <MessageCircle className="mr-2 h-4 w-4" />
            Message Doctor
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Your Plan</CardTitle>
              <CardDescription>TTC 60-Day Plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>Progress</div>
                    <div className="font-medium">Day 23 of 60</div>
                  </div>
                  <Progress value={38} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    View Plan
                  </Button>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Next Appointment</CardTitle>
              <CardDescription>Upcoming consultation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-rose-100 p-2">
                    <Calendar className="h-5 w-5 text-rose-700" />
                  </div>
                  <div>
                    <div className="font-medium">Follow-up Consultation</div>
                    <div className="text-sm text-muted-foreground">May 15, 2025 • 10:00 AM</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    Reschedule
                  </Button>
                  <Button className="w-full">Join Call</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Your Doctor</CardTitle>
              <CardDescription>Fertility specialist</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Doctor" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Dr. Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">OB/GYN, Fertility Specialist</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="tracking">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="tracking">Fertility Tracking</TabsTrigger>
              <TabsTrigger value="tasks">Tasks & Reminders</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="tracking" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Fertility Tracking</CardTitle>
                  <CardDescription>Track your cycle and fertility indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">
                      Your fertility tracking dashboard will appear here after your initial consultation.
                    </p>
                    <Button>
                      <Calendar className="mr-2 h-4 w-4" />
                      Start Tracking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tasks" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tasks & Reminders</CardTitle>
                  <CardDescription>Your upcoming tasks and reminders</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="rounded-full bg-rose-100 p-2">
                        <FileText className="h-5 w-5 text-rose-700" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Complete health questionnaire</div>
                        <div className="text-sm text-muted-foreground">Due in 2 days</div>
                      </div>
                      <Button size="sm">Complete</Button>
                    </li>
                    <li className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="rounded-full bg-rose-100 p-2">
                        <Calendar className="h-5 w-5 text-rose-700" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Schedule hormone test</div>
                        <div className="text-sm text-muted-foreground">Due in 5 days</div>
                      </div>
                      <Button size="sm">Schedule</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="resources" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                  <CardDescription>Educational materials and resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="rounded-full bg-rose-100 p-2">
                        <FileText className="h-5 w-5 text-rose-700" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Understanding Your Fertility</div>
                        <div className="text-sm text-muted-foreground">Guide • 10 min read</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Read
                      </Button>
                    </li>
                    <li className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="rounded-full bg-rose-100 p-2">
                        <FileText className="h-5 w-5 text-rose-700" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Nutrition for Fertility</div>
                        <div className="text-sm text-muted-foreground">Guide • 15 min read</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Read
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
