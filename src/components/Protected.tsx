"use client"

import { useAuth } from "@/context/UseAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Protected({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/")
    }
  }, [user, loading])

  if (loading) return <p>Loading...</p>
  if (!user) return null

  return <>{children}</>
}