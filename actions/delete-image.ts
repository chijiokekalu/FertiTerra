"use server"

import { del } from "@vercel/blob"
import { revalidatePath } from "next/cache"

export async function deleteImage(pathname: string) {
  try {
    await del(pathname)
    revalidatePath("/gallery")
    return { success: true }
  } catch (error) {
    console.error("Error deleting image from Vercel Blob:", error)
    return { error: "Failed to delete image" }
  }
}
