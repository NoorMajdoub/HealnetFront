import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Camera, Stethoscope, Pill } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Patients",
      value: "1,284",
      change: "+12% from last week",
      icon: Users,
      color: "text-sky-600",
      bgColor: "bg-sky-100",
    },
    {
      title: "Patients Scanned",
      value: "842",
      change: "+8% from last week",
      icon: Camera,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Consultations",
      value: "356",
      change: "+15% from last week",
      icon: Stethoscope,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      title: "Medications Dispensed",
      value: "1,156",
      change: "+5% from last week",
      icon: Pill,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className={`${stat.bgColor} p-2 rounded-full`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
