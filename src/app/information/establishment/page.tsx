import { HeroSection } from "../../shared/hero-section"
import { EstablishmentSection } from "../components/establishment-section"
import { PioneeringSection } from "../components/pioneering-section"

export default function EstablishmentPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Pendirian Desa Suluun"
        subtitle="Dari sebuah komunitas kecil, hingga sebuah desa"
        backgroundGradient="from-purple-600 to-blue-600"
      />

      <PioneeringSection />

      <EstablishmentSection />
    </div>
  )
}
