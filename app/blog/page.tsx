import Link from "next/link"
import Image from "next/image"
import { BookOpen, ChevronRight, Filter, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CartButton } from "@/components/cart-button"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
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
                FertiTerra Knowledge Hub
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-rose-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Fertility & Reproductive Health
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Evidence-based articles, resources, and news to support your fertility journey.
              </p>
              <div className="flex w-full max-w-md flex-col gap-2 min-[400px]:flex-row mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
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
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  Featured Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative overflow-hidden rounded-xl border border-rose-100 shadow-md transition-all hover:shadow-lg">
                    <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-rose-100 to-purple-100">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Understanding Fertility"
                        width={800}
                        height={400}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200">Fertility Basics</Badge>
                        <span className="text-sm text-muted-foreground">10 min read</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-rose-600 transition-colors">
                        Understanding Your Fertility Window: Maximizing Your Chances
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Learn how to identify your most fertile days and increase your chances of conception with
                        evidence-based tracking methods.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dr. Sarah Johnson" />
                            <AvatarFallback>SJ</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">Dr. Sarah Johnson</span>
                        </div>
                        <Link href="/blog/understanding-fertility-window">
                          <Button variant="ghost" size="sm" className="gap-1 text-rose-600 hover:text-rose-700">
                            Read More <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border border-purple-100 shadow-md transition-all hover:shadow-lg">
                    <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-purple-100 to-teal-100">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Nutrition for Fertility"
                        width={800}
                        height={400}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Nutrition</Badge>
                        <span className="text-sm text-muted-foreground">8 min read</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                        The Fertility Diet: Foods That Boost Reproductive Health
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Discover the key nutrients and dietary patterns that can improve egg quality, hormone balance,
                        and overall fertility.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Emma Rodriguez, RD" />
                            <AvatarFallback>ER</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">Emma Rodriguez, RD</span>
                        </div>
                        <Link href="/blog/fertility-diet">
                          <Button variant="ghost" size="sm" className="gap-1 text-purple-600 hover:text-purple-700">
                            Read More <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Recent Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Managing Stress During Your Fertility Journey",
                      category: "Mental Health",
                      color: "teal",
                      author: "Dr. Lisa Chen",
                      authorInitials: "LC",
                      time: "6 min read",
                      slug: "managing-stress-fertility-journey",
                    },
                    {
                      title: "PCOS and Fertility: What You Need to Know",
                      category: "Conditions",
                      color: "rose",
                      author: "Dr. Michael Brown",
                      authorInitials: "MB",
                      time: "12 min read",
                      slug: "pcos-and-fertility",
                    },
                    {
                      title: "Understanding Hormone Testing Results",
                      category: "Testing",
                      color: "purple",
                      author: "Dr. Jessica Wong",
                      authorInitials: "JW",
                      time: "9 min read",
                      slug: "understanding-hormone-testing",
                    },
                    {
                      title: "Male Fertility: Factors That Affect Sperm Health",
                      category: "Male Fertility",
                      color: "teal",
                      author: "Dr. Robert Garcia",
                      authorInitials: "RG",
                      time: "7 min read",
                      slug: "male-fertility-sperm-health",
                    },
                    {
                      title: "Preparing Your Body for IVF Success",
                      category: "Treatments",
                      color: "rose",
                      author: "Dr. Sarah Johnson",
                      authorInitials: "SJ",
                      time: "10 min read",
                      slug: "preparing-for-ivf",
                    },
                    {
                      title: "Perimenopause: Navigating the Transition",
                      category: "Perimenopause",
                      color: "purple",
                      author: "Dr. Amanda Lee",
                      authorInitials: "AL",
                      time: "8 min read",
                      slug: "navigating-perimenopause",
                    },
                  ].map((article, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-md"
                      style={{
                        borderColor:
                          article.color === "rose"
                            ? "rgb(254 205 211)"
                            : article.color === "purple"
                              ? "rgb(233 213 255)"
                              : "rgb(204 251 241)",
                      }}
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            className={`bg-${article.color}-100 text-${article.color}-700 hover:bg-${article.color}-200`}
                            style={{
                              backgroundColor:
                                article.color === "rose"
                                  ? "rgb(254 205 211)"
                                  : article.color === "purple"
                                    ? "rgb(233 213 255)"
                                    : "rgb(204 251 241)",
                              color:
                                article.color === "rose"
                                  ? "rgb(190 18 60)"
                                  : article.color === "purple"
                                    ? "rgb(126 34 206)"
                                    : "rgb(15 118 110)",
                            }}
                          >
                            {article.category}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{article.time}</span>
                        </div>
                        <h3
                          className={`text-lg font-bold mb-2 group-hover:text-${article.color}-600 transition-colors`}
                          style={{
                            color: "inherit",
                          }}
                        >
                          {article.title}
                        </h3>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-7 w-7">
                              <AvatarImage src="/placeholder.svg?height=28&width=28" alt={article.author} />
                              <AvatarFallback>{article.authorInitials}</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium">{article.author}</span>
                          </div>
                          <Link href={`/blog/${article.slug}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`gap-1 text-${article.color}-600 hover:text-${article.color}-700 p-0`}
                              style={{
                                color:
                                  article.color === "rose"
                                    ? "rgb(225 29 72)"
                                    : article.color === "purple"
                                      ? "rgb(147 51 234)"
                                      : "rgb(13 148 136)",
                              }}
                            >
                              Read <ChevronRight className="h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8">
                    View All Articles
                  </Button>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-rose-600 bg-clip-text text-transparent">
                  Popular Topics
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Fertility Basics", color: "rose" },
                    { name: "Trying to Conceive", color: "purple" },
                    { name: "Perimenopause", color: "teal" },
                    { name: "Hormone Health", color: "rose" },
                    { name: "Nutrition", color: "purple" },
                    { name: "Mental Health", color: "teal" },
                    { name: "PCOS", color: "rose" },
                    { name: "Endometriosis", color: "purple" },
                    { name: "Male Fertility", color: "teal" },
                    { name: "IVF", color: "rose" },
                    { name: "Natural Remedies", color: "purple" },
                    { name: "Pregnancy", color: "teal" },
                  ].map((topic, index) => (
                    <Link href={`/blog/topics/${topic.name.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                      <Badge
                        className={`bg-${topic.color}-100 text-${topic.color}-700 hover:bg-${topic.color}-200 px-3 py-1 text-sm`}
                        style={{
                          backgroundColor:
                            topic.color === "rose"
                              ? "rgb(254 205 211)"
                              : topic.color === "purple"
                                ? "rgb(233 213 255)"
                                : "rgb(204 251 241)",
                          color:
                            topic.color === "rose"
                              ? "rgb(190 18 60)"
                              : topic.color === "purple"
                                ? "rgb(126 34 206)"
                                : "rgb(15 118 110)",
                        }}
                      >
                        {topic.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="books" className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  Recommended Books
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Taking Charge of Your Fertility",
                      author: "Toni Weschler",
                      color: "rose",
                      description:
                        "The definitive guide to natural birth control, pregnancy achievement, and reproductive health.",
                    },
                    {
                      title: "It Starts with the Egg",
                      author: "Rebecca Fett",
                      color: "purple",
                      description:
                        "How the science of egg quality can help you get pregnant naturally, prevent miscarriage, and improve your odds in IVF.",
                    },
                    {
                      title: "The Fifth Vital Sign",
                      author: "Lisa Hendrickson-Jack",
                      color: "teal",
                      description:
                        "Master your cycles and optimize your fertility with this comprehensive guide to reproductive health.",
                    },
                    {
                      title: "Period Repair Manual",
                      author: "Lara Briden",
                      color: "rose",
                      description:
                        "Natural treatment for better hormones and better periods, with insights on PCOS and endometriosis.",
                    },
                  ].map((book, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border shadow-md transition-all hover:shadow-lg"
                      style={{
                        borderColor:
                          book.color === "rose"
                            ? "rgb(254 205 211)"
                            : book.color === "purple"
                              ? "rgb(233 213 255)"
                              : "rgb(204 251 241)",
                      }}
                    >
                      <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-white to-gray-100">
                        <div
                          className="h-full w-full flex items-center justify-center"
                          style={{
                            backgroundColor:
                              book.color === "rose"
                                ? "rgb(254 205 211 / 30%)"
                                : book.color === "purple"
                                  ? "rgb(233 213 255 / 30%)"
                                  : "rgb(204 251 241 / 30%)",
                          }}
                        >
                          <BookOpen
                            className="h-16 w-16"
                            style={{
                              color:
                                book.color === "rose"
                                  ? "rgb(225 29 72 / 30%)"
                                  : book.color === "purple"
                                    ? "rgb(147 51 234 / 30%)"
                                    : "rgb(13 148 136 / 30%)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3
                          className={`text-lg font-bold mb-1 group-hover:text-${book.color}-600 transition-colors`}
                          style={{
                            color: "inherit",
                          }}
                        >
                          {book.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">by {book.author}</p>
                        <p className="text-sm text-muted-foreground line-clamp-3">{book.description}</p>
                        <div className="mt-4 flex justify-between items-center">
                          <Badge
                            className={`bg-${book.color}-100 text-${book.color}-700`}
                            style={{
                              backgroundColor:
                                book.color === "rose"
                                  ? "rgb(254 205 211)"
                                  : book.color === "purple"
                                    ? "rgb(233 213 255)"
                                    : "rgb(204 251 241)",
                              color:
                                book.color === "rose"
                                  ? "rgb(190 18 60)"
                                  : book.color === "purple"
                                    ? "rgb(126 34 206)"
                                    : "rgb(15 118 110)",
                            }}
                          >
                            Book
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`gap-1 text-${book.color}-600 hover:text-${book.color}-700 p-0`}
                            style={{
                              color:
                                book.color === "rose"
                                  ? "rgb(225 29 72)"
                                  : book.color === "purple"
                                    ? "rgb(147 51 234)"
                                    : "rgb(13 148 136)",
                            }}
                          >
                            Learn More <ChevronRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  E-Books & Guides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "The Complete Guide to Tracking Your Cycle",
                      author: "FertiTerra Team",
                      color: "rose",
                      description:
                        "Learn how to effectively track your menstrual cycle to understand your fertility patterns.",
                      price: "Free",
                    },
                    {
                      title: "Nutrition for Hormone Balance",
                      author: "Emma Rodriguez, RD",
                      color: "purple",
                      description: "A comprehensive guide to eating for optimal hormone health and fertility.",
                      price: "$9.99",
                    },
                    {
                      title: "Preparing for IVF: What to Expect",
                      author: "Dr. Sarah Johnson",
                      color: "teal",
                      description:
                        "A step-by-step guide to the IVF process, with tips for physical and emotional preparation.",
                      price: "$12.99",
                    },
                  ].map((ebook, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border shadow-md transition-all hover:shadow-lg p-6"
                      style={{
                        borderColor:
                          ebook.color === "rose"
                            ? "rgb(254 205 211)"
                            : ebook.color === "purple"
                              ? "rgb(233 213 255)"
                              : "rgb(204 251 241)",
                        background: `linear-gradient(to bottom right, white, ${
                          ebook.color === "rose"
                            ? "rgb(254 205 211 / 30%)"
                            : ebook.color === "purple"
                              ? "rgb(233 213 255 / 30%)"
                              : "rgb(204 251 241 / 30%)"
                        })`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="rounded-full p-2"
                          style={{
                            backgroundColor:
                              ebook.color === "rose"
                                ? "rgb(254 205 211)"
                                : ebook.color === "purple"
                                  ? "rgb(233 213 255)"
                                  : "rgb(204 251 241)",
                          }}
                        >
                          <BookOpen
                            className="h-5 w-5"
                            style={{
                              color:
                                ebook.color === "rose"
                                  ? "rgb(225 29 72)"
                                  : ebook.color === "purple"
                                    ? "rgb(147 51 234)"
                                    : "rgb(13 148 136)",
                            }}
                          />
                        </div>
                        <Badge
                          className={`bg-${ebook.color}-100 text-${ebook.color}-700`}
                          style={{
                            backgroundColor:
                              ebook.color === "rose"
                                ? "rgb(254 205 211)"
                                : ebook.color === "purple"
                                  ? "rgb(233 213 255)"
                                  : "rgb(204 251 241)",
                            color:
                              ebook.color === "rose"
                                ? "rgb(190 18 60)"
                                : ebook.color === "purple"
                                  ? "rgb(126 34 206)"
                                  : "rgb(15 118 110)",
                          }}
                        >
                          {ebook.price}
                        </Badge>
                      </div>
                      <h3
                        className={`text-lg font-bold mb-1 group-hover:text-${ebook.color}-600 transition-colors`}
                        style={{
                          color: "inherit",
                        }}
                      >
                        {ebook.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">by {ebook.author}</p>
                      <p className="text-sm text-muted-foreground mb-4">{ebook.description}</p>
                      <Button
                        className={`w-full bg-${ebook.color}-500 hover:bg-${ebook.color}-600`}
                        style={{
                          backgroundColor:
                            ebook.color === "rose"
                              ? "rgb(244 63 94)"
                              : ebook.color === "purple"
                                ? "rgb(168 85 247)"
                                : "rgb(20 184 166)",
                          color: "white",
                        }}
                      >
                        {ebook.price === "Free" ? "Download Now" : "Purchase"}
                      </Button>
                    </div>
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="news" className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  Latest Fertility News
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "New Study Shows Link Between Vitamin D and Fertility",
                      date: "May 8, 2025",
                      source: "Fertility Today",
                      color: "rose",
                      excerpt:
                        "Researchers have found that adequate vitamin D levels may improve fertility outcomes in women undergoing IVF treatment.",
                    },
                    {
                      title: "FDA Approves New Treatment for Endometriosis",
                      date: "April 29, 2025",
                      source: "Medical News Daily",
                      color: "purple",
                      excerpt:
                        "A groundbreaking new medication for endometriosis has received FDA approval, offering hope for millions of women suffering from this condition.",
                    },
                    {
                      title: "Breakthrough in Male Fertility Testing Announced",
                      date: "April 15, 2025",
                      source: "Reproductive Health Journal",
                      color: "teal",
                      excerpt:
                        "A new at-home test can now provide more comprehensive analysis of sperm health, including DNA fragmentation assessment.",
                    },
                    {
                      title: "Study Reveals Impact of Environmental Toxins on Fertility",
                      date: "April 3, 2025",
                      source: "Environmental Health Perspectives",
                      color: "rose",
                      excerpt:
                        "New research highlights the connection between common household chemicals and declining fertility rates.",
                    },
                  ].map((news, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border shadow-md transition-all hover:shadow-lg p-6"
                      style={{
                        borderColor:
                          news.color === "rose"
                            ? "rgb(254 205 211)"
                            : news.color === "purple"
                              ? "rgb(233 213 255)"
                              : "rgb(204 251 241)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          className={`bg-${news.color}-100 text-${news.color}-700`}
                          style={{
                            backgroundColor:
                              news.color === "rose"
                                ? "rgb(254 205 211)"
                                : news.color === "purple"
                                  ? "rgb(233 213 255)"
                                  : "rgb(204 251 241)",
                            color:
                              news.color === "rose"
                                ? "rgb(190 18 60)"
                                : news.color === "purple"
                                  ? "rgb(126 34 206)"
                                  : "rgb(15 118 110)",
                          }}
                        >
                          News
                        </Badge>
                        <span className="text-sm text-muted-foreground">{news.date}</span>
                        <span className="text-sm font-medium">Source: {news.source}</span>
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 group-hover:text-${news.color}-600 transition-colors`}
                        style={{
                          color: "inherit",
                        }}
                      >
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          className={`gap-1 text-${news.color}-600 hover:text-${news.color}-700`}
                          style={{
                            color:
                              news.color === "rose"
                                ? "rgb(225 29 72)"
                                : news.color === "purple"
                                  ? "rgb(147 51 234)"
                                  : "rgb(13 148 136)",
                          }}
                        >
                          Read Full Article <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Research Updates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Long-term Effects of PCOS Treatments: 10-Year Study Results",
                      institution: "Harvard Medical School",
                      color: "rose",
                      excerpt:
                        "A decade-long study reveals the long-term outcomes of various PCOS treatment approaches.",
                    },
                    {
                      title: "Microbiome's Role in Fertility: New Discoveries",
                      institution: "University of California",
                      color: "purple",
                      excerpt:
                        "Researchers have identified specific gut bacteria that may influence reproductive health.",
                    },
                  ].map((research, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border shadow-md transition-all hover:shadow-lg p-6"
                      style={{
                        borderColor:
                          research.color === "rose"
                            ? "rgb(254 205 211)"
                            : research.color === "purple"
                              ? "rgb(233 213 255)"
                              : "rgb(204 251 241)",
                        background: `linear-gradient(to bottom right, white, ${
                          research.color === "rose"
                            ? "rgb(254 205 211 / 10%)"
                            : research.color === "purple"
                              ? "rgb(233 213 255 / 10%)"
                              : "rgb(204 251 241 / 10%)"
                        })`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          className={`bg-${research.color}-100 text-${research.color}-700`}
                          style={{
                            backgroundColor:
                              research.color === "rose"
                                ? "rgb(254 205 211)"
                                : research.color === "purple"
                                  ? "rgb(233 213 255)"
                                  : "rgb(204 251 241)",
                            color:
                              research.color === "rose"
                                ? "rgb(190 18 60)"
                                : research.color === "purple"
                                  ? "rgb(126 34 206)"
                                  : "rgb(15 118 110)",
                          }}
                        >
                          Research
                        </Badge>
                        <span className="text-sm font-medium">{research.institution}</span>
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 group-hover:text-${research.color}-600 transition-colors`}
                        style={{
                          color: "inherit",
                        }}
                      >
                        {research.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{research.excerpt}</p>
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          className={`gap-1 text-${research.color}-600 hover:text-${research.color}-700`}
                          style={{
                            color:
                              research.color === "rose"
                                ? "rgb(225 29 72)"
                                : research.color === "purple"
                                  ? "rgb(147 51 234)"
                                  : "rgb(13 148 136)",
                          }}
                        >
                          Read Study <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="medications" className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  Fertility Medications Guide
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Clomiphene Citrate (Clomid)",
                      category: "Ovulation Stimulant",
                      color: "rose",
                      description:
                        "A medication that stimulates ovulation by causing the pituitary gland to release more FSH and LH.",
                      usedFor: "Treating infertility in women who do not ovulate regularly",
                    },
                    {
                      name: "Letrozole (Femara)",
                      category: "Aromatase Inhibitor",
                      color: "purple",
                      description:
                        "Works by temporarily reducing estrogen production, which causes the brain to increase FSH output.",
                      usedFor: "Inducing ovulation, particularly in women with PCOS",
                    },
                    {
                      name: "Follicle Stimulating Hormone (FSH)",
                      category: "Gonadotropin",
                      color: "teal",
                      description:
                        "A hormone that directly stimulates the ovaries to produce follicles containing eggs.",
                      usedFor: "Women who don't respond to clomiphene or letrozole, or for IVF cycles",
                    },
                    {
                      name: "Human Chorionic Gonadotropin (hCG)",
                      category: "Trigger Shot",
                      color: "rose",
                      description: "Mimics the natural LH surge that triggers ovulation once follicles have matured.",
                      usedFor: "Triggering ovulation in fertility treatments",
                    },
                    {
                      name: "Progesterone",
                      category: "Luteal Support",
                      color: "purple",
                      description: "A hormone that prepares and maintains the uterine lining for embryo implantation.",
                      usedFor: "Supporting early pregnancy after ovulation or embryo transfer",
                    },
                    {
                      name: "GnRH Antagonists",
                      category: "Pituitary Suppressor",
                      color: "teal",
                      description:
                        "Prevents premature ovulation by blocking the effects of GnRH on the pituitary gland.",
                      usedFor: "Preventing premature ovulation during IVF stimulation",
                    },
                  ].map((medication, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border shadow-md transition-all hover:shadow-lg p-6"
                      style={{
                        borderColor:
                          medication.color === "rose"
                            ? "rgb(254 205 211)"
                            : medication.color === "purple"
                              ? "rgb(233 213 255)"
                              : "rgb(204 251 241)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          className={`bg-${medication.color}-100 text-${medication.color}-700`}
                          style={{
                            backgroundColor:
                              medication.color === "rose"
                                ? "rgb(254 205 211)"
                                : medication.color === "purple"
                                  ? "rgb(233 213 255)"
                                  : "rgb(204 251 241)",
                            color:
                              medication.color === "rose"
                                ? "rgb(190 18 60)"
                                : medication.color === "purple"
                                  ? "rgb(126 34 206)"
                                  : "rgb(15 118 110)",
                          }}
                        >
                          {medication.category}
                        </Badge>
                      </div>
                      <h3
                        className={`text-lg font-bold mb-2 group-hover:text-${medication.color}-600 transition-colors`}
                        style={{
                          color: "inherit",
                        }}
                      >
                        {medication.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{medication.description}</p>
                      <div className="flex items-center gap-2 mt-4">
                        <span className="text-sm font-medium">Used for:</span>
                        <span className="text-sm text-muted-foreground">{medication.usedFor}</span>
                      </div>
                      <div className="mt-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`gap-1 text-${medication.color}-600 hover:text-${medication.color}-700 p-0`}
                          style={{
                            color:
                              medication.color === "rose"
                                ? "rgb(225 29 72)"
                                : medication.color === "purple"
                                  ? "rgb(147 51 234)"
                                  : "rgb(13 148 136)",
                          }}
                        >
                          Learn More <ChevronRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Supplements for Fertility
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Coenzyme Q10 (CoQ10)",
                      color: "rose",
                      description: "An antioxidant that may improve egg quality by supporting mitochondrial function.",
                      evidence: "Moderate evidence for improving egg quality, particularly in women over 35",
                    },
                    {
                      name: "Inositol (Myo-inositol)",
                      color: "purple",
                      description:
                        "A vitamin-like substance that may improve insulin sensitivity and egg quality in women with PCOS.",
                      evidence: "Strong evidence for women with PCOS, may improve ovulation and egg quality",
                    },
                    {
                      name: "Vitamin D",
                      color: "teal",
                      description:
                        "A hormone that plays a role in reproductive health and may impact fertility outcomes.",
                      evidence: "Moderate evidence that sufficient levels may improve fertility outcomes",
                    },
                    {
                      name: "N-Acetyl Cysteine (NAC)",
                      color: "rose",
                      description: "An antioxidant that may improve insulin sensitivity and reduce inflammation.",
                      evidence: "Some evidence for improving ovulation in women with PCOS",
                    },
                  ].map((supplement, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border shadow-md transition-all hover:shadow-lg p-6"
                      style={{
                        borderColor:
                          supplement.color === "rose"
                            ? "rgb(254 205 211)"
                            : supplement.color === "purple"
                              ? "rgb(233 213 255)"
                              : "rgb(204 251 241)",
                        background: `linear-gradient(to bottom right, white, ${
                          supplement.color === "rose"
                            ? "rgb(254 205 211 / 10%)"
                            : supplement.color === "purple"
                              ? "rgb(233 213 255 / 10%)"
                              : "rgb(204 251 241 / 10%)"
                        })`,
                      }}
                    >
                      <h3
                        className={`text-xl font-bold mb-2 group-hover:text-${supplement.color}-600 transition-colors`}
                        style={{
                          color: "inherit",
                        }}
                      >
                        {supplement.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{supplement.description}</p>
                      <div className="flex items-start gap-2 mb-4">
                        <Tag
                          className={`h-5 w-5 text-${supplement.color}-500 flex-shrink-0 mt-0.5`}
                          style={{
                            color:
                              supplement.color === "rose"
                                ? "rgb(244 63 94)"
                                : supplement.color === "purple"
                                  ? "rgb(168 85 247)"
                                  : "rgb(20 184 166)",
                          }}
                        />
                        <div>
                          <span className="text-sm font-medium">Evidence:</span>
                          <p className="text-sm text-muted-foreground">{supplement.evidence}</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`gap-1 text-${supplement.color}-600 hover:text-${supplement.color}-700`}
                          style={{
                            color:
                              supplement.color === "rose"
                                ? "rgb(225 29 72)"
                                : supplement.color === "purple"
                                  ? "rgb(147 51 234)"
                                  : "rgb(13 148 136)",
                          }}
                        >
                          Research Details <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-purple-50 border border-purple-100">
                  <p className="text-sm text-purple-700">
                    <strong>Note:</strong> Always consult with your healthcare provider before starting any supplements,
                    especially when trying to conceive or during fertility treatments. Supplements may interact with
                    medications or have contraindications for certain conditions.
                  </p>
                </div>
              </section>
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
                  Join Our Newsletter
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Stay updated with the latest fertility research, tips, and resources delivered to your inbox.
                </p>
              </div>
              <div className="flex w-full max-w-md flex-col gap-2 min-[400px]:flex-row mt-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/80 backdrop-blur-sm border-teal-100"
                />
                <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
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
