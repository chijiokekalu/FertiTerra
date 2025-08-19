"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { useCart } from "@/context/cart-context"
import { Star, ShoppingCart, Gift, TestTube, Package } from "lucide-react"

const defaultProducts = [
  {
    id: "hormone-test",
    name: "Advanced Hormone Test",
    category: "tests",
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    reviews: 1247,
    image: "/placeholder.svg?height=200&width=300&text=Hormone+Test",
    description: "Comprehensive hormone panel for fertility insights",
  },
  {
    id: "prenatal-vitamins",
    name: "Prenatal Vitamins",
    category: "supplements",
    price: 39,
    originalPrice: 49,
    rating: 4.7,
    reviews: 892,
    image: "/placeholder.svg?height=200&width=300&text=Prenatal+Vitamins",
    description: "Essential nutrients for pregnancy preparation",
  },
  {
    id: "fertility-support",
    name: "Fertility Support Bundle",
    category: "supplements",
    price: 89,
    originalPrice: 119,
    rating: 4.8,
    reviews: 634,
    image: "/placeholder.svg?height=200&width=300&text=Fertility+Bundle",
    description: "Complete nutritional support for fertility",
  },
  {
    id: "ovulation-strips",
    name: "Ovulation Test Strips",
    category: "tests",
    price: 29,
    originalPrice: 39,
    rating: 4.6,
    reviews: 1456,
    image: "/placeholder.svg?height=200&width=300&text=Ovulation+Strips",
    description: "Track your fertile window accurately",
  },
]

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [shopConfig, setShopConfig] = useState(null)
  const [loading, setLoading] = useState(true)
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

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name || product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }

  const filteredProducts =
    activeTab === "all" ? defaultProducts : defaultProducts.filter((product) => product.category === activeTab)

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
            <p>Loading shop...</p>
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
              <h1 className="text-4xl font-bold tracking-tight mb-4">Shop Fertility Products</h1>
              <p className="text-lg text-gray-600 mb-6">
                Discover our curated selection of fertility tests, supplements, merchandise, and wellness products
                designed to support your reproductive health journey.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {shopConfig && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                {shopConfig.shopTabs.map((tab, index) => (
                  <Link key={index} href={tab.link}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-rose-100 rounded-full w-fit">
                          {tab.name.includes("Test") && <TestTube className="h-6 w-6 text-rose-600" />}
                          {tab.name.includes("merch") && <Package className="h-6 w-6 text-rose-600" />}
                          {tab.name.includes("Gift") && <Gift className="h-6 w-6 text-rose-600" />}
                          {tab.name.includes("kit") && <ShoppingCart className="h-6 w-6 text-rose-600" />}
                        </div>
                        <CardTitle className="text-lg">{tab.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 text-center">
                          {tab.name.includes("Test") && "Professional fertility and hormone testing"}
                          {tab.name.includes("merch") && "Support fertility awareness with our branded merchandise"}
                          {tab.name.includes("Gift") && "Give the gift of fertility care and support"}
                          {tab.name.includes("kit") && "Everything you need to begin your fertility journey"}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="tests">Tests</TabsTrigger>
                <TabsTrigger value="supplements">Supplements</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab}>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-sm text-gray-500">({product.reviews})</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">${product.price}</span>
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1 bg-transparent"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                        <Link href={`/shop/${product.id}`}>
                          <Button className="bg-rose-500 hover:bg-rose-600">View</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}
