import type { LucideIcon } from "lucide-react"

interface StatItem {
    icon: LucideIcon
    value: string
    label: string
    color: string
}

interface StatsSectionProps {
    stats: StatItem[]
    className?: string
}

export function StatsSection({ stats, className = "py-16 bg-gray-50" }: StatsSectionProps) {
    return (
        <section className={className}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-4">
                                <stat.icon className={`h-12 w-12 ${stat.color}`} />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
