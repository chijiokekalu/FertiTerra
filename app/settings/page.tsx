"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { saveSettings } from "@/lib/actions"

export default function SettingsPage() {
  const [phoneNumberId, setPhoneNumberId] = useState("664354320091881")
  const [businessAccountId, setBusinessAccountId] = useState("1350704746228347")
  const [accessToken, setAccessToken] = useState(
    "EAAPny48aM3sBO7WF2rs7ivZBCXbKZAj27uBdJCYQ0olDknhUDZB03gaqu8UOIwJ367RZCU6um95n3MOuZC622f1sOq0qphvNRRv4JiLIZCaAMxA7FZAGODnr2XNyO8FJtHUylFZC3759hrtB1vTClZA00WRKl8sAZBNXxKLUTtSGxkW5uafbCHZBjySMp6aikghDNWzQAZDZD",
  )
  const [verifyToken, setVerifyToken] = useState("makoko_fertility_verify_token")
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleSaveWhatsAppSettings = async () => {
    setIsSaving(true)
    setSaveSuccess(false)

    try {
      await saveSettings({
        phoneNumberId,
        businessAccountId,
        accessToken,
        verifyToken,
      })
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 3000)
    } catch (error) {
      console.error("Error saving settings:", error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container flex h-16 items-center py-4">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-xl font-bold">Settings</h1>
          </div>
        </header>

        <div className="container py-6">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
              <TabsTrigger value="ai">AI Configuration</TabsTrigger>
              <TabsTrigger value="content">Educational Content</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure general settings for Makoko</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bot-name">Bot Name</Label>
                    <Input id="bot-name" placeholder="Enter bot name" defaultValue="Makoko" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Enter company name" defaultValue="FertiTerra Technologies" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select
                      id="timezone"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      defaultValue="Africa/Lagos"
                    >
                      <option value="Africa/Lagos">West Africa Time (WAT)</option>
                      <option value="Africa/Nairobi">East Africa Time (EAT)</option>
                      <option value="Africa/Cairo">Eastern European Time (EET)</option>
                      <option value="UTC">Coordinated Universal Time (UTC)</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive email notifications for new users</p>
                    </div>
                    <Switch id="notifications" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="whatsapp">
              <Card>
                <CardHeader>
                  <CardTitle>WhatsApp Configuration</CardTitle>
                  <CardDescription>Configure your WhatsApp Business API connection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone-number-id">Phone Number ID</Label>
                    <Input
                      id="phone-number-id"
                      placeholder="Enter WhatsApp Phone Number ID"
                      value={phoneNumberId}
                      onChange={(e) => setPhoneNumberId(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-account-id">Business Account ID</Label>
                    <Input
                      id="business-account-id"
                      placeholder="Enter WhatsApp Business Account ID"
                      value={businessAccountId}
                      onChange={(e) => setBusinessAccountId(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="access-token">Access Token</Label>
                    <Input
                      id="access-token"
                      type="password"
                      placeholder="Enter WhatsApp Access Token"
                      value={accessToken}
                      onChange={(e) => setAccessToken(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="verify-token">Verify Token</Label>
                    <Input
                      id="verify-token"
                      placeholder="Enter Webhook Verify Token"
                      value={verifyToken}
                      onChange={(e) => setVerifyToken(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="webhook-url">Webhook URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="webhook-url"
                        readOnly
                        value={`${process.env.NEXT_PUBLIC_APP_URL || "https://your-domain.com"}/api/webhook`}
                      />
                      <Button
                        variant="outline"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `${process.env.NEXT_PUBLIC_APP_URL || "https://your-domain.com"}/api/webhook`,
                          )
                        }}
                      >
                        Copy
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <Button onClick={handleSaveWhatsAppSettings} disabled={isSaving}>
                      {isSaving ? "Saving..." : "Save Configuration"}
                    </Button>
                    {saveSuccess && (
                      <div className="flex items-center text-green-600">
                        <Check className="h-4 w-4 mr-1" />
                        <span>Settings saved successfully!</span>
                      </div>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <Card>
                <CardHeader>
                  <CardTitle>AI Configuration</CardTitle>
                  <CardDescription>Configure the AI model and behavior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="model">AI Model</Label>
                    <select
                      id="model"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      defaultValue="gpt-4o"
                    >
                      <option value="gpt-4o">GPT-4o</option>
                      <option value="gpt-4-turbo">GPT-4 Turbo</option>
                      <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="system-prompt">System Prompt</Label>
                    <Textarea
                      id="system-prompt"
                      placeholder="Enter system prompt for the AI"
                      className="min-h-[100px]"
                      defaultValue="You are Makoko, a fertility health assistant for FertiTerra Technologies. You help users track their menstrual cycles, predict ovulation, and provide fertility education. Be friendly, informative, and sensitive to the personal nature of fertility health."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-tokens">Max Response Length</Label>
                    <Input id="max-tokens" type="number" placeholder="Maximum tokens in response" defaultValue="500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-reply">Auto Reply</Label>
                      <p className="text-sm text-muted-foreground">Automatically reply to all incoming messages</p>
                    </div>
                    <Switch id="auto-reply" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save AI Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Educational Content</CardTitle>
                  <CardDescription>Manage fertility health educational content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="content-categories">Content Categories</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="ovulation" className="rounded border-gray-300" defaultChecked />
                        <Label htmlFor="ovulation">Ovulation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="menstrual-cycle"
                          className="rounded border-gray-300"
                          defaultChecked
                        />
                        <Label htmlFor="menstrual-cycle">Menstrual Cycle</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="fertility" className="rounded border-gray-300" defaultChecked />
                        <Label htmlFor="fertility">Fertility</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="pregnancy" className="rounded border-gray-300" defaultChecked />
                        <Label htmlFor="pregnancy">Pregnancy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="nutrition" className="rounded border-gray-300" defaultChecked />
                        <Label htmlFor="nutrition">Nutrition</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="reproductive-health"
                          className="rounded border-gray-300"
                          defaultChecked
                        />
                        <Label htmlFor="reproductive-health">Reproductive Health</Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content-frequency">Content Delivery Frequency</Label>
                    <select
                      id="content-frequency"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      defaultValue="weekly"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="on-demand">On Demand Only</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="proactive-content">Proactive Content</Label>
                      <p className="text-sm text-muted-foreground">Send educational content proactively</p>
                    </div>
                    <Switch id="proactive-content" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Content Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
