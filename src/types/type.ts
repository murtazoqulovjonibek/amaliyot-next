export interface Post {
  id?: string
  title: string
  desc: string
  image: string
  category: string
  date: string
  views: number
  likes: number
  featured: boolean
}

export interface User {
  id: string
  email: string | null
  role: "admin" | "user"
}