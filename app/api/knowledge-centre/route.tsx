import { type NextRequest, NextResponse } from "next/server"

// Mock database for articles
const articles = [
  {
    id: "infertility-stigma-africa",
    title: "Breaking the Silence: Addressing Infertility Stigma in Africa",
    slug: "infertility-stigma-africa",
    excerpt:
      "Exploring the cultural barriers and stigma surrounding infertility in African communities and how we can create supportive environments.",
    content: `
      <div class="prose max-w-none">
        <p>Infertility affects millions of couples across Africa, yet it remains shrouded in silence and stigma. This comprehensive guide explores the cultural, social, and medical aspects of infertility in African communities.</p>
        
        <h2>Understanding the Scope</h2>
        <p>In many African cultures, fertility is deeply connected to identity, social status, and family honor. When couples face fertility challenges, they often encounter:</p>
        <ul>
          <li>Social isolation and judgment</li>
          <li>Blame and shame, particularly directed at women</li>
          <li>Limited access to medical resources</li>
          <li>Cultural misconceptions about fertility</li>
        </ul>

        <div class="my-8">
          <iframe 
            src="https://drive.google.com/file/d/1example/preview" 
            width="100%" 
            height="400" 
            frameborder="0"
            class="rounded-lg shadow-lg"
            title="Infertility Awareness in Africa"
          ></iframe>
        </div>

        <h2>Breaking Down Barriers</h2>
        <p>Creating change requires a multi-faceted approach that addresses both individual and community needs. Key strategies include:</p>
        
        <h3>Education and Awareness</h3>
        <p>Providing accurate information about fertility, reproductive health, and available treatments helps dispel myths and reduces stigma.</p>
        
        <h3>Community Support</h3>
        <p>Building support networks where individuals can share experiences and find understanding is crucial for emotional wellbeing.</p>
        
        <h3>Healthcare Access</h3>
        <p>Improving access to fertility specialists, diagnostic tools, and treatment options across the continent.</p>
        
        <h2>The Path Forward</h2>
        <p>At FertiTerra, we believe that every individual deserves compassionate support on their fertility journey. Through education, community building, and accessible healthcare, we can create a future where fertility challenges are met with understanding rather than stigma.</p>
      </div>
    `,
    author: "Dr. Amara Okafor",
    authorImage: "/placeholder.svg?height=60&width=60&text=Dr.+AO",
    publishedAt: "2024-01-15",
    category: "Education",
    tags: ["infertility", "stigma", "africa", "awareness"],
    readTime: "8 min read",
    image: "/infertility-awareness-africa.png",
    likes: 127,
    views: 2340,
    featured: true,
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get("search")
  const category = searchParams.get("category")

  let filteredArticles = articles

  if (search) {
    filteredArticles = filteredArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
    )
  }

  if (category && category !== "all") {
    filteredArticles = filteredArticles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
  }

  return NextResponse.json({
    articles: filteredArticles,
    total: filteredArticles.length,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (body.action === "like") {
      const article = articles.find((a) => a.id === body.articleId)
      if (article) {
        article.likes += 1
        return NextResponse.json({ success: true, likes: article.likes })
      }
    }

    if (body.action === "view") {
      const article = articles.find((a) => a.id === body.articleId)
      if (article) {
        article.views += 1
        return NextResponse.json({ success: true, views: article.views })
      }
    }

    return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
  }
}
