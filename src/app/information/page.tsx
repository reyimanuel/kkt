import { Calendar, MapPin, Users, Award } from "lucide-react"
import { HeroSection } from "../shared/hero-section"
import { StatsSection } from "../shared/stats-section"
import { GalleryGrid } from "./components/gallery-grid"
import { TimelineSection } from "./components/timeline-section"
import Image from "next/image"

export default function InformationPage() {
    const historyPeriods = [
        {
            badge: { text: "Founded 1868", variant: "default" as const },
            title: "The Early Days",
            content: [
                "Greenfield Village was established in 1868 by a group of pioneering families seeking fertile land and a peaceful place to call home. The village was named after the lush green fields that surrounded the original settlement.",
                "The first settlers were primarily farmers and craftsmen who built a tight-knit community centered around agriculture, mutual support, and shared values that continue to define our village today.",
            ],
            image: {
                src: "/placeholder.svg?height=400&width=600",
                alt: "Historic village founding",
            },
            imagePosition: "left" as const,
        },
        {
            badge: { text: "Growth Period", variant: "secondary" as const },
            title: "Industrial Growth (1900-1950)",
            content: [
                "The early 20th century brought significant growth to Greenfield Village. The arrival of the railroad in 1902 connected our community to larger markets, leading to the establishment of several small industries and businesses.",
                "During this period, many of our historic buildings were constructed, including the village hall, the old schoolhouse, and several homes that still stand today as testament to our architectural heritage.",
            ],
            image: {
                src: "/placeholder.svg?height=400&width=600",
                alt: "Village main street in the 1920s",
            },
            imagePosition: "right" as const,
        },
        {
            badge: { text: "Modern Era", variant: "outline" as const },
            title: "Present Day",
            content: [
                "Today, Greenfield Village is a thriving community that balances preservation of our historic character with modern amenities and sustainable development. We've maintained our small-town charm while embracing progress.",
                "Our village is home to 2,847 residents who enjoy excellent schools, beautiful parks, local businesses, and a strong sense of community that honors our past while building for the future.",
            ],
            image: {
                src: "/placeholder.svg?height=400&width=600",
                alt: "Modern village community",
            },
            imagePosition: "left" as const,
        },
    ]

    const getBadgeStyles = (variant = "default") => {
        const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-4"
        switch (variant) {
            case "secondary":
                return `${baseStyles} bg-gray-100 text-gray-800`
            case "outline":
                return `${baseStyles} border border-gray-300 text-gray-700`
            default:
                return `${baseStyles} bg-blue-100 text-blue-800`
        }
    }

    const galleryItems = [
        {
            src: "/placeholder.svg?height=300&width=400",
            alt: "Main Street shops",
            title: "Main Street",
            description: "Our charming main street with local shops and cafes",
        },
        {
            src: "/placeholder.svg?height=300&width=400",
            alt: "Village park",
            title: "Community Park",
            description: "Beautiful green spaces for families and recreation",
        },
        {
            src: "/placeholder.svg?height=300&width=400",
            alt: "Village hall",
            title: "Village Hall",
            description: "Our historic village hall, center of local government",
        },
        {
            src: "/placeholder.svg?height=300&width=400",
            alt: "Village library",
            title: "Public Library",
            description: "A hub of learning and community activities",
        },
        {
            src: "/placeholder.svg?height=300&width=400",
            alt: "Farmers market",
            title: "Farmers Market",
            description: "Weekly market featuring local produce and crafts",
        },
        {
            src: "/placeholder.svg?height=300&width=400",
            alt: "Village school",
            title: "Greenfield Elementary",
            description: "Our excellent elementary school serving the community",
        },
    ]

    const timelineItems = [
        { year: "1868", title: "Village Founded", description: "First settlers establish Greenfield Village" },
        { year: "1902", title: "Railroad Arrives", description: "Connection to regional transportation network" },
        { year: "1925", title: "Village Hall Built", description: "Construction of our iconic village hall" },
        {
            year: "1965",
            title: "Historic District Established",
            description: "Protection of historic buildings and character",
        },
        { year: "2010", title: "Green Initiative Launch", description: "Commitment to sustainable development" },
    ]

    const stats = [
        { icon: Users, value: "2,847", label: "Total Population", color: "text-blue-600" },
        { icon: MapPin, value: "12", label: "Square Miles", color: "text-green-600" },
        { icon: Calendar, value: "156", label: "Years of History", color: "text-purple-600" },
        { icon: Award, value: "15", label: "Historic Buildings", color: "text-orange-600" },
    ]

    return (
        <div className="min-h-screen">
            <HeroSection
                title="About Greenfield Village"
                subtitle="Discover the rich history and vibrant community that makes our village special"
                backgroundGradient="from-blue-600 to-green-600"
            />

            {/* Village History */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Our History</h2>
                            <p className="text-gray-600 text-lg">
                                A journey through time - from humble beginnings to thriving community
                            </p>
                        </div>

                        {historyPeriods.map((period, index) => (
                            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                                <div className={period.imagePosition === "right" ? "order-2" : ""}>
                                    <Image
                                        src={period.image.src || "/placeholder.svg"}
                                        alt={period.image.alt}
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className={period.imagePosition === "right" ? "order-1" : ""}>
                                    <span className={getBadgeStyles(period.badge.variant)}>{period.badge.text}</span>
                                    <h3 className="text-2xl font-bold mb-4">{period.title}</h3>
                                    {period.content.map((paragraph, pIndex) => (
                                        <p key={pIndex} className="text-gray-600 mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TimelineSection
                title="Historical Timeline"
                subtitle="Key moments in our village's development"
                items={timelineItems}
            />

            <GalleryGrid
                title="Village Gallery"
                subtitle="Explore the beauty and character of our community through photos"
                items={galleryItems}
            />

            <StatsSection stats={stats} className="py-16 bg-gray-50" />
        </div>
    )
}
