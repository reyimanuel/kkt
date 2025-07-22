import { HeroSection } from "../../shared/hero-section"
import { EstablishmentSection } from "../components/establishment-section"
import { PioneeringSection } from "../components/pioneering-section"

export default function EstablishmentPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Village Establishment"
        subtitle="From a small settlement to a thriving community - the formal establishment of our village"
        backgroundGradient="from-purple-600 to-blue-600"
      />

      <PioneeringSection />

      <EstablishmentSection />
    </div>
  )
}
