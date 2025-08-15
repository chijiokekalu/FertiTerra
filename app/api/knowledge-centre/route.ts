import { type NextRequest, NextResponse } from "next/server"

// Mock database for articles (in production, this would be a real database)
const articles = new Map()

export async function POST(request: NextRequest) {
  try {
    const articleData = await request.json()

    // Generate an ID for the article
    const id = Date.now().toString()

    // Store the article
    articles.set(id, {
      id,
      ...articleData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Article created successfully",
      id,
      article: articles.get(id),
    })
  } catch (error) {
    console.error("Error creating article:", error)
    return NextResponse.json({ success: false, message: "Failed to create article" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get("slug")

    if (slug) {
      // Find article by slug
      const article = Array.from(articles.values()).find((a) => a.slug === slug)
      if (!article) {
        return NextResponse.json({ success: false, message: "Article not found" }, { status: 404 })
      }
      return NextResponse.json({ success: true, article })
    }

    // Return all articles
    const allArticles = Array.from(articles.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

    return NextResponse.json({
      success: true,
      articles: allArticles,
      total: allArticles.length,
    })
  } catch (error) {
    console.error("Error fetching articles:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch articles" }, { status: 500 })
  }
}
