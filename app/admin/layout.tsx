import type React from "react"
import { Nunito } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { AIAssistant } from "@/components/admin/ai-assistant"
import "../globals.css"

const nunito = Nunito({ subsets: ["latin"] })

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
              <AdminHeader />
              <main className="flex-1 p-6">{children}</main>
            </div>
            <AIAssistant />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
