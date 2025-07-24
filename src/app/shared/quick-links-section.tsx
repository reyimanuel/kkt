import type { LucideIcon } from "lucide-react"

interface QuickLink {
    icon: LucideIcon
    title: string
    description: string
    buttonText: string
    href: string
    iconColor: string
}

interface QuickLinksSectionProps {
    links: QuickLink[]
}

export function QuickLinksSection({ links }: QuickLinksSectionProps) {
    return (
        <section className="py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Akses Cepat</h2>
                    <p className="text-gray-300">Lihat informasi penting desa</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {links.map((link, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 rounded-lg border border-gray-600 shadow-sm hover:shadow-lg transition-shadow text-center p-6"
                        >
                            <div className="flex justify-center mb-4">
                                <link.icon className={`h-12 w-12 ${link.iconColor}`} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                            <p className="text-gray-300 mb-4">{link.description}</p>
                            <a
                                href={link.href}
                                className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-800 transition-colors"
                            >
                                {link.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
