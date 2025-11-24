"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, User, LogOut } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <nav className="bg-card text-card-foreground border-b border-border h-16 px-6 flex items-center justify-between sticky top-0 z-40 shadow-sm">
      <div className="flex-1" />

      <div className="flex items-center gap-2 sm:gap-4">
        {isMounted && (
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-accent" />}
          </button>
        )}

        <button className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="User menu" title="User profile">
          <User size={20} className="text-primary" />
        </button>

        <button className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Logout" title="Logout">
          <LogOut size={20} className="text-destructive" />
        </button>
      </div>
    </nav>
  )
}
