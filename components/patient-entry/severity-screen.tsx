"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, AlertTriangle, Clock, CheckCircle, Camera, Video, Mic } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function SeverityScreen() {
  const [progress, setProgress] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [severity, setSeverity] = useState<"high" | "medium" | "low" | null>(null)
  const [diagnosticData, setDiagnosticData] = useState({
    symptoms: true,
    visualScan: false,
    movementScan: false,
    audioScan: false,
  })

  // Simulate AI analysis progress
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(progress + 5)
      }, 150)
      return () => clearTimeout(timer)
    } else if (progress === 100 && !analysisComplete) {
      setTimeout(() => {
        setAnalysisComplete(true)
        // Randomly select a severity level for demo purposes
        const levels: Array<"high" | "medium" | "low"> = ["high", "medium", "low"]
        setSeverity(levels[Math.floor(Math.random() * levels.length)])
      }, 500)
    }
  }, [progress, analysisComplete])

  const getSeverityContent = () => {
    switch (severity) {
      case "high":
        return {
          icon: <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />,
          color: "text-red-500",
          bgColor: "bg-red-100",
          title: "High Severity",
          description: "You need immediate medical attention. We'll direct you to an on-site doctor right away.",
          action: "See Doctor Now",
        }
      case "medium":
        return {
          icon: <Clock className="h-16 w-16 text-amber-500 mb-4" />,
          color: "text-amber-500",
          bgColor: "bg-amber-100",
          title: "Medium Severity",
          description:
            "Your condition requires attention soon. We'll connect you with an online doctor for consultation.",
          action: "Start Online Consultation",
        }
      case "low":
        return {
          icon: <CheckCircle className="h-16 w-16 text-green-500 mb-4" />,
          color: "text-green-500",
          bgColor: "bg-green-100",
          title: "Low Severity",
          description: "Your condition can be treated with medication. We'll provide instructions for self-care.",
          action: "Get Medication Instructions",
        }
      default:
        return {
          icon: null,
          color: "",
          bgColor: "",
          title: "Analyzing",
          description: "We're analyzing your symptoms and diagnostic data...",
          action: "Please wait",
        }
    }
  }

  const severityContent = getSeverityContent()

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" asChild className="flex items-center">
          <Link href="/patient-entry/audio-scan">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back
          </Link>
        </Button>
      </div>

      <Card className="w-full shadow-md">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-sky-800 mb-4">Analyzing Your Health Data</h1>
            <p className="text-gray-600">Our AI is assessing all your information to provide appropriate care</p>
          </div>

          {!analysisComplete ? (
            <div className="mb-8">
              <div className="flex justify-between mb-2 text-sm">
                <span>Analyzing data</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 mb-6" />

              <div className="bg-sky-50 p-4 rounded-lg mb-4">
                <h3 className="font-medium mb-2">Data sources being analyzed:</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Symptom information</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="h-4 w-4 text-sky-600 mr-2" />
                    <span className="text-sm">Visual scan data</span>
                  </div>
                  <div className="flex items-center">
                    <Video className="h-4 w-4 text-sky-600 mr-2" />
                    <span className="text-sm">Movement scan data</span>
                  </div>
                  <div className="flex items-center">
                    <Mic className="h-4 w-4 text-sky-600 mr-2" />
                    <span className="text-sm">Audio scan data</span>
                  </div>
                </div>
              </div>

              <div className="text-center text-gray-500 animate-pulse">
                <p>Please wait while we analyze your information...</p>
              </div>
            </div>
          ) : (
            <div className={`${severityContent.bgColor} rounded-lg p-6 text-center mb-8`}>
              {severityContent.icon}
              <h2 className={`text-xl font-bold ${severityContent.color} mb-2`}>{severityContent.title}</h2>
              <p className="text-gray-700 mb-4">{severityContent.description}</p>

              {severity && (
                <div className="bg-white/50 p-4 rounded-lg text-left mt-4">
                  <h3 className="font-medium mb-2">Key findings:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {severity === "high" && (
                      <>
                        <li>Severe respiratory symptoms detected in audio scan</li>
                        <li>Possible signs of infection visible in camera scan</li>
                        <li>Reported high fever and difficulty breathing</li>
                      </>
                    )}
                    {severity === "medium" && (
                      <>
                        <li>Moderate pain levels reported</li>
                        <li>Slight movement asymmetry detected</li>
                        <li>Minor respiratory issues detected in audio scan</li>
                      </>
                    )}
                    {severity === "low" && (
                      <>
                        <li>Mild symptoms reported</li>
                        <li>No significant issues detected in diagnostic scans</li>
                        <li>Vital signs appear to be within normal ranges</li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-center">
            <Button
              asChild
              className="rounded-full bg-green-600 hover:bg-green-700 px-8 py-6 text-lg"
              disabled={!analysisComplete}
            >
              <Link href="/patient-entry/patient-folder">
                {severityContent.action} <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-gray-500">
        <p>Step 6 of 8: Severity Assessment</p>
      </div>
    </div>
  )
}
