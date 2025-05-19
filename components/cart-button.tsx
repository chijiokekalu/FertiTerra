"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CartButton() {
  return (
    <Link href="/cart">
      <Button variant="ghost" size="icon">
        <ShoppingCart className="h-5 w-5" />
        <span className="sr-only">Cart</span>
      </Button>
    </Link>
  )
}
