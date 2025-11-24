"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Stethoscope, Pill, History, Users, BookOpen, Info, ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
}

function SidebarItem({ href, icon, label, isActive }: SidebarItemProps) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
          isActive
            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
            : "text-sidebar-foreground hover:bg-sidebar-accent/50",
        )}
      >
        <div className="w-5 h-5">{icon}</div>
        <span className="text-sm">{label}</span>
      </div>
    </Link>
  )
}

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { href: "/dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { href: "/diagnosis", icon: <Stethoscope size={20} />, label: "Diagnosis" },
    { href: "/diseases", icon: <Pill size={20} />, label: "Penyakit" },
    { href: "/symptoms", icon: <BookOpen size={20} />, label: "Gejala" },
    { href: "/rules", icon: <BookOpen size={20} />, label: "Aturan" },
    { href: "/history", icon: <History size={20} />, label: "Riwayat" },
    { href: "/experts", icon: <Users size={20} />, label: "Pakar" },
    { href: "/users", icon: <Users size={20} />, label: "Users" },
    { href: "/about", icon: <Info size={20} />, label: "Tentang Kami" },
  ]

  return (
    <aside
      className={cn(
        "bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300",
        isOpen ? "w-64" : "w-20",
      )}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          {isOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <Pill size={20} className="text-sidebar-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Sapi Care</span>
            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-sidebar-accent rounded-lg transition-colors"
          >
            <ChevronDown size={18} className={cn("transition-transform", !isOpen && "rotate-90")} />
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </nav>
      </div>
    </aside>
  )
}
