"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight, ChevronLeft, Globe } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ConsentScreen() {
  const [consented, setConsented] = useState(false)
  const [language, setLanguage] = useState("en")

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" asChild className="flex items-center">
          <Link href="/patient-entry">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back
          </Link>
        </Button>
        <div className="flex items-center">
          <Globe className="mr-2 h-5 w-5 text-sky-600" />
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="uk">Українська</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="w-full shadow-md">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-sky-800 mb-4">Consent & Language Selection</h1>
            <p className="text-gray-600">Please read and agree to the following before continuing</p>
          </div>

          <div className="bg-white rounded-lg border p-4 mb-6">
            <h2 className="font-medium text-lg mb-2">HealNet Medical Assessment Consent</h2>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• I consent to receive medical assessment through HealNet</li>
              <li>• My information will be stored securely to provide ongoing care</li>
              <li>• I understand AI technology will be used to assist in my assessment</li>
              <li>• I can request human assistance at any time</li>
              <li>• I can access my medical information through my patient folder</li>
            </ul>
          </div>

          <div className="flex items-start space-x-3 mb-8">
            <Checkbox
              id="consent"
              checked={consented}
              onCheckedChange={(checked) => setConsented(checked as boolean)}
            />
            <label
              htmlFor="consent"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I understand and agree to the terms above
            </label>
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              className="rounded-full bg-green-600 hover:bg-green-700 px-8 py-6 text-lg"
              disabled={!consented}
            >
              <Link href="/patient-entry/symptoms">
                Continue <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-gray-500">
        <p>Step 1 of 6: Consent & Language</p>
      </div>
    </div>
  )
}
