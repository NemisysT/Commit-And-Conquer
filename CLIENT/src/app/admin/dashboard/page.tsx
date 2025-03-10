"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { ThemeToggleButton } from "@/components/theme-toggle-button" // Ensure the path is correct or update it accordingly

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openSidebar = () => setSidebarOpen(true)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin isOpen={sidebarOpen} onClose={closeSidebar} />
      <div className="flex-1 flex flex-col">
        <Header isAdmin onOpenSidebar={openSidebar} />
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
      <ThemeToggleButton />
    </div>
  )
}

