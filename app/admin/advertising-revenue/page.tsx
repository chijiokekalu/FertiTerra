"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, DollarSign, TrendingUp, Users, Globe } from "lucide-react"

export default function AdvertisingRevenuePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Advertising Revenue Streams</h1>
            <p className="text-xl text-gray-600">
              Explore established ad networks to monetize your website traffic and generate sustainable revenue.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Google AdSense */}
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-blue-600" />
                  Use Established Ad Networks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Google AdSense</strong> is a low-maintenance, highly popular option that serves contextually
                    relevant ads (via responsive/adaptable formats) to visitors, earning revenue per impression or
                    click—especially useful for sites with consistent traffic.
                  </p>
                  <div className="mt-3">
                    <span className="text-sm text-blue-600 font-medium">Source: Wikipedia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* High-Earning Networks */}
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  High-Earning Networks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Other high-earning networks to explore include <strong>SmartyAds SSP</strong>,{" "}
                    <strong>Media.net</strong>, and <strong>Propeller Ads</strong>, known for competitive CPM and CPC
                    rates.
                  </p>
                  <div className="mt-3">
                    <span className="text-sm text-green-600 font-medium">Source: SmartyAds</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Niche Networks */}
            <Card className="border-l-4 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-600" />
                  Niche & Affiliate-Friendly Programs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    For more niche or affiliate-friendly programs, consider <strong>AdCash</strong>,{" "}
                    <strong>Adsterra</strong>, <strong>Publift</strong>, <strong>Media.net</strong>, or{" "}
                    <strong>Propeller Ads</strong>.
                  </p>
                  <div className="mt-3 space-y-1">
                    <div className="text-sm text-purple-600 font-medium">Source: Teqblaze</div>
                    <div className="text-sm text-purple-600 font-medium">Source: Adcash</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* High-Traffic Networks */}
            <Card className="border-l-4 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                  High-Traffic Revenue Models
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    If your site becomes high-traffic, networks like <strong>Mediavine</strong> and{" "}
                    <strong>Raptive</strong> tend to offer better revenue share models.
                  </p>
                  <div className="mt-3">
                    <span className="text-sm text-orange-600 font-medium">Source: Blogging Explorer</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Section */}
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Monetizing?</h3>
                  <p className="text-gray-600 mb-6">
                    Choose the advertising network that best fits your website's traffic and audience demographics.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Google AdSense
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      SmartyAds SSP
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Media.net
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
