"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { useAuth } from "@/context/auth-context"
import { CheckCircle, ArrowRight, Package, Beaker, FileText, Calendar } from "lucide-react"

export default function HormoneFertilityTestPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const goals = [
    {
      id: "fertility",
      title: "Understand My Fertility",
      description: "Get insights into your reproductive health and fertility potential",
      icon: Calendar,
    },
    {
      id: "hormones",
      title: "Balance My Hormones",
      description: "Identify hormonal imbalances that may be affecting your health",
      icon: Beaker,
    },
    {
      id: "pcos",
      title: "Investigate PCOS",
      description: "Check for signs of Polycystic Ovary Syndrome",
      icon: FileText,
    },
    {
      id: "general",
      title: "General Wellness",
      description: "Comprehensive hormone check for overall health",
      icon: CheckCircle,
    },
  ]

  const symptoms = [
    "Irregular periods",
    "Heavy or painful periods",
    "Difficulty getting pregnant",
    "Mood swings",
    "Fatigue",
    "Weight changes",
    "Acne",
    "Hair loss",
    "Hot flashes",
    "Sleep problems",
    "Low libido",
    "Headaches",
  ]

  const addOns = [
    {
      id: "thyroid",
      title: "Thyroid Function",
      description: "Test TSH, T3, and T4 levels",
      price: 49,
    },
    {
      id: "vitamin-d",
      title: "Vitamin D",
      description: "Check your vitamin D levels",
      price: 29,
    },
    {
      id: "cortisol",
      title: "Cortisol",
      description: "Measure your stress hormone levels",
      price: 39,
    },
    {
      id: "testosterone",
      title: "Testosterone",
      description: "Evaluate your testosterone levels",
      price: 39,
    },
  ]

  const handleSymptomToggle = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom])
    }
  }

  const handleAddOnToggle = (addOn: string) => {
    if (selectedAddOns.includes(addOn)) {
      setSelectedAddOns(selectedAddOns.filter((a) => a !== addOn))
    } else {
      setSelectedAddOns([...selectedAddOns, addOn])
    }
  }

  const calculateTotal = () => {
    let total = 149 // Base price

    selectedAddOns.forEach((addOn) => {
      const addon = addOns.find((a) => a.id === addOn)
      if (addon) {
        total += addon.price
      }
    })

    return total
  }

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      if (!user) {
        router.push("/login?redirect=/checkout")
      } else {
        router.push("/checkout")
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Find the selected goal object
  const selectedGoalObject = goals.find((g) => g.id === selectedGoal)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Advanced Hormone and Fertility Test</h1>
              <p className="text-lg text-gray-600">
                Personalize your test kit to get the most relevant insights for your health goals.
              </p>
            </div>

            {/* Progress steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        step === currentStep
                          ? "bg-rose-500 text-white"
                          : step < currentStep
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                    </div>
                    <p className="text-sm mt-2">
                      {step === 1 ? "Your Goals" : step === 2 ? "Symptoms" : "Review & Checkout"}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative mt-2">
                <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full"></div>
                <div
                  className="absolute top-0 left-0 h-1 bg-rose-500 transition-all"
                  style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step 1: Goals */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">What's your main health goal?</h2>
                <p className="text-gray-600">
                  Select the primary reason you're interested in hormone testing. This helps us personalize your
                  results.
                </p>

                <RadioGroup
                  value={selectedGoal || ""}
                  onValueChange={setSelectedGoal}
                  className="grid gap-4 md:grid-cols-2"
                >
                  {goals.map((goal) => (
                    <div key={goal.id}>
                      <RadioGroupItem value={goal.id} id={goal.id} className="peer sr-only" />
                      <Label
                        htmlFor={goal.id}
                        className="flex flex-col h-full p-4 border rounded-lg cursor-pointer hover:border-rose-200 hover:bg-rose-50 peer-data-[state=checked]:border-rose-500 peer-data-[state=checked]:bg-rose-50"
                      >
                        <div className="flex items-start gap-3">
                          <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                            {goal.icon && <goal.icon className="h-4 w-4" />}
                          </div>
                          <div>
                            <p className="font-medium">{goal.title}</p>
                            <p className="text-sm text-gray-500">{goal.description}</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="flex justify-end">
                  <Button onClick={handleContinue} disabled={!selectedGoal} className="bg-rose-500 hover:bg-rose-600">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Symptoms */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">What symptoms are you experiencing?</h2>
                <p className="text-gray-600">
                  Select any symptoms you've been experiencing. This helps us focus on the most relevant hormones.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  {symptoms.map((symptom) => (
                    <div key={symptom} className="flex items-center space-x-2">
                      <Checkbox
                        id={`symptom-${symptom}`}
                        checked={selectedSymptoms.includes(symptom)}
                        onCheckedChange={() => handleSymptomToggle(symptom)}
                      />
                      <label
                        htmlFor={`symptom-${symptom}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {symptom}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button onClick={handleContinue} className="bg-rose-500 hover:bg-rose-600">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Checkout */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <h2 className="text-xl font-semibold">Review Your Personalized Test</h2>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Advanced Hormone and Fertility Test</CardTitle>
                        <CardDescription>Comprehensive hormone panel tailored to your needs</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="relative h-24 w-24 rounded-md overflow-hidden">
                            <Image src="/images/test-kit.jpg" alt="Hormone Test Kit" fill className="object-cover" />
                          </div>
                          <div>
                            <h3 className="font-medium">What's included:</h3>
                            <ul className="mt-2 space-y-1">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                <span className="text-sm">AMH (Anti-Müllerian Hormone)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                <span className="text-sm">FSH (Follicle Stimulating Hormone)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                <span className="text-sm">LH (Luteinizing Hormone)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                <span className="text-sm">Estradiol</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                <span className="text-sm">Progesterone</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                <span className="text-sm">Free Androgen Index</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Your selected goal:</h3>
                          <div className="flex items-center gap-2 p-3 bg-rose-50 rounded-md">
                            <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                              {selectedGoalObject?.icon && <selectedGoalObject.icon className="h-4 w-4" />}
                            </div>
                            <div>
                              <p className="font-medium">{selectedGoalObject?.title}</p>
                              <p className="text-sm text-gray-600">{selectedGoalObject?.description}</p>
                            </div>
                          </div>
                        </div>

                        {selectedSymptoms.length > 0 && (
                          <div className="space-y-2">
                            <h3 className="font-medium">Your selected symptoms:</h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedSymptoms.map((symptom) => (
                                <div key={symptom} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                  {symptom}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <div className="space-y-4">
                      <h3 className="font-medium">Add-on Tests (Optional)</h3>
                      <p className="text-sm text-gray-600">
                        Enhance your hormone test with these additional biomarkers for a more comprehensive analysis.
                      </p>

                      <div className="grid gap-4 md:grid-cols-2">
                        {addOns.map((addOn) => (
                          <div key={addOn.id} className="flex items-start space-x-3">
                            <Checkbox
                              id={`addon-${addOn.id}`}
                              checked={selectedAddOns.includes(addOn.id)}
                              onCheckedChange={() => handleAddOnToggle(addOn.id)}
                            />
                            <div className="flex-1">
                              <label htmlFor={`addon-${addOn.id}`} className="font-medium cursor-pointer">
                                {addOn.title} (+${addOn.price})
                              </label>
                              <p className="text-sm text-gray-500">{addOn.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between">
                          <span>Base Test</span>
                          <span>$149.00</span>
                        </div>

                        {selectedAddOns.length > 0 && (
                          <div className="space-y-2">
                            {selectedAddOns.map((addOn) => {
                              const addon = addOns.find((a) => a.id === addOn)
                              return (
                                <div key={addOn} className="flex justify-between text-sm">
                                  <span>{addon?.title}</span>
                                  <span>${addon?.price}.00</span>
                                </div>
                              )
                            })}
                          </div>
                        )}

                        <div className="border-t pt-4 flex justify-between font-medium">
                          <span>Total</span>
                          <span>${calculateTotal()}.00</span>
                        </div>

                        <div className="text-sm text-gray-500">
                          <p>Free shipping included</p>
                          <p>Results within 10 days</p>
                          <p>Includes doctor consultation</p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-4">
                        <Button className="w-full bg-rose-500 hover:bg-rose-600" onClick={handleContinue}>
                          Proceed to Checkout
                        </Button>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                          <Package className="h-4 w-4" />
                          <span>Free, discreet shipping</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t py-8 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} FertiTerra. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-rose-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-rose-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
