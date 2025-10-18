"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Menu,
  User,
  LogOut,
  Settings,
  Heart,
  TestTube,
  Stethoscope,
  ShoppingBag,
  Activity,
  Thermometer,
  AlertCircle,
  Video,
  Calendar,
  Baby,
  Apple,
  BookOpen,
  Users,
  Smartphone,
} from "lucide-react"
import { CartButton } from "./cart-button"

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Check if user is logged in
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/fertiterra-logo.png" alt="FertiTerra" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-bold">FertiTerra</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Hormones & Fertility */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Hormones & Fertility</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium leading-none text-gray-500">Test Kits</h4>
                    <Link
                      href="/test-kits/hormone-fertility"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <TestTube className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-medium">Hormone & Fertility Test</div>
                        <div className="text-sm text-gray-500">Comprehensive at-home testing</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Symptoms */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Symptoms</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <Link
                    href="/symptoms/irregular-periods"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Activity className="h-5 w-5 text-pink-600" />
                    <div>
                      <div className="font-medium">Irregular Periods</div>
                      <div className="text-sm text-gray-500">Track and understand your cycle</div>
                    </div>
                  </Link>
                  <Link
                    href="/symptoms/pcos"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <AlertCircle className="h-5 w-5 text-rose-600" />
                    <div>
                      <div className="font-medium">PCOS</div>
                      <div className="text-sm text-gray-500">Management and support</div>
                    </div>
                  </Link>
                  <Link
                    href="/symptoms/hot-flashes"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Thermometer className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-medium">Hot Flashes</div>
                      <div className="text-sm text-gray-500">Relief and guidance</div>
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Clinical Care */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Clinical Care</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[500px] md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium leading-none text-gray-500">Appointments</h4>
                    <Link
                      href="/appointments/advisor-call"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Video className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Advisor Call</span>
                    </Link>
                    <Link
                      href="/appointments/ultrasound"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Stethoscope className="h-4 w-4 text-pink-600" />
                      <span className="text-sm">Ultrasound</span>
                    </Link>
                    <Link
                      href="/appointments/gynaecologist"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Calendar className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Gynaecologist</span>
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium leading-none text-gray-500">Specialists</h4>
                    <Link
                      href="/appointments/nutrition"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Apple className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Nutrition</span>
                    </Link>
                    <Link
                      href="/appointments/counselling"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Heart className="h-4 w-4 text-red-600" />
                      <span className="text-sm">Counselling</span>
                    </Link>
                    <Link
                      href="/appointments/egg-freezing"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Baby className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Egg Freezing</span>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Learn */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[500px] md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium leading-none text-gray-500">FertiTerra</h4>
                    <Link
                      href="/learn/fertiterra-app"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <Smartphone className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">FertiTerra App</span>
                      <Badge className="ml-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                        New
                      </Badge>
                    </Link>
                    <Link
                      href="/learn/planning-future-children"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Baby className="h-4 w-4 text-pink-600" />
                      <span className="text-sm">Planning Future Children</span>
                    </Link>
                    <Link
                      href="/learn/struggling-to-conceive"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Heart className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Struggling to Conceive</span>
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium leading-none text-gray-500">Resources</h4>
                    <Link
                      href="/learn/lgbtqia-family"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Users className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">LGBTQIA+ Family Building</span>
                    </Link>
                    <Link
                      href="/learn/get-started-kit"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Get Started Kit</span>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Shop */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <Link
                    href="/shop/merch"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ShoppingBag className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-medium">Merchandise</div>
                      <div className="text-sm text-gray-500">FertiThreads collection</div>
                    </div>
                  </Link>
                  <Link
                    href="/test-kits"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <TestTube className="h-5 w-5 text-pink-600" />
                    <div>
                      <div className="font-medium">Test Kits</div>
                      <div className="text-sm text-gray-500">At-home fertility testing</div>
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* For Employers */}
            <NavigationMenuItem>
              <Link href="/for-employers" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  For Employers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side - Cart, Login/User */}
        <div className="flex items-center gap-4">
          <CartButton />

          {isLoggedIn ? (
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <User className="h-4 w-4 mr-2" />
                    {userName}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px]">
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <User className="h-4 w-4" />
                        <span className="text-sm">Profile</span>
                      </Link>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Settings className="h-4 w-4" />
                        <span className="text-sm">Dashboard</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-red-600 w-full text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        <span className="text-sm">Logout</span>
                      </button>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/wombs">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col gap-4 py-4">
                {/* User Section for Mobile */}
                {isLoggedIn ? (
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">{userName}</p>
                        <Link href="/profile" className="text-sm text-gray-500 hover:text-purple-600">
                          View Profile
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Link href="/dashboard" onClick={() => setOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          <Settings className="h-4 w-4 mr-2" />
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
                ) : (
                  <div className="flex flex-col gap-2 border-b pb-4">
                    <Link href="/wombs" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setOpen(false)}>
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </div>
                )}

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="hormones">
                    <AccordionTrigger>Hormones & Fertility</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="/test-kits/hormone-fertility"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Hormone & Fertility Test
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="symptoms">
                    <AccordionTrigger>Symptoms</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="/symptoms/irregular-periods"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Irregular Periods
                        </Link>
                        <Link
                          href="/symptoms/pcos"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          PCOS
                        </Link>
                        <Link
                          href="/symptoms/hot-flashes"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Hot Flashes
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="clinical">
                    <AccordionTrigger>Clinical Care</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="/appointments/advisor-call"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Advisor Call
                        </Link>
                        <Link
                          href="/appointments/ultrasound"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Ultrasound
                        </Link>
                        <Link
                          href="/appointments/gynaecologist"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Gynaecologist
                        </Link>
                        <Link
                          href="/appointments/nutrition"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Nutrition
                        </Link>
                        <Link
                          href="/appointments/counselling"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Counselling
                        </Link>
                        <Link
                          href="/appointments/egg-freezing"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Egg Freezing
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="learn">
                    <AccordionTrigger>Learn</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="/learn/fertiterra-app"
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between py-2 text-sm hover:text-purple-600"
                        >
                          <span>FertiTerra App</span>
                          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">New</Badge>
                        </Link>
                        <Link
                          href="/learn/planning-future-children"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Planning Future Children
                        </Link>
                        <Link
                          href="/learn/struggling-to-conceive"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Struggling to Conceive
                        </Link>
                        <Link
                          href="/learn/lgbtqia-family"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          LGBTQIA+ Family Building
                        </Link>
                        <Link
                          href="/learn/get-started-kit"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Get Started Kit
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="shop">
                    <AccordionTrigger>Shop</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="/shop/merch"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Merchandise
                        </Link>
                        <Link
                          href="/test-kits"
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:text-purple-600"
                        >
                          Test Kits
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  href="/for-employers"
                  onClick={() => setOpen(false)}
                  className="py-3 font-medium hover:text-purple-600"
                >
                  For Employers
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
