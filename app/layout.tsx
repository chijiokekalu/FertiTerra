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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#FF4444",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fertiterra.com",
    title: "FertiTerra Technologies - AI-Powered Fertility Care",
    description:
      "Africa's first AI-powered fertility platform. Comprehensive hormone testing, personalized care plans, and direct access to fertility specialists.",
    siteName: "FertiTerra",
    images: [
      {
        url: "/images/fertiterra-logo.png",
        width: 1200,
        height: 630,
        alt: "FertiTerra Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FertiTerra Technologies - AI-Powered Fertility Care",
    description:
      "Africa's first AI-powered fertility platform. Comprehensive hormone testing, personalized care plans, and direct access to fertility specialists.",
    images: ["/images/fertiterra-logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9375281731859570"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF4444" />
      </head>
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
