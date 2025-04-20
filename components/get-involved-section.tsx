import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Building } from "lucide-react"

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Get Involved</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            There are many ways to support our mission of providing AI-powered medical care to those who need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-2">Donate</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Your financial support helps us deploy our AI-powered platform to more refugee camps and conflict zones.
              </p>
              <Button className="rounded-full bg-sky-600 hover:bg-sky-700 w-full">Donate Now</Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-2">Join Us</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Volunteer as a medical professional, translator, or technology expert to help us expand our impact.
              </p>
              <Button className="rounded-full bg-green-600 hover:bg-green-700 w-full">Volunteer</Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-2">Partner</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Organizations can partner with us to bring HealNet to new regions or contribute technology and
                resources.
              </p>
              <Button className="rounded-full bg-amber-600 hover:bg-amber-700 w-full">Partner With Us</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
