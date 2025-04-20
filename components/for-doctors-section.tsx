import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function ForDoctorsSection() {
  return (
    <section id="for-doctors" className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-6">For Doctors & Volunteers</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our global network of medical professionals making a difference from anywhere in the world. Whether
              you can volunteer on-site or remotely, your expertise can save lives.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Flexible time commitment - even 1 hour per week helps",
                "Secure telemedicine platform for remote consultations",
                "AI assistance to help with language barriers and diagnostics",
                "Opportunity to mentor local healthcare workers",
                "Make a meaningful impact from anywhere in the world",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="rounded-full bg-sky-600 hover:bg-sky-700 px-8 py-6 text-lg">
              Join as a Medical Volunteer
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <img
              
                src="/images/medical-team-physicians600.jpg"
                alt="Doctor using HealNet platform"
                className="w-full h-full object-cover"
              
              
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sky-800 font-medium">
                "I can now help patients in conflict zones during my lunch break. The AI triage system ensures I'm
                helping those who need it most."
              </p>
              <p className="text-gray-600 mt-2">— Dr. Sarah Chen, Volunteer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
