import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { AuthProvider } from "@/context/auth-context"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FertiTerra Technologies - Fertility Health & Wellness",
  description:
    "Comprehensive fertility health solutions, telemedicine consultations, and wellness products for your reproductive journey.",
  keywords: "fertility, reproductive health, telemedicine, wellness, fertility testing, consultation",
  authors: [{ name: "FertiTerra Technologies" }],
  openGraph: {
    title: "FertiTerra Technologies - Fertility Health & Wellness",
    description:
      "Comprehensive fertility health solutions, telemedicine consultations, and wellness products for your reproductive journey.",
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
    title: "FertiTerra Technologies - Fertility Health & Wellness",
    description:
      "Comprehensive fertility health solutions, telemedicine consultations, and wellness products for your reproductive journey.",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9375281731859570"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}
