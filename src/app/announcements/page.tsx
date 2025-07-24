import { EventGalleryCard } from "./components/event-gallery-card"

export default function AnnouncementsPage() {
  const events = [
    {
      id: "penyerahan-dana-duka",
      title: "Penyerahan Dana Dukacita",
      description: "Penyerahan dana dukacita kepada keluarga yang berduka",
      coverImage: "/announcement/penyerahan-dana.jpg",
      photoCount: 1,
    },
    {
      id: "musyawarah-desa-kpmp",
      title: "Musyawarah Desa Pendirian Koperasi Desa Merah Putih (KPMP)",
      description: "Musyawarah desa untuk membahas pendirian koperasi desa",
      coverImage: "/announcement/musyawarah-desa.jpg",
      photoCount: 4,
    },
    {
      id: "lomba-desa",
      title: "Lomba Desa",
      description: "Lomba desa untuk meningkatkan partisipasi masyarakat",
      coverImage: "/announcement/lomba-desa.jpg",
      photoCount: 4,
    },
    {
      id: "fasilitasi-rembuk-stunting",
      title: "Fasilitasi Rembuk Stunting",
      description: "Fasilitasi rembuk stunting untuk meningkatkan kesadaran masyarakat",
      coverImage: "/announcement/fasilitasi-rembuk-stunting.jpg",
      photoCount: 4,
    },
    {
      id: "musyawarah-desa-rkpdes",
      title: "Musyawarah Desa Penysunan Rencana Kerja Pemerintah Desa (RKPDes)",
      description: "Musyawarah desa untuk menyusun Rencana Kerja Pemerintah Desa (RKPDes)",
      coverImage: "/announcement/musdes-rkpdes.jpg",
      photoCount: 9,
    },
    {
      id: "musyawarah-desa-apbdes",
      title: "Musyawarah Desa Penyusunan Anggaran Pendapatan dan Belanja Desa (APBDes)",
      description: "Musyawarah desa untuk menyusun Anggaran Pendapatan dan Belanja Desa (APBDes)",
      coverImage: "/announcement/musdes-apbdes.jpg",
      photoCount: 7,
    },
    {
      id: "penyaluran-bantuan-2024",
      title: "Penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) 2024",
      description: "Penyaluran bantuan langsung tunai untuk masyarakat pada tahun 2024 kepada 3 keluarga penerima manfaat (KPM)",
      coverImage: "/announcement/penyaluran-bantuan.jpg",
      photoCount: 3,
    },
    {
      id: "penyaluran-bantuan-2025",
      title: "Penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) 2025",
      description: "Penyaluran bantuan langsung tunai untuk masyarakat pada tahun 2025",
      coverImage: "/announcement/penyaluran-bantuan25.jpg",
      photoCount: 2,
    },
    {
      id: "penyerahan-bibit-jaga1",
      title: "Penyerahan Bibit Ubi Talas Pada Kegiatan Ketahanan Pangan Tahun 2024 Jaga 1",
      description: "Penyerahan bibit ubi talas pada kegiatan ketahanan pangan tahun 2024 Jaga 1",
      coverImage: "/announcement/penyerahan-bibit-jaga1 (1).jpg",
      photoCount: 10,
    },
    {
      id: "penyerahan-bibit-jaga2",
      title: "Penyerahan Bibit Ubi Talas Pada Kegiatan Ketahanan Pangan Tahun 2024 Jaga 2",
      description: "Penyerahan bibit ubi talas pada kegiatan ketahanan pangan tahun 2024 Jaga 2",
      coverImage: "/announcement/penyerahan-bibit-jaga2 (1).jpg",
      photoCount: 10,
    },
    {
      id: "penyerahan-bibit-jaga3",
      title: "Penyerahan Bibit Ubi Talas Pada Kegiatan Ketahanan Pangan Tahun 2024 Jaga 3",
      description: "Penyerahan bibit ubi talas pada kegiatan ketahanan pangan tahun 2024 Jaga 3",
      coverImage: "/announcement/penyerahan-bibit-jaga3 (1).jpg",
      photoCount: 10,
    },
    {
      id: "penyerahan-bibit-jaga4",
      title: "Penyerahan Bibit Ubi Talas Pada Kegiatan Ketahanan Pangan Tahun 2024 Jaga 4",
      description: "Penyerahan bibit ubi talas pada kegiatan ketahanan pangan tahun 2024 Jaga 4",
      coverImage: "/announcement/penyerahan-bibit-jaga4 (1).jpg",
      photoCount: 10,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Events Gallery */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventGalleryCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
