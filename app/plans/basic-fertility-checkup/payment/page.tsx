"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { CreditCard, Shield, CheckCircle, Clock, Smartphone, Building2, Copy } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function PaymentPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [mobileProvider, setMobileProvider] = useState("")
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    organizationName: "",
    contactPerson: "",
    organizationEmail: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    })
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 3000))

      const paymentData = {
        amount: 500, // $5.00 in cents
        paymentMethod: paymentMethod,
        mobileProvider: mobileProvider,
        ...formData,
      }

      const paymentResponse = await fetch("/api/fertility-checkup/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
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

  const isFormValid = () => {
    if (paymentMethod === "card") {
      return formData.cardholderName && formData.cardNumber && formData.expiryDate && formData.cvv
    } else if (paymentMethod === "mobile") {
      return mobileProvider && formData.phoneNumber
    } else if (paymentMethod === "bank") {
      return formData.organizationName && formData.contactPerson && formData.organizationEmail
    }
    return false
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
                    <CardDescription>Choose your preferred payment method</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Payment Method Selection */}
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
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mobile" id="mobile" />
                          <Label htmlFor="mobile" className="flex items-center gap-2">
                            <Smartphone className="h-4 w-4" />
                            Mobile Money
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank" className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            Bank Transfer (Organizations)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Card Payment Form */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                          <p className="font-medium">Accepted Cards:</p>
                          <p>Visa, Mastercard, Verve (Nigeria) via Paystack, Flutterwave, or Stripe</p>
                        </div>

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
                      </div>
                    )}

                    {/* Mobile Money Form */}
                    {paymentMethod === "mobile" && (
                      <div className="space-y-4">
                        <div className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                          <p className="font-medium">Available Mobile Money Providers:</p>
                          <p>MTN Mobile Money, Airtel Money, M-Pesa, MoMoPay</p>
                        </div>

                        <div>
                          <Label htmlFor="mobileProvider">Mobile Money Provider *</Label>
                          <Select value={mobileProvider} onValueChange={setMobileProvider}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your mobile money provider" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                              <SelectItem value="airtel">Airtel Money</SelectItem>
                              <SelectItem value="mpesa">M-Pesa</SelectItem>
                              <SelectItem value="momopay">MoMoPay</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="phoneNumber">Phone Number *</Label>
                          <Input
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                            placeholder="+250 XXX XXX XXX"
                            required
                          />
                        </div>

                        <div className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg">
                          <p className="font-medium">How it works:</p>
                          <ol className="list-decimal list-inside mt-2 space-y-1">
                            <li>Click "Complete Payment" below</li>
                            <li>You'll receive a payment prompt on your phone</li>
                            <li>Enter your mobile money PIN to confirm</li>
                            <li>Payment confirmation will be sent via SMS</li>
                          </ol>
                        </div>
                      </div>
                    )}

                    {/* Bank Transfer Form */}
                    {paymentMethod === "bank" && (
                      <div className="space-y-4">
                        <div className="text-sm text-gray-600 bg-purple-50 p-3 rounded-lg">
                          <p className="font-medium">For Organizations & NGOs:</p>
                          <p>Bank transfer payments with invoice generation available</p>
                        </div>

                        <div>
                          <Label htmlFor="organizationName">Organization Name *</Label>
                          <Input
                            id="organizationName"
                            value={formData.organizationName}
                            onChange={(e) => handleInputChange("organizationName", e.target.value)}
                            placeholder="Your Organization Name"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="contactPerson">Contact Person *</Label>
                          <Input
                            id="contactPerson"
                            value={formData.contactPerson}
                            onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="organizationEmail">Organization Email *</Label>
                          <Input
                            id="organizationEmail"
                            type="email"
                            value={formData.organizationEmail}
                            onChange={(e) => handleInputChange("organizationEmail", e.target.value)}
                            placeholder="contact@organization.com"
                            required
                          />
                        </div>

                        {/* Bank Details */}
                        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium">FertiTerra Technologies Bank Details</h3>

                          <div className="space-y-3">
                            <div>
                              <p className="font-medium text-sm text-gray-700">RWF Account:</p>
                              <div className="flex items-center justify-between bg-white p-2 rounded border">
                                <div className="text-sm">
                                  <p>
                                    <strong>Bank:</strong> Equity Bank Rwanda
                                  </p>
                                  <p>
                                    <strong>Account Name:</strong> FertiTerra Technologies
                                  </p>
                                  <p>
                                    <strong>Account Number:</strong> 4003201240597
                                  </p>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => copyToClipboard("4003201240597", "RWF Account Number")}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            <div>
                              <p className="font-medium text-sm text-gray-700">USD Account:</p>
                              <div className="flex items-center justify-between bg-white p-2 rounded border">
                                <div className="text-sm">
                                  <p>
                                    <strong>Bank:</strong> Equity Bank Rwanda
                                  </p>
                                  <p>
                                    <strong>Account Name:</strong> FertiTerra Technologies
                                  </p>
                                  <p>
                                    <strong>Swift Code:</strong> EQBLRWRWXXX
                                  </p>
                                  <p>
                                    <strong>Address:</strong> 24R6+C48, KG 11 Ave, Kigali
                                  </p>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => copyToClipboard("EQBLRWRWXXX", "Swift Code")}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
                            <p className="font-medium">Next Steps:</p>
                            <ol className="list-decimal list-inside mt-2 space-y-1">
                              <li>Submit this form to receive an invoice</li>
                              <li>Make payment to the appropriate account</li>
                              <li>Send payment confirmation to our team</li>
                              <li>We'll confirm and schedule your consultation</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    )}

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
                      disabled={isProcessing || !isFormValid()}
                    >
                      {isProcessing
                        ? "Processing Payment..."
                        : paymentMethod === "bank"
                          ? "Request Invoice - $5.00"
                          : "Complete Payment - $5.00"}
                    </Button>

                    {paymentMethod === "mobile" && (
                      <p className="text-xs text-center text-gray-500">
                        You'll receive a payment prompt on your mobile device
                      </p>
                    )}

                    {paymentMethod === "bank" && (
                      <p className="text-xs text-center text-gray-500">
                        An invoice will be sent to your organization email
                      </p>
                    )}
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
