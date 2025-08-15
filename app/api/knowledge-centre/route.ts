import { type NextRequest, NextResponse } from "next/server"

// Mock database for articles
const articles = [
  {
    id: 1,
    title: "Why Talking About Infertility Matters: Breaking the Stigma in Africa",
    slug: "why-talking-about-infertility-matters",
    author: "FertiTerra Editorial Team",
    category: "Awareness & Education",
    tags: ["Infertility Awareness", "Africa", "Fertility Support", "Breaking the Stigma"],
    date: "2025-08-15",
    featuredImage: "/images/infertility-stigma-africa.jpg",
    videoEmbed:
      "<iframe src='https://drive.google.com/file/d/1cVlWf_jUwplYs_0keky7VuJ2rQvyhdL-/preview' title='Why Talking About Infertility Matters' width='100%' height='400' frameborder='0' allowfullscreen></iframe>",
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
  },
]

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
          article.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
      )
    }

    return NextResponse.json({
      success: true,
      articles: filteredArticles,
      total: filteredArticles.length,
    })
  } catch (error) {
    console.error("Error fetching articles:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch articles" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newArticle = {
      id: articles.length + 1,
      ...body,
      readTime: Math.ceil(body.content.split(" ").length / 200), // Estimate reading time
      views: 0,
      likes: 0,
      shares: 0,
    }

    articles.push(newArticle)

    return NextResponse.json({
      success: true,
      article: newArticle,
      message: "Article created successfully",
    })
  } catch (error) {
    console.error("Error creating article:", error)
    return NextResponse.json({ success: false, error: "Failed to create article" }, { status: 500 })
  }
}
