import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export function PatientEntryHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-sky-600">HealNet</span>
        </Link>
        <Button variant="outline" size="sm" className="rounded-full">
          <HelpCircle className="h-4 w-4 mr-2" />
          Get Human Help
        </Button>
      </div>
    </header>
  )
}
