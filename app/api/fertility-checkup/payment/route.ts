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
      paymentMethod: paymentData.paymentMethod,
      timestamp: new Date().toISOString(),
    })

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate payment confirmation ID
    const paymentId = `pay_${Date.now()}`

    // Handle different payment methods
    let paymentMessage = ""
    let emailSubject = ""

    switch (paymentData.paymentMethod) {
      case "card":
        paymentMessage = `Card payment of $5.00 received for Basic Fertility Checkup
        
Payment Details:
- Amount: $5.00
- Payment ID: ${paymentId}
- Date: ${new Date().toLocaleString()}
- Service: Basic Fertility Checkup
- Customer: ${paymentData.cardholderName || "N/A"}
- Payment Method: Credit/Debit Card

Next Steps:
- Customer will schedule consultation
- Prepare for 15-minute consultation session
- Review customer questionnaire responses`
        emailSubject = "New Card Payment Received - Basic Fertility Checkup"
        break

      case "mobile":
        paymentMessage = `Mobile Money payment of $5.00 received for Basic Fertility Checkup
        
Payment Details:
- Amount: $5.00
- Payment ID: ${paymentId}
- Date: ${new Date().toLocaleString()}
- Service: Basic Fertility Checkup
- Mobile Provider: ${paymentData.mobileProvider?.toUpperCase() || "N/A"}
- Phone Number: ${paymentData.phoneNumber || "N/A"}
- Payment Method: Mobile Money

Next Steps:
- Customer will schedule consultation
- Prepare for 15-minute consultation session
- Review customer questionnaire responses`
        emailSubject = "New Mobile Money Payment Received - Basic Fertility Checkup"
        break

      case "bank":
        paymentMessage = `Bank Transfer request for $5.00 - Basic Fertility Checkup
        
Organization Details:
- Organization: ${paymentData.organizationName || "N/A"}
- Contact Person: ${paymentData.contactPerson || "N/A"}
- Email: ${paymentData.organizationEmail || "N/A"}
- Amount: $5.00
- Service: Basic Fertility Checkup
- Request ID: ${paymentId}
- Date: ${new Date().toLocaleString()}

Action Required:
- Generate and send invoice to organization
- Await bank transfer confirmation
- Schedule consultation after payment confirmation

Bank Details Provided:
- RWF Account: 4003201240597 (Equity Bank Rwanda)
- USD Account: EQBLRWRWXXX (Swift Code)`
        emailSubject = "New Bank Transfer Request - Basic Fertility Checkup"
        break

      default:
        paymentMessage = `Payment request received for Basic Fertility Checkup - $5.00`
        emailSubject = "New Payment Request - Basic Fertility Checkup"
    }

    // Send payment notification email to FertiTerra
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "fertiterratechnologies@africanimpactinitiative.com",
          type: "payment_received",
          subject: emailSubject,
          message: paymentMessage,
        }),
      })
    } catch (emailError) {
      console.error("Failed to send payment notification:", emailError)
      // Don't fail the payment if email fails
    }

    // For bank transfers, also send invoice to organization
    if (paymentData.paymentMethod === "bank" && paymentData.organizationEmail) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: paymentData.organizationEmail,
            type: "invoice_request",
            subject: "Invoice Request - FertiTerra Basic Fertility Checkup",
            message: `Dear ${paymentData.contactPerson},

Thank you for your interest in FertiTerra's Basic Fertility Checkup service.

Service Details:
- Service: Basic Fertility Checkup
- Amount: $5.00 USD
- Organization: ${paymentData.organizationName}
- Request ID: ${paymentId}

Payment Instructions:
Please make payment to one of our bank accounts:

RWF Account:
- Bank: Equity Bank Rwanda
- Account Name: FertiTerra Technologies
- Account Number: 4003201240597

USD Account:
- Bank: Equity Bank Rwanda
- Account Name: FertiTerra Technologies
- Swift Code: EQBLRWRWXXX
- Bank Address: 24R6+C48, KG 11 Ave, Kigali

After payment, please send confirmation to fertiterratechnologies@africanimpactinitiative.com

We will then schedule your consultation session.

Best regards,
FertiTerra Technologies Team`,
          }),
        })
      } catch (invoiceError) {
        console.error("Failed to send invoice:", invoiceError)
      }
    }

    // Store payment record (in real app, save to database)
    const paymentRecord = {
      id: paymentId,
      amount: paymentData.amount,
      status: paymentData.paymentMethod === "bank" ? "pending" : "completed",
      service: "basic-fertility-checkup",
      paymentMethod: paymentData.paymentMethod,
      customerInfo: {
        name: paymentData.cardholderName || paymentData.contactPerson,
        phone: paymentData.phoneNumber,
        email: paymentData.organizationEmail,
        organization: paymentData.organizationName,
      },
      timestamp: new Date().toISOString(),
    }

    console.log("Payment record:", paymentRecord)

    return NextResponse.json({
      success: true,
      paymentId: paymentId,
      message:
        paymentData.paymentMethod === "bank"
          ? "Invoice request submitted successfully"
          : "Payment processed successfully",
      amount: "$5.00",
      service: "Basic Fertility Checkup",
      paymentMethod: paymentData.paymentMethod,
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
