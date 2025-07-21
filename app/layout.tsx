import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/context/auth-context"
import { CartProvider } from "@/context/cart-context"
import { WelcomeChatbotPopup } from "@/components/welcome-chatbot-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FertiTerra Technologies - AI-Powered Fertility Care",
  description:
    "Africa's first AI-powered fertility platform. Comprehensive hormone testing, personalized care plans, and direct access to fertility specialists.",
  generator: "v0.dev",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fertiterra.com"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <CartProvider>{children}</CartProvider>
          </AuthProvider>
        </ThemeProvider>

        {/* Welcome popup (client-side) */}
        <WelcomeChatbotPopup />
      </body>
    </html>
  )
}
