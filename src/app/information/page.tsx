import Link from "next/link"

export default function InformationPage() {
    const informationSections = [
        {
            title: "Sejarah Perintisan Desa",
            description: "Pelajari bagaimana pemukiman kami menjadi desa yang resmi",
            href: "/information/establishment",
            color: "from-purple-500 to-blue-500",
        },
        {
            title: "Sejarah Pemerintahan",
            description: "Sejarah pemerintahan desa Suluun",
            href: "/information/government",
            color: "from-red-500 to-orange-500",
        },
        {
            title: "Pemekaran Desa",
            description: "Sejarah pemekaran desa",
            href: "/information/expansion",
            color: "from-teal-500 to-green-500",
        },
        {
            title: "Village Gallery",
            description: "Photos showcasing the beauty of our community",
            href: "/information/gallery",
            color: "from-pink-500 to-purple-500",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Quick Navigation */}
            <section className="py-16 bg-gray-800 mt-30">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Jelajahi Desa</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Selami berbagai aspek Desa Suluun - dari sejarah perintisan hingga sejarah kepemimpinan kami saat ini
                    </p>
                </div>
                <div className="container mx-auto px-4">
                    <div className="bg-green-900 border border-green-800 rounded-lg p-8 max-w-4xl mx-auto">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-green-50 mb-2">Navigasi Cepat</h3>
                            <p className="text-green-100">Masuk ke informasi yang anda inginkan</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {informationSections.slice(0, 4).map((section, index) => (
                                <Link
                                    key={index}
                                    href={section.href}
                                    className="text-center p-3 bg-green-600 rounded-md border border-green-800 hover:border-green-700 hover:bg-gray-400 transition-colors"
                                >
                                    <div className="text-sm font-medium text-white">{section.title}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
