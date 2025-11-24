import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { PopularDiseases } from "@/components/landing/popular-diseases"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <Hero />
      <Features />
      <HowItWorks />
      <PopularDiseases />
      <Footer />
    </div>
  )
}
