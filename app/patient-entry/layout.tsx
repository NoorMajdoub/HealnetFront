import type React from "react"
import { Nunito } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { PatientEntryHeader } from "@/components/patient-entry/patient-entry-header"
import { PatientEntryFooter } from "@/components/patient-entry/patient-entry-footer"
import { AIHelpBubble } from "@/components/patient-entry/ai-help-bubble"
import "../globals.css"

const nunito = Nunito({ subsets: ["latin"] })

export default function PatientEntryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-sky-50">
            <PatientEntryHeader />
            <main className="flex-1 container max-w-3xl mx-auto px-4 py-6 md:py-10">{children}</main>
            <PatientEntryFooter />
            <AIHelpBubble />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
