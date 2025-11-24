"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "@/hooks/use-theme"

export default function Home() {
  const router = useRouter()
  const { mounted } = useTheme()

  useEffect(() => {
    if (mounted) {
      router.push("/landing")
    }
  }, [mounted, router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 bg-primary rounded-lg animate-pulse mx-auto" />
        <p className="text-muted-foreground">Memuat Sapi Care...</p>
      </div>
    </div>
  )
}
