import Link from "next/link"
import Image from "next/image"
import { Check, ChevronRight, Package, ShieldCheck, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { CartButton } from "@/components/cart-button"

export default function TestKitsPage() {
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
            <Link href="/about" className="text-sm font-medium">
              About Us
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
              <li className="font-medium text-foreground">Test Kits</li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden border">
                <Image
                  src="/images/test-kit-box.png"
                  alt="FertiTerra Test Kit"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Test kit contents"
                    width={150}
                    height={150}
                    className="w-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Test kit instructions"
                    width={150}
                    height={150}
                    className="w-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Test kit results"
                    width={150}
                    height={150}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">FertiTerra Hormone Test Kit</h1>
                <p className="text-xl text-muted-foreground mt-2">Comprehensive at-home fertility testing</p>
              </div>

              <Tabs defaultValue="ttc" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="ttc">TTC Kit</TabsTrigger>
                  <TabsTrigger value="perimenopause">Perimenopause Kit</TabsTrigger>
                  <TabsTrigger value="wellness">Wellness Kit</TabsTrigger>
                </TabsList>
                <TabsContent value="ttc" className="space-y-4 pt-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">TTC Test Kit</h2>
                      <p className="text-muted-foreground">For couples trying to conceive</p>
                    </div>
                    <div className="text-3xl font-bold">$200</div>
                  </div>
                  <p>
                    Our most comprehensive fertility test kit for couples trying to conceive. Includes hormone testing
                    for both partners to maximize your chances of conception.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>AMH test for female partner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Sperm analysis for male partner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Personalized fertility report</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>30-minute consultation with fertility expert</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Customized TTC action plan</span>
                    </div>
                  </div>
                  <AddToCartButton
                    item={{
                      id: "ttc-test-kit",
                      name: "TTC Test Kit",
                      price: 200,
                      type: "For couples trying to conceive",
                      image: "/images/test-kit-box.png",
                    }}
                  />
                </TabsContent>
                <TabsContent value="perimenopause" className="space-y-4 pt-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">Perimenopause Test Kit</h2>
                      <p className="text-muted-foreground">For managing hormonal transitions</p>
                    </div>
                    <div className="text-3xl font-bold">$170</div>
                  </div>
                  <p>
                    Comprehensive hormone testing to understand where you are in your perimenopause journey and create a
                    personalized plan for managing symptoms.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Comprehensive hormone panel (FSH, estrogen, etc.)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Detailed hormone analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Personalized menopause management plan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>30-minute consultation with specialist</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Symptom management strategies</span>
                    </div>
                  </div>
                  <AddToCartButton
                    item={{
                      id: "perimenopause-test-kit",
                      name: "Perimenopause Test Kit",
                      price: 170,
                      type: "For managing hormonal transitions",
                      image: "/images/test-kit-box.png",
                    }}
                  />
                </TabsContent>
                <TabsContent value="wellness" className="space-y-4 pt-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">Wellness Test Kit</h2>
                      <p className="text-muted-foreground">For general reproductive health</p>
                    </div>
                    <div className="text-3xl font-bold">$60</div>
                  </div>
                  <p>
                    Monitor your reproductive health and hormonal balance with our general wellness kit, perfect for
                    those who want to maintain optimal fertility health.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Basic hormone panel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Reproductive health insights</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Personalized wellness report</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>30-minute consultation with doctor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-rose-500" />
                      <span>Lifestyle & nutrition recommendations</span>
                    </div>
                  </div>
                  <AddToCartButton
                    item={{
                      id: "wellness-test-kit",
                      name: "Wellness Test Kit",
                      price: 60,
                      type: "For general reproductive health",
                      image: "/images/test-kit-box.png",
                    }}
                  />
                </TabsContent>
              </Tabs>

              <div className="flex items-center justify-between py-4 border-t border-b">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                  <span>Secure & private testing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-rose-100 w-12 h-12 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-rose-700">1</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Order Your Kit</h3>
                    <p className="text-muted-foreground">
                      Select the test kit that matches your needs and place your order.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-rose-100 w-12 h-12 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-rose-700">2</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Collect Your Sample</h3>
                    <p className="text-muted-foreground">
                      Follow the simple instructions to collect your sample in the comfort of your home.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-rose-100 w-12 h-12 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-rose-700">3</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Mail It Back</h3>
                    <p className="text-muted-foreground">
                      Use the prepaid shipping label to send your sample to our certified laboratory.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-rose-100 w-12 h-12 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-rose-700">4</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Get Your Results</h3>
                    <p className="text-muted-foreground">
                      Receive your personalized report and schedule your consultation with a specialist.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">What's In The Kit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="rounded-full bg-rose-100 p-3 h-fit">
                    <Package className="h-6 w-6 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Collection Materials</h3>
                    <p className="text-muted-foreground">
                      Each kit includes all necessary collection materials, including collection tubes, lancets for
                      blood samples, and detailed instructions. Our kits are designed to be easy to use with minimal
                      discomfort.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="rounded-full bg-rose-100 p-3 h-fit">
                    <Truck className="h-6 w-6 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Prepaid Return Shipping</h3>
                    <p className="text-muted-foreground">
                      Your kit includes a prepaid return shipping label and packaging to safely send your sample to our
                      CLIA-certified laboratory for analysis. Simply drop it off at any postal location.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="rounded-full bg-rose-100 p-3 h-fit">
                    <ShieldCheck className="h-6 w-6 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lab Analysis</h3>
                    <p className="text-muted-foreground">
                      Your samples are processed in our certified laboratory using state-of-the-art technology to ensure
                      accurate results. We test for key hormones and biomarkers relevant to your specific fertility
                      concerns.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="rounded-full bg-rose-100 p-3 h-fit">
                    <Check className="h-6 w-6 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Digital Results & Consultation</h3>
                    <p className="text-muted-foreground">
                      Access your results through our secure online portal and schedule your included consultation with
                      a fertility specialist who will explain your results and recommend next steps.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">How long does it take to get results?</h3>
                  <p className="text-muted-foreground">
                    Once your sample arrives at our laboratory, results are typically available within 5-7 business
                    days. You'll receive an email notification when your results are ready to view in your secure online
                    account.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Is the test kit covered by insurance?</h3>
                  <p className="text-muted-foreground">
                    While we don't directly bill insurance, many customers are able to use their HSA/FSA accounts for
                    payment. We can also provide you with the necessary documentation to submit to your insurance for
                    potential reimbursement.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">How accurate are the tests?</h3>
                  <p className="text-muted-foreground">
                    Our tests are processed in CLIA-certified laboratories with the same accuracy as tests ordered by
                    your doctor. However, these tests are meant to provide insights and should be discussed with a
                    healthcare provider.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Who will I speak with during my consultation?</h3>
                  <p className="text-muted-foreground">
                    Your consultation will be with a licensed healthcare provider specializing in fertility or women's
                    health. They will review your results, answer your questions, and provide personalized
                    recommendations.
                  </p>
                </div>
              </div>
            </section>
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
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
