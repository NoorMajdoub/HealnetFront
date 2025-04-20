"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, Mic, Info, Play, Square, Volume2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function AudioScanScreen() {
  const [isRecording, setIsRecording] = useState(false)
  const [currentTest, setCurrentTest] = useState<number>(0)
  const [progress, setProgress] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [detectedIssues, setDetectedIssues] = useState<string[]>([])
  const [audioSamples, setAudioSamples] = useState<string[]>([])

  const tests = [
    {
      name: "Speak a sentence",
      instruction: "Please say: 'The sky is blue today'",
      duration: 5,
    },
    {
      name: "Deep breath",
      instruction: "Take a deep breath in, then slowly exhale",
      duration: 5,
    },
    {
      name: "Cough",
      instruction: "Please cough once if you are able to",
      duration: 3,
    },
  ]

  const startRecording = () => {
    setIsRecording(true)
    setProgress(0)
    setAudioSamples([])

    // Simulate recording progress
    let currentProgress = 0
    const totalDuration = tests.reduce((acc, test) => acc + test.duration, 0)
    let currentTestIndex = 0
    let elapsedTime = 0

    const interval = setInterval(() => {
      currentProgress += 1
      elapsedTime += 0.1

      // Check if we need to move to the next test
      let timeSum = 0
      for (let i = 0; i < tests.length; i++) {
        timeSum += tests[i].duration
        if (elapsedTime <= timeSum) {
          if (currentTestIndex !== i) {
            currentTestIndex = i
            setCurrentTest(i)
            // Simulate recording a sample
            setAudioSamples((prev) => [...prev, tests[i].name])
          }
          break
        }
      }

      setProgress((currentProgress / (totalDuration * 10)) * 100)

      if (currentProgress >= totalDuration * 10) {
        clearInterval(interval)
        completeRecording()
      }
    }, 100)
  }

  const stopRecording = () => {
    setIsRecording(false)
    setProgress(0)
  }

  const completeRecording = () => {
    setIsRecording(false)
    setAnalysisComplete(true)
    // Simulate detected issues
    setDetectedIssues(["Slight wheeze detected in breathing", "Possible respiratory congestion"])
  }

  const resetTest = () => {
    setIsRecording(false)
    setProgress(0)
    setAnalysisComplete(false)
    setDetectedIssues([])
    setAudioSamples([])
    setCurrentTest(0)
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" asChild className="flex items-center">
          <Link href="/patient-entry/video-scan">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back
          </Link>
        </Button>
      </div>

      <Card className="w-full shadow-md">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-sky-800 mb-4">🎤 Breathing & Speech Check</h1>
            <p className="text-gray-600">Our AI can analyze your voice and breathing to detect potential issues</p>
            <p className="text-sm text-gray-500 mt-2">This will take about 15 seconds</p>
          </div>

          <div className="mb-8">
            {isRecording ? (
              <div className="bg-sky-100 rounded-lg p-6 mb-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-sky-600 flex items-center justify-center animate-pulse">
                    <Mic className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-sky-800 mb-2">{tests[currentTest].name}</h3>
                  <p className="text-gray-700">{tests[currentTest].instruction}</p>
                </div>

                <Progress value={progress} className="h-2 mb-4" />

                <div className="flex justify-center">
                  <Button variant="destructive" onClick={stopRecording}>
                    <Square className="mr-2 h-4 w-4" />
                    Stop Recording
                  </Button>
                </div>
              </div>
            ) : analysisComplete ? (
              <div className="bg-sky-100 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-bold text-sky-800 mb-4">Analysis Results</h3>

                <div className="mb-4">
                  <p className="font-medium mb-2">Recorded samples:</p>
                  <div className="space-y-2">
                    {audioSamples.map((sample, index) => (
                      <div key={index} className="flex items-center bg-white p-2 rounded">
                        <Volume2 className="h-4 w-4 text-sky-600 mr-2" />
                        <span className="text-sm">{sample}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {detectedIssues.length > 0 ? (
                  <>
                    <p className="font-medium mb-2">Detected issues:</p>
                    <ul className="list-disc pl-5 mb-4">
                      {detectedIssues.map((issue, index) => (
                        <li key={index} className="mb-1">
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="mb-4">No breathing or speech issues detected</p>
                )}

                <Button variant="outline" className="text-sky-600 border-sky-600" onClick={resetTest}>
                  Retake Test
                </Button>
              </div>
            ) : (
              <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center mb-4">
                <Mic className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 mb-6">No audio recorded</p>
                <Button onClick={startRecording} className="bg-sky-600 hover:bg-sky-700">
                  <Play className="mr-2 h-4 w-4" />
                  Start Audio Test
                </Button>
              </div>
            )}
          </div>

          <div className="bg-sky-50 p-4 rounded-lg mb-6 flex items-start">
            <Info className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="font-medium mb-1">What this scan can detect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Breathing difficulties</li>
                <li>Respiratory distress</li>
                <li>Slurred speech (possible stroke sign)</li>
                <li>Voice patterns indicating illness</li>
                <li>Cough characteristics</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Button asChild className="rounded-full bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
              <Link href="/patient-entry/severity">
                {analysisComplete ? "Continue" : "Skip This Step"} <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-gray-500">
        <p>Step 5 of 8: Breathing & Speech Check (Optional)</p>
      </div>
    </div>
  )
}
