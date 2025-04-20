import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-sky-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about HealNet or want to learn more about how you can get involved? Reach out to our team.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-sky-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sky-800">Email</h3>
                  <p className="text-gray-600">info@healnet.org</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-sky-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sky-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-sky-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sky-800">Headquarters</h3>
                  <p className="text-gray-600">Monastir, Tunisia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-sky-800 mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input id="subject" placeholder="Message subject" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>

              <Button className="rounded-full bg-sky-600 hover:bg-sky-700 w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
