import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ForDoctorsSection } from "@/components/for-doctors-section"
import { ImpactStoriesSection } from "@/components/impact-stories-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { VideoSection } from "@/components/video-section"
import { ContactSection } from "@/components/contact-section"
import { ImpactCounter } from "@/components/impact-counter"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <HeroSection />
        <ImpactCounter />
        <AboutSection />
        <HowItWorksSection />
        <ForDoctorsSection />
        <VideoSection />
        <ImpactStoriesSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
