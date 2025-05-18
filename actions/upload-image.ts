"use server"

import { put } from "@vercel/blob"
import { revalidatePath } from "next/cache"

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File

  if (!file) {
    return { error: "No file provided" }
  }

  try {
    // Create a unique filename with original extension
    const originalName = file.name
    const extension = originalName.split(".").pop()
    const uniqueFilename = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${extension}`

    // Upload to Vercel Blob
    const blob = await put(uniqueFilename, file, {
      access: "public",
      contentType: file.type,
      addRandomSuffix: false,
    })

    // Return the URL and other metadata
    revalidatePath("/gallery")
    return {
      success: true,
      url: blob.url,
      filename: blob.pathname,
      size: blob.size,
      contentType: blob.contentType,
      uploadedAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Error uploading to Vercel Blob:", error)
    return { error: "Failed to upload image" }
  }
}
