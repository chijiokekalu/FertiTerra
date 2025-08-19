"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CartButton } from "@/components/cart-button"
import { UserMenu } from "@/components/user-menu"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isLearnOpen, setIsLearnOpen] = useState(false)
  const [isAppointmentsOpen, setIsAppointmentsOpen] = useState(false)

  const shopItems = [
    { name: "Hormone & Fertility Test", href: "/test-kits" },
    { name: "FertiTerra merch", href: "/fertiterra-merch" },
    { name: "Gift cards", href: "/gift-cards" },
    { name: "Get started kit", href: "/learn/get-started-kit" },
  ]

  const learnItems = [
    { name: "Planning future children", href: "/learn/planning-future-children" },
    { name: "Trying to conceive", href: "/learn/trying-to-conceive" },
    { name: "Struggling to conceive", href: "/learn/struggling-to-conceive" },
    { name: "LGBTQIA+ family", href: "/learn/lgbtqia-family" },
    { name: "Get started kit", href: "/learn/get-started-kit" },
  ]

  const appointmentItems = [
    { name: "Advisor call", href: "/appointments/advisor-call" },
    { name: "Ultrasound", href: "/appointments/ultrasound" },
    { name: "Gynaecologist", href: "/appointments/gynaecologist" },
    { name: "Nutrition", href: "/appointments/nutrition" },
    { name: "Counselling", href: "/appointments/counselling" },
    { name: "Egg freezing", href: "/appointments/egg-freezing" },
    { name: "Menopause specialist", href: "/appointments/menopause-specialist" },
    { name: "Skin consultation", href: "/appointments/skin-consultation" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/fertiterra-logo-main.png"
              alt="FertiTerra"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                onMouseEnter={() => setIsShopOpen(true)}
                onMouseLeave={() => setIsShopOpen(false)}
              >
                <span>Shop</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isShopOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsShopOpen(true)}
                  onMouseLeave={() => setIsShopOpen(false)}
                >
                  {shopItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                onMouseEnter={() => setIsLearnOpen(true)}
                onMouseLeave={() => setIsLearnOpen(false)}
              >
                <span>Learn</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isLearnOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsLearnOpen(true)}
                  onMouseLeave={() => setIsLearnOpen(false)}
                >
                  {learnItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                onMouseEnter={() => setIsAppointmentsOpen(true)}
                onMouseLeave={() => setIsAppointmentsOpen(false)}
              >
                <span>Appointments</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isAppointmentsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsAppointmentsOpen(true)}
                  onMouseLeave={() => setIsAppointmentsOpen(false)}
                >
                  {appointmentItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/knowledge-centre" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Knowledge Centre
            </Link>

            <Link href="/community" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Community
            </Link>

            <Link href="/for-employers" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              For Employers
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <CartButton />
          <UserMenu />

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container py-4 space-y-4">
            <div className="space-y-2">
              <div className="font-medium text-gray-900">Shop</div>
              {shopItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900">Learn</div>
              {learnItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900">Appointments</div>
              {appointmentItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href="/knowledge-centre"
              className="block font-medium text-gray-900 hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Knowledge Centre
            </Link>

            <Link
              href="/community"
              className="block font-medium text-gray-900 hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>

            <Link
              href="/for-employers"
              className="block font-medium text-gray-900 hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              For Employers
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
