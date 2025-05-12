import Link from "next/link"
import { Bell, MessageCircle, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function CommunityPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Community</h1>
            <p className="text-muted-foreground">Connect with others on similar fertility journeys.</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search discussions..." className="w-[200px] sm:w-[300px] pl-8" />
            </div>
            <Button>
              <MessageCircle className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </div>
        </div>

        <Tabs defaultValue="discussions">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
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
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Jane Doe</div>
                        <div className="text-xs text-muted-foreground">Posted 2 days ago</div>
                      </div>
                    </div>
                    <h3 className="font-medium mb-2">Success with the TTC Plan!</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      After 8 months of trying, I'm happy to share that I'm now 6 weeks pregnant! The hormone testing
                      and personalized plan really made a difference...
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>24 comments</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Sarah Miller</div>
                        <div className="text-xs text-muted-foreground">Posted 3 days ago</div>
                      </div>
                    </div>
                    <h3 className="font-medium mb-2">Perimenopause symptoms - what's working for you?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      I've been experiencing hot flashes and mood swings. My doctor recommended some lifestyle changes,
                      but I'd love to hear what's working for others...
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>32 comments</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>LW</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Lisa Wong</div>
                        <div className="text-xs text-muted-foreground">Posted 5 days ago</div>
                      </div>
                    </div>
                    <h3 className="font-medium mb-2">Nutrition tips for fertility</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      I've been making some dietary changes based on my doctor's recommendations. Here are some recipes
                      and meal plans that have been working for me...
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>18 comments</span>
                      </div>
                      <Button variant="ghost" size="sm">
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
          </TabsContent>

          <TabsContent value="groups" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Groups</CardTitle>
                <CardDescription>Join groups based on your interests and journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-rose-100 p-2">
                        <Users className="h-5 w-5 text-rose-700" />
                      </div>
                      <div>
                        <div className="font-medium">TTC Support Group</div>
                        <div className="text-xs text-muted-foreground">428 members</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Support and resources for those trying to conceive.
                    </p>
                    <Button size="sm">Join Group</Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-rose-100 p-2">
                        <Users className="h-5 w-5 text-rose-700" />
                      </div>
                      <div>
                        <div className="font-medium">Perimenopause & Beyond</div>
                        <div className="text-xs text-muted-foreground">312 members</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Navigate hormonal changes with community support.
                    </p>
                    <Button size="sm">Join Group</Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-rose-100 p-2">
                        <Users className="h-5 w-5 text-rose-700" />
                      </div>
                      <div>
                        <div className="font-medium">Fertility Nutrition</div>
                        <div className="text-xs text-muted-foreground">256 members</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Share recipes and nutrition tips for fertility health.
                    </p>
                    <Button size="sm">Join Group</Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-rose-100 p-2">
                        <Users className="h-5 w-5 text-rose-700" />
                      </div>
                      <div>
                        <div className="font-medium">Wellness & Self-Care</div>
                        <div className="text-xs text-muted-foreground">189 members</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Focus on holistic wellness during your fertility journey.
                    </p>
                    <Button size="sm">Join Group</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Groups
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Workshops, webinars, and community gatherings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-center min-w-[60px] rounded-lg bg-rose-100 p-2">
                        <div className="text-lg font-bold text-rose-700">15</div>
                        <div className="text-xs text-rose-700">May</div>
                      </div>
                      <div>
                        <div className="font-medium">Fertility Nutrition Workshop</div>
                        <div className="text-xs text-muted-foreground">Virtual • 7:00 PM - 8:30 PM</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Join our nutritionist for a workshop on foods that support fertility and hormonal balance.
                    </p>
                    <Button size="sm">Register</Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-center min-w-[60px] rounded-lg bg-rose-100 p-2">
                        <div className="text-lg font-bold text-rose-700">22</div>
                        <div className="text-xs text-rose-700">May</div>
                      </div>
                      <div>
                        <div className="font-medium">Q&A with Dr. Johnson</div>
                        <div className="text-xs text-muted-foreground">Virtual • 6:00 PM - 7:00 PM</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      An open Q&A session with our fertility specialist, Dr. Sarah Johnson.
                    </p>
                    <Button size="sm">Register</Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-center min-w-[60px] rounded-lg bg-rose-100 p-2">
                        <div className="text-lg font-bold text-rose-700">29</div>
                        <div className="text-xs text-rose-700">May</div>
                      </div>
                      <div>
                        <div className="font-medium">Perimenopause Support Circle</div>
                        <div className="text-xs text-muted-foreground">Virtual • 7:00 PM - 8:00 PM</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      A supportive gathering for women navigating perimenopause and menopause.
                    </p>
                    <Button size="sm">Register</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Events
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
