"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { Menu, X, ShoppingBag } from "lucide-react"
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
  const { user, signOut } = useAuth()
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
                <NavigationMenuTrigger>Symptoms</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      { title: "Irregular Periods", href: "/symptoms/irregular-periods" },
                      { title: "Painful Periods", href: "/symptoms/painful-periods" },
                      { title: "Fertility Concerns", href: "/symptoms/fertility-concerns" },
                      { title: "PCOS Symptoms", href: "/symptoms/pcos" },
                      { title: "Endometriosis", href: "/symptoms/endometriosis" },
                      { title: "Hormonal Imbalance", href: "/symptoms/hormonal-imbalance" },
                    ].map((symptom) => (
                      <li key={symptom.title}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-rose-50 focus:bg-rose-50"
                            href={symptom.href}
                          >
                            <div className="text-sm font-medium leading-none">{symptom.title}</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Clinical Care</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500 to-purple-600 p-6 no-underline outline-none focus:shadow-md"
                          href="/clinical-care/telemedicine"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">Telemedicine Consultations</div>
                          <p className="text-sm leading-tight text-white/90">
                            Connect with fertility specialists from the comfort of your home
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-rose-50 focus:bg-rose-50"
                          href="/clinical-care/fertility-treatments"
                        >
                          <div className="text-sm font-medium leading-none">Fertility Treatments</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Personalized treatment plans for your fertility journey
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-rose-50 focus:bg-rose-50"
                          href="/clinical-care/hormone-therapy"
                        >
                          <div className="text-sm font-medium leading-none">Hormone Therapy</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Balancing hormones for optimal reproductive health
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-rose-50 focus:bg-rose-50"
                          href="/clinical-care/gynecology"
                        >
                          <div className="text-sm font-medium leading-none">Gynecology</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Comprehensive gynecological care and support
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
              <NavigationMenuItem>
                <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      { title: "Blog", href: "/learn/blog" },
                      { title: "Fertility Guides", href: "/learn/fertility-guides" },
                      { title: "Hormone Health", href: "/learn/hormone-health" },
                      { title: "Research", href: "/learn/research" },
                      { title: "Webinars", href: "/learn/webinars" },
                      { title: "FAQ", href: "/learn/faq" },
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
              <NavigationMenuItem>
                <Link href="/for-employers" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>For Employers</NavigationMenuLink>
                </Link>
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
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/test-kits">
                  <Button className="bg-rose-500 hover:bg-rose-600">Personalise my test</Button>
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
            <div className="border-b pb-2">
              <p className="font-medium mb-2">Hormones & Fertility</p>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/hormones/fertility-assessment" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Fertility Assessment
                </Link>
                <Link href="/hormones/amh" className="text-sm py-1" onClick={toggleMobileMenu}>
                  AMH
                </Link>
                <Link href="/hormones/pcos" className="text-sm py-1" onClick={toggleMobileMenu}>
                  PCOS
                </Link>
                <Link href="/hormones/menopause" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Menopause
                </Link>
              </div>
            </div>

            <div className="border-b pb-2">
              <p className="font-medium mb-2">Symptoms</p>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/symptoms/irregular-periods" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Irregular Periods
                </Link>
                <Link href="/symptoms/painful-periods" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Painful Periods
                </Link>
                <Link href="/symptoms/fertility-concerns" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Fertility Concerns
                </Link>
                <Link href="/symptoms/pcos" className="text-sm py-1" onClick={toggleMobileMenu}>
                  PCOS Symptoms
                </Link>
              </div>
            </div>

            <div className="border-b pb-2">
              <p className="font-medium mb-2">Clinical Care</p>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/clinical-care/telemedicine" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Telemedicine
                </Link>
                <Link href="/clinical-care/fertility-treatments" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Fertility Treatments
                </Link>
                <Link href="/clinical-care/hormone-therapy" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Hormone Therapy
                </Link>
                <Link href="/clinical-care/gynecology" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Gynecology
                </Link>
              </div>
            </div>

            <div className="border-b pb-2">
              <p className="font-medium mb-2">Shop</p>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/shop/hormone-tests" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Hormone Tests
                </Link>
                <Link href="/shop/fertility-tests" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Fertility Tests
                </Link>
                <Link href="/shop/ovulation-tests" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Ovulation Tests
                </Link>
                <Link href="/shop/supplements" className="text-sm py-1" onClick={toggleMobileMenu}>
                  Supplements
                </Link>
              </div>
            </div>

            <Link href="/for-employers" className="font-medium py-2" onClick={toggleMobileMenu}>
              For Employers
            </Link>

            <div className="pt-4 flex flex-col space-y-2">
              {user ? (
                <>
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
                    <Button className="w-full bg-rose-500 hover:bg-rose-600">Personalise my test</Button>
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
