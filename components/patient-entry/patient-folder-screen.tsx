"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, QrCode, Copy, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PatientFolderScreen() {
  const [patientId, setPatientId] = useState("HN-" + Math.floor(10000 + Math.random() * 90000))
  const [copied, setCopied] = useState(false)
  const [existingPatient, setExistingPatient] = useState(false)
  const [existingId, setExistingId] = useState("")

  const copyToClipboard = () => {
    navigator.clipboard.writeText(patientId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" asChild className="flex items-center">
          <Link href="/patient-entry/severity">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back
          </Link>
        </Button>
      </div>

      <Card className="w-full shadow-md">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-sky-800 mb-4">Patient Folder</h1>
            <p className="text-gray-600">
              {existingPatient
                ? "Enter your existing patient ID to access your medical folder"
                : "We've created a medical folder for you. Save your ID to access your records in the future."}
            </p>
          </div>

          {!existingPatient ? (
            <div className="mb-8">
              <div className="bg-sky-50 rounded-lg p-6 text-center mb-6">
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <QrCode className="h-32 w-32 text-sky-800" />
                </div>
                <div className="flex items-center justify-center mb-2">
                  <p className="text-xl font-bold mr-2">{patientId}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={copyToClipboard}
                    aria-label="Copy patient ID"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  Please save this ID. You'll need it to access your medical records in the future.
                </p>
              </div>

              <div className="text-center mb-4">
                <Button variant="link" onClick={() => setExistingPatient(true)}>
                  I already have a patient ID
                </Button>
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="patient-id">Enter your patient ID</Label>
                  <Input
                    id="patient-id"
                    placeholder="e.g. HN-12345"
                    value={existingId}
                    onChange={(e) => setExistingId(e.target.value)}
                  />
                </div>
                <Button
                  className="w-full bg-sky-600 hover:bg-sky-700"
                  disabled={!existingId}
                  onClick={() => setExistingPatient(false)}
                >
                  Access My Records
                </Button>
              </div>

              <div className="text-center mt-4">
                <Button variant="link" onClick={() => setExistingPatient(false)}>
                  I don't have a patient ID
                </Button>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <Button asChild className="rounded-full bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
              <Link href="/patient-entry/thank-you">
                Continue <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-gray-500">
        <p>Step 7 of 8: Patient Folder</p>
      </div>
    </div>
  )
}
