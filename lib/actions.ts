"use server"

import fs from "fs"
import path from "path"

interface WhatsAppSettings {
  phoneNumberId: string
  businessAccountId: string
  accessToken: string
  verifyToken: string
}

export async function saveSettings(settings: WhatsAppSettings) {
  try {
    // In a production app, you would save these to a database
    // For this example, we'll update the .env.local file

    const envPath = path.join(process.cwd(), ".env.local")

    // Read existing env file or create a new one
    let envContent = ""
    try {
      envContent = fs.readFileSync(envPath, "utf8")
    } catch (error) {
      // File doesn't exist, create a new one
      envContent = ""
    }

    // Update or add environment variables
    const envVars = {
      WHATSAPP_PHONE_NUMBER_ID: settings.phoneNumberId,
      WHATSAPP_BUSINESS_ACCOUNT_ID: settings.businessAccountId,
      WHATSAPP_ACCESS_TOKEN: settings.accessToken,
      WHATSAPP_VERIFY_TOKEN: settings.verifyToken,
    }

    // Process each environment variable
    for (const [key, value] of Object.entries(envVars)) {
      // Check if the variable already exists in the file
      const regex = new RegExp(`^${key}=.*`, "m")
      if (regex.test(envContent)) {
        // Replace existing variable
        envContent = envContent.replace(regex, `${key}=${value}`)
      } else {
        // Add new variable
        envContent += `\n${key}=${value}`
      }
    }

    // Write the updated content back to the file
    fs.writeFileSync(envPath, envContent.trim())

    // In a real application, you might want to restart the server or
    // update process.env directly, but that's not recommended in production

    return { success: true }
  } catch (error) {
    console.error("Error saving settings:", error)
    throw new Error("Failed to save settings")
  }
}
