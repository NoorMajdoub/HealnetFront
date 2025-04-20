"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function WelcomeScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  const greetings = {
    en: "Welcome to HealNet",
    ar: "مرحبًا بك في HealNet",
    fr: "Bienvenue sur HealNet",
    es: "Bienvenido a HealNet",
    uk: "Ласкаво просимо до HealNet",
  }

  const descriptions = {
    en: "We'll help you get the care you need, step by step.",
    ar: "سنساعدك في الحصول على الرعاية التي تحتاجها، خطوة بخطوة.",
    fr: "Nous vous aiderons à obtenir les soins dont vous avez besoin, étape par étape.",
    es: "Te ayudaremos a obtener la atención que necesitas, paso a paso.",
    uk: "Ми допоможемо вам отримати необхідну допомогу, крок за кроком.",
  }

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
    { code: "uk", name: "Українська" },
  ]

  return (
    <div className="flex flex-col items-center">
      <Card className="w-full shadow-md">
        <CardContent className="pt-6">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={selectedLanguage === lang.code ? "default" : "outline"}
                  className={`rounded-full ${selectedLanguage === lang.code ? "bg-sky-600" : ""}`}
                  onClick={() => setSelectedLanguage(lang.code)}
                >
                  {lang.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-sky-800 mb-4">
              {greetings[selectedLanguage as keyof typeof greetings]}
            </h1>
            <p className="text-lg text-gray-600">{descriptions[selectedLanguage as keyof typeof descriptions]}</p>
          </div>

          <div className="flex justify-center mb-8">
            <img
              src="/images/logo.jpg"
              alt="Welcome illustration"
              className="h-40 w-40 rounded-full"
            />
          </div>

          <div className="flex justify-center">
            <Button asChild className="rounded-full bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
              <Link href="/patient-entry/consent">
                Begin <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-gray-500">
        <p>Tap the blue chat bubble if you need help at any time</p>
      </div>
    </div>
  )
}
