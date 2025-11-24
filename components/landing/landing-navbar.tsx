"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const menuItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Penyakit", href: "#diseases" },
    { label: "Cara Kerja", href: "#how-it-works" },
    { label: "Kontak", href: "#contact" },
  ]

  return (
    <nav className="bg-card text-card-foreground border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/landing" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all">
                <span className="text-primary-foreground font-bold text-lg">SC</span>
              </div>
              <span className="font-bold text-xl hidden sm:inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sapi Care
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Buttons */}
          <div className="flex items-center gap-3">
            {isMounted && (
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={20} className="text-accent" />
                ) : (
                  <Moon size={20} className="text-accent" />
                )}
              </button>
            )}

            <Link
              href="/diagnosis"
              className="hidden sm:inline px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all hover:scale-105 font-medium"
            >
              Diagnosa Sekarang
            </Link>

            <Link
              href="/dashboard"
              className="hidden sm:inline text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Login Admin
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border pb-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/diagnosis"
                className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all font-medium mt-4"
              >
                Mulai Diagnosa
              </Link>
              <Link
                href="/dashboard"
                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Login Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
