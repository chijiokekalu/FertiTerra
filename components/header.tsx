"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { Menu, X, ShoppingBag, Calendar, BookOpen, Video } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Header() {
  const { user, profile, isAdmin, signOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=140&text=FertiTerra"
            alt="FertiTerra Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {user && (
                <>
                  <NavigationMenuItem>
                    <Link href="/cycle-tracking" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Track Cycle
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/learn/fertility-health" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <BookOpen className="h-4 w-4 mr-2" />
                        Learn
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/consultation" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Video className="h-4 w-4 mr-2" />
                        Consult Doctor
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </>
              )}

              <NavigationMenuItem>
                <NavigationMenuTrigger>Hormones & Fertility</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-rose-600 p-6 no-underline outline-none focus:shadow-md"
                          href="/hormones/fertility-assessment"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">Fertility Assessment</div>
                          <p className="text-sm leading-tight text-white/90">
                            Comprehensive testing to understand your reproductive health
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-rose-50 focus:bg-rose-50"
                          href="/hormones/amh"
                        >
                          <div className="text-sm font-medium leading-none">AMH</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Anti-Müllerian Hormone and ovarian reserve
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-rose-50 focus:bg-rose-50"
                          href="/hormones/pcos"
                        >
                          <div className="text-sm font-medium leading-none">PCOS</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Polycystic Ovary Syndrome testing and management
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-rose-50 focus:bg-rose-50"
                          href="/hormones/menopause"
                        >
                          <div className="text-sm font-medium leading-none">Menopause</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Perimenopause and menopause hormone testing
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      { title: "Hormone Tests", href: "/shop/hormone-tests" },
                      { title: "Fertility Tests", href: "/shop/fertility-tests" },
                      { title: "Ovulation Tests", href: "/shop/ovulation-tests" },
                      { title: "Supplements", href: "/shop/supplements" },
                      { title: "Bundles", href: "/shop/bundles" },
                      { title: "Gift Cards", href: "/shop/gift-cards" },
                    ].map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-rose-50 focus:bg-rose-50"
                            href={item.href}
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Shopping cart</span>
              </Button>
            </Link>

            {user ? (
              <div className="flex items-center gap-2">
                {isAdmin && (
                  <Link href="/admin">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
                    >
                      Admin Panel
                    </Button>
                  </Link>
                )}
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Button variant="ghost" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-rose-500 hover:bg-rose-600">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col space-y-3 py-4 px-4">
            {user && (
              <div className="border-b pb-2">
                <p className="font-medium mb-2">Your Tools</p>
                <div className="space-y-2">
                  <Link href="/cycle-tracking" className="flex items-center text-sm py-1" onClick={toggleMobileMenu}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Track Cycle
                  </Link>
                  <Link
                    href="/learn/fertility-health"
                    className="flex items-center text-sm py-1"
                    onClick={toggleMobileMenu}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Learn
                  </Link>
                  <Link href="/consultation" className="flex items-center text-sm py-1" onClick={toggleMobileMenu}>
                    <Video className="h-4 w-4 mr-2" />
                    Consult Doctor
                  </Link>
                </div>
              </div>
            )}

            <div className="pt-4 flex flex-col space-y-2">
              {user ? (
                <>
                  {isAdmin && (
                    <Link href="/admin" onClick={toggleMobileMenu}>
                      <Button variant="outline" className="w-full bg-purple-50 text-purple-700 border-purple-200">
                        Admin Panel
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
                  <Link href="/signup" onClick={toggleMobileMenu}>
                    <Button className="w-full bg-rose-500 hover:bg-rose-600">Sign Up</Button>
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
