import type React from "react"
import { cn } from "@/lib/utils"

interface CardStatProps {
  title: string
  value: number | string
  icon: React.ReactNode
  color?: "green" | "blue" | "orange" | "red"
}

const colorClasses = {
  green: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-400",
  blue: "bg-blue-100 text-blue-900 dark:bg-blue-900/20 dark:text-blue-400",
  orange: "bg-orange-100 text-orange-900 dark:bg-orange-900/20 dark:text-orange-400",
  red: "bg-red-100 text-red-900 dark:bg-red-900/20 dark:text-red-400",
}

export function CardStat({ title, value, icon, color = "green" }: CardStatProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className={cn("p-3 rounded-lg", colorClasses[color])}>{icon}</div>
      </div>
    </div>
  )
}
