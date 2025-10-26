"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"
import { ShoppingCart, Star, Heart, Filter, X, Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  colors: string[]
  sizes?: string[]
  rating: number
  reviews: number
  featured?: boolean
  description: string
}

const collections = [
  { id: "all", name: "All Collections", description: "Browse our complete range" },
  { id: "seeds-of-hope", name: "Seeds of Hope", description: "Hope and fertility awareness" },
  { id: "fertithreads", name: "FertiThreads", description: "Strength and empowerment" },
  { id: "bloom-collection", name: "Bloom Collection", description: "Growth and new beginnings" },
  { id: "conceive-celebrate", name: "Conceive & Celebrate", description: "Journey milestones" },
  { id: "terrawear", name: "TerraWear", description: "Eco-conscious fertility advocacy" },
]

const products: Product[] = [
  // Seeds of Hope Collection
  {
    id: "seeds-hope-tshirt",
    name: "Seeds of Hope T-Shirt",
    price: 25,
    image: "/images/merch/tshirt-black-1.jpeg",
    category: "seeds-of-hope",
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 124,
    featured: true,
    description: "Spread hope and awareness with our signature fertility journey message",
  },
  {
    id: "seeds-hope-tote",
    name: "Seeds of Hope Tote Bag",
    price: 15,
    image: "/images/merch/tote-bag-white.jpeg",
    category: "seeds-of-hope",
    colors: ["White", "Black", "Blue"],
    rating: 4.9,
    reviews: 89,
    featured: true,
    description: "Carry your essentials while supporting fertility awareness",
  },
  {
    id: "seeds-hope-hat",
    name: "Seeds of Hope Hat",
    price: 15,
    image: "/images/merch/hat-white.jpeg",
    category: "seeds-of-hope",
    colors: ["White", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 67,
    description: "Stylish cap with our empowering fertility message",
  },

  // FertiThreads Collection
  {
    id: "fertithreads-tshirt",
    name: "FertiThreads Power T-Shirt",
    price: 25,
    image: "/images/merch/tshirt-black-2.jpeg",
    category: "fertithreads",
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 156,
    featured: true,
    description: "Empowering design celebrating strength in fertility journeys",
  },
  {
    id: "fertithreads-tote",
    name: "FertiThreads Tote Bag",
    price: 15,
    image: "/fertithreads-tote-bag-with-empowerment-design.jpg",
    category: "fertithreads",
    colors: ["White", "Black", "Blue"],
    rating: 4.6,
    reviews: 78,
    description: "Carry your strength with this empowering tote design",
  },
  {
    id: "fertithreads-hat",
    name: "FertiThreads Hat",
    price: 15,
    image: "/fertithreads-baseball-cap-with-strength-message.jpg",
    category: "fertithreads",
    colors: ["White", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 45,
    description: "Show your strength with this stylish cap",
  },

  // Bloom Collection
  {
    id: "bloom-tshirt",
    name: "Bloom Collection T-Shirt",
    price: 25,
    image: "/bloom-collection-t-shirt-with-growth-and-flower-de.jpg",
    category: "bloom-collection",
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 203,
    description: "Celebrate growth and new beginnings with beautiful floral design",
  },
  {
    id: "bloom-tote",
    name: "Bloom Collection Tote Bag",
    price: 15,
    image: "/bloom-collection-tote-bag-with-floral-fertility-de.jpg",
    category: "bloom-collection",
    colors: ["White", "Black", "Blue"],
    rating: 4.8,
    reviews: 134,
    description: "Elegant tote featuring blooming fertility symbols",
  },
  {
    id: "bloom-hat",
    name: "Bloom Collection Hat",
    price: 15,
    image: "/bloom-collection-baseball-cap-with-flower-design.jpg",
    category: "bloom-collection",
    colors: ["White", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 92,
    description: "Stylish cap with delicate bloom patterns",
  },

  // Conceive & Celebrate Collection
  {
    id: "conceive-celebrate-tshirt",
    name: "Conceive & Celebrate T-Shirt",
    price: 25,
    image: "/conceive-and-celebrate-t-shirt-with-milestone-desi.jpg",
    category: "conceive-celebrate",
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 167,
    description: "Celebrate every milestone in your fertility journey",
  },
  {
    id: "conceive-celebrate-tote",
    name: "Conceive & Celebrate Tote Bag",
    price: 15,
    image: "/conceive-and-celebrate-tote-bag-with-celebration-d.jpg",
    category: "conceive-celebrate",
    colors: ["White", "Black", "Blue"],
    rating: 4.7,
    reviews: 98,
    description: "Perfect for celebrating your journey milestones",
  },
  {
    id: "conceive-celebrate-hat",
    name: "Conceive & Celebrate Hat",
    price: 15,
    image: "/conceive-and-celebrate-baseball-cap-with-celebrati.jpg",
    category: "conceive-celebrate",
    colors: ["White", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 73,
    description: "Celebrate your journey with this meaningful cap",
  },

  // TerraWear Collection
  {
    id: "terrawear-tshirt",
    name: "TerraWear Eco T-Shirt",
    price: 25,
    image: "/terrawear-eco-friendly-t-shirt-with-earth-and-fert.jpg",
    category: "terrawear",
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 189,
    description: "Eco-conscious fertility advocacy with sustainable materials",
  },
  {
    id: "terrawear-tote",
    name: "TerraWear Eco Tote Bag",
    price: 15,
    image: "/terrawear-eco-friendly-tote-bag-with-earth-design.jpg",
    category: "terrawear",
    colors: ["White", "Black", "Blue"],
    rating: 4.8,
    reviews: 145,
    description: "Sustainable tote bag for eco-conscious fertility advocates",
  },
  {
    id: "terrawear-hat",
    name: "TerraWear Eco Hat",
    price: 15,
    image: "/terrawear-eco-friendly-baseball-cap-with-earth-the.jpg",
    category: "terrawear",
    colors: ["White", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 112,
    description: "Sustainable cap supporting fertility and environmental awareness",
  },
]

export default function MerchPage() {
  const [selectedCollection, setSelectedCollection] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [wishlist, setWishlist] = useState<string[]>([])
  const { addItem, items, total, itemCount, isOpen, toggleCart, closeCart, removeItem, updateQuantity } = useCart()

  const filteredProducts =
    selectedCollection === "all" ? products : products.filter((product) => product.category === selectedCollection)

  const featuredProducts = products.filter((product) => product.featured)

  const handleAddToCart = (product: Product) => {
    const cartItem = {
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      category: product.category,
    }
    addItem(cartItem)
    setSelectedProduct(null)
    setSelectedSize("")
    setSelectedColor("")
  }

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-rose-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-purple-600 via-rose-500 to-orange-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">FertiTerra Merch</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Wear your support for fertility awareness and empowerment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">✨ Premium Quality Materials</Badge>
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">🌍 Supporting Fertility Education</Badge>
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">💜 Every Purchase Makes a Difference</Badge>
          </div>
        </div>
      </section>

      {/* Collections Navigation */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Shop by Collection</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {collections.map((collection) => (
              <Button
                key={collection.id}
                variant={selectedCollection === collection.id ? "default" : "outline"}
                onClick={() => setSelectedCollection(collection.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCollection === collection.id
                    ? "bg-gradient-to-r from-purple-600 to-rose-500 text-white shadow-lg scale-105"
                    : "hover:scale-105 hover:shadow-md"
                }`}
              >
                {collection.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {selectedCollection === "all" && (
        <section className="py-12 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">⭐ Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                        ⭐ FEATURED
                      </Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                        onClick={() => toggleWishlist(product.id)}
                      >
                        <Heart
                          className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                        />
                      </Button>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                        <Button
                          onClick={() => setSelectedProduct(product)}
                          className="bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
                        >
                          Select Options
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {collections.find((c) => c.id === selectedCollection)?.name}
              <span className="text-lg font-normal text-gray-600 ml-2">({filteredProducts.length} items)</span>
            </h2>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                        ⭐ FEATURED
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart
                        className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                      />
                    </Button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-purple-600">${product.price}</span>
                      <Button
                        onClick={() => setSelectedProduct(product)}
                        className="bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        Select Options
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-rose-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-4">50,000+</div>
              <h3 className="text-xl font-bold mb-2">Lives Touched</h3>
              <p className="text-gray-600">Through fertility education and awareness</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-rose-500 mb-4">25%</div>
              <h3 className="text-xl font-bold mb-2">Profits Donated</h3>
              <p className="text-gray-600">To fertility research and support programs</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-500 mb-4">100%</div>
              <h3 className="text-xl font-bold mb-2">Sustainable</h3>
              <p className="text-gray-600">Eco-friendly materials and ethical production</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Selection Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <Button variant="ghost" size="icon" onClick={() => setSelectedProduct(null)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({selectedProduct.reviews} reviews)</span>
                  </div>

                  {/* Color Selection */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Color</h3>
                    <div className="flex gap-2">
                      {selectedProduct.colors.map((color) => (
                        <Button
                          key={color}
                          variant={selectedColor === color ? "default" : "outline"}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-2 ${selectedColor === color ? "bg-purple-600 text-white" : ""}`}
                        >
                          {color}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Size Selection */}
                  {selectedProduct.sizes && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Size</h3>
                      <div className="flex gap-2">
                        {selectedProduct.sizes.map((size) => (
                          <Button
                            key={size}
                            variant={selectedSize === size ? "default" : "outline"}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 ${selectedSize === size ? "bg-purple-600 text-white" : ""}`}
                          >
                            {size}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-purple-600">${selectedProduct.price}</span>
                  </div>

                  <Button
                    onClick={() => handleAddToCart(selectedProduct)}
                    disabled={!selectedColor || (selectedProduct.sizes && !selectedSize)}
                    className="w-full bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={closeCart}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-bold">Shopping Cart ({itemCount})</h2>
                <Button variant="ghost" size="icon" onClick={closeCart}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{item.name}</h3>
                          {item.size && <p className="text-xs text-gray-600">Size: {item.size}</p>}
                          {item.color && <p className="text-xs text-gray-600">Color: {item.color}</p>}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-red-500 hover:text-red-700"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="font-semibold text-purple-600 mt-1">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-purple-600">${total.toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white py-3 rounded-full text-lg font-semibold">
                    Proceed to Checkout
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cart Button */}
      <Button
        onClick={toggleCart}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 z-40"
      >
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full min-w-[24px] h-6 flex items-center justify-center text-xs">
            {itemCount}
          </Badge>
        )}
      </Button>
    </div>
  )
}
