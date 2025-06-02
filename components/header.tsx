"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { Menu, X, ShoppingBag } from "lucide-react"

export function Header() {
  const { user, profile, isAdmin, signOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="w-full bg-white">
      {/* Banner */}
      <div className="w-full bg-[#e5d6c9] py-2 px-4 text-center text-sm">
        Download a sample Advanced Hormone and Fertility Test report.{" "}
        <Link href="/sample-report" className="font-medium">
          Download it here
        </Link>
      </div>

      {/* Main header */}
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/fertiterra-logo.png"
            alt="FertiTerra Logo"
            width={180}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Right side - Navigation, Cart, Login, Signup */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/test-kits" className="text-sm font-medium hover:text-rose-500">
              Hormones & Fertility
            </Link>

            <Link href="/symptoms" className="text-sm font-medium hover:text-rose-500">
              Symptoms
            </Link>

            <Link href="/blog" className="text-sm font-medium hover:text-rose-500">
              Learn
            </Link>

            <Link href="/consultation" className="text-sm font-medium hover:text-rose-500">
              Clinical Care
            </Link>

            <Link href="/shop" className="text-sm font-medium hover:text-rose-500">
              Shop
            </Link>

            <Link href="/for-employers" className="text-sm font-medium hover:text-rose-500">
              For Employers
            </Link>
          </nav>

          {/* Cart, Login, and CTA */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="hidden md:block">
              <ShoppingBag className="h-5 w-5" />
            </Link>

            {user ? (
              <div className="hidden md:flex items-center gap-4">
                {isAdmin && (
                  <Link href="/admin/dashboard">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
                    >
                      Admin
                    </Button>
                  </Link>
                )}
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <Link href="/login" className="text-sm font-medium">
                  Login
                </Link>
                <Link href="/test-kits">
                  <Button className="bg-black hover:bg-gray-800 text-white rounded-md">Personalise my test</Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container flex flex-col space-y-4 py-4">
            {/* Mobile navigation sections */}
            <div className="space-y-3">
              <Link href="/test-kits" className="block font-medium" onClick={toggleMobileMenu}>
                Hormones & Fertility
              </Link>
              <Link href="/symptoms" className="block font-medium" onClick={toggleMobileMenu}>
                Symptoms
              </Link>
              <Link href="/blog" className="block font-medium" onClick={toggleMobileMenu}>
                Learn
              </Link>
              <Link href="/consultation" className="block font-medium" onClick={toggleMobileMenu}>
                Clinical Care
              </Link>
              <Link href="/shop" className="block font-medium" onClick={toggleMobileMenu}>
                Shop
              </Link>
              <Link href="/for-employers" className="block font-medium" onClick={toggleMobileMenu}>
                For Employers
              </Link>
            </div>

            <div className="border-t pt-4 flex flex-col space-y-2">
              <Link href="/cart" onClick={toggleMobileMenu}>
                <Button variant="outline" className="w-full justify-start">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Cart
                </Button>
              </Link>

              {user ? (
                <>
                  {isAdmin && (
                    <Link href="/admin/dashboard" onClick={toggleMobileMenu}>
                      <Button variant="outline" className="w-full bg-purple-50 text-purple-700 border-purple-200">
                        Admin Dashboard
                      </Button>
                    </Link>
                  )}
                  <Link href="/dashboard" onClick={toggleMobileMenu}>
                    <Button variant="outline" className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      signOut()
                      toggleMobileMenu()
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={toggleMobileMenu}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/test-kits" onClick={toggleMobileMenu}>
                    <Button className="w-full bg-black text-white">Personalise my test</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
