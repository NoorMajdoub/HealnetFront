"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, Video, X, Info, Play, Pause } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function VideoScanScreen() {
  const [videoActive, setVideoActive] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [currentTest, setCurrentTest] = useState<number>(0)
  const [progress, setProgress] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [detectedIssues, setDetectedIssues] = useState<string[]>([])

  const tests = [
    { name: "Raise both arms", duration: 5, instruction: "Please raise both arms straight out in front of you" },
    { name: "Smile", duration: 5, instruction: "Please smile as wide as you can" },
    { name: "Walk in place", duration: 10, instruction: "If possible, walk in place for a few steps" },
  ]

  const toggleVideo = () => {
    setVideoActive(!videoActive)
    setIsRecording(false)
    setCurrentTest(0)
    setProgress(0)
    setAnalysisComplete(false)
  }

  const startRecording = () => {
    setIsRecording(true)
    runTests()
  }

  const stopRecording = () => {
    setIsRecording(false)
    setVideoActive(false)
    setAnalysisComplete(true)
    // Simulate detected issues
    setDetectedIssues(["Slight asymmetry in arm movement"])
  }

  const runTests = () => {
    let totalTime = 0
    const totalDuration = tests.reduce((acc, test) => acc + test.duration, 0)

    const interval = setInterval(() => {
      totalTime += 0.1
      const newProgress = (totalTime / totalDuration) * 100
      setProgress(Math.min(newProgress, 100))

      // Update current test
      let timeSum = 0
      for (let i = 0; i < tests.length; i++) {
        timeSum += tests[i].duration
        if (totalTime <= timeSum) {
          setCurrentTest(i)
          break
        }
      }

      if (totalTime >= totalDuration) {
        clearInterval(interval)
        stopRecording()
      }
    }, 100)
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" asChild className="flex items-center">
          <Link href="/patient-entry/camera-scan">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back
          </Link>
        </Button>
        {!analysisComplete && (
          <Button variant="outline" size="sm" className="rounded-full" onClick={toggleVideo}>
            {videoActive ? <X className="mr-2 h-4 w-4" /> : <Video className="mr-2 h-4 w-4" />}
            {videoActive ? "Cancel" : "Start Video"}
          </Button>
        )}
      </div>

      <Card className="w-full shadow-md">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-sky-800 mb-4">🎥 Movement Check</h1>
            <p className="text-gray-600">Our AI can detect movement issues that might indicate health problems</p>
            <p className="text-sm text-gray-500 mt-2">This will take about 20 seconds</p>
          </div>

          <div className="mb-8">
            {videoActive ? (
              <div className="aspect-video bg-gray-900 rounded-lg flex flex-col items-center justify-center mb-4 relative">
                <div className="text-white text-center p-4">
                  <Video className="h-12 w-12 mx-auto mb-2" />
                  {!isRecording ? (
                    <>
                      <p>Video preview would appear here</p>
                      <p className="text-sm mt-2">Position yourself clearly in the frame</p>
                      <Button className="mt-4 bg-white text-black hover:bg-gray-200" onClick={startRecording}>
                        <Play className="mr-2 h-4 w-4" />
                        Start Test
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">{tests[currentTest].name}</h3>
                        <p>{tests[currentTest].instruction}</p>
                      </div>
                      <Progress value={progress} className="w-64 h-2 mb-2" />
                      <Button variant="destructive" className="mt-4" onClick={stopRecording}>
                        <Pause className="mr-2 h-4 w-4" />
                        Stop Test
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ) : analysisComplete ? (
              <div className="bg-sky-100 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-bold text-sky-800 mb-4">Analysis Results</h3>
                {detectedIssues.length > 0 ? (
                  <>
                    <p className="mb-2">Detected issues:</p>
                    <ul className="list-disc pl-5 mb-4">
                      {detectedIssues.map((issue, index) => (
                        <li key={index} className="mb-1">
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="mb-4">No movement issues detected</p>
                )}
                <Button
                  variant="outline"
                  className="text-sky-600 border-sky-600"
                  onClick={() => {
                    setAnalysisComplete(false)
                    setDetectedIssues([])
                  }}
                >
                  Retake Test
                </Button>
              </div>
            ) : (
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <Video className="h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-gray-500 mb-4">No video recorded</p>
                    <Button onClick={toggleVideo} className="bg-sky-600 hover:bg-sky-700">
                      <Video className="mr-2 h-4 w-4" />
                      Start Video Test
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-sky-50 p-4 rounded-lg mb-6 flex items-start">
            <Info className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="font-medium mb-1">What this scan can detect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Motor dysfunctions</li>
                <li>Balance issues</li>
                <li>Coordination problems</li>
                <li>Signs of stroke (facial asymmetry, arm drift)</li>
                <li>Signs of neurological issues</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Button asChild className="rounded-full bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
              <Link href="/patient-entry/audio-scan">
                {analysisComplete ? "Continue" : "Skip This Step"} <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-gray-500">
        <p>Step 4 of 8: Movement Check (Optional)</p>
      </div>
    </div>
  )
}
