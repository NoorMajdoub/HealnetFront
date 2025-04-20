import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">About HealNet</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            HealNet is a humanitarian AI-powered medical platform designed to provide critical care to refugees and war
            victims in challenging environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To leverage AI technology to provide immediate medical triage and care to those affected by conflict and
                displacement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-2">Our Approach</h3>
              <p className="text-gray-600">
                Combining cutting-edge AI with compassionate care to create a system that works even in low-resource
                settings.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-2">Our Impact</h3>
              <p className="text-gray-600">
                Creating lasting change by building portable medical records and connecting patients with volunteer
                doctors worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
