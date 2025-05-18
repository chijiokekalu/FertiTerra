import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

// In-memory storage for demo purposes
// In production, use a database
const userDataStore: Record<string, UserData> = {}

export interface UserData {
  name?: string
  lastPeriodStart?: string
  cycleLength?: number
  periodLength?: number
  trackingHistory?: {
    date: string
    type: "period_start" | "period_end" | "symptom" | "note"
    value?: string
  }[]
  conversationContext?: string
  onboardingComplete?: boolean
}

export interface ProcessedMessage {
  intent: string
  response: string
  updatedUserData: UserData
}

export async function getUserData(phoneNumber: string): Promise<UserData> {
  // In production, fetch from database
  return (
    userDataStore[phoneNumber] || {
      trackingHistory: [],
      onboardingComplete: false,
    }
  )
}

export async function storeUserData(phoneNumber: string, userData: UserData): Promise<void> {
  // In production, store in database
  userDataStore[phoneNumber] = userData
}

export async function processUserMessage(message: string, userData: UserData): Promise<ProcessedMessage> {
  // Default response
  let response = ""
  let intent = "unknown"
  const updatedUserData = { ...userData }

  // If user is new or onboarding is not complete, start onboarding
  if (!userData.onboardingComplete) {
    return handleOnboarding(message, userData)
  }

  // Use AI to determine intent and generate response
  try {
    console.log("Processing message with AI:", message)

    const { text: aiResponse } = await generateText({
      model: openai("gpt-4o"),
      prompt: `
User message: "${message}"
User data: ${JSON.stringify(userData)}

Analyze this message from a fertility tracking chatbot user. Determine the intent and provide a helpful response.
Possible intents: track_period, track_symptom, fertility_question, pregnancy_question, ovulation_question, general_info, help, reset_data

Format your response as JSON:
{
  "intent": "one of the intents listed above",
  "response": "your helpful response to the user",
  "userData": {
    // any updates to user data based on the message
  }
}
`,
      system:
        "You are Makoko, a fertility health assistant for FertiTerra Technologies. You help users track their menstrual cycles, predict ovulation, and provide fertility education. Be friendly, informative, and sensitive to the personal nature of fertility health.",
    })

    console.log("AI response received:", aiResponse.substring(0, 200) + "...")

    try {
      // Parse the AI response as JSON
      const parsedResponse = JSON.parse(aiResponse)
      intent = parsedResponse.intent
      response = parsedResponse.response

      // Update user data if provided
      if (parsedResponse.userData) {
        // Merge the updates with existing data
        Object.assign(updatedUserData, parsedResponse.userData)
      }

      // Handle specific intents
      if (intent === "track_period") {
        // Add period tracking logic
        if (!updatedUserData.trackingHistory) {
          updatedUserData.trackingHistory = []
        }

        updatedUserData.trackingHistory.push({
          date: new Date().toISOString(),
          type: "period_start",
        })

        updatedUserData.lastPeriodStart = new Date().toISOString()
      } else if (intent === "reset_data") {
        // Reset user data
        return {
          intent: "reset_data",
          response: "I've reset all your tracking data. Let's start fresh. When was the first day of your last period?",
          updatedUserData: {
            trackingHistory: [],
            onboardingComplete: false,
          },
        }
      }
    } catch (error) {
      // If JSON parsing fails, use the AI response directly
      console.error("Error parsing AI response:", error)
      response = "I'm having trouble understanding right now. Could you try rephrasing your message?"
      intent = "error"
    }
  } catch (error) {
    console.error("Error generating AI response:", error)
    response = "I'm having trouble connecting right now. Please try again in a moment."
    intent = "error"
  }

  return {
    intent,
    response,
    updatedUserData,
  }
}

function handleOnboarding(message: string, userData: UserData): ProcessedMessage {
  const updatedUserData = { ...userData }
  let response = ""
  const intent = "onboarding"

  // Simple onboarding flow
  if (!userData.name) {
    updatedUserData.name = message
    response = `Nice to meet you, ${message}! I'm Makoko, your fertility health assistant. I can help you track your menstrual cycle, predict ovulation, and provide information about fertility health. When was the first day of your last period? Please respond with a date (e.g., May 15, 2023).`
  } else if (!userData.lastPeriodStart) {
    try {
      // Attempt to parse the date
      const date = new Date(message)
      if (isNaN(date.getTime())) {
        // Invalid date format
        response =
          "I couldn't understand that date format. Please enter the date of your last period (e.g., May 15, 2023)."
      } else {
        updatedUserData.lastPeriodStart = date.toISOString()
        response =
          "Great! How long is your typical menstrual cycle in days? (The average is 28 days, counting from the first day of one period to the first day of the next)"
      }
    } catch (error) {
      response =
        "I couldn't understand that date format. Please enter the date of your last period (e.g., May 15, 2023)."
    }
  } else if (!userData.cycleLength) {
    const cycleLength = Number.parseInt(message)
    if (isNaN(cycleLength) || cycleLength < 21 || cycleLength > 45) {
      response = "Please enter a valid cycle length between 21 and 45 days."
    } else {
      updatedUserData.cycleLength = cycleLength
      response = "How many days does your period typically last?"
    }
  } else if (!userData.periodLength) {
    const periodLength = Number.parseInt(message)
    if (isNaN(periodLength) || periodLength < 1 || periodLength > 10) {
      response = "Please enter a valid period length between 1 and 10 days."
    } else {
      updatedUserData.periodLength = periodLength
      updatedUserData.onboardingComplete = true

      // Calculate next period and fertile window
      const lastPeriod = new Date(updatedUserData.lastPeriodStart!)
      const cycleLength = updatedUserData.cycleLength!

      const nextPeriod = new Date(lastPeriod)
      nextPeriod.setDate(nextPeriod.getDate() + cycleLength)

      const ovulationDay = new Date(lastPeriod)
      ovulationDay.setDate(ovulationDay.getDate() + cycleLength - 14)

      const fertileStart = new Date(ovulationDay)
      fertileStart.setDate(fertileStart.getDate() - 5)

      const fertileEnd = new Date(ovulationDay)
      fertileEnd.setDate(fertileEnd.getDate() + 1)

      response =
        `Thank you, ${updatedUserData.name}! Your profile is complete. Based on your information:\n\n` +
        `• Your next period is expected around ${formatDate(nextPeriod)}\n` +
        `• Your fertile window is approximately from ${formatDate(fertileStart)} to ${formatDate(fertileEnd)}\n` +
        `• Your estimated ovulation day is around ${formatDate(ovulationDay)}\n\n` +
        `You can ask me questions about fertility, track symptoms, or update your period start date anytime. What would you like to know?`
    }
  }

  return {
    intent,
    response,
    updatedUserData,
  }
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
}
