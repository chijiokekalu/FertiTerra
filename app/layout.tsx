import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FertiTerra Technologies - Fertility Testing & Healthcare Solutions",
  description:
    "Advanced fertility testing, telemedicine consultations, and comprehensive reproductive health solutions across Africa. Expert care for your fertility journey.",
  keywords:
    "fertility testing, reproductive health, telemedicine, Africa, fertility clinic, hormone testing, PCOS, fertility awareness",
  authors: [{ name: "FertiTerra Technologies" }],
  creator: "FertiTerra Technologies",
  publisher: "FertiTerra Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "FertiTerra Technologies - Fertility Testing & Healthcare Solutions",
    description:
      "Advanced fertility testing, telemedicine consultations, and comprehensive reproductive health solutions across Africa.",
    url: "https://fertiterratechnologies.com",
    siteName: "FertiTerra Technologies",
    images: [
      {
        url: "/images/fertiterra-logo-main.png",
        width: 1200,
        height: 630,
        alt: "FertiTerra Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FertiTerra Technologies - Fertility Testing & Healthcare Solutions",
    description:
      "Advanced fertility testing, telemedicine consultations, and comprehensive reproductive health solutions across Africa.",
    images: ["/images/fertiterra-logo-main.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
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

        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#635bff" />
        <meta name="msapplication-TileColor" content="#635bff" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
