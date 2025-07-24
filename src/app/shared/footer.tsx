import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="border-t border-gray-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-15 w-15 flex items-center justify-center">
                                <Image
                                    src="/logo.jpg"
                                    alt="Desa Suluun Logo"
                                    width={32}
                                    height={32}
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-bold text-lg">Desa Suluun</span>
                        </div>
                        <p className="text-sm text-gray-300">Komunitas yang damai di mana tradisi bertemu kemajuan.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Akses Cepat</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-green-600 transition-colors">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/information" className="text-gray-300 hover:text-green-600 transition-colors">
                                    Informasi
                                </Link>
                            </li>
                            <li>
                                <Link href="/announcements" className="text-gray-300 hover:text-green-600 transition-colors">
                                    Berita & Acara
                                </Link>
                            </li>
                            <li>
                                <Link href="/complaints" className="text-gray-300 hover:text-green-600 transition-colors">
                                    Ajukan Pengaduan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Info Kontak</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span className="text-gray-300">+62815-2619-1092</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span className="text-gray-300">Desasuluuntiga@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span className="text-gray-300">
                                    Kantor Hukum Tua Desa Suluun Tiga
                                    <br />
                                    Desa Suluun Tiga, Kabupaten Minahasa Selatan, Provinsi Sulawesi Utara
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-300">© {new Date().getFullYear()} Desa Suluun Tiga. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
