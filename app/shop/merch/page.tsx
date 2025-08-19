"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Header } from "@/components/header"
import { useCart } from "@/context/cart-context"
import { Star, ShoppingCart, ArrowRight } from "lucide-react"

const merchProducts = [
  {
    id: "fertiterra-tshirt",
    name: "FertiTerra Logo T-Shirt",
    category: "merch",
    price: 25,
    originalPrice: 25,
    rating: 4.8,
    reviews: 156,
    image: "/images/fertiterra-tshirt.jpeg",
    description: "Comfortable cotton t-shirt with FertiTerra branding and floral design",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White"],
  },
]

export default function MerchPage() {
  const { addToCart } = useCart()

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                FertiTerra
                <span className="block text-rose-500">Merch</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Show your support for reproductive health awareness with our exclusive collection. Every purchase helps
                spread fertility education and empowerment.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <span>Free shipping on orders over $50</span>
                <span>•</span>
                <span>Sustainable materials</span>
                <span>•</span>
                <span>Ethically made</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Collection</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Thoughtfully designed pieces that celebrate fertility awareness and women's health empowerment.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {merchProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Card className="border-0 shadow-none hover:shadow-lg transition-all duration-300 overflow-hidden bg-gray-50 hover:bg-white">
                      <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                              {product.originalPrice !== product.price && (
                                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                              )}
                            </div>

                            <div className="space-y-1">
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Available Sizes</p>
                              <div className="flex flex-wrap gap-1">
                                {product.sizes.map((size) => (
                                  <span
                                    key={size}
                                    className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600"
                                  >
                                    {size}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="p-6 pt-0 space-y-3">
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 rounded-lg transition-colors duration-200"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>

                        <Link href={`/shop/${product.id}`} className="block">
                          <Button
                            variant="outline"
                            className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-lg transition-colors duration-200 bg-transparent"
                          >
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FertiTerra Merch?</h2>
                <p className="text-gray-600">
                  Every purchase supports our mission to make fertility education accessible to everyone.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Made with Care</h3>
                  <p className="text-gray-600 text-sm">
                    Ethically sourced materials and sustainable production practices for conscious consumers.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Supporting Education</h3>
                  <p className="text-gray-600 text-sm">
                    A portion of proceeds goes toward fertility education programs and awareness initiatives.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Impact</h3>
                  <p className="text-gray-600 text-sm">
                    Join a community of advocates working to break stigmas around fertility and reproductive health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Wear Your Support</h2>
              <p className="text-xl text-gray-600 mb-8">
                Every piece tells a story of empowerment, education, and hope for reproductive health awareness.
              </p>
              <Link href="/shop">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 text-lg font-medium rounded-lg">
                  Explore All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
