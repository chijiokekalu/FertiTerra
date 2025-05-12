import Link from "next/link"
import { ArrowLeft, Camera, Mic, PhoneOff, Settings, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function ConsultationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4">
        <div className="container flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-semibold">Consultation with Dr. Sarah Johnson</h1>
            <p className="text-sm text-muted-foreground">May 8, 2025 • 10:00 AM</p>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-muted aspect-video w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Doctor" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute bottom-4 right-4 w-48 h-36 bg-background rounded-lg overflow-hidden border">
                  <div className="relative w-full h-full bg-muted flex items-center justify-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="You" />
                      <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 p-4 border-t">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                  <Mic className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="destructive" size="icon" className="rounded-full h-12 w-12">
                  <PhoneOff className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                  <Camera className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="chat">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
                    <div className="flex gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Doctor" />
                        <AvatarFallback>DR</AvatarFallback>
                      </Avatar>
                      <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm font-medium">Dr. Sarah Johnson</p>
                        <p className="text-sm">Hello Ada, how are you feeling today?</p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <div className="bg-rose-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          I'm doing well, thank you. I've been following the plan you recommended.
                        </p>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                        <AvatarFallback>ME</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Doctor" />
                        <AvatarFallback>DR</AvatarFallback>
                      </Avatar>
                      <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm font-medium">Dr. Sarah Johnson</p>
                        <p className="text-sm">
                          That's great to hear! Let's go through your progress and see how things are going.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Type a message..." className="flex-1" />
                    <Button>Send</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notes" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Consultation Notes</h3>
                      <textarea
                        className="w-full min-h-[400px] p-3 text-sm border rounded-md"
                        placeholder="Take notes during your consultation..."
                      ></textarea>
                    </div>
                    <Button className="w-full">Save Notes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
