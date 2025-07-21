import Image from "next/image"

interface HistoryPeriod {
    badge: {
        text: string
        variant?: "default" | "secondary" | "outline"
    }
    title: string
    content: string[]
    image: {
        src: string
        alt: string
    }
    imagePosition: "left" | "right"
}

interface HistorySectionProps {
    title: string
    subtitle: string
    periods: HistoryPeriod[]
}

export function HistorySection({ title, subtitle, periods }: HistorySectionProps) {
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

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">{title}</h2>
                        <p className="text-gray-600 text-lg">{subtitle}</p>
                    </div>

                    {periods.map((period, index) => (
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
    )
}
