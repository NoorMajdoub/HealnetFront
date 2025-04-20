import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Upload } from "lucide-react"
import { TriageResults } from "@/components/admin/triage-results"

export default function TriagePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Triage Feed</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Camera Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Camera className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Camera feed will appear here</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1 bg-sky-600 hover:bg-sky-700">
                <Camera className="mr-2 h-4 w-4" />
                Start Camera
              </Button>
              <Button variant="outline" className="flex-1">
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </Button>
            </div>
          </CardContent>
        </Card>

        <TriageResults />
      </div>
    </div>
  )
}
