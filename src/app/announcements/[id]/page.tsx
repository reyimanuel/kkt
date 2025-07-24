import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import { EventPhotoGallery } from "../components/event-photo-gallery"

interface EventPageProps {
    params: {
        id: string
    }
}

export default async function EventPage({ params }: EventPageProps) {
    // Sample event data
    const events = {
        "penyerahan-dana-duka": {
            title: "Penyerahan Dana Bantuan Sosial",
            description: "Penyerahan dana dukacita kepada keluarga yang berduka",
            photos: [
                {
                    id: "1",
                    src: "/announcement/penyerahan-dana.jpg",
                    alt: "Penyerahan Dana Dukacita",
                },
            ],
        },
        "musyawarah-desa-kpmp": {
            title: "Musyawarah Desa Pendirian Koperasi Desa Merah Putih (KPMP)",
            description: "Musyawarah desa untuk membahas pendirian koperasi desa",
            photos: [
                {
                    id: "1",
                    src: "/announcement/musyawarah-desa.jpg",
                    alt: "Musyawarah Desa",
                },
                {
                    id: "2",
                    src: "/announcement/musyawarah-desa-2.jpg",
                    alt: "Musyawarah Desa 2",
                },
                {
                    id: "3",
                    src: "/announcement/musyawarah-desa-3.jpg",
                    alt: "Musyawarah Desa 3",
                },
                {
                    id: "4",
                    src: "/announcement/musyawarah-desa-4.jpg",
                    alt: "Musyawarah Desa 4",
                },
            ],
        },
        "lomba-desa": {
            title: "Lomba Desa",
            description: "Lomba desa untuk meningkatkan partisipasi masyarakat",
            photos: [
                {
                    id: "1",
                    src: "/announcement/lomba-desa.jpg",
                    alt: "Lomba Desa",
                },
                {
                    id: "2",
                    src: "/announcement/lomba-desa-2.jpg",
                    alt: "Lomba Desa 2",
                },
                {
                    id: "3",
                    src: "/announcement/lomba-desa-3.jpg",
                    alt: "Lomba Desa 3",
                },
                {
                    id: "4",
                    src: "/announcement/lomba-desa-4.jpg",
                    alt: "Lomba Desa 4",
                },
            ],
        },
        "fasilitasi-rembuk-stunting": {
            title: "Fasilitasi Rembuk Stunting",
            description: "Fasilitasi rembuk stunting untuk meningkatkan kesadaran masyarakat",
            photos: [
                {
                    id: "1",
                    src: "/announcement/fasilitasi-rembuk-stunting.jpg",
                    alt: "Fasilitasi Rembuk Stunting",
                },
                {
                    id: "2",
                    src: "/announcement/fasilitasi-rembuk-stunting-2.jpg",
                    alt: "Fasilitasi Rembuk Stunting 2",
                },
                {
                    id: "3",
                    src: "/announcement/fasilitasi-rembuk-stunting-3.jpg",
                    alt: "Fasilitasi Rembuk Stunting 3",
                },
                {
                    id: "4",
                    src: "/announcement/fasilitasi-rembuk-stunting-4.jpg",
                    alt: "Fasilitasi Rembuk Stunting 4",
                },
            ],
        },
        "musyawarah-desa-rkpdes": {
            title: "Musyawarah Desa Penyusunan Rencana Kerja Pemerintah Desa (RKPDes)",
            description: "Musyawarah desa untuk menyusun Rencana Kerja Pemerintah Desa (RKPDes)",
            photos: [
                {
                    id: "1",
                    src: "/announcement/musdes-rkpdes.jpg",
                    alt: "Musyawarah Desa RKPDes",
                },
                {
                    id: "2",
                    src: "/announcement/musdes-rkpdes-2.jpg",
                    alt: "Musyawarah Desa RKPDes 2",
                },
                {
                    id: "3",
                    src: "/announcement/musdes-rkpdes-3.jpg",
                    alt: "Musyawarah Desa RKPDes 3",
                },
                {
                    id: "4",
                    src: "/announcement/musdes-rkpdes-4.jpg",
                    alt: "Musyawarah Desa RKPDes 4",
                },
                {
                    id: "5",
                    src: "/announcement/musdes-rkpdes-5.jpg",
                    alt: "Musyawarah Desa RKPDes 5",
                },
                {
                    id: "6",
                    src: "/announcement/musdes-rkpdes-6.jpg",
                    alt: "Musyawarah Desa RKPDes 6",
                },
                {
                    id: "7",
                    src: "/announcement/musdes-rkpdes-7.jpg",
                    alt: "Musyawarah Desa RKPDes 7",
                },
                {
                    id: "8",
                    src: "/announcement/musdes-rkpdes-8.jpg",
                    alt: "Musyawarah Desa RKPDes 8",
                },
                {
                    id: "9",
                    src: "/announcement/musdes-rkpdes-9.jpg",
                    alt: "Musyawarah Desa RKPDes 9",
                },
            ],
        },
        "musyawarah-desa-apbdes": {
            title: "Musyawarah Desa Penyusunan Anggaran Pendapatan dan Belanja Desa (APBDes)",
            description: "Musyawarah desa untuk menyusun Anggaran Pendapatan dan Belanja Desa (APBDes)",
            photos: [
                {
                    id: "1",
                    src: "/announcement/musdes-apbdes.jpg",
                    alt: "Musyawarah Desa APBDes",
                },
                {
                    id: "2",
                    src: "/announcement/musdes-apbdes-2.jpg",
                    alt: "Musyawarah Desa APBDes 2",
                },
                {
                    id: "3",
                    src: "/announcement/musdes-apbdes-3.jpg",
                    alt: "Musyawarah Desa APBDes 3",
                },
                {
                    id: "4",
                    src: "/announcement/musdes-apbdes-4.jpg",
                    alt: "Musyawarah Desa APBDes 4",
                },
                {
                    id: "5",
                    src: "/announcement/musdes-apbdes-5.jpg",
                    alt: "Musyawarah Desa APBDes 5",
                },
                {
                    id: "6",
                    src: "/announcement/musdes-apbdes-6.jpg",
                    alt: "Musyawarah Desa APBDes 6",
                },
                {
                    id: "7",
                    src: "/announcement/musdes-apbdes-7.jpg",
                    alt: "Musyawarah Desa APBDes 7",
                },
            ],
        },
        "penyaluran-bantuan-2024": {
            title: "Penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) 2024",
            description: "Penyaluran bantuan langsung tunai untuk masyarakat pada tahun 2024 kepada 3 keluarga penerima manfaat (KPM)",
            photos: [
                {
                    id: "1",
                    src: "/announcement/penyaluran-bantuan.jpg",
                    alt: "Penyaluran Bantuan 2024",
                },
                {
                    id: "2",
                    src: "/announcement/penyaluran-bantuan-2.jpg",
                    alt: "Penyaluran Bantuan 2024 - 2",
                },
                {
                    id: "3",
                    src: "/announcement/penyaluran-bantuan-3.jpg",
                    alt: "Penyaluran Bantuan 2024 - 3",
                },
            ],
        },
        "penyaluran-bantuan-2025": {
            title: "Penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) 2025",
            description: "Penyaluran bantuan langsung tunai untuk masyarakat pada tahun 2025",
            photos: [
                {
                    id: "1",
                    src: "/announcement/penyaluran-bantuan25.jpg",
                    alt: "Penyaluran Bantuan 2025",
                },
                {
                    id: "2",
                    src: "/announcement/penyaluran-bantuan25-2.jpg",
                    alt: "Penyaluran Bantuan 2025 - 2",
                },
            ],
        },
        "penyerahan-bibit-jaga1": {
            title: "Penyerahan Bibit Ubi Talas Pada Kegiatan Ketahanan Pangan Tahun 2024 Jaga 1",
            description: "Penyerahan bibit ubi talas pada kegiatan ketahanan pangan tahun 2024 Jaga 1",
            photos: [
                {
                    id: "1",
                    src: "/announcement/penyerahan-bibit-jaga1 (1).jpg",
                    alt: "Penyerahan Bibit Jaga 1",
                },
                {
                    id: "2",
                    src: "/announcement/penyerahan-bibit-jaga1 (2).jpg",
                    alt: "Penyerahan Bibit Jaga 1",
                },
                {
                    id: "3",
                    src: "/announcement/penyerahan-bibit-jaga1 (3).jpg",
                    alt: "Penyerahan Bibit Jaga 1",
                },
                {
                    id: "4",
                    src: "/announcement/penyerahan-bibit-jaga1 (4).jpg",
                    alt: "Penyerahan Bibit Jaga 1",
                },
                {
                    id: "5",
                    src: "/announcement/penyerahan-bibit-jaga1 (5).jpg",
                    alt: "Penyerahan Bibit Jaga 1",
                },
                {
                    id: "6",
                    src: "/announcement/penyerahan-bibit-jaga1 (6).jpg",
                    alt: "Penyerahan Bibit Jaga 1",
                },
                {
                    id: "7",
                    src: "/announcement/penyerahan-bibit-jaga1 (7).jpg",
                    alt: "Penyerahan Bibit Jaga 1",
                },
                {
                    id: "8",
                    src: "/announcement/penyerahan-bibit-jaga1 (8).jpg",
                    alt: "Penyerahan Bibit Jaga 1",
                },
                {
                    id: "9",
                    src: "/announcement/penyerahan-bibit-jaga1 (9).jpg",
                    alt: "Penyerahan Bibit Jaga 1",
                },
                {
                    id: "10",
                    src: "/announcement/penyerahan-bibit-jaga1 (10).jpg",
                    alt: "Penyerahan Bibit Jaga 1",
                },
            ],
        },
        "penyerahan-bibit-jaga2": {
            title: "Penyerahan Bibit Ubi Talas Pada Kegiatan Ketahanan Pangan Tahun 2024 Jaga 2",
            description: "Penyerahan bibit ubi talas pada kegiatan ketahanan pangan tahun 2024 Jaga 2",
            photos: [
                {
                    id: "1",
                    src: "/announcement/penyerahan-bibit-jaga2 (1).jpg",
                    alt: "Penyerahan Bibit Jaga 2",
                },
                {
                    id: "2",
                    src: "/announcement/penyerahan-bibit-jaga2 (2).jpg",
                    alt: "Penyerahan Bibit Jaga 2",
                },
                {
                    id: "3",
                    src: "/announcement/penyerahan-bibit-jaga2 (3).jpg",
                    alt: "Penyerahan Bibit Jaga 2",
                },
                {
                    id: "4",
                    src: "/announcement/penyerahan-bibit-jaga2 (4).jpg",
                    alt: "Penyerahan Bibit Jaga 2",
                },
                {
                    id: "5",
                    src: "/announcement/penyerahan-bibit-jaga2 (5).jpg",
                    alt: "Penyerahan Bibit Jaga 2",
                },
                {
                    id: "6",
                    src: "/announcement/penyerahan-bibit-jaga2 (6).jpg",
                    alt: "Penyerahan Bibit Jaga 2",
                },
                {
                    id: "7",
                    src: "/announcement/penyerahan-bibit-jaga2 (7).jpg",
                    alt: "Penyerahan Bibit Jaga 2",
                },
                {
                    id: "8",
                    src: "/announcement/penyerahan-bibit-jaga2 (8).jpg",
                    alt: "Penyerahan Bibit Jaga 2",
                },
                {
                    id: "9",
                    src: "/announcement/penyerahan-bibit-jaga2 (9).jpg",
                    alt: "Penyerahan Bibit Jaga 2",
                },
                {
                    id: "10",
                    src: "/announcement/penyerahan-bibit-jaga2 (10).jpg",
                    alt: "Penyerahan Bibit Jaga 2",
                },
            ],
        },
        "penyerahan-bibit-jaga3": {
            title: "Penyerahan Bibit Ubi Talas Pada Kegiatan Ketahanan Pangan Tahun 2024 Jaga 3",
            description: "Penyerahan bibit ubi talas pada kegiatan ketahanan pangan tahun 2024 Jaga 3",
            photos: [
                {
                    id: "1",
                    src: "/announcement/penyerahan-bibit-jaga3 (1).jpg",
                    alt: "Penyerahan Bibit Jaga 3",
                },
                {
                    id: "2",
                    src: "/announcement/penyerahan-bibit-jaga3 (2).jpg",
                    alt: "Penyerahan Bibit Jaga 3",
                },
                {
                    id: "3",
                    src: "/announcement/penyerahan-bibit-jaga3 (3).jpg",
                    alt: "Penyerahan Bibit Jaga 3",
                },
                {
                    id: "4",
                    src: "/announcement/penyerahan-bibit-jaga3 (4).jpg",
                    alt: "Penyerahan Bibit Jaga 3",
                },
                {
                    id: "5",
                    src: "/announcement/penyerahan-bibit-jaga3 (5).jpg",
                    alt: "Penyerahan Bibit Jaga 3",
                },
                {
                    id: "6",
                    src: "/announcement/penyerahan-bibit-jaga3 (6).jpg",
                    alt: "Penyerahan Bibit Jaga 3",
                },
                {
                    id: "7",
                    src: "/announcement/penyerahan-bibit-jaga3 (7).jpg",
                    alt: "Penyerahan Bibit Jaga 3",
                },
                {
                    id: "8",
                    src: "/announcement/penyerahan-bibit-jaga3 (8).jpg",
                    alt: "Penyerahan Bibit Jaga 3",
                },
                {
                    id: "9",
                    src: "/announcement/penyerahan-bibit-jaga3 (9).jpg",
                    alt: "Penyerahan Bibit Jaga 3",
                },
                {
                    id: "10",
                    src: "/announcement/penyerahan-bibit-jaga3 (10).jpg",
                    alt: "Penyerahan Bibit Jaga 3",
                },
            ],
        },
        "penyerahan-bibit-jaga4": {
            title: "Penyerahan Bibit Ubi Talas Pada Kegiatan Ketahanan Pangan Tahun 2024 Jaga 4",
            description: "Penyerahan bibit ubi talas pada kegiatan ketahanan pangan tahun 2024 Jaga 4",
            photos: [
                {
                    id: "1",
                    src: "/announcement/penyerahan-bibit-jaga4 (1).jpg",
                    alt: "Penyerahan Bibit Jaga 4",
                },
                {
                    id: "2",
                    src: "/announcement/penyerahan-bibit-jaga4 (2).jpg",
                    alt: "Penyerahan Bibit Jaga 4",
                },
                {
                    id: "3",
                    src: "/announcement/penyerahan-bibit-jaga4 (3).jpg",
                    alt: "Penyerahan Bibit Jaga 4",
                },
                {
                    id: "4",
                    src: "/announcement/penyerahan-bibit-jaga4 (4).jpg",
                    alt: "Penyerahan Bibit Jaga 4",
                },
                {
                    id: "5",
                    src: "/announcement/penyerahan-bibit-jaga4 (5).jpg",
                    alt: "Penyerahan Bibit Jaga 4",
                },
                {
                    id: "6",
                    src: "/announcement/penyerahan-bibit-jaga4 (6).jpg",
                    alt: "Penyerahan Bibit Jaga 4",
                },
                {
                    id: "7",
                    src: "/announcement/penyerahan-bibit-jaga4 (7).jpg",
                    alt: "Penyerahan Bibit Jaga 4",
                },
                {
                    id: "8",
                    src: "/announcement/penyerahan-bibit-jaga4 (8).jpg",
                    alt: "Penyerahan Bibit Jaga 4",
                },
                {
                    id: "9",
                    src: "/announcement/penyerahan-bibit-jaga4 (9).jpg",
                    alt: "Penyerahan Bibit Jaga 4",
                },
                {
                    id: "10",
                    src: "/announcement/penyerahan-bibit-jaga4 (10).jpg",
                    alt: "Penyerahan Bibit Jaga 4",
                },
            ],
        },
        // Add more events here...
    }

    const awaitedParams = await params;
    const event = events[awaitedParams.id as keyof typeof events]

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
