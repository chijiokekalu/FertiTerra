import { Skeleton } from "@/components/ui/skeleton"

export default function ProductLoading() {
  return (
    <div className="container py-8 md:py-12">
      <Skeleton className="h-5 w-64 mb-8" />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Skeleton className="h-[500px] w-full rounded-lg" />
        </div>

        <div className="space-y-8">
          <div>
            <Skeleton className="h-6 w-24 mb-3" />
            <Skeleton className="h-10 w-3/4 mb-2" />
            <Skeleton className="h-8 w-20" />
          </div>

          <Skeleton className="h-24 w-full" />

          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-5 w-full" />
                </div>
              ))}
            </div>
          </div>

          <Skeleton className="h-12 w-full" />

          <Skeleton className="h-16 w-full" />
        </div>
      </div>

      <div className="mt-12">
        <Skeleton className="h-12 w-full mb-8" />
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  )
}
