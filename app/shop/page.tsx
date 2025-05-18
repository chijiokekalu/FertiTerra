import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Filter, Search, ShoppingBag, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CartButton } from "@/components/cart-button"
import { ProductCard } from "@/components/product-card"

export default function ShopPage() {
  // Sample product data - in a real app, this would come from a database
  const featuredProducts = [
    {
      id: "prenatal-vitamins",
      name: "FertiTerra Prenatal Vitamins",
      price: 35,
      category: "Supplements",
      image: "/placeholder.svg?height=300&width=300",
      description: "Complete prenatal vitamin formula with folate, iron, calcium, and DHA.",
      featured: true,
      color: "rose",
    },
    {
      id: "ovulation-test-kit",
      name: "Advanced Ovulation Test Kit",
      price: 45,
      category: "Test Kits",
      image: "/images/test-kit-box.png",
      description: "Digital ovulation predictor with 20 test strips for accurate cycle tracking.",
      featured: true,
      color: "purple",
    },
    {
      id: "fertility-tea",
      name: "Fertility Boost Herbal Tea",
      price: 18,
      category: "Supplements",
      image: "/placeholder.svg?height=300&width=300",
      description: "Organic herbal tea blend designed to support reproductive health.",
      featured: true,
      color: "teal",
    },
  ]

  const supplements = [
    {
      id: "coq10-supplement",
      name: "CoQ10 Fertility Support",
      price: 42,
      category: "Supplements",
      image: "/placeholder.svg?height=300&width=300",
      description: "High-potency CoQ10 supplement for egg quality support.",
      color: "rose",
    },
    {
      id: "myo-inositol",
      name: "Myo-Inositol Powder",
      price: 29,
      category: "Supplements",
      image: "/placeholder.svg?height=300&width=300",
      description: "Supports ovarian function and hormone balance, especially for PCOS.",
      color: "purple",
    },
    {
      id: "vitamin-d3",
      name: "Vitamin D3 + K2 Drops",
      price: 24,
      category: "Supplements",
      image: "/placeholder.svg?height=300&width=300",
      description: "Liquid vitamin D3 with K2 for optimal absorption and bone health.",
      color: "teal",
    },
    {
      id: "omega-3",
      name: "Omega-3 DHA/EPA",
      price: 32,
      category: "Supplements",
      image: "/placeholder.svg?height=300&width=300",
      description: "Pharmaceutical-grade fish oil for reproductive and overall health.",
      color: "rose",
    },
  ]

  const medications = [
    {
      id: "clomid-50mg",
      name: "Clomiphene Citrate 50mg",
      price: 75,
      category: "Medications",
      image: "/placeholder.svg?height=300&width=300",
      description: "Prescription medication for ovulation stimulation. Requires doctor approval.",
      prescription: true,
      color: "purple",
    },
    {
      id: "letrozole-2.5mg",
      name: "Letrozole 2.5mg",
      price: 85,
      category: "Medications",
      image: "/placeholder.svg?height=300&width=300",
      description: "Prescription medication for ovulation induction. Requires doctor approval.",
      prescription: true,
      color: "teal",
    },
    {
      id: "progesterone-100mg",
      name: "Progesterone 100mg",
      price: 65,
      category: "Medications",
      image: "/placeholder.svg?height=300&width=300",
      description: "Prescription medication for luteal phase support. Requires doctor approval.",
      prescription: true,
      color: "rose",
    },
  ]

  const materials = [
    {
      id: "basal-thermometer",
      name: "Digital Basal Thermometer",
      price: 25,
      category: "Materials",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultra-sensitive thermometer for accurate basal body temperature tracking.",
      color: "purple",
    },
    {
      id: "fertility-journal",
      name: "FertiTerra Tracking Journal",
      price: 18,
      category: "Materials",
      image: "/placeholder.svg?height=300&width=300",
      description: "Comprehensive fertility tracking journal with educational resources.",
      color: "teal",
    },
    {
      id: "specimen-cups",
      name: "Sterile Specimen Cups (5-pack)",
      price: 12,
      category: "Materials",
      image: "/placeholder.svg?height=300&width=300",
      description: "Medical-grade specimen collection cups for testing purposes.",
      color: "rose",
    },
    {
      id: "fertility-lubricant",
      name: "Fertility-Friendly Lubricant",
      price: 22,
      category: "Materials",
      image: "/placeholder.svg?height=300&width=300",
      description: "pH-balanced lubricant that supports sperm motility and viability.",
      color: "purple",
    },
  ]

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
            <Link href="/shop" className="text-sm font-medium">
              Shop
            </Link>
            <Link href="/blog" className="text-sm font-medium">
              Blog
            </Link>
            <Link href="/community" className="text-sm font-medium">
              Community
            </Link>
          </nav>
          <div className="ml-4 flex items-center gap-2">
            <CartButton />
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

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-b from-rose-50 via-purple-50 to-teal-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-rose-200 opacity-20 blur-3xl"></div>
            <div className="absolute top-1/4 -right-24 w-72 h-72 rounded-full bg-teal-200 opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-24 left-1/3 w-60 h-60 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-gradient-to-r from-rose-100 to-purple-100 px-3 py-1 text-sm text-rose-700 mb-4">
                FertiTerra Shop
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-rose-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Fertility Products & Medications
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Quality products to support your fertility journey, from supplements to medications.
              </p>
              <div className="flex w-full max-w-md flex-col gap-2 min-[400px]:flex-row mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-8 bg-white/80 backdrop-blur-sm border-rose-100"
                  />
                </div>
                <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-8 md:py-12">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="font-medium text-foreground">Shop</li>
            </ol>
          </nav>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="supplements">Supplements</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="test-kits">Test Kits</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <section>
                <h3 className="text-xl font-bold mb-4 text-purple-700">Supplements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {supplements.map((product) => (
                    <ProductCard key={product.id} product={product} compact />
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-4 text-rose-700">Medications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {medications.map((product) => (
                    <ProductCard key={product.id} product={product} compact />
                  ))}
                </div>
                <div className="mt-4 p-4 bg-rose-50 border border-rose-100 rounded-lg">
                  <p className="text-sm text-rose-700">
                    <strong>Note:</strong> Prescription medications require doctor approval. Schedule a consultation or
                    upload your prescription during checkout.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-4 text-teal-700">Materials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {materials.map((product) => (
                    <ProductCard key={product.id} product={product} compact />
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="supplements" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...featuredProducts.filter((p) => p.category === "Supplements"), ...supplements].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="medications" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {medications.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="p-4 bg-rose-50 border border-rose-100 rounded-lg">
                <p className="text-sm text-rose-700">
                  <strong>Note:</strong> Prescription medications require doctor approval. Schedule a consultation or
                  upload your prescription during checkout.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="materials" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {materials.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="test-kits" className="space-y-6">
              <div className="flex justify-center">
                <div className="text-center max-w-md py-12">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Test Kits</h3>
                  <p className="text-muted-foreground mb-4">
                    Our comprehensive test kits are available on our dedicated test kits page.
                  </p>
                  <Link href="/test-kits">
                    <Button>View Test Kits</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <section className="py-12 md:py-16 bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full bg-teal-200 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-24 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-teal-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
                  Quality Guaranteed
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  All FertiTerra products are carefully selected and tested to ensure the highest quality standards.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="flex flex-col items-center space-y-2 p-6">
                  <div className="rounded-full bg-gradient-to-r from-teal-400 to-teal-500 p-3">
                    <Tag className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-700">Premium Quality</h3>
                  <p className="text-center text-muted-foreground">
                    All supplements and medications meet or exceed industry standards for purity and potency.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 p-6">
                  <div className="rounded-full bg-gradient-to-r from-purple-400 to-purple-500 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">Expert Formulated</h3>
                  <p className="text-center text-muted-foreground">
                    Developed by fertility specialists and pharmacists with your reproductive health in mind.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 p-6">
                  <div className="rounded-full bg-gradient-to-r from-rose-400 to-rose-500 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-rose-700">Third-Party Tested</h3>
                  <p className="text-center text-muted-foreground">
                    All products undergo rigorous third-party testing to verify ingredients and potency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
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
          <div className="flex items-center gap-4">
            <Link href="#" className="text-rose-500 hover:text-rose-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="#" className="text-purple-500 hover:text-purple-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-teal-500 hover:text-teal-600 transition-colors">
              <span className="sr-only">WhatsApp</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.462.13-.61.136-.137.301-.354.451-.531.151-.177.2-.301.3-.502.099-.2.05-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.007-.371-.01-.571-.01-.2 0-.523.074-.797.375-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.571-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
