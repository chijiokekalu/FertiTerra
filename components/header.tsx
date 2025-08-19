"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { Menu, User } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CartButton } from "@/components/cart-button"

const navigation = [
  { name: "Learn", href: "/learn" },
  { name: "Shop", href: "/shop" },
  { name: "Community", href: "/community" },
  { name: "Knowledge Centre", href: "/knowledge-centre" },
]

export function Header() {
  const { user, profile, isAdmin, signOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

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
    <header className="bg-white shadow-sm border-b">
      {/* Banner */}
      {/* <div className="w-full bg-[#e5d6c9] py-2 px-4 text-center text-sm">
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
      </div> */}

      {/* Main header */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">FertiTerra</span>
            <Image
              className="h-8 w-auto"
              src="/images/fertiterra-logo-main.png"
              alt="FertiTerra"
              width={120}
              height={32}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-rose-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <CartButton />
          <Link href="/login">
            <Button variant="ghost" size="sm">
              <User className="mr-2 h-4 w-4" />
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
              Sign up
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {/* {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container flex flex-col space-y-4 py-4">
            {/* Mobile navigation sections */}
      {/* <div className="space-y-3">
              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setExpandedSection(expandedSection === "hormones" ? null : "hormones")}
                >
                  Hormones & Fertility
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 h-4 w-4 transition-transform ${expandedSection === "hormones" ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expandedSection === "hormones" && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Buy an at-home test</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/test-kits/hormone-fertility"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Test
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Book an appointment</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/appointments/advisor-call"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Advisor Call
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/ultrasound"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Pelvic Ultrasound Scan
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/gynaecologist"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Private Gynaecologist Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/nutrition"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Fertility Nutrition Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/counselling"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Fertility Counselling
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/egg-freezing"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Egg Freezing
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Learn</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/learn/planning-future-children"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Planning future children
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/learn/trying-to-conceive"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Trying to conceive
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/learn/struggling-to-conceive"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Struggling to conceive
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/lgbtqia-family" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Starting an LGBTQIA+ family
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/get-started-kit" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Get started kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Not sure where to start?</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        Tell us what brought you here and we'll let you know how we can help.
                      </p>
                      <Link href="/quiz" className="text-sm font-medium text-rose-500" onClick={toggleMobileMenu}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setExpandedSection(expandedSection === "symptoms" ? null : "symptoms")}
                >
                  Symptoms
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 h-4 w-4 transition-transform ${expandedSection === "symptoms" ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expandedSection === "symptoms" && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Buy an at-home test</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/test-kits/hormone-fertility"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Test
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Book an appointment</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/appointments/advisor-call"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Advisor Call
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/ultrasound"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Pelvic Ultrasound Scan
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/gynaecologist"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Private Gynaecologist Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/menopause-specialist"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Menopause Specialist Consultation
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Learn</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/learn/experiencing-symptoms"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Experiencing symptoms
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/get-started-kit" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Get started kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Not sure where to start?</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        Tell us what brought you here and we'll let you know how we can help.
                      </p>
                      <Link href="/quiz" className="text-sm font-medium text-rose-500" onClick={toggleMobileMenu}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setExpandedSection(expandedSection === "clinical" ? null : "clinical")}
                >
                  Clinical Care
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 h-4 w-4 transition-transform ${expandedSection === "clinical" ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expandedSection === "clinical" && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">At-home test</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/test-kits/hormone-fertility"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Test
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Appointments</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/appointments/advisor-call"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Advisor Call
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/nutrition"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Fertility Nutrition Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/counselling"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Fertility Counselling
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Treatments</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/appointments/ultrasound"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Pelvic Ultrasound Scan
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/gynaecologist"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Private Gynaecologist Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/menopause-specialist"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Menopause Specialist Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/egg-freezing"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Egg Freezing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/skin-consultation"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Skin Consultation
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/trusted-clinics"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Trusted Clinics
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/learn/get-started-kit"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Get started kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Not sure where to start?</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        Tell us what brought you here and we'll let you know how we can help.
                      </p>
                      <Link href="/quiz" className="text-sm font-medium text-rose-500" onClick={toggleMobileMenu}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setExpandedSection(expandedSection === "learn" ? null : "learn")}
                >
                  Learn
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 h-4 w-4 transition-transform ${expandedSection === "learn" ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expandedSection === "learn" && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">FertiTerra</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/about/founders-story" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Founder's story
                          </Link>
                        </li>
                        <li>
                          <Link href="/about/research" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Research
                          </Link>
                        </li>
                        <li>
                          <Link href="/about/team" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about/diversity-inclusion"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Diversity and inclusion
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Resources</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/knowledge-centre" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Knowledge centre
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/guides" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Guides
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/real-stories" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Real stories
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/get-started-kit" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Get started kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Not sure where to start?</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        Tell us what brought you here and we'll let you know how we can help.
                      </p>
                      <Link href="/quiz" className="text-sm font-medium text-rose-500" onClick={toggleMobileMenu}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setExpandedSection(expandedSection === "shop" ? null : "shop")}
                >
                  Shop
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 h-4 w-4 transition-transform ${expandedSection === "shop" ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expandedSection === "shop" && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/test-kits/hormone-fertility"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Test
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shop/merch"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Hertility merch
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shop/gift-cards"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Gift cards
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/learn/get-started-kit"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Get started kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Not sure where to start?</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        Tell us what brought you here and we'll let you know how we can help.
                      </p>
                      <Link href="/quiz" className="text-sm font-medium text-rose-500" onClick={toggleMobileMenu}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/for-employers" className="block font-medium" onClick={toggleMobileMenu}>
                For Employers
              </Link>
            </div>

            <div className="border-t pt-4 flex flex-col space-y-2">
              <Link href="/cart" onClick={toggleMobileMenu}>
                <Button variant="outline" className="w-full justify-start bg-transparent">
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
                    <Button variant="outline" className="w-full bg-transparent">
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
                    <Button variant="outline" className="w-full bg-transparent">
                      Login
                    </Button>
                  </Link>
                  <Link href="/test-kits" onClick={toggleMobileMenu}>
                    <Button className="w-full bg-black text-white">Personalise my test</Button>
                  </Link>
                </>
              )}

              {/* Mobile Social Media Links */}
      {/* <div className="flex justify-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/fertiterra-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/fertiterra_technologies?igsh=MXMyZmN3cGRraTJzcg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </header>
  )
}

export default Header
