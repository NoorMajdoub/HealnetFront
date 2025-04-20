import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export function InventoryStatus() {
  const medications = [
    {
      name: "Antibiotics",
      current: 75,
      total: 100,
      unit: "boxes",
      status: "normal",
    },
    {
      name: "Pain Relievers",
      current: 12,
      total: 50,
      unit: "boxes",
      status: "low",
    },
    {
      name: "IV Fluids",
      current: 30,
      total: 100,
      unit: "bags",
      status: "normal",
    },
    {
      name: "Bandages",
      current: 5,
      total: 50,
      unit: "packs",
      status: "critical",
    },
    {
      name: "Antiseptics",
      current: 20,
      total: 30,
      unit: "bottles",
      status: "normal",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "text-red-600"
      case "low":
        return "text-amber-600"
      case "normal":
        return "text-green-600"
      default:
        return ""
    }
  }

  const getProgressColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-600"
      case "low":
        return "bg-amber-600"
      case "normal":
        return "bg-green-600"
      default:
        return ""
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Medication & Inventory Status</CardTitle>
        <Button variant="outline" size="sm">
          Manage Inventory
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {medications.map((med, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-medium">{med.name}</span>
                  {med.status !== "normal" && (
                    <AlertTriangle className={`h-4 w-4 ml-2 ${getStatusColor(med.status)}`} />
                  )}
                </div>
                <span className={`text-sm ${getStatusColor(med.status)}`}>
                  {med.current}/{med.total} {med.unit}
                </span>
              </div>
              <Progress value={(med.current / med.total) * 100} className={`h-2 ${getProgressColor(med.status)}`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
