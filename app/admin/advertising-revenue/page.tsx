"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, DollarSign, TrendingUp, Users, Globe } from "lucide-react"
import { Header } from "@/components/header"

export default function AdvertisingRevenuePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Advertising Revenue Streams</h1>
            <p className="text-xl text-gray-600">
              Explore established ad networks to monetize your website traffic effectively.
            </p>
          </div>

          {/* Google AdSense Section */}
          <Card className="mb-8 border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Use Established Ad Networks</CardTitle>
                  <Badge className="mt-2 bg-blue-100 text-blue-700">Primary Recommendation</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Google AdSense</strong> is a low-maintenance, highly popular option that serves contextually
                relevant ads (via responsive/adaptable formats) to visitors, earning revenue per impression or
                click—especially useful for sites with consistent traffic.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Source:</span>
                <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Wikipedia <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* High-Earning Networks */}
          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">High-Earning Networks</CardTitle>
                  <Badge className="mt-2 bg-green-100 text-green-700">Competitive Rates</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Other high-earning networks to explore include <strong>SmartyAds SSP</strong>,{" "}
                <strong>Media.net</strong>, and <strong>Propeller Ads</strong>, known for competitive CPM and CPC rates.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Source:</span>
                <a href="#" className="text-green-600 hover:text-green-700 flex items-center gap-1">
                  SmartyAds <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Niche Networks */}
          <Card className="mb-8 border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">Niche & Affiliate-Friendly Programs</CardTitle>
                  <Badge className="mt-2 bg-purple-100 text-purple-700">Specialized Options</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                For more niche or affiliate-friendly programs, consider <strong>AdCash</strong>,{" "}
                <strong>Adsterra</strong>, <strong>Publift</strong>, <strong>Media.net</strong>, or{" "}
                <strong>Propeller Ads</strong>.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span>Sources:</span>
                  <a href="#" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                    Teqblaze <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <a href="#" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                  Adcash <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* High-Traffic Networks */}
          <Card className="mb-8 border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">Premium High-Traffic Networks</CardTitle>
                  <Badge className="mt-2 bg-orange-100 text-orange-700">Better Revenue Share</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                If your site becomes high-traffic, networks like <strong>Mediavine</strong> and <strong>Raptive</strong>{" "}
                tend to offer better revenue share models.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Source:</span>
                <a href="#" className="text-orange-600 hover:text-orange-700 flex items-center gap-1">
                  Blogging Explorer <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Action Section */}
          <Card className="bg-gradient-to-r from-rose-50 to-green-50 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Monetize Your Traffic?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Start with Google AdSense for reliable, low-maintenance revenue, then explore other networks as your
                traffic grows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-rose-600 hover:bg-rose-700">Get Started with AdSense</Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                  Explore Other Networks
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
