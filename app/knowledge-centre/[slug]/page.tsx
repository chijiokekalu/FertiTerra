"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ArrowLeft, Calendar, User, Share2, Heart } from "lucide-react"

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
}

export default function ArticlePage() {
  const params = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (params.slug) {
      fetchArticle(params.slug as string)
    }
  }, [params.slug])

  const fetchArticle = async (slug: string) => {
    try {
      const response = await fetch(`/api/knowledge-centre?slug=${slug}`)
      const data = await response.json()
      if (data.success) {
        setArticle(data.article)
      } else {
        setError("Article not found")
      }
    } catch (error) {
      console.error("Error fetching article:", error)
      setError("Failed to load article")
    } finally {
      setLoading(false)
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

  if (error || !article) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">{error || "The article you're looking for doesn't exist."}</p>
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
        <article className="container max-w-4xl py-8">
          <div className="mb-6">
            <Link href="/knowledge-centre">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Knowledge Centre
              </Button>
            </Link>
          </div>

          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Badge variant="outline">{article.category}</Badge>
              <span>•</span>
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString()}</span>
              <span>•</span>
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight mb-4">{article.title}</h1>

            <p className="text-xl text-gray-600 mb-6">{article.summary}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </header>

          {article.featuredImage && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={article.featuredImage || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {article.videoEmbed && (
            <div className="mb-8">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                <iframe
                  src="https://drive.google.com/file/d/1cVlWf_jUwplYs_0keky7VuJ2rQvyhdL-/preview"
                  title={article.title}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {article.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                )
              }
              if (paragraph.startsWith("💬 **Final Thought:**")) {
                return (
                  <div key={index} className="bg-rose-50 border-l-4 border-rose-500 p-6 mt-8 rounded-r-lg">
                    <p className="text-gray-800 font-medium">{paragraph.replace("💬 **Final Thought:** ", "")}</p>
                  </div>
                )
              }
              return (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          <footer className="mt-12 pt-8 border-t">
            <div className="bg-rose-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">About FertiTerra</h3>
              <p className="text-gray-600 mb-4">
                FertiTerra provides accessible fertility testing and education across Africa. We're breaking down
                barriers and stigma to help families achieve their dreams.
              </p>
              <Link href="/test-kits">
                <Button className="bg-rose-500 hover:bg-rose-600">Explore Our Test Kits</Button>
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}
