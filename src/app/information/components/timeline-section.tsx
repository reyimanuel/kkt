interface TimelineItem {
    year: string
    title: string
    description: string
}

interface TimelineSectionProps {
    title: string
    subtitle: string
    items: TimelineItem[]
}

export function TimelineSection({ title, subtitle, items }: TimelineSectionProps) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-600">{subtitle}</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {items.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-20 text-right">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-300 text-gray-700">
                                        {item.year}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
