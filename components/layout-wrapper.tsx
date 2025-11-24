"use client"

import type React from "react"

import { Sidebar } from "./sidebar"
import { Navbar } from "./navbar"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto bg-background p-6">{children}</main>
      </div>
    </div>
  )
}
