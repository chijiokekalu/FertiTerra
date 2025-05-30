import { Loader2 } from "lucide-react"

export default function SignupLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-rose-500" />
        <p className="text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}
