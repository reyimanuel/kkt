import Image from "next/image"

interface GalleryItem {
    src: string
    alt: string
    title: string
    description: string
}

interface GalleryGridProps {
    title: string
    subtitle: string
    items: GalleryItem[]
}

export function GalleryGrid({ title, subtitle, items }: GalleryGridProps) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-600">{subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="aspect-video relative">
                                <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
