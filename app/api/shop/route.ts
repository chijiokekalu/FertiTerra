import { type NextRequest, NextResponse } from "next/server"

// Mock database for shop configuration
let shopConfig = {
  shopTabs: [
    {
      name: "Hormone & Fertility Test",
      link: "/tests",
    },
    {
      name: "FertiTerra merch",
      link: "/fertiterra-merch",
      items: [
        {
          title: "FertiTerra T-Shirt",
          image: "/uploads/fertiterra-shirt.png",
          price: 25,
          description:
            "Support fertility awareness with our official FertiTerra T-shirt. Comfortable, stylish, and purpose-driven.",
        },
      ],
    },
    {
      name: "Gift cards",
      link: "/gift-cards",
      content: {
        title: "FertiTerra Gift Cards",
        description:
          "Give the gift of care. Our digital gift cards can be used to purchase fertility tests, consultations, or FertiTerra merch.",
        options: [
          { value: 25, label: "$25" },
          { value: 50, label: "$50" },
          { value: 100, label: "$100" },
        ],
      },
    },
    {
      name: "Get started kit",
      link: "/starter-kit",
    },
  ],
}

export async function GET() {
  return NextResponse.json(shopConfig)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (body.updates) {
      shopConfig = { ...shopConfig, ...body.updates }
    }

    return NextResponse.json({
      success: true,
      message: "Shop configuration updated successfully",
      config: shopConfig,
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to update shop configuration" }, { status: 500 })
  }
}
