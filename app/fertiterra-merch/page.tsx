"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { useCart } from "@/context/cart-context"
import { ShoppingCart, Star, Heart } from "lucide-react"

export default function FertiTerraMerchPage() {
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

  const handleAddToCart = (item: any) => {
    addToCart({
      id: `merch-${item.title.toLowerCase().replace(/\s+/g, "-")}`,
      name: item.title,
      price: item.price,
      quantity: 1,
      image: item.image,
    })
  }

  const merchTab = shopConfig?.shopTabs.find((tab) => tab.name === "FertiTerra merch")

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
            <p>Loading merchandise...</p>
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
              <h1 className="text-4xl font-bold tracking-tight mb-4">FertiTerra Merchandise</h1>
              <p className="text-lg text-gray-600 mb-6">
                Support fertility awareness and show your solidarity with our community. Every purchase helps spread
                awareness about reproductive health.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {merchTab?.items ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {merchTab.items.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-64 w-full">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-2">5.0</span>
                        <span className="text-sm text-gray-500">(42 reviews)</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold">${item.price}</span>
                        <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Free Shipping</span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          <strong>Material:</strong> 100% Organic Cotton
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Sizes:</strong> XS, S, M, L, XL, XXL
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Colors:</strong> White, Rose Pink, Sage Green
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button variant="outline" className="flex-1 bg-transparent" onClick={() => handleAddToCart(item)}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No merchandise available at the moment.</p>
                <p className="text-sm text-gray-500 mt-2">Check back soon for new items!</p>
              </div>
            )}

            <div className="mt-16 bg-rose-50 rounded-lg p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Support Our Mission</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Every purchase of FertiTerra merchandise helps us continue our mission to provide accessible fertility
                  education and support to communities across Africa. Thank you for being part of our journey.
                </p>
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                  <span>✓ Ethically sourced materials</span>
                  <span>✓ Fair trade production</span>
                  <span>✓ Carbon neutral shipping</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
