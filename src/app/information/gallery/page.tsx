import { HeroSection } from "../../shared/hero-section"
import { GalleryGrid } from "../components/gallery-grid"

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Village Gallery"
        subtitle="Explore the beauty and character of our community through photos"
        backgroundGradient="from-pink-600 to-purple-600"
      />
      <GalleryGrid />
    </div>
  )
}
