"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Search, Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "understanding-amh-levels",
    title: "Understanding Your AMH Levels: What They Mean for Fertility",
    excerpt: "Learn about Anti-Müllerian Hormone and how it indicates your ovarian reserve and fertility potential.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    category: "Fertility Science",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400&text=AMH+Levels",
    featured: true,
  },
  {
    id: "pcos-diagnosis-guide",
    title: "PCOS Diagnosis: Signs, Symptoms, and Next Steps",
    excerpt: "A comprehensive guide to understanding Polycystic Ovary Syndrome and getting the right diagnosis.",
    author: "Dr. Michael Chen",
    date: "2024-01-12",
    category: "PCOS",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400&text=PCOS+Guide",
  },
  {
    id: "fertility-nutrition",
    title: "Nutrition for Fertility: Foods That Support Reproductive Health",
    excerpt: "Discover the best foods and nutrients to support your fertility journey and overall reproductive health.",
    author: "Dr. Amara Patel",
    date: "2024-01-10",
    category: "Nutrition",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400&text=Fertility+Nutrition",
  },
  {
    id: "hormone-balance-tips",
    title: "5 Natural Ways to Balance Your Hormones",
    excerpt: "Simple lifestyle changes that can help regulate your hormones and improve your overall well-being.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-08",
    category: "Hormones",
    readTime: "4 min read",
    image: "/placeholder.svg?height=200&width=400&text=Hormone+Balance",
  },
]

const categories = ["All", "Fertility Science", "PCOS", "Nutrition", "Hormones", "Lifestyle"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-rose-50 to-purple-50 py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Fertility & Health Blog</h1>
              <p className="text-lg text-gray-600 mb-6">
                Expert insights, research updates, and practical advice for your reproductive health journey.
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? "bg-rose-500 hover:bg-rose-600" : ""}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {filteredPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <Card
                    key={post.id}
                    className={`overflow-hidden ${post.featured && index === 0 ? "md:col-span-2 lg:col-span-3" : ""}`}
                  >
                    <div className={`relative w-full ${post.featured && index === 0 ? "h-64" : "h-48"}`}>
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      {post.featured && <Badge className="absolute top-4 left-4 bg-rose-500">Featured</Badge>}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className={post.featured && index === 0 ? "text-2xl" : "text-lg"}>
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`} className="mt-4 block">
                        <Button className="w-full bg-rose-500 hover:bg-rose-600">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No articles found matching your search criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
