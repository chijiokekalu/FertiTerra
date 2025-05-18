import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ShieldCheck, Truck, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CartButton } from "@/components/cart-button"
import { AddToCartButton } from "@/components/add-to-cart-button"

// This would normally come from a database
const getProductById = (id: string) => {
  const products = {
    "prenatal-vitamins": {
      id: "prenatal-vitamins",
      name: "FertiTerra Prenatal Vitamins",
      price: 35,
      category: "Supplements",
      image: "/placeholder.svg?height=300&width=300",
      description: "Complete prenatal vitamin formula with folate, iron, calcium, and DHA.",
      longDescription:
        "Our premium prenatal vitamin formula is specially designed to support women before, during, and after pregnancy. Each daily dose provides essential nutrients for maternal health and fetal development, including folate (as methylfolate), iron, calcium, DHA, and a comprehensive blend of vitamins and minerals.",
      features: [
        "Contains active methylfolate instead of synthetic folic acid",
        "Includes DHA for fetal brain development",
        "Easy-to-digest formula to minimize nausea",
        "No artificial colors or preservatives",
        "Third-party tested for purity and potency",
      ],
      directions: "Take one capsule daily with food or as directed by your healthcare provider.",
      ingredients:
        "Vitamin A (as beta-carotene), Vitamin C, Vitamin D3, Vitamin E, Vitamin K2, Thiamin, Riboflavin, Niacin, Vitamin B6, Folate (as L-methylfolate), Vitamin B12, Biotin, Pantothenic Acid, Calcium, Iron, Iodine, Magnesium, Zinc, Selenium, Copper, Manganese, Chromium, Molybdenum, DHA (from algae oil), Choline.",
      color: "rose",
      featured: true,
      prescription: false,
      relatedProducts: ["coq10-supplement", "vitamin-d3", "omega-3"],
    },
    "clomid-50mg": {
      id: "clomid-50mg",
      name: "Clomiphene Citrate 50mg",
      price: 75,
      category: "Medications",
      image: "/placeholder.svg?height=300&width=300",
      description: "Prescription medication for ovulation stimulation. Requires doctor approval.",
      longDescription:
        "Clomiphene citrate is a medication used to stimulate ovulation in women who do not ovulate regularly or who have polycystic ovary syndrome (PCOS). It works by blocking estrogen receptors in the brain, which causes the pituitary gland to release more follicle-stimulating hormone (FSH) and luteinizing hormone (LH), stimulating ovulation.",
      features: [
        "Helps stimulate ovulation in women with irregular cycles",
        "Often prescribed as a first-line treatment for infertility",
        "Typically taken for 5 days during the early part of the menstrual cycle",
        "Requires monitoring by a healthcare provider",
      ],
      directions:
        "Typical dosage is one 50mg tablet daily for 5 days, starting on day 3, 4, or 5 of your menstrual cycle. Always follow your doctor's specific instructions.",
      warnings:
        "This medication requires a prescription and should only be taken under the supervision of a healthcare provider. Side effects may include hot flashes, mood swings, breast tenderness, and in rare cases visual disturbances or ovarian hyperstimulation syndrome.",
      color: "purple",
      featured: false,
      prescription: true,
      relatedProducts: ["letrozole-2.5mg", "progesterone-100mg"],
    },
    "basal-thermometer": {
      id: "basal-thermometer",
      name: "Digital Basal Thermometer",
      price: 25,
      category: "Materials",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ultra-sensitive thermometer for accurate basal body temperature tracking.",
      longDescription:
        "Our digital basal thermometer is designed specifically for fertility tracking, with ultra-sensitive temperature measurement to detect the subtle changes in basal body temperature that occur throughout your menstrual cycle. With accuracy to 1/100th of a degree, backlit display for easy early morning readings, and memory recall of your previous temperature, this thermometer is an essential tool for natural family planning and identifying your fertile window.",
      features: [
        "Measures to 1/100th of a degree for precision tracking",
        "Backlit display for easy reading in low light",
        "Memory recall of previous temperature",
        "Soft, flexible tip for comfort",
        "Beep confirmation when reading is complete",
        "Battery included",
      ],
      directions:
        "For most accurate results, take your temperature immediately upon waking, before getting out of bed or engaging in any activity. Place the thermometer under your tongue for approximately 60 seconds until you hear the confirmation beep.",
      color: "teal",
      featured: false,
      prescription: false,
      relatedProducts: ["fertility-journal", "ovulation-test-kit"],
    },
  }

  return products[id as keyof typeof products] || null
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/shop">
          <Button>Return to Shop</Button>
        </Link>
      </div>
    )
  }

  const getBadgeColor = () => {
    switch (product.color) {
      case "rose":
        return "bg-rose-100 text-rose-700 hover:bg-rose-200"
      case "purple":
        return "bg-purple-100 text-purple-700 hover:bg-purple-200"
      case "teal":
        return "bg-teal-100 text-teal-700 hover:bg-teal-200"
      default:
        return "bg-rose-100 text-rose-700 hover:bg-rose-200"
    }
  }

  const getGradientColor = () => {
    switch (product.color) {
      case "rose":
        return "from-rose-50 to-white"
      case "purple":
        return "from-purple-50 to-white"
      case "teal":
        return "from-teal-50 to-white"
      default:
        return "from-rose-50 to-white"
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
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
              <li>
                <Link href="/shop" className="hover:text-foreground">
                  Shop
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="font-medium text-foreground">{product.name}</li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className={`rounded-lg overflow-hidden border bg-gradient-to-br ${getGradientColor()}`}>
                <div className="relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={getBadgeColor()}>{product.category}</Badge>
                  {product.prescription && (
                    <Badge className="bg-amber-100 text-amber-700">
                      <AlertCircle className="h-3 w-3 mr-1" /> Prescription Required
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
                <p className="text-xl text-muted-foreground mt-2">${product.price}</p>
              </div>

              <div>
                <p className="text-muted-foreground">{product.longDescription}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Key Features</h3>
                <ul className="space-y-1">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
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
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.prescription ? (
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-amber-800">Prescription Required</h3>
                      <p className="text-sm text-amber-700 mt-1">
                        This medication requires a valid prescription from a healthcare provider. You can:
                      </p>
                      <ul className="text-sm text-amber-700 mt-2 space-y-1">
                        <li>• Upload your prescription during checkout</li>
                        <li>• Schedule a consultation with one of our providers</li>
                        <li>• Have your doctor send the prescription directly to us</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <AddToCartButton
                  item={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    type: product.category,
                    image: product.image,
                  }}
                />
              )}

              <div className="flex items-center justify-between py-4 border-t border-b">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                  <span>Quality guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="directions">Directions & Ingredients</TabsTrigger>
                <TabsTrigger value="related">Related Products</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <div className="prose max-w-none">
                  <h2>About {product.name}</h2>
                  <p>{product.longDescription}</p>

                  {product.warnings && (
                    <>
                      <h3>Important Information</h3>
                      <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 my-4">
                        <p className="text-amber-800">{product.warnings}</p>
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="directions" className="space-y-4">
                <div className="prose max-w-none">
                  {product.directions && (
                    <>
                      <h2>Directions for Use</h2>
                      <p>{product.directions}</p>
                    </>
                  )}

                  {product.ingredients && (
                    <>
                      <h2>Ingredients</h2>
                      <p>{product.ingredients}</p>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="related" className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.relatedProducts?.map((relatedId) => {
                    const relatedProduct = getProductById(relatedId)
                    if (!relatedProduct) return null
                    return (
                      <Link
                        key={relatedId}
                        href={`/shop/products/${relatedId}`}
                        className="group block border rounded-lg overflow-hidden hover:shadow-md transition-all"
                      >
                        <div className="aspect-square relative bg-white">
                          <Image
                            src={relatedProduct.image || "/placeholder.svg"}
                            alt={relatedProduct.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <div className="p-4">
                          <Badge className={getBadgeColor()}>{relatedProduct.category}</Badge>
                          <h3 className="font-medium mt-2 group-hover:text-blue-600 transition-colors">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                            {relatedProduct.description}
                          </p>
                          <p className="font-bold mt-2">${relatedProduct.price}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
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
