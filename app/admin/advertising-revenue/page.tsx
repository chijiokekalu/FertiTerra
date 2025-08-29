"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, DollarSign, TrendingUp, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function AdvertisingRevenue() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Advertising Revenue</h1>
          <p className="text-gray-600">Monetize your website traffic with established ad networks</p>
        </div>

        <div className="grid gap-6">
          {/* Google AdSense */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Globe className="h-5 w-5" />
                Use Established Ad Networks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-gray-700 leading-relaxed">
                  Google AdSense is a low-maintenance, highly popular option that serves contextually relevant ads (via
                  responsive/adaptable formats) to visitors, earning revenue per impression or click—especially useful
                  for sites with consistent traffic.
                </p>
                <div className="mt-2">
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Wikipedia
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* High-Earning Networks */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <TrendingUp className="h-5 w-5" />
                High-Earning Networks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <p className="text-gray-700 leading-relaxed">
                  Other high-earning networks to explore include SmartyAds SSP, Media.net, and Propeller Ads, known for
                  competitive CPM and CPC rates.
                </p>
                <div className="mt-2">
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    SmartyAds
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Niche Networks */}
          <Card className="bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <Users className="h-5 w-5" />
                Niche & Affiliate-Friendly Programs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-purple-100">
                <p className="text-gray-700 leading-relaxed">
                  For more niche or affiliate-friendly programs, consider AdCash, Adsterra, Publift, Media.net, or
                  Propeller Ads.
                </p>
                <div className="mt-2 flex gap-2">
                  <Badge variant="outline" className="text-purple-600 border-purple-200">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Teqblaze
                  </Badge>
                  <Badge variant="outline" className="text-purple-600 border-purple-200">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Adcash
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* High-Traffic Networks */}
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <DollarSign className="h-5 w-5" />
                High-Traffic Networks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-orange-100">
                <p className="text-gray-700 leading-relaxed">
                  If your site becomes high-traffic, networks like Mediavine and Raptive tend to offer better revenue
                  share models.
                </p>
                <div className="mt-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Blogging Explorer
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/admin/dashboard" className="text-blue-600 hover:text-blue-800 transition-colors">
              ← Back to Admin Dashboard
            </Link>
            <Link href="/admin/analytics" className="text-blue-600 hover:text-blue-800 transition-colors">
              View Analytics
            </Link>
            <Link href="/knowledge-centre" className="text-blue-600 hover:text-blue-800 transition-colors">
              Knowledge Centre
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
