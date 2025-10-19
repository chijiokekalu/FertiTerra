"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { CartButton } from "@/components/cart-button"
import { Menu, X, User, LogOut, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { user, signOut, isLoading } = useAuth()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-gray-950 border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/fertiterra-logo.png"
              alt="FertiTerra Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">FertiTerra</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              About
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/about/founders-story" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Founders Story
              </Link>
              <Link href="/meet-the-team" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Meet the Team
              </Link>
              <Link href="/about/team" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Our Team
              </Link>
            </div>
          </div>

          {/* Learn Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Learn
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/learn" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Learning Hub
              </Link>
              <Link href="/learn/fertiterra-app" className="block px-4 py-2 text-sm hover:bg-gray-100">
                FertiTerra App
              </Link>
              <Link href="/learn/trying-to-conceive" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Trying to Conceive
              </Link>
              <Link href="/learn/planning-future-children" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Planning for Future Children
              </Link>
              <Link href="/learn/struggling-to-conceive" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Struggling to Conceive
              </Link>
              <Link href="/learn/lgbtqia-family" className="block px-4 py-2 text-sm hover:bg-gray-100">
                LGBTQIA+ Family Building
              </Link>
              <Link href="/learn/get-started-kit" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Get Started Kit
              </Link>
            </div>
          </div>

          {/* Services/Appointments Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Services
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/appointments/advisor-call" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Advisor Call
              </Link>
              <Link href="/appointments/ultrasound" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Ultrasound
              </Link>
              <Link href="/appointments/gynaecologist" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Gynaecologist
              </Link>
              <Link href="/appointments/nutrition" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Nutrition Consultation
              </Link>
              <Link href="/appointments/counselling" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Counselling
              </Link>
              <Link href="/appointments/egg-freezing" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Egg Freezing
              </Link>
              <Link href="/appointments/menopause-specialist" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Menopause Specialist
              </Link>
              <Link href="/appointments/skin-consultation" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Skin Consultation
              </Link>
            </div>
          </div>

          {/* Plans Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Plans
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/plans/basic-fertility-checkup" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Basic Fertility Checkup
              </Link>
              <Link href="/plans/ttc" className="block px-4 py-2 text-sm hover:bg-gray-100">
                TTC Plan
              </Link>
            </div>
          </div>

          <Link href="/test-kits" className="text-sm font-medium transition-colors hover:text-primary">
            Test Kits
          </Link>

          {/* Shop Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Shop
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/shop" className="block px-4 py-2 text-sm hover:bg-gray-100">
                All Products
              </Link>
              <Link href="/shop/merch" className="block px-4 py-2 text-sm hover:bg-gray-100">
                FertiThreads Merch
              </Link>
              <Link href="/test-kits" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Test Kits
              </Link>
            </div>
          </div>

          <Link href="/knowledge-centre" className="text-sm font-medium transition-colors hover:text-primary">
            Knowledge Centre
          </Link>

          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>

          <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary">
            Community
          </Link>

          <Link href="/for-employers" className="text-sm font-medium transition-colors hover:text-primary">
            For Employers
          </Link>

          <Link
            href="/wombs"
            className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2"
          >
            Wombs App
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-0.5">New</Badge>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <CartButton />

          {isLoading ? (
            <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="container flex flex-col space-y-3 py-4 px-4">
            <Link href="/" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>

            {/* About - Mobile */}
            <div className="space-y-2">
              <button
                onClick={() => toggleDropdown("about")}
                className="text-sm font-medium py-2 flex items-center justify-between w-full"
              >
                About
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "about" && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/about/founders-story"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Founders Story
                  </Link>
                  <Link
                    href="/meet-the-team"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Meet the Team
                  </Link>
                  <Link
                    href="/about/team"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Learn - Mobile */}
            <div className="space-y-2 border-t pt-3">
              <button
                onClick={() => toggleDropdown("learn")}
                className="text-sm font-medium py-2 flex items-center justify-between w-full"
              >
                Learn
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === "learn" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "learn" && (
                <div className="pl-4 space-y-2">
                  <Link href="/learn" className="block text-sm py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>
                    Learning Hub
                  </Link>
                  <Link
                    href="/learn/fertiterra-app"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FertiTerra App
                  </Link>
                  <Link
                    href="/learn/trying-to-conceive"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Trying to Conceive
                  </Link>
                  <Link
                    href="/learn/planning-future-children"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Planning for Future Children
                  </Link>
                  <Link
                    href="/learn/struggling-to-conceive"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Struggling to Conceive
                  </Link>
                  <Link
                    href="/learn/lgbtqia-family"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    LGBTQIA+ Family Building
                  </Link>
                  <Link
                    href="/learn/get-started-kit"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started Kit
                  </Link>
                </div>
              )}
            </div>

            {/* Services - Mobile */}
            <div className="space-y-2 border-t pt-3">
              <button
                onClick={() => toggleDropdown("services")}
                className="text-sm font-medium py-2 flex items-center justify-between w-full"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "services" && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/appointments/advisor-call"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Advisor Call
                  </Link>
                  <Link
                    href="/appointments/ultrasound"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ultrasound
                  </Link>
                  <Link
                    href="/appointments/gynaecologist"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gynaecologist
                  </Link>
                  <Link
                    href="/appointments/nutrition"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nutrition Consultation
                  </Link>
                  <Link
                    href="/appointments/counselling"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Counselling
                  </Link>
                  <Link
                    href="/appointments/egg-freezing"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Egg Freezing
                  </Link>
                  <Link
                    href="/appointments/menopause-specialist"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Menopause Specialist
                  </Link>
                  <Link
                    href="/appointments/skin-consultation"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skin Consultation
                  </Link>
                </div>
              )}
            </div>

            {/* Plans - Mobile */}
            <div className="space-y-2 border-t pt-3">
              <button
                onClick={() => toggleDropdown("plans")}
                className="text-sm font-medium py-2 flex items-center justify-between w-full"
              >
                Plans
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === "plans" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "plans" && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/plans/basic-fertility-checkup"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Basic Fertility Checkup
                  </Link>
                  <Link
                    href="/plans/ttc"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    TTC Plan
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/test-kits"
              className="text-sm font-medium py-2 border-t pt-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Test Kits
            </Link>

            {/* Shop - Mobile */}
            <div className="space-y-2 border-t pt-3">
              <button
                onClick={() => toggleDropdown("shop")}
                className="text-sm font-medium py-2 flex items-center justify-between w-full"
              >
                Shop
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === "shop" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "shop" && (
                <div className="pl-4 space-y-2">
                  <Link href="/shop" className="block text-sm py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>
                    All Products
                  </Link>
                  <Link
                    href="/shop/merch"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FertiThreads Merch
                  </Link>
                  <Link
                    href="/test-kits"
                    className="block text-sm py-2 text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Test Kits
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/knowledge-centre"
              className="text-sm font-medium py-2 border-t pt-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Knowledge Centre
            </Link>

            <Link href="/blog" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>

            <Link href="/community" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Community
            </Link>

            <Link href="/for-employers" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              For Employers
            </Link>

            <Link
              href="/wombs"
              className="text-sm font-medium py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Wombs App
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-0.5">New</Badge>
            </Link>

            {/* Auth Section - Mobile */}
            <div className="border-t pt-4 mt-2">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block py-2 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link href="/profile" className="block py-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                    Profile
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full justify-start px-0 py-2 text-red-600"
                    onClick={() => {
                      signOut()
                      setIsMenuOpen(false)
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full bg-transparent">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
