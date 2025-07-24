"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface Photo {
    id: string
    src: string
    alt: string
}

interface EventPhotoGalleryProps {
    photos: Photo[]
    eventTitle: string
}

export function EventPhotoGallery({ photos }: EventPhotoGalleryProps) {
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

    const openLightbox = (index: number) => {
        setSelectedPhoto(index)
    }

    const closeLightbox = () => {
        setSelectedPhoto(null)
    }

    const nextPhoto = () => {
        if (selectedPhoto !== null) {
            setSelectedPhoto((selectedPhoto + 1) % photos.length)
        }
    }

    const prevPhoto = () => {
        if (selectedPhoto !== null) {
            setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1)
        }
    }

    return (
        <>
            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                    <div
                        key={photo.id}
                        className="aspect-square relative cursor-pointer group overflow-hidden rounded-lg bg-gray-800"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={photo.src || "/placeholder.svg"}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedPhoto !== null && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Navigation Buttons */}
                        {photos.length > 1 && (
                            <>
                                <button
                                    onClick={prevPhoto}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={nextPhoto}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </>
                        )}

                        {/* Photo */}
                        <div className="flex items-center justify-center w-screen h-screen max-w-7xl max-h-full">
                            <Image
                                src={photos[selectedPhoto].src || "/placeholder.svg"}
                                alt={photos[selectedPhoto].alt}
                                width={1200}
                                height={800}
                                className="object-contain w-auto h-auto max-w-full max-h-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
