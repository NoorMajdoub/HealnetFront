import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/cambodian-refugees.jpg')] bg-cover bg-center">

        <div className="absolute inset-0 bg-sky-900/70"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            This is the time to take action.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            HealNet uses AI to triage refugees and war victims, connecting critical cases to volunteer doctors and
            building portable medical records.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" asChild>
              <a href="/patient-entry">Begin My Session</a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 border-green-600 bg-green-600 text-white hover:bg-green-700 px-8 py-6 text-lg"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
