import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Stethoscope, Pill, FileText } from "lucide-react"

export function ActivityFeed() {
  const activities = [
    {
      type: "triage",
      message: "New patient triaged as moderate",
      time: "2 minutes ago",
      icon: Camera,
      color: "text-sky-600",
      bgColor: "bg-sky-100",
    },
    {
      type: "consultation",
      message: "Dr. Sarah started consultation with Patient #1234",
      time: "15 minutes ago",
      icon: Stethoscope,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      type: "medication",
      message: "Medication dispensed to Patient #1235",
      time: "32 minutes ago",
      icon: Pill,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      type: "record",
      message: "Medical record updated for Patient #1236",
      time: "45 minutes ago",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      type: "triage",
      message: "New patient triaged as critical",
      time: "1 hour ago",
      icon: Camera,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      type: "consultation",
      message: "Dr. Michael completed consultation",
      time: "1.5 hours ago",
      icon: Stethoscope,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className={`${activity.bgColor} p-2 rounded-full mt-0.5`}>
                <activity.icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div>
                <p className="text-sm">{activity.message}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
