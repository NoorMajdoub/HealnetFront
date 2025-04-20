"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, Camera, Upload, X, Info } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function CameraScanScreen() {
  const [cameraActive, setCameraActive] = useState(false)
  const [photoTaken, setPhotoTaken] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [detectedIssues, setDetectedIssues] = useState<string[]>([])

  const toggleCamera = () => {
    setCameraActive(!cameraActive)
    setPhotoTaken(false)
    setAnalysisComplete(false)
  }

  const takePhoto = () => {
    setPhotoTaken(true)
    setCameraActive(false)
    // Start analysis
    setIsAnalyzing(true)

    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsAnalyzing(false)
          setAnalysisComplete(true)
          // Simulate detected issues
          setDetectedIssues(["Possible skin rash", "Minor swelling detected"])
          return 100
        }
        return prev + 5
      })
    }, 150)
  }

  const deletePhoto = () => {
    setPhotoTaken(false)
    setIsAnalyzing(false)
    setProgress(0)
    setAnalysisComplete(false)
    setDetectedIssues([])
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" asChild className="flex items-center">
          <Link href="/patient-entry/symptoms">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back
          </Link>
        </Button>
        <Button variant="outline" size="sm" className="rounded-full" onClick={toggleCamera}>
          {cameraActive ? <X className="mr-2 h-4 w-4" /> : <Camera className="mr-2 h-4 w-4" />}
          {cameraActive ? "Cancel" : "Start Camera"}
        </Button>
      </div>

      <Card className="w-full shadow-md">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-sky-800 mb-4">📷 Visual Check</h1>
            <p className="text-gray-600">Our AI can detect visible injuries, infections, and signs of illness</p>
            <p className="text-sm text-gray-500 mt-2">This will take about 30 seconds</p>
          </div>

          <div className="mb-8">
            {cameraActive ? (
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4 relative">
                <div className="text-white text-center">
                  <Camera className="h-12 w-12 mx-auto mb-2" />
                  <p>Camera preview would appear here</p>
                  <p className="text-sm mt-2">Position yourself clearly in the frame</p>
                </div>
                <Button
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-full bg-white text-black hover:bg-gray-200"
                  onClick={takePhoto}
                >
                  Take Photo
                </Button>
              </div>
            ) : photoTaken ? (
              <div className="aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center mb-4 relative">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Captured photo"
                  className="w-full h-full object-cover rounded-lg"
                />
                {!isAnalyzing && !analysisComplete && (
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2 rounded-full"
                    onClick={deletePhoto}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}

                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 rounded-lg">
                    <p className="mb-2">Analyzing image...</p>
                    <Progress value={progress} className="w-64 h-2 mb-2" />
                    <p className="text-sm">{progress}%</p>
                  </div>
                )}

                {analysisComplete && (
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Analysis Complete</h3>
                    {detectedIssues.length > 0 ? (
                      <>
                        <p className="mb-2">Detected issues:</p>
                        <ul className="list-disc pl-5 mb-4">
                          {detectedIssues.map((issue, index) => (
                            <li key={index}>{issue}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="mb-4">No visible issues detected</p>
                    )}
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/20"
                      onClick={deletePhoto}
                    >
                      Retake Photo
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <Camera className="h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-gray-500 mb-4">No photo taken</p>
                    <div className="flex space-x-4">
                      <Button onClick={toggleCamera} className="bg-sky-600 hover:bg-sky-700">
                        <Camera className="mr-2 h-4 w-4" />
                        Take Photo
                      </Button>
                      <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Image
                      </Button>
                    </div>
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
                <li>Visible injuries or wounds</li>
                <li>Skin conditions (rashes, infections)</li>
                <li>Facial asymmetry (possible stroke signs)</li>
                <li>Visible signs of illness (jaundice, pallor)</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Button asChild className="rounded-full bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
              <Link href="/patient-entry/video-scan">
                {photoTaken && analysisComplete ? "Continue" : "Skip This Step"}{" "}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-gray-500">
        <p>Step 3 of 8: Visual Check (Optional)</p>
      </div>
    </div>
  )
}
