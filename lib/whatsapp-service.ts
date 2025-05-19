// WhatsApp API credentials
const WHATSAPP_API_URL = "https://graph.facebook.com/v17.0"
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN

export async function sendTextMessage(to, message) {
  return sendWhatsAppMessage(to, {
    type: "text",
    text: {
      body: message,
    },
  })
}

export async function sendImageMessage(to, imageUrl, caption) {
  return sendWhatsAppMessage(to, {
    type: "image",
    image: {
      link: imageUrl,
      caption: caption || "",
    },
  })
}

export async function sendButtonMessage(to, bodyText, buttons) {
  return sendWhatsAppMessage(to, {
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: bodyText,
      },
      action: {
        buttons: buttons.map((button) => ({
          type: "reply",
          reply: {
            id: button.id,
            title: button.title,
          },
        })),
      },
    },
  })
}

export async function sendListMessage(to, bodyText, sections) {
  return sendWhatsAppMessage(to, {
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: bodyText,
      },
      action: {
        button: "View Options",
        sections: sections,
      },
    },
  })
}

async function sendWhatsAppMessage(to, messageContent) {
  try {
    console.log("Sending WhatsApp message:", { to, messageType: messageContent.type })

    const response = await fetch(`${WHATSAPP_API_URL}/${WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: to,
        ...messageContent,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("WhatsApp API error:", errorData)
      throw new Error(`WhatsApp API error: ${response.status}`)
    }

    const responseData = await response.json()
    console.log("WhatsApp API response:", responseData)
    return responseData
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    throw error
  }
}
