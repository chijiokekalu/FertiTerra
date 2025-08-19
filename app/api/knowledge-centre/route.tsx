import { NextResponse } from "next/server"

// Mock database for articles
const articles = [
  {
    id: 1,
    slug: "infertility-stigma-africa",
    title: "Breaking the Silence: Addressing Infertility Stigma in Africa",
    excerpt:
      "Exploring the cultural and social challenges surrounding infertility in African communities and how we can create more supportive environments.",
    content: `
      <div class="prose max-w-none">
        <p>Infertility affects millions of people across Africa, yet it remains a topic shrouded in silence, shame, and stigma. This silence not only perpetuates misconceptions but also prevents individuals and couples from seeking the help they need.</p>
        
        <h2>The Cultural Context</h2>
        <p>In many African cultures, fertility is deeply tied to identity, social status, and family honor. The inability to conceive is often viewed as a personal failing, particularly for women, leading to social isolation and emotional distress.</p>
        
        <h2>Breaking Down Barriers</h2>
        <p>Education and open dialogue are key to changing these perceptions. By sharing stories, providing accurate information, and creating supportive communities, we can help break down the barriers that prevent people from seeking fertility care.</p>
        
        <div class="my-8">
          <iframe 
            src="https://drive.google.com/file/d/1example/preview" 
            width="100%" 
            height="400" 
            frameborder="0" 
            allowfullscreen
            class="rounded-lg shadow-lg"
          ></iframe>
        </div>
        
        <h2>Moving Forward</h2>
        <p>At FertiTerra, we're committed to changing the narrative around fertility in Africa. Through education, support, and accessible care, we can create a future where no one faces their fertility journey alone.</p>
      </div>
    `,
    author: "Dr. Sarah Okafor",
    publishedAt: "2024-01-15",
    category: "Education",
    tags: ["infertility", "stigma", "africa", "awareness"],
    image: "/infertility-awareness-africa.png",
    readTime: 8,
    likes: 245,
    views: 1520,
  },
  {
    id: 2,
    slug: "understanding-fertility-basics",
    title: "Understanding Fertility: The Basics Everyone Should Know",
    excerpt: "A comprehensive guide to understanding how fertility works, common challenges, and when to seek help.",
    content: `
      <div class="prose max-w-none">
        <p>Understanding your fertility is the first step in taking control of your reproductive health. Whether you're planning to start a family now or in the future, having accurate information is crucial.</p>
        
        <h2>The Fertility Timeline</h2>
        <p>Fertility naturally declines with age, but the timeline varies for everyone. Understanding these changes can help you make informed decisions about your reproductive future.</p>
        
        <h2>Common Fertility Challenges</h2>
        <p>From hormonal imbalances to structural issues, there are many factors that can affect fertility. The good news is that many of these challenges can be addressed with proper care and treatment.</p>
        
        <h2>When to Seek Help</h2>
        <p>If you've been trying to conceive for 12 months (or 6 months if you're over 35), it's time to consult with a fertility specialist. Early intervention can make a significant difference in your journey.</p>
      </div>
    `,
    author: "Dr. Michael Adebayo",
    publishedAt: "2024-01-10",
    category: "Health",
    tags: ["fertility", "health", "education"],
    image: "/fertility-education.png",
    readTime: 6,
    likes: 189,
    views: 2340,
  },
]

export async function GET() {
  return NextResponse.json({ articles })
}
