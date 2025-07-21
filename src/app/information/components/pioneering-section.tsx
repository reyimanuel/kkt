import Image from "next/image"

export function PioneeringSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Perintisan</h2>
                        <p className="text-gray-600 text-lg">
                            Desa Suluun Tiga terletak di pegunungan dengan ketinggian kurang lebih 450-510 Meter di atas permukaan laut.
                            Bila memasuki Desa Suluun Tiga yaitu dari arah timur, sepanjang jalan terbentang luas panorama alam yang indah
                            dengan hamparan tanaman cengkih yang merupakan tanaman primadona masyarakat Suluun di masa jayanya harga cengkih.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <Image
                                src="/placeholder.svg?height=400&width=600&text=Early+Pioneers"
                                alt="Early pioneers of Suluun Village"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">TONAAS KOYANSOW</h3>
                            <p className="text-gray-600">
                                Tonaas Koyansow adalah Tonaas In Uma (Kepala Pertanian), Bukan pendiri Kampung SULUUN Kemahirannya hanya dibidang Pertanian.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h3 className="text-2xl font-bold mb-4">TONAAS PALAR</h3>
                            <p className="text-gray-600">
                                Tonaas Palar adalah Tonaas Yang mendirikan Kampung. Kemahirannya adalah berburu. Suatu ketika ia sedang mengejar hewan buruannya, ia tiba pada areal yang sekarang menjadi Pemukiman Suluun. Ia mengamati bahwa Lokasi ini
                                cocok dan baik untuk dijadikan tempat pemukiman. Maka Tonaas Palar menentukan waktu yang baik untuk merintis dan atau mendirikan desa baru dan sebagai bukti ditengah Desa Suluun terdapat WARUGA PALAR
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Image
                                src="/placeholder.svg?height=400&width=600&text=Early+Settlement"
                                alt="Early settlement challenges"
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
