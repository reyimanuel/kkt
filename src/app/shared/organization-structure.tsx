import Image from "next/image"

export function OrganizationStructure() {
    return (
        <section className="py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Struktur Organisasi</h2>
                    <p className="max-w-2xl mx-auto text-gray-300">
                        Desa Suluun Tiga memiliki struktur pemerintahan yang terorganisir dan dipimpin oleh Hukum Tua Ellen Irene Tuwo, SE.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="aspect-video relative">
                            <Image
                                src="/struktur.jpg"
                                alt="Struktur Pemerintahan Desa Suluun Tiga"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
