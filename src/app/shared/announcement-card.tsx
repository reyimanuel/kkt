import { Calendar, type LucideIcon } from "lucide-react"

interface AnnouncementCardProps {
    badge: {
        text: string
        variant?: "default" | "secondary" | "destructive" | "outline"
    }
    date: string
    title: string
    description: string
    buttonText: string
    buttonHref: string
    icon?: LucideIcon
}

export function AnnouncementCard({
    badge,
    date,
    title,
    description,
    buttonText,
    buttonHref,
    icon: Icon,
}: AnnouncementCardProps) {
    const getBadgeStyles = (variant = "default") => {
        const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
        switch (variant) {
            case "secondary":
                return `${baseStyles} bg-gray-100 text-gray-800`
            case "destructive":
                return `${baseStyles} bg-red-100 text-red-800`
            case "outline":
                return `${baseStyles} border border-gray-300 text-gray-700`
            default:
                return `${baseStyles} bg-blue-100 text-blue-800`
        }
    }

    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                    <span className={getBadgeStyles(badge.variant)}>{badge.text}</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                        {Icon ? <Icon className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
                        {date}
                    </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <a
                    href={buttonHref}
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                    {buttonText}
                </a>
            </div>
        </div>
    )
}
