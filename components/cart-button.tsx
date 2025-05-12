"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export function CartButton() {
  const { setIsOpen, totalItems } = useCart()

  return (
    <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="relative">
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
          {totalItems}
        </span>
      )}
      <span className="sr-only">Open cart</span>
    </Button>
  )
}
