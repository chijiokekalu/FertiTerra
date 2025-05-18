import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Calendar, BookOpen, BarChart } from "lucide-react"
import Link from "next/link"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentUsers } from "@/components/recent-users"
import { CycleDistribution } from "@/components/cycle-distribution"

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">M</span>
              </div>
              <h1 className="text-xl font-bold">Makoko Admin</h1>
            </div>
            <nav className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/settings">Settings</Link>
              </Button>
              <Button size="sm">View Documentation</Button>
            </nav>
          </div>
        </header>

        <div className="container py-6">
          <div className="flex flex-col gap-1 mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">FertiTerra Technologies - Makoko Fertility Health Chatbot</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <DashboardStats
              title="Total Users"
              value="2,854"
              trend="up"
              trendValue="12%"
              description="Active users this month"
              icon={<Users className="h-4 w-4 text-muted-foreground" />}
            />
            <DashboardStats
              title="Messages"
              value="24,631"
              trend="up"
              trendValue="18%"
              description="Messages processed"
              icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />}
            />
            <DashboardStats
              title="Cycles Tracked"
              value="8,942"
              trend="up"
              trendValue="7%"
              description="Menstrual cycles tracked"
              icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
            />
            <DashboardStats
              title="Educational Content"
              value="156"
              trend="stable"
              description="Articles and resources"
              icon={<BookOpen className="h-4 w-4 text-muted-foreground" />}
            />
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid gap-4 md:grid-cols-7">
                <Card className="md:col-span-4">
                  <CardHeader>
                    <CardTitle>User Activity</CardTitle>
                    <CardDescription>Daily active users over the past 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
                      <BarChart className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Activity chart visualization</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-3">
                  <CardHeader>
                    <CardTitle>Cycle Distribution</CardTitle>
                    <CardDescription>Average cycle length distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CycleDistribution />
                  </CardContent>
                </Card>

                <Card className="md:col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Users</CardTitle>
                    <CardDescription>Recently active users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentUsers />
                  </CardContent>
                </Card>

                <Card className="md:col-span-4">
                  <CardHeader>
                    <CardTitle>Popular Topics</CardTitle>
                    <CardDescription>Most requested information topics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Ovulation Prediction</p>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Fertility Window</p>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Pregnancy Symptoms</p>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "52%" }}></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium">52%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Cycle Irregularities</p>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }}></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Nutrition & Fertility</p>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "38%" }}></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium">38%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>View and manage user data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center border border-dashed rounded-md">
                    <Users className="h-8 w-8 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">User management interface</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>Detailed analytics and insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center border border-dashed rounded-md">
                    <BarChart className="h-8 w-8 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Analytics dashboard</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Educational Content</CardTitle>
                  <CardDescription>Manage fertility health educational content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center border border-dashed rounded-md">
                    <BookOpen className="h-8 w-8 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Content management system</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
