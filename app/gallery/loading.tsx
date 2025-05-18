import { Loader2 } from "lucide-react"

export default function GalleryLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-rose-500" />
        <p className="text-lg font-medium">Loading Gallery...</p>
      </div>
    </div>
  )
}
