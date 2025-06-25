import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const paymentData = await request.json()

    // Validate payment amount (should be 500 cents = $5.00)
    if (paymentData.amount !== 500) {
      return NextResponse.json({ error: "Invalid payment amount" }, { status: 400 })
    }

    console.log("Payment Processing:", {
      amount: paymentData.amount,
      timestamp: new Date().toISOString(),
      // Don't log sensitive payment details in production
    })

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate payment confirmation ID
    const paymentId = `pay_${Date.now()}`

    // Send payment confirmation email to FertiTerra
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "fertiterratechnologies@africanimpactinitiative.com",
          type: "payment_received",
          subject: "New Payment Received - Basic Fertility Checkup",
          message: `Payment of $5.00 received for Basic Fertility Checkup
          
Payment Details:
- Amount: $5.00
- Payment ID: ${paymentId}
- Date: ${new Date().toLocaleString()}
- Service: Basic Fertility Checkup
- Customer: ${paymentData.cardholderName || "N/A"}

Next Steps:
- Customer will schedule consultation
- Prepare for 15-minute consultation session
- Review customer questionnaire responses`,
        }),
      })
    } catch (emailError) {
      console.error("Failed to send payment notification:", emailError)
      // Don't fail the payment if email fails
    }

    // Store payment record (in real app, save to database)
    const paymentRecord = {
      id: paymentId,
      amount: paymentData.amount,
      status: "completed",
      service: "basic-fertility-checkup",
      customerName: paymentData.cardholderName,
      timestamp: new Date().toISOString(),
    }

    console.log("Payment completed:", paymentRecord)

    return NextResponse.json({
      success: true,
      paymentId: paymentId,
      message: "Payment processed successfully",
      amount: "$5.00",
      service: "Basic Fertility Checkup",
    })
  } catch (error) {
    console.error("Error processing payment:", error)
    return NextResponse.json(
      {
        error: "Payment processing failed",
        message: "Please try again or contact support",
      },
      { status: 500 },
    )
  }
}
