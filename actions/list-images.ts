"use server"

import { list } from "@vercel/blob"

export async function listImages() {
  try {
    const { blobs } = await list()

    return {
      success: true,
      images: blobs.map((blob) => ({
        url: blob.url,
        pathname: blob.pathname,
        size: blob.size,
        uploadedAt: blob.uploadedAt,
      })),
    }
  } catch (error) {
    console.error("Error listing images from Vercel Blob:", error)
    return { error: "Failed to list images" }
  }
}
