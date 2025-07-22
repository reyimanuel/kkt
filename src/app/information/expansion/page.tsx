import { HeroSection } from "../../shared/hero-section"
import { ExpansionSection } from "../components/expansion-section"

export default function ExpansionPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Pemekaran Desa"
        subtitle="Sejarah pemekaran desa"
        backgroundGradient="from-teal-600 to-green-600"
      />
      <ExpansionSection />
    </div>
  )
}
