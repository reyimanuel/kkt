import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-gray-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">logo</span>
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
                                <span className="text-gray-300">+62 813-4005-3202</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span className="text-gray-300">desasuluun@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span className="text-gray-300">
                                    Jl. Raya Desa Suluun No. 123, Kecamatan Suluun, Kabupaten Bernat, Provinsi Juna
                                    <br />
                                    Desa Suluun, Kabupaten bernat, Provinsi Juna
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-300">© {new Date().getFullYear()} Desa Suluun. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
