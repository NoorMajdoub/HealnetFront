import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ImpactStoriesSection() {
  return (
    <section id="impact" className="py-16 bg-sky-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Impact Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Real stories of lives changed through our AI-powered medical platform.
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-sky-600 text-sky-600 hover:bg-sky-50"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-sky-600 text-sky-600 hover:bg-sky-50"
              aria-label="Next story"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Amira",
              location: "Syrian Refugee Camp",
              image: "/images/womendoc.jpg",
              story:
                "After fleeing Syria, Amira's son developed a severe respiratory infection. HealNet's AI identified it as critical, connecting them to a pulmonologist within minutes.",
            },
            {
              name: "Dr. Michael",
              location: "Volunteer from Canada",
              image: "/images/male.jpg",
              story:
                "I've been able to help treat over 200 patients remotely. The AI triage system ensures I'm seeing the most critical cases first, maximizing my impact.",
            },
            {
              name: "Local Clinic",
              location: "Northern Ukraine",
              image: "/images/clinic.jpg",
              story:
                "Our small clinic was overwhelmed until HealNet arrived. Now we can efficiently manage 3x more patients with the same staff, saving countless lives.",
            },
          ].map((story, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden"
            >
              <div className="aspect-square">
                <img src={story.image || "/placeholder.svg"} alt={story.name} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-sky-800 mb-1">{story.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{story.location}</p>
                <p className="text-gray-700">{story.story}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
