import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { EventPhotoGallery } from "../components/event-photo-gallery"
import { events } from "../data"

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
    const event = events[(await params).id as keyof typeof events]

    if (!event) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <div className="bg-gray-800 border-b border-gray-700">
                <div className="container mx-auto px-4 py-6">
                    <div className="max-w-6xl mx-auto">
                        <Link
                            href="/announcements"
                            className="inline-flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors mb-4"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Kembali ke Berita & Acara
                        </Link>

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-gray-400 text-sm">{event.photos.length} photos</span>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-100 mb-2">{event.title}</h1>
                                <p className="text-gray-400 max-w-3xl">{event.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-100 mb-2">Dokumentasi Foto Acara</h2>
                        </div>

                        <EventPhotoGallery photos={event.photos} eventTitle={event.title} />
                    </div>
                </div>
            </div>
        </div>
    )
}
