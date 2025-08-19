import { type NextRequest, NextResponse } from "next/server"

// Mock database for articles
const articles = [
  {
    id: "1",
    title: "Breaking the Silence: Understanding Infertility Stigma in Africa",
    slug: "infertility-stigma-africa",
    excerpt:
      "Exploring the cultural and social challenges surrounding infertility in African communities and how we can create more supportive environments.",
    content: `
      <div class="prose max-w-none">
        <p>Infertility affects millions of people across Africa, yet it remains a topic shrouded in silence, shame, and stigma. This silence not only perpetuates misconceptions but also prevents individuals and couples from seeking the help they need.</p>
        
        <h2>The Cultural Context</h2>
        <p>In many African cultures, fertility is deeply intertwined with identity, social status, and family honor. Children are often seen as a blessing, a continuation of the family lineage, and a source of security in old age. When fertility challenges arise, the impact extends far beyond the individual or couple—it affects entire families and communities.</p>
        
        <h2>Breaking Down Barriers</h2>
        <p>At FertiTerra, we believe that education and open dialogue are key to breaking down these barriers. By sharing stories, providing accurate information, and creating safe spaces for discussion, we can help reduce the stigma surrounding infertility.</p>
        
        <div class="my-8">
          <iframe 
            src="https://drive.google.com/file/d/1234567890/preview" 
            width="100%" 
            height="400" 
            frameborder="0" 
            allowfullscreen
            class="rounded-lg shadow-lg"
          ></iframe>
        </div>
        
        <h2>Moving Forward Together</h2>
        <p>Change begins with conversation. By talking openly about fertility challenges, sharing resources, and supporting one another, we can create a more understanding and compassionate society for everyone on their fertility journey.</p>
      </div>
    `,
    author: "Dr. Sarah Okafor",
    publishedAt: "2024-01-15",
    category: "Education",
    tags: ["infertility", "stigma", "africa", "awareness"],
    image: "/infertility-awareness-africa.png",
    readTime: "8 min read",
    likes: 42,
    views: 1250,
    featured: true,
  },
  {
    id: "2",
    title: "Understanding Your Fertility: A Comprehensive Guide",
    slug: "understanding-fertility-guide",
    excerpt: "Learn about the basics of fertility, reproductive health, and when to seek professional help.",
    content: `
      <div class="prose max-w-none">
        <p>Understanding your fertility is the first step in taking control of your reproductive health. Whether you're planning for the future or actively trying to conceive, knowledge is power.</p>
        
        <h2>The Basics of Fertility</h2>
        <p>Fertility involves complex interactions between hormones, reproductive organs, and timing. Both partners play crucial roles in the conception process.</p>
        
        <h2>Key Factors That Affect Fertility</h2>
        <ul>
          <li>Age and reproductive health</li>
          <li>Lifestyle factors (diet, exercise, stress)</li>
          <li>Medical conditions and medications</li>
          <li>Environmental factors</li>
        </ul>
        
        <h2>When to Seek Help</h2>
        <p>If you've been trying to conceive for 12 months (or 6 months if you're over 35), it may be time to consult with a fertility specialist.</p>
      </div>
    `,
    author: "Dr. Michael Adebayo",
    publishedAt: "2024-01-10",
    category: "Health",
    tags: ["fertility", "health", "education"],
    image: "/fertility-education.png",
    readTime: "12 min read",
    likes: 38,
    views: 890,
    featured: false,
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const search = searchParams.get("search")
  const featured = searchParams.get("featured")

  let filteredArticles = [...articles]

  if (category && category !== "all") {
    filteredArticles = filteredArticles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
  }

  if (search) {
    const searchLower = search.toLowerCase()
    filteredArticles = filteredArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchLower) ||
        article.excerpt.toLowerCase().includes(searchLower) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
    )
  }

  if (featured === "true") {
    filteredArticles = filteredArticles.filter((article) => article.featured)
  }

  return NextResponse.json({
    articles: filteredArticles,
    total: filteredArticles.length,
    categories: ["Education", "Health", "Research", "Support"],
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (body.action === "like" && body.articleId) {
      const article = articles.find((a) => a.id === body.articleId)
      if (article) {
        article.likes += 1
        return NextResponse.json({ success: true, likes: article.likes })
      }
    }

    if (body.action === "view" && body.articleId) {
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
