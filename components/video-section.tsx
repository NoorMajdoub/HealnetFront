import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-20 bg-sky-900 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technology with a Human Touch</h2>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            See how HealNet is transforming humanitarian healthcare with AI that empowers rather than replaces human
            connection.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
  
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">

    <source src="/videos/ad.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
          </div>
        </div>
      
    </section>
  )
}
