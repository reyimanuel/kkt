"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [isInformationOpen, setIsInformationOpen] = useState(false)

    const informationLinks = [
        { href: "/information/establishment", label: "Sejarah Perintisan Desa" },
        { href: "/information/government", label: "Sejarah Pemerintahan" },
        { href: "/information/expansion", label: "Pemekaran Desa" },
        { href: "/information/gallery", label: "Galeri Desa" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-700 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
                            <Image
                                src="/logo.jpg"
                                alt="Desa Suluun Logo"
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                        </div>
                        <span className="font-bold text-xl">Desa Suluun Tiga</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
                            Beranda
                        </Link>

                        {/* Information Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 text-sm font-medium hover:text-green-600 transition-colors"
                                onMouseEnter={() => setIsInformationOpen(true)}
                                onMouseLeave={() => setIsInformationOpen(false)}
                            >
                                <Link href="/information" className="text-sm font-medium hover:text-green-600 transition-colors">
                                    Informasi
                                </Link>
                                <ChevronDown className="h-4 w-4" />
                            </button>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute top-full left-0 mt-1 w-64 bg-gray-700 border border-gray-800 rounded-md shadow-lg transition-all duration-200 ${isInformationOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                    }`}
                                onMouseEnter={() => setIsInformationOpen(true)}
                                onMouseLeave={() => setIsInformationOpen(false)}
                            >
                                <div className="py-2">
                                    {informationLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-green-600 transition-colors"
                                            onClick={() => setIsInformationOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href="/announcements" className="text-sm font-medium hover:text-green-600 transition-colors">
                            Berita & Acara
                        </Link>
                        <Link href="/complaints" className="text-sm font-medium hover:text-green-600 transition-colors">
                            Masukkan Pengaduan
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden border-t py-4">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-sm font-medium hover:text-green-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Beranda
                            </Link>

                            {/* Mobile Information Section */}
                            <div>
                                <button
                                    className="flex items-center justify-between w-full text-sm font-medium text-gray-50 hover:text-green-600 transition-colors py-2"
                                    onClick={() => setIsInformationOpen(!isInformationOpen)}
                                >
                                    Informasi
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isInformationOpen ? "rotate-180" : ""}`} />
                                </button>
                                {isInformationOpen && ( // Tampilkan sub-menu hanya jika isInformationOpen true
                                    <div className="pl-4 space-y-2">
                                        {informationLinks.map((link, index) => (
                                            <Link
                                                key={index}
                                                href={link.href}
                                                className="block text-sm text-gray-100 hover:text-green-600 transition-colors py-1"
                                                onClick={() => {
                                                    setIsOpen(false) // Tutup menu utama
                                                    setIsInformationOpen(false) // Tutup dropdown informasi
                                                }}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/announcements"
                                className="text-sm font-medium hover:text-green-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Berita & Acara
                            </Link>
                            <Link
                                href="/complaints"
                                className="text-sm font-medium hover:text-green-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Masukkan Pengaduan
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
