"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/context/cart-context"
import { Heart, ShoppingCart, Star, X, Plus, Minus, Filter, Sparkles } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  image: string
  collection: string
  type: "T-Shirt" | "Tote Bag" | "Hat"
  colors: string[]
  sizes?: string[]
  rating: number
  reviews: number
  featured?: boolean
  description: string
}

const collections = [
  {
    id: "seeds-of-hope",
    name: "Seeds of Hope",
    description: "Hope and fertility awareness",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "fertithreads",
    name: "FertiThreads",
    description: "Strength and empowerment",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "bloom-collection",
    name: "Bloom Collection",
    description: "Growth and new beginnings",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "conceive-celebrate",
    name: "Conceive & Celebrate",
    description: "Journey milestones",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "terrawear",
    name: "TerraWear",
    description: "Eco-conscious fertility advocacy",
    color: "from-teal-500 to-cyan-500",
  },
]

const products: Product[] = [
  // Seeds of Hope Collection
  {
    id: "seeds-hope-tshirt",
    name: "Seeds of Hope T-Shirt",
    price: 25,
    image: "/images/merch/tshirt-black-1.jpeg",
    collection: "seeds-of-hope",
    type: "T-Shirt",
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 124,
    featured: true,
    description: "Spread hope and awareness with our signature fertility journey message.",
  },
  {
    id: "seeds-hope-tote",
    name: "Seeds of Hope Tote Bag",
    price: 15,
    image: "/images/merch/tote-bag-white.jpeg",
    collection: "seeds-of-hope",
    type: "Tote Bag",
    colors: ["White", "Black", "Blue"],
    rating: 4.9,
    reviews: 89,
    description: "Carry your message of hope wherever you go with this eco-friendly tote.",
  },
  {
    id: "seeds-hope-hat",
    name: "Seeds of Hope Hat",
    price: 15,
    image: "/images/merch/hat-white.jpeg",
    collection: "seeds-of-hope",
    type: "Hat",
    colors: ["White", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 67,
    description: "Show your support with this comfortable and stylish baseball cap.",
  },
  // FertiThreads Collection
  {
    id: "fertithreads-tshirt",
    name: "FertiThreads Empowerment Tee",
    price: 25,
    image: "/fertithreads-tote-bag-with-empowerment-design.jpg",
    collection: "fertithreads",
    type: "T-Shirt",
    colors: ["Black", "White", "Purple"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 156,
    featured: true,
    description: "Embrace your strength with empowering fertility messaging.",
  },
  {
    id: "fertithreads-tote",
    name: "FertiThreads Power Tote",
    price: 15,
    image: "/fertithreads-tote-bag-with-empowerment-design.jpg",
    collection: "fertithreads",
    type: "Tote Bag",
    colors: ["Black", "White", "Purple"],
    rating: 4.9,
    reviews: 98,
    description: "Carry your power and strength with this empowering tote bag.",
  },
  {
    id: "fertithreads-hat",
    name: "FertiThreads Strength Cap",
    price: 15,
    image: "/fertithreads-baseball-cap-with-strength-message.jpg",
    collection: "fertithreads",
    type: "Hat",
    colors: ["Black", "White", "Purple"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 73,
    description: "Wear your strength proudly with this motivational cap.",
  },
  // Bloom Collection
  {
    id: "bloom-tshirt",
    name: "Bloom Growth Tee",
    price: 25,
    image: "/bloom-collection-t-shirt-with-growth-and-flower-de.jpg",
    collection: "bloom-collection",
    type: "T-Shirt",
    colors: ["White", "Green", "Pink"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 142,
    description: "Celebrate growth and new beginnings with beautiful floral designs.",
  },
  {
    id: "bloom-tote",
    name: "Bloom Floral Tote",
    price: 15,
    image: "/bloom-collection-tote-bag-with-floral-fertility-de.jpg",
    collection: "bloom-collection",
    type: "Tote Bag",
    colors: ["White", "Green", "Pink"],
    rating: 4.8,
    reviews: 87,
    featured: true,
    description: "Carry the beauty of growth with this floral fertility design.",
  },
  {
    id: "bloom-hat",
    name: "Bloom Flower Cap",
    price: 15,
    image: "/bloom-collection-baseball-cap-with-flower-design.jpg",
    collection: "bloom-collection",
    type: "Hat",
    colors: ["White", "Green", "Pink"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 65,
    description: "Bloom wherever you go with this delicate flower design cap.",
  },
  // Conceive & Celebrate Collection
  {
    id: "conceive-celebrate-tshirt",
    name: "Conceive & Celebrate Tee",
    price: 25,
    image: "/conceive-and-celebrate-t-shirt-with-milestone-desi.jpg",
    collection: "conceive-celebrate",
    type: "T-Shirt",
    colors: ["Yellow", "Orange", "White"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 118,
    description: "Celebrate every milestone in your fertility journey.",
  },
  {
    id: "conceive-celebrate-tote",
    name: "Conceive & Celebrate Tote",
    price: 15,
    image: "/conceive-and-celebrate-tote-bag-with-celebration-d.jpg",
    collection: "conceive-celebrate",
    type: "Tote Bag",
    colors: ["Yellow", "Orange", "White"],
    rating: 4.9,
    reviews: 94,
    description: "Carry the joy of celebration with this milestone design.",
  },
  {
    id: "conceive-celebrate-hat",
    name: "Conceive & Celebrate Cap",
    price: 15,
    image: "/conceive-and-celebrate-baseball-cap-with-celebrati.jpg",
    collection: "conceive-celebrate",
    type: "Hat",
    colors: ["Yellow", "Orange", "White"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 71,
    description: "Celebrate your journey with this uplifting milestone cap.",
  },
  // TerraWear Collection
  {
    id: "terrawear-tshirt",
    name: "TerraWear Eco Tee",
    price: 25,
    image: "/terrawear-eco-friendly-t-shirt-with-earth-and-fert.jpg",
    collection: "terrawear",
    type: "T-Shirt",
    colors: ["Green", "Blue", "White"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 167,
    featured: true,
    description: "Eco-conscious fertility advocacy with earth-friendly messaging.",
  },
  {
    id: "terrawear-tote",
    name: "TerraWear Earth Tote",
    price: 15,
    image: "/terrawear-eco-friendly-tote-bag-with-earth-design.jpg",
    collection: "terrawear",
    type: "Tote Bag",
    colors: ["Green", "Blue", "White"],
    rating: 4.8,
    reviews: 103,
    description: "Sustainable and stylish with earth-conscious fertility messaging.",
  },
  {
    id: "terrawear-hat",
    name: "TerraWear Earth Cap",
    price: 15,
    image: "/terrawear-eco-friendly-baseball-cap-with-earth-the.jpg",
    collection: "terrawear",
    type: "Hat",
    colors: ["Green", "Blue", "White"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 82,
    description: "Wear your environmental consciousness with this earth-themed cap.",
  },
]

export default function MerchPage() {
  const [selectedCollection, setSelectedCollection] = useState<string>("all")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [wishlist, setWishlist] = useState<string[]>([])
  const { addItem, state, toggleCart, openCart, updateQuantity } = useCart()

  const filteredProducts =
    selectedCollection === "all" ? products : products.filter((product) => product.collection === selectedCollection)

  const featuredProducts = products.filter((product) => product.featured)

  const handleAddToCart = (product: Product, size?: string, color?: string) => {
    const cartItem = {
      id: `${product.id}-${size || "default"}-${color || "default"}`,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      collection: product.collection,
    }
    addItem(cartItem)
    openCart()
  }

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const ProductCard = ({ product }: { product: Product }) => (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.featured && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 rounded-full ${
            wishlist.includes(product.id)
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white/80 text-gray-600 hover:bg-white"
          } transition-all duration-200`}
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? "fill-current" : ""}`} />
        </Button>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {collections.find((c) => c.id === product.collection)?.name}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">${product.price}</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 py-2 transition-all duration-200 transform hover:scale-105"
                onClick={() => setSelectedProduct(product)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-gray-900">{product.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />

                {product.colors && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Color</label>
                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.colors.map((color) => (
                          <SelectItem key={color} value={color}>
                            {color}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {product.sizes && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Size</label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  onClick={() => {
                    handleAddToCart(product, selectedSize, selectedColor)
                    setSelectedProduct(null)
                    setSelectedSize("")
                    setSelectedColor("")
                  }}
                  disabled={(product.sizes && !selectedSize) || (product.colors && !selectedColor)}
                >
                  Add to Cart - ${product.price}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )

  const CartSidebar = () => (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-96 bg-white shadow-2xl transform transition-transform duration-300 ${
        state.isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <Button variant="ghost" size="icon" onClick={toggleCart}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {state.items.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  {item.size && <p className="text-xs text-gray-500">Size: {item.size}</p>}
                  {item.color && <p className="text-xs text-gray-500">Color: {item.color}</p>}
                  <p className="font-bold text-purple-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 bg-transparent"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 bg-transparent"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {state.items.length > 0 && (
        <div className="border-t p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">Total: ${state.total.toFixed(2)}</span>
          </div>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Checkout
          </Button>
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      <CartSidebar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FertiTerra Merch
            </h1>
            <Sparkles className="w-8 h-8 text-pink-600 ml-3" />
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Wear your support for fertility awareness and empowerment. Every purchase helps fund fertility education and
            support programs across Africa.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
              50,000+ Lives Touched
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
              25% Profits Donated
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2" />
              Eco-Friendly Materials
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Collections Filter */}
      <section className="py-8 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant={selectedCollection === "all" ? "default" : "outline"}
              onClick={() => setSelectedCollection("all")}
              className={selectedCollection === "all" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}
            >
              <Filter className="w-4 h-4 mr-2" />
              All Collections
            </Button>
            {collections.map((collection) => (
              <Button
                key={collection.id}
                variant={selectedCollection === collection.id ? "default" : "outline"}
                onClick={() => setSelectedCollection(collection.id)}
                className={
                  selectedCollection === collection.id ? `bg-gradient-to-r ${collection.color} text-white` : ""
                }
              >
                {collection.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Every purchase supports fertility education, awareness campaigns, and accessible healthcare initiatives
            across Africa. Together, we're breaking stigmas and building hope.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25%</div>
              <div className="text-sm opacity-80">of profits donated to fertility education</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-sm opacity-80">lives touched through our programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-80">eco-friendly and ethically sourced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl z-40"
        onClick={toggleCart}
      >
        <ShoppingCart className="w-6 h-6" />
        {state.items.length > 0 && (
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {state.items.reduce((sum, item) => sum + item.quantity, 0)}
          </Badge>
        )}
      </Button>
    </div>
  )
}
