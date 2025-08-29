"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { Menu, X, Linkedin, Instagram, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const { user, profile, isAdmin, signOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest(".dropdown-container")) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeDropdown])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        {/* Banner */}
        <div className="w-full bg-[#e5d6c9] py-2 px-4 text-center text-sm">
          <div className="flex items-center justify-center gap-4">
            <span>Download a sample Advanced Hormone and Fertility Test report.</span>
            <Link href="/sample-report" className="font-medium">
              Download it here
            </Link>
            <div className="hidden sm:flex items-center gap-3 ml-4">
              <a
                href="https://www.linkedin.com/company/fertiterra-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/fertiterra_technologies?igsh=MXMyZmN3cGRraTJzcg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/fertiterra-logo.png"
              alt="FertiTerra Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Right side - Navigation, Cart, Login, Signup */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium hover:text-rose-600 transition-colors">
                  <span>Learn</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/learn/planning-future-children">Planning Future Children</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/learn/trying-to-conceive">Trying to Conceive</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/learn/struggling-to-conceive">Struggling to Conceive</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/learn/lgbtqia-family">LGBTQIA+ Family Building</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium hover:text-rose-600 transition-colors">
                  <span>Appointments</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/appointments/advisor-call">Hormone & Fertility Advisor Call</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/appointments/gynaecologist">Private Gynaecologist</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/appointments/nutrition">Fertility Nutrition</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/appointments/counselling">Fertility Counselling</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/appointments/egg-freezing">Egg Freezing Consultation</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/test-kits" className="text-sm font-medium hover:text-rose-600 transition-colors">
                Test Kits
              </Link>
              <Link href="/knowledge-centre" className="text-sm font-medium hover:text-rose-600 transition-colors">
                Knowledge Centre
              </Link>
              <Link href="/for-employers" className="text-sm font-medium hover:text-rose-600 transition-colors">
                For Employers
              </Link>
            </nav>

            {/* Cart, Login, and CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
              </Link>
              <Link href="/plans/basic-fertility-checkup">
                <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="container py-4 space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Learn</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/learn/planning-future-children"
                    className="block text-sm text-gray-600 hover:text-rose-600"
                  >
                    Planning Future Children
                  </Link>
                  <Link href="/learn/trying-to-conceive" className="block text-sm text-gray-600 hover:text-rose-600">
                    Trying to Conceive
                  </Link>
                  <Link
                    href="/learn/struggling-to-conceive"
                    className="block text-sm text-gray-600 hover:text-rose-600"
                  >
                    Struggling to Conceive
                  </Link>
                  <Link href="/learn/lgbtqia-family" className="block text-sm text-gray-600 hover:text-rose-600">
                    LGBTQIA+ Family Building
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-medium text-gray-900">Appointments</div>
                <div className="pl-4 space-y-2">
                  <Link href="/appointments/advisor-call" className="block text-sm text-gray-600 hover:text-rose-600">
                    Hormone & Fertility Advisor Call
                  </Link>
                  <Link href="/appointments/gynaecologist" className="block text-sm text-gray-600 hover:text-rose-600">
                    Private Gynaecologist
                  </Link>
                  <Link href="/appointments/nutrition" className="block text-sm text-gray-600 hover:text-rose-600">
                    Fertility Nutrition
                  </Link>
                  <Link href="/appointments/counselling" className="block text-sm text-gray-600 hover:text-rose-600">
                    Fertility Counselling
                  </Link>
                  <Link href="/appointments/egg-freezing" className="block text-sm text-gray-600 hover:text-rose-600">
                    Egg Freezing Consultation
                  </Link>
                </div>
              </div>

              <Link href="/test-kits" className="block font-medium text-gray-900 hover:text-rose-600">
                Test Kits
              </Link>
              <Link href="/knowledge-centre" className="block font-medium text-gray-900 hover:text-rose-600">
                Knowledge Centre
              </Link>
              <Link href="/for-employers" className="block font-medium text-gray-900 hover:text-rose-600">
                For Employers
              </Link>

              <div className="pt-4 border-t space-y-2">
                <Link href="/login">
                  <Button variant="ghost" className="w-full justify-start">
                    Log In
                  </Button>
                </Link>
                <Link href="/plans/basic-fertility-checkup">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Get Started</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
