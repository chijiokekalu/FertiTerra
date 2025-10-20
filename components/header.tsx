"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, ShoppingCart, User, LogOut } from "lucide-react"
import { useCart } from "@/context/cart-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const [open, setOpen] = useState(false)
  const { items } = useCart()

  useEffect(() => {
    const user = localStorage.getItem("fertiterra_user")
    if (user) {
      const userData = JSON.parse(user)
      setIsLoggedIn(true)
      setUserName(userData.name || userData.email)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("fertiterra_user")
    setIsLoggedIn(false)
    setUserName("")
    window.location.href = "/"
  }

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/fertiterra-logo.png" alt="FertiTerra" width={40} height={40} className="h-10 w-auto" />
          <span className="text-2xl font-bold">
            fertiterra<sup className="text-xs">®</sup>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-1">
            {/* Hormones & Fertility */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50">
                Hormones & fertility
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <div className="space-y-3">
                    <Link
                      href="/test-kits/hormone-fertility"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Hormone & Fertility Test</div>
                      <div className="text-sm text-gray-600">Comprehensive at-home testing kit</div>
                    </Link>
                    <Link href="/test-kits" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-sm mb-1">All Test Kits</div>
                      <div className="text-sm text-gray-600">View our complete range</div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Symptoms */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50">
                Symptoms
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <div className="space-y-3">
                    <Link
                      href="/symptoms/irregular-periods"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Irregular periods</div>
                      <div className="text-sm text-gray-600">Track and understand your cycle</div>
                    </Link>
                    <Link href="/symptoms/pcos" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-sm mb-1">PCOS</div>
                      <div className="text-sm text-gray-600">Polycystic ovary syndrome support</div>
                    </Link>
                    <Link
                      href="/symptoms/hot-flashes"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Hot flashes</div>
                      <div className="text-sm text-gray-600">Menopause symptom management</div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Clinical Care */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50">
                Clinical care
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[500px] p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/appointments/advisor-call"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Advisor call</div>
                      <div className="text-sm text-gray-600">Video consultation</div>
                    </Link>
                    <Link
                      href="/appointments/ultrasound"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Ultrasound scan</div>
                      <div className="text-sm text-gray-600">Pelvic ultrasound</div>
                    </Link>
                    <Link
                      href="/appointments/gynaecologist"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Gynaecologist</div>
                      <div className="text-sm text-gray-600">Specialist consultation</div>
                    </Link>
                    <Link
                      href="/appointments/nutrition"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Nutrition</div>
                      <div className="text-sm text-gray-600">Fertility nutrition advice</div>
                    </Link>
                    <Link
                      href="/appointments/counselling"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Counselling</div>
                      <div className="text-sm text-gray-600">Mental health support</div>
                    </Link>
                    <Link
                      href="/appointments/egg-freezing"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Egg freezing</div>
                      <div className="text-sm text-gray-600">Fertility preservation</div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Shop */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50">
                Shop
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <div className="space-y-3">
                    <Link href="/shop/merch" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-sm mb-1">Merchandise</div>
                      <div className="text-sm text-gray-600">FertiThreads collection</div>
                    </Link>
                    <Link href="/test-kits" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-sm mb-1">Test kits</div>
                      <div className="text-sm text-gray-600">At-home fertility testing</div>
                    </Link>
                    <Link href="/shop" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-sm mb-1">All products</div>
                      <div className="text-sm text-gray-600">Browse everything</div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Learn */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50">
                Learn
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[500px] p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/learn/planning-future-children"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Planning future children</div>
                      <div className="text-sm text-gray-600">Prepare for pregnancy</div>
                    </Link>
                    <Link
                      href="/learn/struggling-to-conceive"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Struggling to conceive</div>
                      <div className="text-sm text-gray-600">Fertility support</div>
                    </Link>
                    <Link
                      href="/learn/lgbtqia-family"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">LGBTQIA+ family building</div>
                      <div className="text-sm text-gray-600">Inclusive fertility care</div>
                    </Link>
                    <Link
                      href="/learn/get-started-kit"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Get started kit</div>
                      <div className="text-sm text-gray-600">Begin your journey</div>
                    </Link>
                    <Link href="/knowledge-centre" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-sm mb-1">Knowledge centre</div>
                      <div className="text-sm text-gray-600">Educational resources</div>
                    </Link>
                    <Link href="/blog" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-sm mb-1">Blog</div>
                      <div className="text-sm text-gray-600">Latest articles</div>
                    </Link>
                    <Link
                      href="/about/founders-story"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">Founder's story</div>
                      <div className="text-sm text-gray-600">Our mission</div>
                    </Link>
                    <Link href="/meet-the-team" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-sm mb-1">Meet the team</div>
                      <div className="text-sm text-gray-600">The people behind FertiTerra</div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* For Employers - Standalone Link */}
            <NavigationMenuItem>
              <Link href="/for-employers" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  For employers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side - Cart, Login, CTA Button */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link href="/cart" className="relative hover:opacity-70 transition-opacity">
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Login / User Menu */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/wombs">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
          )}

          {/* Personalise My Test Button */}
          <Link href="/test-kits/hormone-fertility" className="hidden lg:block">
            <Button className="bg-black text-white hover:bg-gray-800 px-6">Personalise my test</Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col gap-6 py-6">
                {/* Mobile CTA */}
                <Link href="/test-kits/hormone-fertility" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">Personalise my test</Button>
                </Link>

                {/* User Section */}
                {isLoggedIn && (
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{userName}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Link href="/profile" onClick={() => setOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          Profile
                        </Button>
                      </Link>
                      <Link href="/dashboard" onClick={() => setOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          Dashboard
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          handleLogout()
                          setOpen(false)
                        }}
                        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  </div>
                )}

                {/* Mobile Navigation */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="hormones">
                    <AccordionTrigger className="text-base font-medium">Hormones & fertility</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="/test-kits/hormone-fertility"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Hormone & Fertility Test
                        </Link>
                        <Link href="/test-kits" onClick={() => setOpen(false)} className="block py-2 text-sm">
                          All Test Kits
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="symptoms">
                    <AccordionTrigger className="text-base font-medium">Symptoms</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="/symptoms/irregular-periods"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Irregular periods
                        </Link>
                        <Link href="/symptoms/pcos" onClick={() => setOpen(false)} className="block py-2 text-sm">
                          PCOS
                        </Link>
                        <Link
                          href="/symptoms/hot-flashes"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Hot flashes
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="clinical">
                    <AccordionTrigger className="text-base font-medium">Clinical care</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="/appointments/advisor-call"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Advisor call
                        </Link>
                        <Link
                          href="/appointments/ultrasound"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Ultrasound scan
                        </Link>
                        <Link
                          href="/appointments/gynaecologist"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Gynaecologist
                        </Link>
                        <Link
                          href="/appointments/nutrition"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Nutrition
                        </Link>
                        <Link
                          href="/appointments/counselling"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Counselling
                        </Link>
                        <Link
                          href="/appointments/egg-freezing"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Egg freezing
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="shop">
                    <AccordionTrigger className="text-base font-medium">Shop</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link href="/shop/merch" onClick={() => setOpen(false)} className="block py-2 text-sm">
                          Merchandise
                        </Link>
                        <Link href="/test-kits" onClick={() => setOpen(false)} className="block py-2 text-sm">
                          Test kits
                        </Link>
                        <Link href="/shop" onClick={() => setOpen(false)} className="block py-2 text-sm">
                          All products
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="learn">
                    <AccordionTrigger className="text-base font-medium">Learn</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="/learn/planning-future-children"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Planning future children
                        </Link>
                        <Link
                          href="/learn/struggling-to-conceive"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Struggling to conceive
                        </Link>
                        <Link
                          href="/learn/lgbtqia-family"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          LGBTQIA+ family building
                        </Link>
                        <Link
                          href="/learn/get-started-kit"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Get started kit
                        </Link>
                        <Link href="/knowledge-centre" onClick={() => setOpen(false)} className="block py-2 text-sm">
                          Knowledge centre
                        </Link>
                        <Link href="/blog" onClick={() => setOpen(false)} className="block py-2 text-sm">
                          Blog
                        </Link>
                        <Link
                          href="/about/founders-story"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          Founder's story
                        </Link>
                        <Link href="/meet-the-team" onClick={() => setOpen(false)} className="block py-2 text-sm">
                          Meet the team
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  href="/for-employers"
                  onClick={() => setOpen(false)}
                  className="py-2 font-medium text-base hover:text-purple-600"
                >
                  For employers
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
