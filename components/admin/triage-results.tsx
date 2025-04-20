import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

export function TriageResults() {
  const results = [
    {
      id: "T-1234",
      time: "Just now",
      severity: "critical",
      conditions: ["Respiratory distress", "Elevated heart rate"],
      confidence: 92,
    },
    {
      id: "T-1233",
      time: "5 minutes ago",
      severity: "moderate",
      conditions: ["Dehydration", "Fever"],
      confidence: 88,
    },
    {
      id: "T-1232",
      time: "15 minutes ago",
      severity: "stable",
      conditions: ["Minor laceration", "Contusion"],
      confidence: 95,
    },
  ]

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "moderate":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "stable":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-red-500">Critical</Badge>
      case "moderate":
        return <Badge className="bg-amber-500">Moderate</Badge>
      case "stable":
        return <Badge className="bg-green-500">Stable</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Triage Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {results.map((result) => (
            <div key={result.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getSeverityIcon(result.severity)}
                  <span className="font-medium">{result.id}</span>
                  {getSeverityBadge(result.severity)}
                </div>
                <span className="text-sm text-muted-foreground">{result.time}</span>
              </div>

              <div className="mb-2">
                <p className="text-sm font-medium">Detected conditions:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {result.conditions.map((condition, index) => (
                    <Badge key={index} variant="outline" className="font-normal">
                      {condition}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">AI confidence: {result.confidence}%</span>
                <Button size="sm" className="bg-sky-600 hover:bg-sky-700">
                  Create Patient Record
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
