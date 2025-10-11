"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  size?: string
  color?: string
  type: "test-kit" | "merch" | "plan"
}

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] }

interface CartContextType {
  state: CartState
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color,
      )

      let newItems: CartItem[]
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item,
        )
      } else {
        newItems = [...state.items, action.payload]
      }

      const newTotal = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      return { items: newItems, total: newTotal }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      const newTotal = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      return { items: newItems, total: newTotal }
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) => (item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item))
        .filter((item) => item.quantity > 0)
      const newTotal = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      return { items: newItems, total: newTotal }
    }

    case "CLEAR_CART":
      return { items: [], total: 0 }

    case "LOAD_CART": {
      if (!Array.isArray(action.payload)) {
        return state
      }
      const validItems = action.payload.filter(
        (item) => item && typeof item === "object" && "id" in item && "name" in item && "price" in item,
      )
      const newTotal = validItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0)
      return { items: validItems, total: newTotal }
    }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCart = localStorage.getItem("fertiterra-cart")
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart)
          if (Array.isArray(parsedCart)) {
            dispatch({ type: "LOAD_CART", payload: parsedCart })
          }
        }
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("fertiterra-cart", JSON.stringify(state.items))
      } catch (error) {
        console.error("Error saving cart to localStorage:", error)
      }
    }
  }, [state.items])

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
