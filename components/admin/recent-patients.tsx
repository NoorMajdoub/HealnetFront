import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, MessageSquare } from "lucide-react"

export function RecentPatients() {
  const patients = [
    {
      id: "P-1234",
      name: "Ahmed Hassan",
      age: 34,
      gender: "Male",
      condition: "Respiratory distress",
      severity: "critical",
      time: "10 minutes ago",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "P-1235",
      name: "Maria Silva",
      age: 28,
      gender: "Female",
      condition: "Dehydration",
      severity: "moderate",
      time: "25 minutes ago",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "P-1236",
      name: "Yusuf Ibrahim",
      age: 7,
      gender: "Male",
      condition: "Fever",
      severity: "moderate",
      time: "45 minutes ago",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "P-1237",
      name: "Fatima Khalid",
      age: 62,
      gender: "Female",
      condition: "Hypertension",
      severity: "stable",
      time: "1 hour ago",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "P-1238",
      name: "Amir Nasir",
      age: 42,
      gender: "Male",
      condition: "Laceration",
      severity: "stable",
      time: "2 hours ago",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

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
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Patients</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {patients.map((patient) => (
            <div key={patient.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={patient.image || "/placeholder.svg"} alt={patient.name} />
                  <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{patient.name}</p>
                    {getSeverityBadge(patient.severity)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {patient.age} y/o {patient.gender} • {patient.condition}
                  </p>
                  <p className="text-xs text-muted-foreground">{patient.time}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <FileText className="h-4 w-4" />
                  <span className="sr-only">View record</span>
                </Button>
                <Button variant="outline" size="icon">
                  <MessageSquare className="h-4 w-4" />
                  <span className="sr-only">Start consultation</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
