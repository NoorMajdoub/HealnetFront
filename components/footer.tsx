import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">HealNet</span>
            </Link>
            <p className="text-sky-100 mb-4">
              AI-powered medical platform for humanitarian aid in conflict zones and refugee camps.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sky-100 hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-sky-100 hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-sky-100 hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-sky-100 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sky-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-sky-100 hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#for-doctors" className="text-sky-100 hover:text-white">
                  For Doctors
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-sky-100 hover:text-white">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link href="#get-involved" className="text-sky-100 hover:text-white">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sky-100 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-100 hover:text-white">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-100 hover:text-white">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-100 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-100 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-sky-100 mb-4">Stay updated with our latest news and developments.</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Your email"
                className="bg-sky-800 border-sky-700 text-white placeholder:text-sky-300"
              />
              <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-800 mt-8 pt-8 text-center text-sky-300">
          <p>© {new Date().getFullYear()} HealNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
