"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { CartButton } from "@/components/cart-button"
import { Menu, X, User, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut, isLoading } = useAuth()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const hormonesAndFertilityLinks = [
    { href: "/test-kits/hormone-fertility", label: "Hormone & Fertility Test" },
    { href: "/learn/planning-future-children", label: "Planning for Future Children" },
    { href: "/learn/struggling-to-conceive", label: "Struggling to Conceive" },
    { href: "/appointments/egg-freezing", label: "Egg Freezing" },
  ]

  const symptomsLinks = [
    { href: "/appointments/gynaecologist", label: "Gynaecologist Consultation" },
    { href: "/appointments/menopause-specialist", label: "Menopause Specialist" },
    { href: "/appointments/skin-consultation", label: "Skin Consultation" },
    { href: "/appointments/nutrition", label: "Nutrition Consultation" },
  ]

  const clinicalCareLinks = [
    { href: "/appointments/advisor-call", label: "Advisor Call" },
    { href: "/appointments/ultrasound", label: "Ultrasound" },
    { href: "/appointments/gynaecologist", label: "Gynaecologist" },
    { href: "/appointments/counselling", label: "Counselling" },
    { href: "/plans/basic-fertility-checkup", label: "Basic Fertility Checkup" },
  ]

  const learnLinks = [
    { href: "/learn/trying-to-conceive", label: "Trying to Conceive" },
    { href: "/learn/lgbtqia-family", label: "LGBTQIA+ Family Building" },
    { href: "/learn/get-started-kit", label: "Get Started Kit" },
    { href: "/knowledge-centre", label: "Knowledge Centre" },
    { href: "/blog", label: "Blog" },
  ]

  const shopLinks = [
    { href: "/test-kits", label: "Test Kits" },
    { href: "/shop/merch", label: "FertiThreads Merchandise" },
    { href: "/shop", label: "All Products" },
  ]

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
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Hormones & Fertility */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Hormones & Fertility</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {hormonesAndFertilityLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{link.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Symptoms */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Symptoms</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {symptomsLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{link.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Clinical Care */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Clinical Care</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {clinicalCareLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{link.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Learn */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {learnLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{link.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Shop */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {shopLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{link.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* For Employers */}
            <NavigationMenuItem>
              <Link href="/for-employers" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  For Employers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
                <Button variant="ghost">Login</Button>
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
            {/* Hormones & Fertility - Mobile */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-900">Hormones & Fertility</div>
              {hormonesAndFertilityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm py-2 pl-4 text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Symptoms - Mobile */}
            <div className="space-y-2 border-t pt-3">
              <div className="text-sm font-semibold text-gray-900">Symptoms</div>
              {symptomsLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm py-2 pl-4 text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Clinical Care - Mobile */}
            <div className="space-y-2 border-t pt-3">
              <div className="text-sm font-semibold text-gray-900">Clinical Care</div>
              {clinicalCareLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm py-2 pl-4 text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Learn - Mobile */}
            <div className="space-y-2 border-t pt-3">
              <div className="text-sm font-semibold text-gray-900">Learn</div>
              {learnLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm py-2 pl-4 text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Shop - Mobile */}
            <div className="space-y-2 border-t pt-3">
              <div className="text-sm font-semibold text-gray-900">Shop</div>
              {shopLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm py-2 pl-4 text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* For Employers - Mobile */}
            <Link
              href="/for-employers"
              className="text-sm font-medium py-2 border-t pt-3"
              onClick={() => setIsMenuOpen(false)}
            >
              For Employers
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
                      Login
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
