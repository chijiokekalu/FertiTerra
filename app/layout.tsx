import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "FertiTerra - Fertility Testing & Healthcare Solutions",
  description:
    "Comprehensive fertility testing and healthcare solutions for African families. Get personalized fertility insights with our at-home test kits and expert consultations.",
  keywords:
    "fertility testing, fertility healthcare, Africa, hormone testing, fertility consultation, reproductive health",
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
  themeColor: "#FF4444",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fertiterra.com",
    title: "FertiTerra - Fertility Testing & Healthcare Solutions",
    description: "Comprehensive fertility testing and healthcare solutions for African families.",
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
    title: "FertiTerra - Fertility Testing & Healthcare Solutions",
    description: "Comprehensive fertility testing and healthcare solutions for African families.",
    images: ["/images/fertiterra-logo.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
</merged_code>
