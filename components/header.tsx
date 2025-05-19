"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { Menu, X } from "lucide-react"

export function Header() {
  const { user, signOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/test-kits" className="text-sm font-medium">
            Test Kits
          </Link>
          <Link href="/consultation" className="text-sm font-medium">
            Consultation
          </Link>
          <Link href="/community" className="text-sm font-medium">
            Community
          </Link>
          <Link href="/blog" className="text-sm font-medium">
            Blog
          </Link>

          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="ghost" size="sm">
                  Profile
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b">
          <nav className="container flex flex-col py-4 space-y-4">
            <Link href="/test-kits" className="text-sm font-medium" onClick={toggleMobileMenu}>
              Test Kits
            </Link>
            <Link href="/consultation" className="text-sm font-medium" onClick={toggleMobileMenu}>
              Consultation
            </Link>
            <Link href="/community" className="text-sm font-medium" onClick={toggleMobileMenu}>
              Community
            </Link>
            <Link href="/blog" className="text-sm font-medium" onClick={toggleMobileMenu}>
              Blog
            </Link>

            {user ? (
              <>
                <Link href="/dashboard" onClick={toggleMobileMenu}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Dashboard
                  </Button>
                </Link>
                <Link href="/profile" onClick={toggleMobileMenu}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Profile
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
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
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Log In
                  </Button>
                </Link>
                <Link href="/signup" onClick={toggleMobileMenu}>
                  <Button size="sm" className="w-full justify-start">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
