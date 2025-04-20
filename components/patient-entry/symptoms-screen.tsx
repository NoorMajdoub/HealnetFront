"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, Mic, MicOff } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function SymptomsScreen() {
  const [isRecording, setIsRecording] = useState(false)
  const [painLevel, setPainLevel] = useState(0)
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  const symptoms = [
    { id: "fever", label: "Fever", icon: "🌡️" },
    { id: "pain", label: "Pain", icon: "😣" },
    { id: "injury", label: "Injury", icon: "🩹" },
    { id: "breathing", label: "Breathing Problems", icon: "🫁" },
    { id: "headache", label: "Headache", icon: "🤕" },
    { id: "stomach", label: "Stomach Issues", icon: "🤢" },
    { id: "bleeding", label: "Bleeding", icon: "🩸" },
    { id: "rash", label: "Rash", icon: "🔴" },
    { id: "dizziness", label: "Dizziness", icon: "😵" },
  ]

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== id))
    } else {
      setSelectedSymptoms([...selectedSymptoms, id])
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" asChild className="flex items-center">
          <Link href="/patient-entry/consent">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back
          </Link>
        </Button>
        <Button
          variant={isRecording ? "destructive" : "outline"}
          size="sm"
          className="rounded-full"
          onClick={toggleRecording}
        >
          {isRecording ? <MicOff className="mr-2 h-4 w-4" /> : <Mic className="mr-2 h-4 w-4" />}
          {isRecording ? "Stop Voice" : "Use Voice"}
        </Button>
      </div>

      <Card className="w-full shadow-md">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-sky-800 mb-4">What's bothering you today?</h1>
            <p className="text-gray-600">Select all symptoms that apply or describe them using your voice</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {symptoms.map((symptom) => (
              <Button
                key={symptom.id}
                variant={selectedSymptoms.includes(symptom.id) ? "default" : "outline"}
                className={`h-24 flex flex-col items-center justify-center ${
                  selectedSymptoms.includes(symptom.id) ? "bg-sky-600" : ""
                }`}
                onClick={() => toggleSymptom(symptom.id)}
              >
                <span className="text-2xl mb-2">{symptom.icon}</span>
                <span className="text-sm text-center">{symptom.label}</span>
              </Button>
            ))}
          </div>

          {selectedSymptoms.includes("pain") && (
            <div className="mb-8">
              <h2 className="font-medium mb-4">How severe is your pain?</h2>
              <div className="flex items-center space-x-4">
                <span>😊</span>
                <Slider
                  value={[painLevel]}
                  min={0}
                  max={10}
                  step={1}
                  onValueChange={(value) => setPainLevel(value[0])}
                  className="flex-1"
                />
                <span>😣</span>
              </div>
              <div className="text-center mt-2">
                <span className="font-medium">{painLevel}/10</span>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <Button
              asChild
              className="rounded-full bg-green-600 hover:bg-green-700 px-8 py-6 text-lg"
              disabled={selectedSymptoms.length === 0}
            >
              <Link href="/patient-entry/camera-scan">
                Continue <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-gray-500">
        <p>Step 2 of 6: Symptom Checker</p>
      </div>
    </div>
  )
}
