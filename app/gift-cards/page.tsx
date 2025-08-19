"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { useCart } from "@/context/cart-context"
import { Gift, Heart, CreditCard } from "lucide-react"

export default function GiftCardsPage() {
  const [shopConfig, setShopConfig] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState("")
  const [recipientEmail, setRecipientEmail] = useState("")
  const [message, setMessage] = useState("")
  const { addToCart } = useCart()

  useEffect(() => {
    fetchShopConfig()
  }, [])

  const fetchShopConfig = async () => {
    try {
      const response = await fetch("/api/shop")
      const data = await response.json()
      setShopConfig(data)
    } catch (error) {
      console.error("Failed to fetch shop config:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddGiftCardToCart = () => {
    const amount = selectedAmount || Number.parseInt(customAmount)
    if (!amount || amount < 10) {
      alert("Please select or enter a valid amount (minimum $10)")
      return
    }

    addToCart({
      id: `gift-card-${amount}`,
      name: `FertiTerra Gift Card - $${amount}`,
      price: amount,
      quantity: 1,
      image: "/placeholder.svg?height=200&width=300&text=Gift+Card",
      giftCard: {
        recipientEmail,
        message,
      },
    })

    // Reset form
    setSelectedAmount(null)
    setCustomAmount("")
    setRecipientEmail("")
    setMessage("")
  }

  const giftCardTab = shopConfig?.shopTabs.find((tab) => tab.name === "Gift cards")

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
            <p>Loading gift cards...</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-rose-50 to-purple-50 py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                {giftCardTab?.content?.title || "FertiTerra Gift Cards"}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {giftCardTab?.content?.description ||
                  "Give the gift of care and support for someone's fertility journey."}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Gift Card Preview */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-rose-500 to-purple-600 text-white overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold">FertiTerra</h3>
                        <p className="text-rose-100">Gift Card</p>
                      </div>
                      <Gift className="h-8 w-8 text-rose-200" />
                    </div>
                    <div className="space-y-4">
                      <div className="text-3xl font-bold">${selectedAmount || customAmount || "XX"}</div>
                      <div className="text-sm text-rose-100">
                        Valid for fertility tests, consultations, and merchandise
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-rose-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Heart className="h-5 w-5 text-rose-500 mr-2" />
                    What can gift cards be used for?
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Fertility and hormone testing</li>
                    <li>• Virtual consultations with specialists</li>
                    <li>• FertiTerra merchandise</li>
                    <li>• Educational resources and courses</li>
                    <li>• Community support programs</li>
                  </ul>
                </div>
              </div>

              {/* Gift Card Form */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Choose Gift Card Amount</CardTitle>
                    <CardDescription>Select a preset amount or enter a custom value</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Preset Amounts */}
                    <div>
                      <Label className="text-base font-medium">Preset Amounts</Label>
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        {giftCardTab?.content?.options?.map((option, index) => (
                          <Button
                            key={index}
                            variant={selectedAmount === option.value ? "default" : "outline"}
                            className={selectedAmount === option.value ? "bg-rose-500 hover:bg-rose-600" : ""}
                            onClick={() => {
                              setSelectedAmount(option.value)
                              setCustomAmount("")
                            }}
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Amount */}
                    <div>
                      <Label htmlFor="custom-amount">Custom Amount (minimum $10)</Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        min="10"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value)
                          setSelectedAmount(null)
                        }}
                      />
                    </div>

                    {/* Recipient Email */}
                    <div>
                      <Label htmlFor="recipient-email">Recipient Email (optional)</Label>
                      <Input
                        id="recipient-email"
                        type="email"
                        placeholder="recipient@example.com"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Leave blank to send the gift card to yourself</p>
                    </div>

                    {/* Personal Message */}
                    <div>
                      <Label htmlFor="message">Personal Message (optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Write a personal message for the recipient..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-rose-500 hover:bg-rose-600" onClick={handleAddGiftCardToCart}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Add Gift Card to Cart
                    </Button>
                  </CardFooter>
                </Card>

                <div className="text-center text-sm text-gray-500">
                  <p>Gift cards are delivered digitally via email</p>
                  <p>No expiration date • Can be used multiple times until balance is zero</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
