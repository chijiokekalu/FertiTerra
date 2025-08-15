"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, Eye, Heart, Share2, BookOpen, Calendar, User, Tag } from "lucide-react"
import { Header } from "@/components/header"

interface Article {
  id: number
  title: string
  slug: string
  author: string
  category: string
  tags: string[]
  date: string
  featuredImage: string
  videoEmbed?: string
  summary: string
  content: string
  readTime: number
  views: number
  likes: number
  shares: number
}

export default function ArticlePage() {
  const params = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    fetchArticle()
  }, [params.slug])

  const fetchArticle = async () => {
    try {
      setLoading(true)
      // In a real app, you'd fetch by slug from your API
      // For now, we'll simulate with the mock data
      const mockArticle: Article = {
        id: 1,
        title: "Why Talking About Infertility Matters: Breaking the Stigma in Africa",
        slug: "why-talking-about-infertility-matters",
        author: "FertiTerra Editorial Team",
        category: "Awareness & Education",
        tags: ["Infertility Awareness", "Africa", "Fertility Support", "Breaking the Stigma"],
        date: "2025-08-15",
        featuredImage: "/infertility-awareness-africa.png",
        videoEmbed: "https://drive.google.com/file/d/1cVlWf_jUwplYs_0keky7VuJ2rQvyhdL-/preview",
        summary:
          "Infertility affects 1 in 6 couples globally, but in Africa, stigma and silence make the journey even harder. Learn why open conversations matter — and how we can replace stigma with hope.",
        content: `Infertility affects 1 in 6 couples globally, according to the World Health Organization. But in many African communities, the topic is still whispered about, hidden behind closed doors, and sometimes not spoken about at all.

Instead of compassion and understanding, those struggling with infertility often face stigma, blame, and isolation. This silence causes emotional pain — and delays people from seeking medical help.

At FertiTerra, we believe infertility is not a taboo — it's a medical condition. And open conversations are the first step to changing lives.

## The Weight of Silence
In certain cultures, infertility is wrongly seen as a woman's problem. Men are rarely tested first, and couples may face pressure from extended family or even risk marital breakdown.
This silence has real consequences: delayed diagnosis, untreated health conditions, and deep emotional scars.

## Why We Must Speak Up
**Encourages Early Diagnosis**  
When people feel safe talking about fertility challenges, they are more likely to seek medical help quickly. Early testing means faster answers and better treatment options.

**Reduces Emotional Isolation**  
Silence makes people feel alone in their struggles. By sharing our stories, we remind others that they are not the only ones.

**Dismantles Harmful Myths**  
Myths like "infertility is always the woman's fault" or "traditional medicine can cure everything" keep people from getting accurate diagnoses.

**Builds Supportive Communities**  
A society that listens and supports makes the journey less lonely and more hopeful.

## A Personal Story
When Amina and James tried for three years to have a baby, they didn't tell anyone. In their community, fertility problems were seen as a curse.  
After learning more from a friend, they finally sought testing — and discovered James had a treatable condition.  
Today, they are expecting their first child. Their only regret? Waiting so long because of fear and stigma.

## FertiTerra's Role in Breaking the Silence
We provide affordable, discreet fertility test kits and education for African couples and individuals.  
Our mission is simple: make fertility care accessible, remove the shame, and give families hope.

## Your Voice Matters
You can help break the stigma:
- Talk openly about fertility with friends and family.
- Share accurate information and challenge myths.
- Support those going through fertility struggles without judgment.

💬 **Final Thought:** Infertility does not define anyone's worth. With understanding, education, and open conversation, we can replace silence with support — and stigma with hope.`,
        readTime: 8,
        views: 1250,
        likes: 89,
        shares: 23,
      }

      if (params.slug === mockArticle.slug) {
        setArticle(mockArticle)
      }
    } catch (error) {
      console.error("Error fetching article:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLike = () => {
    setLiked(!liked)
    if (article) {
      setArticle({
        ...article,
        likes: liked ? article.likes - 1 : article.likes + 1,
      })
    }
  }

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.summary,
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/knowledge-centre">
              <Button className="bg-rose-500 hover:bg-rose-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Knowledge Centre
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/knowledge-centre" className="inline-flex items-center text-rose-500 hover:text-rose-600 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Knowledge Centre
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <Badge className="bg-rose-500 mb-4">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{article.summary}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {article.readTime} min read
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                {article.views} views
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center gap-4 pb-6 border-b">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  liked ? "bg-rose-100 text-rose-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                {article.likes}
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.featuredImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Video Embed */}
          {article.videoEmbed && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Watch the Video</h3>
              <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
                <iframe
                  src={article.videoEmbed}
                  title={article.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            {article.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                )
              } else if (paragraph.startsWith("- ")) {
                const listItems = paragraph.split("\n").filter((item) => item.startsWith("- "))
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 mb-4">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                )
              } else {
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                )
              }
            })}
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-8">
            <Tag className="h-4 w-4 text-gray-500" />
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Take the Next Step?</h3>
              <p className="text-gray-600 mb-4">
                Get personalized insights about your fertility with our comprehensive at-home test kit.
              </p>
              <Link href="/test-kits">
                <Button className="bg-rose-500 hover:bg-rose-600">Order Your Test Kit</Button>
              </Link>
            </CardContent>
          </Card>
        </article>
      </main>
    </div>
  )
}
