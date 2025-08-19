"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ArrowLeft, Clock, Eye, Heart, Share2, User, Calendar } from "lucide-react"

export default function ArticlePage() {
  const params = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    fetchArticle()
  }, [params.slug])

  const fetchArticle = async () => {
    try {
      const response = await fetch("/api/knowledge-centre")
      const data = await response.json()
      const foundArticle = data.articles.find((a) => a.slug === params.slug)
      setArticle(foundArticle)
    } catch (error) {
      console.error("Failed to fetch article:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLike = () => {
    setLiked(!liked)
    // In a real app, you'd update the like count in the database
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Article link copied to clipboard!")
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
            <p>Loading article...</p>
          </div>
        </main>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
            <Link href="/knowledge-centre">
              <Button className="bg-rose-500 hover:bg-rose-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Knowledge Centre
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="py-12">
          <div className="container max-w-4xl">
            {/* Back Button */}
            <Link href="/knowledge-centre" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Knowledge Centre
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <Badge className="mb-4 bg-rose-500">{article.category}</Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4">{article.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{article.views} views</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLike}
                  className={liked ? "text-rose-600 border-rose-600" : ""}
                >
                  <Heart className={`mr-2 h-4 w-4 ${liked ? "fill-current" : ""}`} />
                  {article.likes + (liked ? 1 : 0)}
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-rose-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h3>
              <p className="text-gray-600 mb-6">
                Get personalized fertility insights with our comprehensive testing and consultation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop">
                  <Button className="bg-rose-500 hover:bg-rose-600">Explore Our Tests</Button>
                </Link>
                <Link href="/consultation">
                  <Button variant="outline">Book a Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
