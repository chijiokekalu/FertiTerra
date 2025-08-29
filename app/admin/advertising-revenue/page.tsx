"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  DollarSign,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  BarChart3,
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import { BrandLogo } from "@/components/BrandLogo"

export default function AdvertisingRevenuePage() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BrandLogo />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Advertising Revenue Dashboard</h1>
              <p className="text-gray-600">Monitor and optimize your ad performance across all networks</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 bg-transparent"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh Data
            </Button>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,847.32</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12.5%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,231</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+8.2%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Click-Through Rate</CardTitle>
              <MousePointer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.34%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600">-0.3%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">RPM</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$6.29</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+4.1%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Ad Networks Performance */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="adsense">Google AdSense</TabsTrigger>
            <TabsTrigger value="networks">Ad Networks</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Network</CardTitle>
                  <CardDescription>Last 30 days performance breakdown</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium">Google AdSense</span>
                      </div>
                      <span className="text-sm font-bold">$1,847.32 (64.9%)</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">Media.net</span>
                      </div>
                      <span className="text-sm font-bold">$542.18 (19.0%)</span>
                    </div>
                    <Progress value={19} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium">PropellerAds</span>
                      </div>
                      <span className="text-sm font-bold">$287.45 (10.1%)</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-sm font-medium">Infolinks</span>
                      </div>
                      <span className="text-sm font-bold">$170.37 (6.0%)</span>
                    </div>
                    <Progress value={6} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Key metrics over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">Revenue Growth</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        +12.5%
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">Traffic Growth</span>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        +8.2%
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <MousePointer className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium">CTR Change</span>
                      </div>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        -0.3%
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium">RPM Growth</span>
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        +4.1%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="adsense" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    Google AdSense Performance
                  </CardTitle>
                  <CardDescription>Primary ad network statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Estimated Earnings</p>
                      <p className="text-2xl font-bold">$1,847.32</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Page RPM</p>
                      <p className="text-2xl font-bold">$4.08</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Impressions</p>
                      <p className="text-2xl font-bold">452,341</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Clicks</p>
                      <p className="text-2xl font-bold">10,584</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Ad Unit Performance</span>
                      <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                        <ExternalLink className="h-3 w-3" />
                        View in AdSense
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Header Banner</span>
                        <span className="text-sm font-medium">$847.23</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Sidebar Ads</span>
                        <span className="text-sm font-medium">$542.18</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">In-Content Ads</span>
                        <span className="text-sm font-medium">$457.91</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AdSense Status</CardTitle>
                  <CardDescription>Account health and alerts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Account Active</p>
                      <p className="text-xs text-gray-600">All systems operational</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Policy Review</p>
                      <p className="text-xs text-gray-600">No violations detected</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Payment Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Next payment: Dec 21</span>
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Manage AdSense
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="networks" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    Media.net
                  </CardTitle>
                  <CardDescription>Contextual advertising network</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Revenue</span>
                    <span className="font-medium">$542.18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">RPM</span>
                    <span className="font-medium">$1.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">CTR</span>
                    <span className="font-medium">1.8%</span>
                  </div>
                  <Badge variant="secondary" className="w-full justify-center bg-green-100 text-green-800">
                    Active
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">P</span>
                    </div>
                    PropellerAds
                  </CardTitle>
                  <CardDescription>Push notification & native ads</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Revenue</span>
                    <span className="font-medium">$287.45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">RPM</span>
                    <span className="font-medium">$0.64</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">CTR</span>
                    <span className="font-medium">3.2%</span>
                  </div>
                  <Badge variant="secondary" className="w-full justify-center bg-purple-100 text-purple-800">
                    Active
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">I</span>
                    </div>
                    Infolinks
                  </CardTitle>
                  <CardDescription>In-text advertising solution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Revenue</span>
                    <span className="font-medium">$170.37</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">RPM</span>
                    <span className="font-medium">$0.38</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">CTR</span>
                    <span className="font-medium">2.1%</span>
                  </div>
                  <Badge variant="secondary" className="w-full justify-center bg-orange-100 text-orange-800">
                    Active
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Optimization Recommendations</CardTitle>
                  <CardDescription>AI-powered suggestions to improve revenue</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Increase Ad Density</p>
                      <p className="text-xs text-gray-600">Add more ad units to high-traffic pages</p>
                      <p className="text-xs text-blue-600 mt-1">Potential: +15% revenue</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Optimize Ad Placement</p>
                      <p className="text-xs text-gray-600">Move sidebar ads above the fold</p>
                      <p className="text-xs text-green-600 mt-1">Potential: +8% CTR</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">A/B Test Ad Formats</p>
                      <p className="text-xs text-gray-600">Test responsive vs fixed ad sizes</p>
                      <p className="text-xs text-purple-600 mt-1">Potential: +12% RPM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Goals</CardTitle>
                  <CardDescription>Track progress towards revenue targets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Monthly Revenue Goal</span>
                      <span>$2,847 / $3,500</span>
                    </div>
                    <Progress value={81} className="h-2" />
                    <p className="text-xs text-gray-600">81% complete - $653 remaining</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Traffic Goal</span>
                      <span>45,231 / 50,000</span>
                    </div>
                    <Progress value={90} className="h-2" />
                    <p className="text-xs text-gray-600">90% complete - 4,769 views remaining</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CTR Target</span>
                      <span>2.34% / 2.50%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                    <p className="text-xs text-gray-600">94% of target - 0.16% improvement needed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
