import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8 bg-white">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/fertiterra-logo.png"
                alt="FertiTerra Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              Empowering women with the fertility care they deserve—personalized, accessible, and compassionate.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/fertiterra-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/fertiterra_technologies?igsh=MXMyZmN3cGRraTJzcg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Plans</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/plans/basic-fertility-checkup" className="text-sm text-gray-500 hover:text-rose-500">
                  Basic Fertility Checkup
                </Link>
              </li>
              <li>
                <Link href="/plans/ttc" className="text-sm text-gray-500 hover:text-rose-500">
                  TTC Plan
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-400">Perimenopausal Plan (Coming Soon)</span>
              </li>
              <li>
                <span className="text-sm text-gray-400">General Wellness (Coming Soon)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/consultation" className="text-sm text-gray-500 hover:text-rose-500">
                  Doctor Consultations
                </Link>
              </li>
              <li>
                <Link href="/test-kits" className="text-sm text-gray-500 hover:text-rose-500">
                  At-Home Test Kits
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-gray-500 hover:text-rose-500">
                  Support Groups
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/founders-story" className="text-sm text-gray-500 hover:text-rose-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-500 hover:text-rose-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-gray-500 hover:text-rose-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} FertiTerra. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-rose-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-rose-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
