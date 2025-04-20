import { Camera, Stethoscope, Pill, FileText } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-sky-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform streamlines medical care in humanitarian settings through a simple four-step
            process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <Camera className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-sky-800 mb-2">AI Triage</h3>
            <p className="text-gray-600">
              Camera-based AI assesses patients and categorizes them by medical severity (red, yellow, green).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <Stethoscope className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-sky-800 mb-2">Doctor Connection</h3>
            <p className="text-gray-600">
              Critical cases are connected to volunteer doctors either on-site or through secure video consultations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <Pill className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-sky-800 mb-2">Medication Distribution</h3>
            <p className="text-gray-600">
              Mild cases receive appropriate medication with clear instructions in their native language.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-sky-800 mb-2">Medical Records</h3>
            <p className="text-gray-600">
              Portable digital medical folders are created for each patient, ensuring continuity of care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
