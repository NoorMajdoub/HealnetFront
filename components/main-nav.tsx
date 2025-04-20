"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-sky-600">HealNet</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-sky-600">
            About
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-sky-600">
            How It Works
          </Link>
          <Link href="#for-doctors" className="text-sm font-medium transition-colors hover:text-sky-600">
            For Doctors
          </Link>
          <Link href="#impact" className="text-sm font-medium transition-colors hover:text-sky-600">
            Impact Stories
          </Link>
          <Link href="#get-involved" className="text-sm font-medium transition-colors hover:text-sky-600">
            Get Involved
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-sky-600">
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full border-sky-600 text-sky-600 hover:bg-sky-50" asChild>
              <Link href="/patient-entry">Begin My Session</Link>
            </Button>
            <Button className="rounded-full bg-green-600 hover:bg-green-700">Donate Now</Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b z-50">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="#about"
              className="text-sm font-medium p-2 hover:bg-sky-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium p-2 hover:bg-sky-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#for-doctors"
              className="text-sm font-medium p-2 hover:bg-sky-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              For Doctors
            </Link>
            <Link
              href="#impact"
              className="text-sm font-medium p-2 hover:bg-sky-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact Stories
            </Link>
            <Link
              href="#get-involved"
              className="text-sm font-medium p-2 hover:bg-sky-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium p-2 hover:bg-sky-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button
                variant="outline"
                className="rounded-full border-sky-600 text-sky-600 hover:bg-sky-50 w-full"
                asChild
              >
                <Link href="/patient-entry">Begin My Session</Link>
              </Button>
              <Button className="rounded-full bg-green-600 hover:bg-green-700 w-full">Donate Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
