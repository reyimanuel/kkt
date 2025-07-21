import type { LucideIcon } from "lucide-react"
import Image from "next/image"

interface EventDetail {
    icon: LucideIcon
    label: string
    value: string
    color: string
}

interface EventHighlight {
    icon: LucideIcon
    text: string
    color: string
}

interface FeaturedEventProps {
    badge: string
    title: string
    subtitle: string
    description: string
    image: {
        src: string
        alt: string
    }
    details: EventDetail[]
    highlights: EventHighlight[]
    buttons: {
        primary: { text: string; href?: string }
        secondary: { text: string; href?: string }
    }
}

export function FeaturedEvent({
    badge,
    title,
    subtitle,
    description,
    image,
    details,
    highlights,
    buttons,
}: FeaturedEventProps) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                            {badge}
                        </span>
                        <h2 className="text-3xl font-bold mb-4">{title}</h2>
                        <p className="text-gray-600 text-lg">{subtitle}</p>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="aspect-video lg:aspect-square relative">
                                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                            </div>
                            <div className="p-8 lg:p-12">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">{title}</h3>
                                        <p className="text-gray-600 mb-4">{description}</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {details.map((detail, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <detail.icon className={`h-5 w-5 ${detail.color}`} />
                                                <div>
                                                    <p className="font-semibold">{detail.label}</p>
                                                    <p className="text-sm text-gray-600">{detail.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">Event Highlights:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {highlights.map((highlight, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <highlight.icon className={`h-4 w-4 ${highlight.color}`} />
                                                    <span className="text-sm">{highlight.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                            {buttons.primary.text}
                                        </button>
                                        <button className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                                            {buttons.secondary.text}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
