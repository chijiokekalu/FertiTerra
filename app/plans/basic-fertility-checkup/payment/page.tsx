"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Header } from "@/components/header"
import { CreditCard, Shield, CheckCircle, Clock } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // In a real app, process payment with Stripe, PayPal, etc.
      const paymentResponse = await fetch("/api/fertility-checkup/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 500, // $5.00 in cents
          paymentMethod: paymentMethod,
          ...formData,
        }),
      })

      if (paymentResponse.ok) {
        const result = await paymentResponse.json()
        router.push(`/plans/basic-fertility-checkup/payment-success?paymentId=${result.paymentId}`)
      } else {
        throw new Error("Payment failed")
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Complete Your Payment</h1>
              <p className="text-lg text-gray-600">Secure payment for your Basic Fertility Checkup</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Information
                    </CardTitle>
                    <CardDescription>Your payment information is secure and encrypted</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Payment Method */}
                    <div>
                      <Label className="text-base font-medium">Payment Method</Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            Credit/Debit Card
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Card Details */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardholderName">Cardholder Name *</Label>
                        <Input
                          id="cardholderName"
                          value={formData.cardholderName}
                          onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Billing Address */}
                    <div className="space-y-4">
                      <h3 className="font-medium">Billing Address</h3>

                      <div>
                        <Label htmlFor="billingAddress">Address *</Label>
                        <Input
                          id="billingAddress"
                          value={formData.billingAddress}
                          onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                          placeholder="123 Main Street"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP Code *</Label>
                          <Input
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange("zipCode", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Shield className="h-4 w-4" />
                      <span>Your payment information is encrypted and secure</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Basic Fertility Checkup</span>
                      <span>$5.00</span>
                    </div>

                    <div className="border-t pt-4 flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>$5.00</span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>15-minute consultation included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Personalized fertility assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Written recommendations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span>Schedule consultation after payment</span>
                      </div>
                    </div>

                    <Button
                      onClick={handlePayment}
                      className="w-full bg-rose-500 hover:bg-rose-600"
                      disabled={
                        isProcessing ||
                        !formData.cardholderName ||
                        !formData.cardNumber ||
                        !formData.expiryDate ||
                        !formData.cvv
                      }
                    >
                      {isProcessing ? "Processing Payment..." : "Complete Payment - $5.00"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
