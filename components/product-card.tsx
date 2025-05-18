"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Check, AlertCircle } from "lucide-react"
import { useCart, type CartItem } from "@/context/cart-context"

type ProductProps = {
  id: string
  name: string
  price: number
  category: string
  image: string
  description: string
  color?: "rose" | "purple" | "teal"
  featured?: boolean
  prescription?: boolean
  compact?: boolean
}

type ProductCardProps = {
  product: ProductProps
  compact?: boolean
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      type: product.category,
      quantity: 1,
      image: product.image,
    }

    addItem(cartItem)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const getBgColor = () => {
    switch (product.color) {
      case "rose":
        return "from-rose-50 to-white"
      case "purple":
        return "from-purple-50 to-white"
      case "teal":
        return "from-teal-50 to-white"
      default:
        return "from-rose-50 to-white"
    }
  }

  const getBorderColor = () => {
    switch (product.color) {
      case "rose":
        return "border-rose-100"
      case "purple":
        return "border-purple-100"
      case "teal":
        return "border-teal-100"
      default:
        return "border-rose-100"
    }
  }

  const getBadgeColor = () => {
    switch (product.color) {
      case "rose":
        return "bg-rose-100 text-rose-700 hover:bg-rose-200"
      case "purple":
        return "bg-purple-100 text-purple-700 hover:bg-purple-200"
      case "teal":
        return "bg-teal-100 text-teal-700 hover:bg-teal-200"
      default:
        return "bg-rose-100 text-rose-700 hover:bg-rose-200"
    }
  }

  const getButtonColor = () => {
    switch (product.color) {
      case "rose":
        return "bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
      case "purple":
        return "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
      case "teal":
        return "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
      default:
        return "bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
    }
  }

  if (compact) {
    return (
      <Card className={`overflow-hidden border ${getBorderColor()} hover:shadow-md transition-all`}>
        <Link href={`/shop/products/${product.id}`} className="block">
          <div className="aspect-square relative bg-white">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
            {product.prescription && (
              <Badge className="absolute top-2 right-2 bg-amber-100 text-amber-700">
                <AlertCircle className="h-3 w-3 mr-1" /> Prescription
              </Badge>
            )}
          </div>
          <CardContent className="p-3">
            <Badge className={getBadgeColor()}>{product.category}</Badge>
            <h3 className="font-medium mt-2 line-clamp-1">{product.name}</h3>
            <p className="font-bold mt-1">${product.price}</p>
          </CardContent>
        </Link>
        <CardFooter className="p-3 pt-0">
          <Button
            onClick={handleAddToCart}
            className={`w-full ${getButtonColor()}`}
            size="sm"
            disabled={added || product.prescription}
          >
            {added ? (
              <>
                <Check className="mr-1 h-4 w-4" /> Added
              </>
            ) : product.prescription ? (
              "View Details"
            ) : (
              <>
                <ShoppingCart className="mr-1 h-4 w-4" /> Add to Cart
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className={`overflow-hidden border ${getBorderColor()} hover:shadow-md transition-all h-full flex flex-col`}>
      <Link href={`/shop/products/${product.id}`} className="block flex-grow">
        <div className={`aspect-square relative bg-gradient-to-br ${getBgColor()}`}>
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-6" />
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white">
              Featured
            </Badge>
          )}
          {product.prescription && (
            <Badge className="absolute top-2 right-2 bg-amber-100 text-amber-700">
              <AlertCircle className="h-3 w-3 mr-1" /> Prescription
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge className={getBadgeColor()}>{product.category}</Badge>
          </div>
          <h3 className="text-lg font-medium mb-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
          <p className="text-xl font-bold">${product.price}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className={`w-full ${getButtonColor()}`}
          disabled={added || product.prescription}
        >
          {added ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Added to Cart
            </>
          ) : product.prescription ? (
            <>View Details</>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
