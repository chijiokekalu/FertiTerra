"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Upload, X, ImageIcon } from "lucide-react"
import { uploadImage } from "@/actions/upload-image"
import Image from "next/image"

export function ImageUploader({ onUploadComplete }: { onUploadComplete?: () => void }) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Reset states
      setError(null)
      setSuccess(false)
      setFile(selectedFile)

      // Create preview
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const droppedFile = e.dataTransfer.files?.[0]
    if (droppedFile) {
      // Reset states
      setError(null)
      setSuccess(false)
      setFile(droppedFile)

      // Create preview
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(droppedFile)
    }
  }

  const clearFile = () => {
    setFile(null)
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError("Please select a file to upload")
      return
    }

    try {
      setUploading(true)
      setUploadProgress(0)

      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          const newProgress = prev + Math.random() * 10
          return newProgress > 90 ? 90 : newProgress
        })
      }, 300)

      // Create FormData and upload
      const formData = new FormData()
      formData.append("file", file)
      const result = await uploadImage(formData)

      clearInterval(progressInterval)

      if (result.error) {
        setError(result.error)
        setUploadProgress(0)
      } else {
        setUploadProgress(100)
        setSuccess(true)
        setTimeout(() => {
          clearFile()
          setUploadProgress(0)
          setSuccess(false)
          if (onUploadComplete) onUploadComplete()
        }, 2000)
      }
    } catch (err) {
      setError("An unexpected error occurred")
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Upload Image</CardTitle>
        <CardDescription>Upload images for test results, educational content, or profile pictures</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                ${preview ? "border-muted" : "border-muted-foreground/25 hover:border-muted-foreground/50"}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              {preview ? (
                <div className="relative w-full aspect-video">
                  <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-contain rounded-md" />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      clearFile()
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-4">
                  <ImageIcon className="h-12 w-12 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Drag and drop an image, or click to browse</p>
                  <p className="text-xs text-muted-foreground">Supports: JPG, PNG, GIF, WebP (max 5MB)</p>
                </div>
              )}
              <Input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>

            {file && (
              <div className="text-sm text-muted-foreground">
                <p>Selected file: {file.name}</p>
                <p>Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            )}

            {uploading && (
              <div className="space-y-2">
                <Progress value={uploadProgress} className="h-2" />
                <p className="text-xs text-muted-foreground text-center">
                  {uploadProgress < 100 ? "Uploading..." : "Upload complete!"}
                </p>
              </div>
            )}

            {error && <p className="text-sm text-destructive">{error}</p>}

            {success && <p className="text-sm text-green-600">Image uploaded successfully!</p>}
          </div>

          <div className="mt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600"
              disabled={!file || uploading}
            >
              <Upload className="mr-2 h-4 w-4" />
              {uploading ? "Uploading..." : "Upload Image"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
