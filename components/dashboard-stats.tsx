import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react"
import type { ReactNode } from "react"

interface DashboardStatsProps {
  title: string
  value: string
  description: string
  icon?: ReactNode
  trend?: "up" | "down" | "stable"
  trendValue?: string
}

export function DashboardStats({ title, value, description, icon, trend, trendValue }: DashboardStatsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center pt-1">
          <CardDescription className="flex-1">{description}</CardDescription>
          {trend && (
            <div
              className={`flex items-center text-xs font-medium ${
                trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-muted-foreground"
              }`}
            >
              {trend === "up" ? (
                <ArrowUp className="mr-1 h-3 w-3" />
              ) : trend === "down" ? (
                <ArrowDown className="mr-1 h-3 w-3" />
              ) : (
                <ArrowRight className="mr-1 h-3 w-3" />
              )}
              {trendValue}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
