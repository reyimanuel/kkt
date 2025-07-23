import Image from "next/image"

export function EstablishmentSection() {
    return (
        <section className="py-15 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Pendirian Desa Suluun</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Pendirian Kampung (Tumani Roong)</h3>
                            <p className="text-gray-300 mb-4">
                                Desa Suluun diperkirakan didirikan pada akhir abad ke-XVII dan tidak dapat ditentukan
                                oleh data yang dapat diterima dan atau mendukung kepastian tahun berapa Desa SULUUN didirikan.
                            </p>
                            <h3 className="text-2xl font-bold mb-4">Proses Terbentuknya Nama Desa</h3>
                            <p className="text-gray-300">
                                Suluun berasal dari kata Tontemboan 'Sulu I Serap' artinya Sudah Bercahaya. Suluum asal katanya 'Sulu' artinya 'Cahaya Bulan'.
                                Kata atau nama Suluun terungkap ketika Tonaas Palar hendak meletakkan Batu Dasar dalam bahasa Tontemboan disebut 'Tuur Ro Towa' Atau 'Tumotowa'.
                                Tepat setelah cahaya Bulan bulan purnama menyinari tempat yang telah disediakan untuk memasang Batu Dasar / Tumotowa,
                                Maka Tonaas Palar mengucapkan Suluum yang karena perubahan ucapan menjadi Suluun. Jadi Suluun Didirikan disaat Bulan Purnama.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/placeholder.svg?height=400&width=600&text=Village+Establishment+Ceremony"
                                alt="Village establishment ceremony"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
