import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface User {
  id: string
  name: string
  phone: string
  avatar?: string
  lastActive: string
  cycleStatus: "tracking" | "fertile" | "period" | "pregnant"
}

const users: User[] = [
  {
    id: "1",
    name: "Amara Okafor",
    phone: "+2347012345678",
    avatar: "/placeholder.svg?height=32&width=32",
    lastActive: "2 min ago",
    cycleStatus: "fertile",
  },
  {
    id: "2",
    name: "Chioma Eze",
    phone: "+2348023456789",
    avatar: "/placeholder.svg?height=32&width=32",
    lastActive: "15 min ago",
    cycleStatus: "tracking",
  },
  {
    id: "3",
    name: "Ngozi Adeyemi",
    phone: "+2349034567890",
    avatar: "/placeholder.svg?height=32&width=32",
    lastActive: "1 hour ago",
    cycleStatus: "period",
  },
  {
    id: "4",
    name: "Folake Abiodun",
    phone: "+2347045678901",
    avatar: "/placeholder.svg?height=32&width=32",
    lastActive: "3 hours ago",
    cycleStatus: "pregnant",
  },
]

export function RecentUsers() {
  const getCycleStatusColor = (status: User["cycleStatus"]) => {
    switch (status) {
      case "fertile":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "period":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "pregnant":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100"
      default:
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
    }
  }

  const getCycleStatusLabel = (status: User["cycleStatus"]) => {
    switch (status) {
      case "fertile":
        return "Fertile Window"
      case "period":
        return "Menstrual Period"
      case "pregnant":
        return "Pregnant"
      default:
        return "Tracking"
    }
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col">
              <p className="font-medium truncate">{user.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-muted-foreground truncate">{user.phone}</p>
                <span className="text-xs text-muted-foreground">•</span>
                <p className="text-xs text-muted-foreground">{user.lastActive}</p>
              </div>
            </div>
          </div>
          <Badge variant="secondary" className={getCycleStatusColor(user.cycleStatus)}>
            {getCycleStatusLabel(user.cycleStatus)}
          </Badge>
        </div>
      ))}
    </div>
  )
}
