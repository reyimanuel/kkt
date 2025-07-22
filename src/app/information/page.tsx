import { Calendar, MapPin, Users, Award } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "../shared/hero-section"

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
            <HeroSection
                title="Informasi Desa Suluun"
                subtitle="Jelajahi sejarah, pemerintahan, dan budaya Desa Suluun"
                backgroundGradient="from-blue-600 to-green-600"
            />

            {/* Information Sections Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Jelajahi Desa Suluun</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Selami berbagai aspek Desa Suluun - dari sejarah perintisan hingga sejarah kepemimpinan kami saat ini
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {informationSections.map((section, index) => (
                            <Link key={index} href={section.href} className="group">
                                <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                                    <div className={`h-32 bg-gradient-to-br ${section.color} relative`}>
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{section.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-4xl mx-auto">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-green-900 mb-2">Quick Navigation</h3>
                            <p className="text-green-700">Jump directly to the information you're looking for</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {informationSections.slice(0, 4).map((section, index) => (
                                <Link
                                    key={index}
                                    href={section.href}
                                    className="text-center p-3 bg-white rounded-md border border-green-200 hover:border-green-400 hover:bg-green-50 transition-colors"
                                >
                                    <div className="text-sm font-medium text-green-800">{section.title}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
