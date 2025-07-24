import Image from "next/image"
import Link from "next/link"
import { Camera } from "lucide-react"

interface EventGalleryCardProps {
    id: string
    title: string
    description: string
    coverImage: string
    photoCount: number
}

export function EventGalleryCard({
    id,
    title,
    description,
    coverImage,
    photoCount,
}: EventGalleryCardProps) {
    return (
        <Link href={`/announcements/${id}`} className="group block">
            <div className="bg-gray-700 rounded-lg border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Cover Image */}
                <div className="aspect-video relative overflow-hidden">
                    <Image
                        src={coverImage || "/placeholder.svg"}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


                    {/* Photo Count Badge */}
                    <div className="absolute top-3 right-3">
                        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 text-white text-xs">
                            <Camera className="h-3 w-3" />
                            <span>{photoCount} photos</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
                </div>
            </div>
        </Link>
    )
}
