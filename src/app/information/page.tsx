import { Calendar, MapPin, Users, Award } from "lucide-react"
import { HeroSection } from "../shared/hero-section"
import { GalleryGrid } from "./components/gallery-grid"
import { TimelineSection } from "./components/timeline-section"
import { PioneeringSection } from "./components/pioneering-section"
import { EstablishmentSection } from "./components/establishment-section"
import { VillageProcessSection } from "./components/village-process-section"
import { GovernmentSection } from "./components/government-section"
import { ExpansionSection } from "./components/expansion-section"
import { VillageHeadsSection } from "./components/village-heads-section"
import { LeadersSection } from "./components/leaders-section"

export default function InformationPage() {
    const stats = [
        { icon: Users, value: "2,847", label: "Total Population", color: "text-blue-600" },
        { icon: MapPin, value: "12", label: "Square Kilometers", color: "text-green-600" },
        { icon: Calendar, value: "145", label: "Years of History", color: "text-purple-600" },
        { icon: Award, value: "21", label: "Village Heads", color: "text-orange-600" },
    ]

    return (
        <div className="min-h-screen">
            <HeroSection
                title="About Suluun Village"
                subtitle="Discover the rich history, governance, and leadership that makes our village a thriving community"
                backgroundGradient="from-blue-600 to-green-600"
            />

            <PioneeringSection />

            <EstablishmentSection />

            <TimelineSection />

            <VillageProcessSection />

            <GovernmentSection />

            <ExpansionSection />

            <VillageHeadsSection />

            <LeadersSection />

            <GalleryGrid />

        </div>
    )
}
