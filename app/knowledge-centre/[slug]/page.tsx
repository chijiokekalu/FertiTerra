"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Heart, Share2, BookOpen, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Article {
  id: string
  title: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image?: string
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/api/knowledge-centre?slug=${params.slug}`)
        if (response.ok) {
          const data = await response.json()
          setArticle(data)
        }
      } catch (error) {
        console.error("Error fetching article:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/knowledge-centre">
            <Button>Back to Knowledge Centre</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Special handling for the infertility stigma article
  if (params.slug === "infertility-stigma-africa") {
    return (
      <div className="min-h-screen bg-white">
        <Header />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Navigation */}
          <Link href="/knowledge-centre" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Centre
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-xs font-medium">
                Awareness & Education
              </span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>Dr. Sarah Adebayo</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Breaking the Silence: Addressing Infertility Stigma in Africa
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Exploring the cultural, social, and emotional challenges surrounding infertility in African communities
              and how we can create more supportive environments for affected families.
            </p>
          </header>

          {/* Article Image */}
          <div className="mb-8">
            <Image
              src="/infertility-awareness-africa.png"
              alt="Infertility awareness in Africa"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Video Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding the Impact</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Watch this insightful discussion about the challenges and stigma surrounding infertility in African
                communities:
              </p>
              <div className="flex justify-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ZBRYe9_0X0w?si=fOKeTvNbgG6CfYTI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="max-w-full h-auto"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <h2>The Hidden Struggle</h2>
            <p>
              Infertility affects millions of couples across Africa, yet it remains one of the most stigmatized health
              conditions on the continent. The silence surrounding fertility challenges creates additional emotional
              burden for families already dealing with the medical and psychological aspects of infertility.
            </p>

            <h2>Cultural and Social Barriers</h2>
            <p>
              In many African cultures, fertility is closely tied to identity, social status, and family honor. Women,
              in particular, often bear the blame for fertility issues, regardless of the medical cause. This cultural
              pressure can lead to:
            </p>
            <ul>
              <li>Social isolation and discrimination</li>
              <li>Marital instability and relationship stress</li>
              <li>Mental health challenges including depression and anxiety</li>
              <li>Delayed or avoided medical treatment due to shame</li>
            </ul>

            <h2>Breaking Down Misconceptions</h2>
            <p>
              Education is key to addressing infertility stigma. Common misconceptions include the belief that
              infertility is always the woman's fault, that it's a punishment for past actions, or that traditional
              remedies are always superior to medical treatment. By promoting accurate information about fertility
              health, we can begin to change these harmful narratives.
            </p>

            <h2>Creating Supportive Communities</h2>
            <p>
              Building supportive environments requires effort from individuals, families, healthcare providers, and
              communities. This includes:
            </p>
            <ul>
              <li>Promoting open, compassionate conversations about fertility</li>
              <li>Training healthcare providers in sensitive, culturally appropriate care</li>
              <li>Establishing support groups and counseling services</li>
              <li>Advocating for policy changes that improve access to fertility care</li>
            </ul>

            <h2>The Role of Technology</h2>
            <p>
              Digital health platforms like FertiTerra are helping to address some barriers by providing confidential
              access to fertility testing and consultations. This technology-enabled approach allows individuals to seek
              help privately while still receiving professional medical guidance.
            </p>

            <h2>Moving Forward</h2>
            <p>
              Addressing infertility stigma requires a multi-faceted approach that combines education, advocacy, and
              improved access to care. By working together, we can create a future where fertility challenges are met
              with understanding and support rather than shame and silence.
            </p>
          </div>

          {/* Article Actions */}
          <div className="flex items-center justify-between py-6 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <Button
                variant={liked ? "default" : "outline"}
                size="sm"
                onClick={() => setLiked(!liked)}
                className={liked ? "bg-rose-600 hover:bg-rose-700" : ""}
              >
                <Heart className={`w-4 h-4 mr-2 ${liked ? "fill-current" : ""}`} />
                {liked ? "Liked" : "Like"}
              </Button>

              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="text-sm text-gray-500">Published on March 15, 2024</div>
          </div>

          {/* Related Articles */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span>Fertility Education</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Understanding Your Fertility: A Comprehensive Guide
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Learn about the basics of fertility health, including key factors that affect conception and when to
                    seek help.
                  </p>
                  <Link
                    href="/knowledge-centre/understanding-fertility"
                    className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span>Mental Health</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Coping with Fertility Challenges: Mental Health Support
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Practical strategies for managing the emotional aspects of fertility challenges and building
                    resilience.
                  </p>
                  <Link
                    href="/knowledge-centre/mental-health-support"
                    className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>
        </article>
      </div>
    )
  }

  // Default article layout for other articles
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Navigation */}
        <Link href="/knowledge-centre" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Knowledge Centre
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-xs font-medium">
              {article.category}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
        </header>

        {/* Article Image */}
        {article.image && (
          <div className="mb-8">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Article Actions */}
        <div className="flex items-center justify-between py-6 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <Button
              variant={liked ? "default" : "outline"}
              size="sm"
              onClick={() => setLiked(!liked)}
              className={liked ? "bg-rose-600 hover:bg-rose-700" : ""}
            >
              <Heart className={`w-4 h-4 mr-2 ${liked ? "fill-current" : ""}`} />
              {liked ? "Liked" : "Like"}
            </Button>

            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          <div className="text-sm text-gray-500">Published on {article.date}</div>
        </div>
      </article>
    </div>
  )
}
