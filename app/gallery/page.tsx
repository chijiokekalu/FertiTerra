"use client"

import Link from "next/link"
import Image from "next/image"
import { ImageUploader } from "@/components/image-uploader"
import { ImageGallery } from "@/components/image-gallery"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCcw } from "lucide-react"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/fertiterra-logo.png"
              alt="FertiTerra Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/plans" className="text-sm font-medium">
              Plans
            </Link>
            <Link href="/test-kits" className="text-sm font-medium">
              Test Kits
            </Link>
            <Link href="/blog" className="text-sm font-medium">
              Blog
            </Link>
            <Link href="/community" className="text-sm font-medium">
              Community
            </Link>
          </nav>
          <div className="ml-4 flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Image Gallery</h1>
          <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
            <RefreshCcw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-4">
            <ImageGallery />
          </TabsContent>

          <TabsContent value="upload">
            <div className="max-w-md mx-auto">
              <ImageUploader onUploadComplete={() => window.location.reload()} />
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/fertiterra-logo.png"
                alt="FertiTerra Logo"
                width={120}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">Empowering women through fertility awareness and support.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link href="/about" className="text-sm">
              About Us
            </Link>
            <Link href="/privacy" className="text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
