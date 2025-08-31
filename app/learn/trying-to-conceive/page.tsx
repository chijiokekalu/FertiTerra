import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, CheckCircle, Clock } from "lucide-react"

export default function TryingToConceivedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-rose-500">
            Home
          </Link>
          <span>/</span>
          <Link href="/learn" className="hover:text-rose-500">
            Learn
          </Link>
          <span>/</span>
          <span className="text-gray-900">Trying to Conceive</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-green-100 text-green-800">Learn</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Trying to Conceive</h1>
            <p className="text-xl text-gray-600">
              You've decided you're ready to start your family. Here's everything you need to know to optimize your
              chances of conception and support your journey to pregnancy.
            </p>
          </div>

          {/* Timeline Expectations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-rose-500" />
                <span>What to Expect: Conception Timeline</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">84%</div>
                  <p className="text-sm text-gray-600">of couples conceive within 1 year</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">50%</div>
                  <p className="text-sm text-gray-600">conceive within 6 months</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">30%</div>
                  <p className="text-sm text-gray-600">conceive within 3 months</p>
                </div>
              </div>
              <p className="text-gray-600">
                Remember, these are averages. Age, health, and individual factors all play a role in your personal
                timeline.
              </p>
            </CardContent>
          </Card>

          {/* Optimizing Your Chances */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-rose-500" />
                <span>Optimizing Your Chances</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Timing is Everything</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Track your ovulation cycle</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Have intercourse every 2-3 days during fertile window</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Use ovulation predictor kits</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Monitor cervical mucus changes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Lifestyle Optimization</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Take folic acid (400-800mcg daily)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Maintain healthy weight (BMI 18.5-24.9)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Limit alcohol and quit smoking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Manage stress levels</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Understanding Your Cycle */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Understanding Your Menstrual Cycle</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">The Fertile Window</h4>
                <p className="text-gray-600 mb-4">
                  Your fertile window is typically 6 days: the 5 days before ovulation and the day of ovulation itself.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <h5 className="font-medium text-red-800 mb-1">Days 1-5</h5>
                  <p className="text-xs text-red-600">Menstruation</p>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <h5 className="font-medium text-yellow-800 mb-1">Days 6-13</h5>
                  <p className="text-xs text-yellow-600">Follicular Phase</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-1">Day 14</h5>
                  <p className="text-xs text-green-600">Ovulation</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-1">Days 15-28</h5>
                  <p className="text-xs text-blue-600">Luteal Phase</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <h5 className="font-medium text-green-800 mb-2">Signs of Ovulation</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Clear, stretchy cervical mucus (like egg whites)</li>
                  <li>• Slight increase in basal body temperature</li>
                  <li>• Mild pelvic pain on one side</li>
                  <li>• Positive ovulation predictor test</li>
                  <li>• Increased libido</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Nutrition for Fertility */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Nutrition for Conception</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Foods to Emphasize</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Leafy greens (spinach, ugwu, waterleaf)</li>
                    <li>• Whole grains (brown rice, oats, millet)</li>
                    <li>• Lean proteins (fish, chicken, beans)</li>
                    <li>• Healthy fats (avocado, nuts, olive oil)</li>
                    <li>• Colorful fruits and vegetables</li>
                    <li>• Dairy or fortified alternatives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Nutrients</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • <strong>Folic Acid:</strong> 400-800mcg daily
                    </li>
                    <li>
                      • <strong>Iron:</strong> 18mg daily
                    </li>
                    <li>
                      • <strong>Calcium:</strong> 1000mg daily
                    </li>
                    <li>
                      • <strong>Vitamin D:</strong> 600-800 IU daily
                    </li>
                    <li>
                      • <strong>Omega-3:</strong> From fish or supplements
                    </li>
                    <li>
                      • <strong>Zinc:</strong> 8mg daily
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/appointments/nutrition">
                  <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50 bg-transparent">
                    Book Fertility Nutrition Consultation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Male Fertility */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Supporting Male Fertility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Male fertility is equally important. About 40% of fertility challenges involve male factors.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Lifestyle Factors</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maintain healthy weight</li>
                    <li>• Exercise regularly (but not excessively)</li>
                    <li>• Avoid excessive heat (hot baths, saunas)</li>
                    <li>• Limit alcohol consumption</li>
                    <li>• Quit smoking</li>
                    <li>• Manage stress</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Nutrition for Sperm Health</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Antioxidant-rich foods</li>
                    <li>• Zinc (oysters, pumpkin seeds)</li>
                    <li>• Vitamin C (citrus fruits)</li>
                    <li>• Folate (leafy greens)</li>
                    <li>• Omega-3 fatty acids</li>
                    <li>• Limit processed foods</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* When to Seek Help */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>When to Seek Professional Help</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">For Women Under 35</h4>
                  <p className="text-gray-600 mb-3">Consider consulting a specialist if you've been trying for:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 12 months of regular, unprotected intercourse</li>
                    <li>• 6 months if you have irregular periods</li>
                    <li>• Immediately if you have known fertility issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">For Women 35 and Over</h4>
                  <p className="text-gray-600 mb-3">Consider consulting a specialist if you've been trying for:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 6 months of regular, unprotected intercourse</li>
                    <li>• 3 months if you have irregular periods</li>
                    <li>• Immediately if you have concerns</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <h5 className="font-medium text-yellow-800 mb-2">Red Flags - Seek Help Immediately</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Severe pelvic pain</li>
                  <li>• Very irregular or absent periods</li>
                  <li>• History of pelvic inflammatory disease</li>
                  <li>• Known endometriosis or PCOS</li>
                  <li>• Previous miscarriages (2 or more)</li>
                  <li>• Male partner with known fertility issues</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Emotional Support */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Managing the Emotional Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Trying to conceive can be emotionally challenging. It's normal to experience a range of feelings.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Coping Strategies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Practice stress-reduction techniques</li>
                    <li>• Maintain open communication with your partner</li>
                    <li>• Join support groups or online communities</li>
                    <li>• Continue enjoying hobbies and activities</li>
                    <li>• Consider counseling if needed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">When to Seek Support</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Feeling overwhelmed or anxious</li>
                    <li>• Relationship strain</li>
                    <li>• Loss of interest in activities</li>
                    <li>• Difficulty coping with monthly disappointment</li>
                    <li>• Social isolation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/appointments/counselling">
                  <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50 bg-transparent">
                    Book Fertility Counselling
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="bg-rose-50 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Personalized Support</h3>
            <p className="text-gray-600 mb-6">
              Take control of your fertility journey with our comprehensive testing and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/test-kits/hormone-fertility">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">Order Fertility Test</Button>
              </Link>
              <Link href="/appointments/advisor-call">
                <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50 bg-transparent">
                  Speak to a Fertility Advisor
                </Button>
              </Link>
              <a
                href="https://buy.stripe.com/test_9B628rfL1aHwb9W8qqaR200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-[#635bff] hover:bg-[#5a52e8] text-white px-6 py-3">Pay $200 - TTC Plan</Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
