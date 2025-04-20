import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Video, Pill } from "lucide-react"

export function ThankYouScreen() {
  // This would be determined by the severity result in a real app
  const nextStepType = "medium" // high, medium, or low

  const getNextStepContent = () => {
    switch (nextStepType) {
      case "high":
        return {
          icon: <MapPin className="h-12 w-12 text-red-500 mb-4" />,
          title: "Visit Doctor Immediately",
          description: "Please proceed to the medical tent located at the center of the camp.",
          buttonText: "View Map",
          buttonIcon: <MapPin className="mr-2 h-4 w-4" />,
        }
      case "medium":
        return {
          icon: <Video className="h-12 w-12 text-amber-500 mb-4" />,
          title: "Online Consultation",
          description: "Your video consultation with a doctor will begin shortly.",
          buttonText: "Join Video Call",
          buttonIcon: <Video className="mr-2 h-4 w-4" />,
        }
      case "low":
        return {
          icon: <Pill className="h-12 w-12 text-green-500 mb-4" />,
          title: "Medication Instructions",
          description: "Please collect your medication from the distribution point.",
          buttonText: "View Medication Details",
          buttonIcon: <Pill className="mr-2 h-4 w-4" />,
        }
      default:
        return {
          icon: <CheckCircle className="h-12 w-12 text-sky-500 mb-4" />,
          title: "Thank You",
          description: "Your assessment is complete.",
          buttonText: "Return Home",
          buttonIcon: null,
        }
    }
  }

  const nextStepContent = getNextStepContent()

  return (
    <div className="flex flex-col">
      <Card className="w-full shadow-md">
        <CardContent className="pt-6">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-sky-800 mb-4">Thank You</h1>
            <p className="text-gray-600">
              Your medical assessment is complete. We've added this information to your patient folder.
            </p>
          </div>

          <div className="bg-sky-50 rounded-lg p-6 text-center mb-8">
            <div className="flex flex-col items-center">
              {nextStepContent.icon}
              <h2 className="text-xl font-bold text-sky-800 mb-2">{nextStepContent.title}</h2>
              <p className="text-gray-600 mb-4">{nextStepContent.description}</p>
              <Button className="bg-sky-600 hover:bg-sky-700">
                {nextStepContent.buttonIcon}
                {nextStepContent.buttonText}
              </Button>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/">Return Home</Link>
            </Button>
            <Button asChild className="bg-sky-600 hover:bg-sky-700">
              <Link href="/patient-entry">Start New Assessment</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-gray-500">
        <p>Step 8 of 8: Complete</p>
      </div>
    </div>
  )
}
