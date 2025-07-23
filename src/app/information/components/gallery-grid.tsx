import Image from "next/image"

export function GalleryGrid() {
    const galleryItems = [
        {
            src: "/gallery/desa.png",
            alt: "Desa Suluun 3",
            title: "View Desa Suluun 3 dari atas",
            description: "Pemandangan indah Desa Suluun 3 melalui drone",
        },
        {
            src: "/gallery/jalan.jpg",
            alt: "Jalan Utama",
            title: "Jalan Utama",
            description: "Jalan utama desa",
        },
        {
            src: "/gallery/jalan2.jpg",
            alt: "Jalan Desa",
            title: "Jalan Desa",
            description: "Pemandangan jalan desa",
        },
        {
            src: "/gallery/Kantor2.JPG",
            alt: "Kantor Desa Suluun 3 dan Anggota KKT",
            title: "Kantor Desa Suluun 3 dan Anggota KKT",
            description: "Kantor Desa Suluun 3 dan Anggota KKT",
        },
        {
            src: "/gallery/kantor3.JPG",
            alt: "Kantor Desa Suluun 3 dan Anggota KKT",
            title: "Kantor Desa Suluun 3 dan Anggota KKT",
            description: "Kantor Desa Suluun 3 dan Anggota KKT",
        },
        {
            src: "/gallery/kantor4.JPG",
            alt: "Kantor Desa Suluun 3 dan Anggota KKT",
            title: "Kantor Desa Suluun 3 dan Anggota KKT",
            description: "Kantor Desa Suluun 3 dan Anggota KKT",
        },
    ]

    return (
        <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Galeri Desa</h2>
                    <p className="text-gray-300">Jelajahi keindahan dan karakter komunitas kami melalui foto</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="bg-gray-600 rounded-lg border border-gray-700 shadow-sm overflow-hidden">
                            <div className="aspect-video relative">
                                <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
