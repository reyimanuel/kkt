import Image from "next/image"

export function EstablishmentSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Pendirian Desa Suluun</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Pendirian Kampung (Tumani' Roong)</h3>
                            <p className="text-gray-600 mb-4">
                                Desa Suluun diperkirakan didirikan pada akhir abad ke- XVII dan tidak dapat ditentukan
                                oleh data yang dapat diterima dan atau mendukung kepastian tahun berapa Desa SULUUN didirikan.
                            </p>
                            <p className="text-gray-600">
                                SULUUN berasal dari kata Tontemboan “SULU I SERAP artinya SUDAH BERCAHAYA. SULUUM asal katanya SULU artinya “CAHAYA BULAN.
                                Kata atau nama SULUUN terungkap ketika TONAAS PALAR hendak meletakkan BATU DASAR dalam bahasa Tontemboan disebut TUUR RO TOWA Atau TUMOTOWA.
                                Tepat setelah cahaya Bulan bulan Purnama menyinari tempat yang telah disediakan untuk memasang Batu Dasar / TUMOTOWA,
                                Maka TONAAS PALAR mengucapkan SULUUM yang karena perubahan ucapan menjadi SULUUN. Jadi SULUUN Didirikan disaat BULAN PURNAMA.
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
