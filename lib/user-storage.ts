// Client-side user storage for demo purposes
// In a real app, you would use a proper database

export interface User {
  email: string
  password: string
  createdAt: string
}

export const userStorage = {
  // Get all users from localStorage
  getAllUsers(): Map<string, User> {
    if (typeof window === "undefined") return new Map()

    try {
      const stored = localStorage.getItem("fertiterra_users")
      if (stored) {
        const usersArray = JSON.parse(stored)
        return new Map(usersArray)
      }
    } catch (error) {
      console.error("Error loading users:", error)
    }

    // Return default users if nothing stored
    return new Map([
      [
        "demo@fertiterra.com",
        {
          email: "demo@fertiterra.com",
          password: "demo123",
          createdAt: new Date().toISOString(),
        },
      ],
      [
        "test@example.com",
        {
          email: "test@example.com",
          password: "test123",
          createdAt: new Date().toISOString(),
        },
      ],
    ])
  },

  // Save all users to localStorage
  saveAllUsers(users: Map<string, User>): void {
    if (typeof window === "undefined") return

    try {
      const usersArray = Array.from(users.entries())
      localStorage.setItem("fertiterra_users", JSON.stringify(usersArray))
      console.log("Users saved to localStorage:", usersArray.length)
    } catch (error) {
      console.error("Error saving users:", error)
    }
  },

  // Add a new user
  addUser(email: string, password: string): boolean {
    const users = this.getAllUsers()

    if (users.has(email)) {
      console.log("User already exists:", email)
      return false
    }

    const newUser: User = {
      email,
      password,
      createdAt: new Date().toISOString(),
    }

    users.set(email, newUser)
    this.saveAllUsers(users)

    console.log("User added successfully:", email)
    console.log("Total users:", users.size)
    return true
  },

  // Get a specific user
  getUser(email: string): User | undefined {
    const users = this.getAllUsers()
    return users.get(email)
  },

  // Check if user exists
  hasUser(email: string): boolean {
    const users = this.getAllUsers()
    return users.has(email)
  },

  // List all user emails
  listUsers(): string[] {
    const users = this.getAllUsers()
    return Array.from(users.keys())
  },

  // Get user count
  getUserCount(): number {
    const users = this.getAllUsers()
    return users.size
  },
}
