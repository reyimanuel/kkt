import { HeroSection } from "../../shared/hero-section"
import { GovernmentSection } from "../components/government-section"

export default function GovernmentPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Sejarah Pemerintahan"
        subtitle="Sejarah pemerintahan desa Suluun"
        backgroundGradient="from-red-600 to-orange-600"
      />
      <GovernmentSection />
    </div>
  )
}
