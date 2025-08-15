import { type NextRequest, NextResponse } from "next/server"

// Mock database - in production, this would be a real database
const articles: any[] = []

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const search = searchParams.get("search")

    let filteredArticles = articles

    if (category && category !== "all") {
      filteredArticles = filteredArticles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
    }

    if (search) {
      filteredArticles = filteredArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(search.toLowerCase()) ||
          article.content.toLowerCase().includes(search.toLowerCase()) ||
          article.tags.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase())),
      )
    }

    return NextResponse.json({ articles: filteredArticles })
  } catch (error) {
    console.error("Error fetching articles:", error)
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const articleData = await request.json()

    const newArticle = {
      id: Date.now().toString(),
      ...articleData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0,
      likes: 0,
    }

    articles.push(newArticle)

    return NextResponse.json(
      {
        message: "Article created successfully",
        article: newArticle,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating article:", error)
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 })
  }
}
