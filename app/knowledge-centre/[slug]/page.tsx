"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, Eye, Heart, Share2, Bookmark, ArrowLeft, Clock } from "lucide-react"

interface Article {
  id: string
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
  views: number
  likes: number
}

export default function ArticlePage() {
  const params = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  useEffect(() => {
    if (params.slug) {
      fetchArticle(params.slug as string)
    }
  }, [params.slug])

  const fetchArticle = async (slug: string) => {
    try {
      // In a real app, this would fetch from your API
      // For now, we'll simulate the article data
      const mockArticle: Article = {
        id: "1",
        title: "Why Talking About Infertility Matters: Breaking the Stigma in Africa",
        slug: "why-talking-about-infertility-matters",
        author: "FertiTerra Editorial Team",
        category: "Awareness & Education",
        tags: ["Infertility Awareness", "Africa", "Fertility Support", "Breaking the Stigma"],
        date: "2025-08-15",
        featuredImage: "/images/infertility-stigma-africa.jpg",
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
        views: 1247,
        likes: 89,
      }

      setArticle(mockArticle)
    } catch (error) {
      console.error("Error fetching article:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLike = () => {
    setLiked(!liked)
    // In a real app, this would update the backend
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
    // In a real app, this would update the backend
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.summary,
        url: window.location.href,
      })
    } else {
      // Fallback to copying URL
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

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(" ").length
    return Math.ceil(wordCount / wordsPerMinute)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/knowledge-centre">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Knowledge Centre
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/knowledge-centre" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Knowledge Centre
        </Link>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="mb-6">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{article.summary}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {estimateReadingTime(article.content)} min read
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {article.views} views
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant={liked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className="flex items-center gap-2"
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                {article.likes + (liked ? 1 : 0)}
              </Button>
              <Button
                variant={bookmarked ? "default" : "outline"}
                size="sm"
                onClick={handleBookmark}
                className="flex items-center gap-2"
              >
                <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
                {bookmarked ? "Saved" : "Save"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2 bg-transparent"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          {article.featuredImage && (
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={article.featuredImage || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Video Embed */}
          {article.videoEmbed && (
            <div className="mb-8">
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src={article.videoEmbed}
                  title={article.title}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
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
              } else if (paragraph.startsWith("💬 **")) {
                return (
                  <div key={index} className="bg-rose-50 border-l-4 border-rose-400 p-4 my-6">
                    <p className="text-gray-800 font-medium">{paragraph.replace("💬 **", "").replace("**", "")}</p>
                  </div>
                )
              } else if (paragraph.startsWith("- ")) {
                const listItems = paragraph.split("\n").filter((item) => item.startsWith("- "))
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-4">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                )
              } else {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              }
            })}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="text-center text-gray-500">
              <p>More related articles coming soon...</p>
              <Link href="/knowledge-centre" className="inline-block mt-4">
                <Button variant="outline">Browse All Articles</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
