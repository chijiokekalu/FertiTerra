"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartButton } from "@/components/cart-button"
import { useAuth } from "@/context/auth-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/fertiterra-logo.png"
            alt="FertiTerra Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/plans" className="text-sm font-medium">
            Plans
          </Link>
          <Link href="/test-kits" className="text-sm font-medium">
            Test Kits
          </Link>
          <Link href="/shop" className="text-sm font-medium">
            Shop
          </Link>
          <Link href="/blog" className="text-sm font-medium">
            Blog
          </Link>
          <Link href="/community" className="text-sm font-medium">
            Community
          </Link>
        </nav>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-2">
          <CartButton />
          {user ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={() => signOut()}>
                Log out
              </Button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
                >
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <div className="flex flex-col p-4">
              <Link href="/plans" className="py-2" onClick={() => setIsMenuOpen(false)}>
                Plans
              </Link>
              <Link href="/test-kits" className="py-2" onClick={() => setIsMenuOpen(false)}>
                Test Kits
              </Link>
              <Link href="/shop" className="py-2" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link href="/blog" className="py-2" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/community" className="py-2" onClick={() => setIsMenuOpen(false)}>
                Community
              </Link>

              <div className="border-t my-2"></div>

              {user ? (
                <>
                  <Link href="/dashboard" className="py-2" onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <button
                    className="py-2 text-left text-rose-600"
                    onClick={() => {
                      signOut()
                      setIsMenuOpen(false)
                    }}
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="py-2" onClick={() => setIsMenuOpen(false)}>
                    Log in
                  </Link>
                  <Link href="/signup" className="py-2 text-rose-600" onClick={() => setIsMenuOpen(false)}>
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
