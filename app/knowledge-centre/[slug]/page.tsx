"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Share2, BookOpen, Clock, User } from "lucide-react"
import { Header } from "@/components/header"

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  image: string
  likes: number
}

const articles: Article[] = [
  {
    id: "1",
    title: "Breaking the Silence: Understanding Infertility Stigma in Africa",
    slug: "infertility-stigma-africa",
    excerpt:
      "Exploring the cultural and social barriers that prevent open discussions about infertility in African communities and how we can create supportive environments.",
    content: `
      <div class="prose max-w-none">
        <p class="lead">Infertility affects millions of couples across Africa, yet it remains one of the most stigmatized health conditions on the continent. This silence not only perpetuates myths and misconceptions but also prevents individuals from seeking the help they need.</p>
        
        <h2>The Weight of Cultural Expectations</h2>
        <p>In many African societies, fertility is deeply intertwined with identity, particularly for women. The pressure to bear children often begins immediately after marriage, and the inability to conceive can lead to social isolation, blame, and even marital dissolution.</p>
        
        <blockquote>
          <p>"The stigma surrounding infertility in Africa is not just a personal burden—it's a community-wide issue that requires collective action to address."</p>
        </blockquote>
        
        <h2>Understanding the Impact</h2>
        <p>The psychological toll of infertility stigma cannot be understated. Many individuals experience:</p>
        <ul>
          <li>Depression and anxiety</li>
          <li>Social withdrawal and isolation</li>
          <li>Relationship strain and conflict</li>
          <li>Loss of self-esteem and identity</li>
          <li>Financial stress from seeking treatments</li>
        </ul>
        
        <div class="video-container my-8">
          <iframe width="560" height="315" 
              src="https://www.youtube.com/embed/ZBRYe9_0X0w?si=fOKeTvNbgG6CfYTI" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
          </iframe>
        </div>
        
        <h2>Breaking Down Barriers</h2>
        <p>Creating change requires a multi-faceted approach:</p>
        
        <h3>1. Education and Awareness</h3>
        <p>Dispelling myths about infertility through community education programs and accessible information sharing.</p>
        
        <h3>2. Healthcare Access</h3>
        <p>Improving access to fertility testing and treatment options across the continent, particularly in underserved areas.</p>
        
        <h3>3. Support Systems</h3>
        <p>Establishing support groups and counseling services for individuals and couples facing fertility challenges.</p>
        
        <h3>4. Policy Changes</h3>
        <p>Advocating for healthcare policies that include fertility treatments and mental health support.</p>
        
        <h2>The Role of Technology</h2>
        <p>Modern technology, including AI-powered platforms like FertiTerra, is making fertility care more accessible and private, allowing individuals to take the first steps toward understanding their reproductive health without fear of judgment.</p>
        
        <h2>Moving Forward Together</h2>
        <p>Breaking the silence around infertility requires courage from individuals, families, and communities. By sharing stories, supporting research, and advocating for change, we can create an environment where fertility challenges are met with compassion rather than stigma.</p>
        
        <p>At FertiTerra, we believe that every individual deserves access to comprehensive fertility care and support, free from judgment and stigma. Together, we can transform how Africa approaches reproductive health.</p>
      </div>
    `,
    author: "Dr. Kelechi Okoro",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Awareness & Education",
    tags: ["Infertility", "Stigma", "Africa", "Mental Health", "Support"],
    image: "/infertility-awareness-africa.png",
    likes: 127,
  },
]

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    const foundArticle = articles.find((a) => a.slug === params.slug)
    if (foundArticle) {
      setArticle(foundArticle)
      setLikes(foundArticle.likes)
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
          title: article?.title,
          text: article?.excerpt,
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

            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {article.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{article.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{article.excerpt}</p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
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
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant={isLiked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className="flex items-center gap-2"
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                <span>{likes}</span>
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
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-rose-600 prose-strong:text-gray-900 prose-blockquote:border-rose-200 prose-blockquote:bg-rose-50 prose-blockquote:p-6 prose-blockquote:rounded-lg prose-ul:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for related articles */}
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src="/fertility-education.png"
                      alt="Fertility Education"
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2">
                      Education
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                      Understanding Your Fertility Journey
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      A comprehensive guide to understanding fertility, from basic concepts to advanced treatments.
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>5 min read</span>
                      <span>Jan 10, 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
