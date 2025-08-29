"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Share2, BookOpen, Clock, User } from "lucide-react"
import { Header } from "@/components/header"

// Mock article data - in a real app, this would come from your CMS/database
const getArticleBySlug = (slug: string) => {
  const articles = {
    "infertility-stigma-africa": {
      id: 1,
      title: "Breaking the Silence: Understanding Infertility Stigma in Africa",
      slug: "infertility-stigma-africa",
      excerpt:
        "Exploring the cultural, social, and emotional challenges surrounding infertility in African communities and how we can create more supportive environments.",
      content: `
        <p>Infertility affects millions of couples across Africa, yet it remains one of the most stigmatized health conditions on the continent. The silence surrounding fertility challenges creates additional emotional burden for those already struggling with the medical aspects of infertility.</p>
        
        <h3>The Cultural Context</h3>
        <p>In many African societies, fertility is deeply intertwined with cultural identity, family honor, and social status. Children are often seen as a blessing, a continuation of family lineage, and a source of security in old age. When couples face fertility challenges, they often encounter:</p>
        
        <ul>
          <li>Social isolation and exclusion from family gatherings</li>
          <li>Blame and shame, particularly directed at women</li>
          <li>Pressure from extended family and community members</li>
          <li>Religious and spiritual explanations that may increase guilt</li>
        </ul>
        
        <h3>The Emotional Impact</h3>
        <p>The stigma surrounding infertility can lead to severe psychological consequences, including depression, anxiety, and relationship strain. Many couples suffer in silence, afraid to seek help or support due to fear of judgment.</p>
        
        <h3>Breaking the Cycle</h3>
        <p>At FertiTerra, we believe that education and open dialogue are key to breaking the stigma around infertility. By sharing stories, providing accurate information, and creating supportive communities, we can help change perceptions and create a more inclusive environment for all.</p>
      `,
      author: "Dr. Kelechi Okoro",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      category: "Awareness & Education",
      tags: ["Infertility", "Stigma", "Africa", "Mental Health", "Community Support"],
      image: "/infertility-awareness-africa.png",
      likes: 234,
      shares: 89,
    },
  }

  return articles[slug as keyof typeof articles] || null
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<any>(null)
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    const articleData = getArticleBySlug(params.slug)
    if (articleData) {
      setArticle(articleData)
      setLikes(articleData.likes)
    }
  }, [params.slug])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
            <Link href="/knowledge-centre" className="text-rose-600 hover:text-rose-700">
              ← Back to Knowledge Centre
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-rose-50 to-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/knowledge-centre" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Knowledge Centre
            </Link>

            <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">{article.category}</Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant={isLiked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className={isLiked ? "bg-rose-600 hover:bg-rose-700" : "border-rose-600 text-rose-600 hover:bg-rose-50"}
              >
                <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                {likes}
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Video Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Watch: Understanding Infertility Stigma</h3>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ZBRYe9_0X0w?si=fOKeTvNbgG6CfYTI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Article Text */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for related articles */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-rose-100 to-green-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>
                  <Badge className="w-fit mb-2 bg-green-100 text-green-700">Fertility Education</Badge>
                  <CardTitle className="text-xl">Understanding Your Fertility Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    A comprehensive guide to understanding fertility, from basic biology to modern treatment options.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Dr. Smart Akuma</span>
                    <span>5 min read</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>
                  <Badge className="w-fit mb-2 bg-purple-100 text-purple-700">Mental Health</Badge>
                  <CardTitle className="text-xl">Coping with Fertility Stress</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Practical strategies for managing the emotional challenges of fertility treatments and diagnosis.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Dr. Kelechi Okoro</span>
                    <span>7 min read</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>
                  <Badge className="w-fit mb-2 bg-orange-100 text-orange-700">Nutrition</Badge>
                  <CardTitle className="text-xl">Fertility-Friendly Nutrition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    How diet and lifestyle choices can support your fertility journey and overall reproductive health.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Nutrition Team</span>
                    <span>6 min read</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-green-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest articles, research updates, and fertility insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
