"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">logo</span>
                        </div>
                        <span className="font-bold text-xl">Desa Suluun</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
                            Beranda
                        </Link>
                        <Link href="/information" className="text-sm font-medium hover:text-green-600 transition-colors">
                            Profil & Sejarah
                        </Link>
                        <Link href="/announcements" className="text-sm font-medium hover:text-green-600 transition-colors">
                            Berita & Acara
                        </Link>
                        <Link href="/complaints" className="text-sm font-medium hover:text-green-600 transition-colors">
                            Ajukan Pengaduan
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
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
                            <Link
                                href="/information"
                                className="text-sm font-medium hover:text-green-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Profil & Sejarah
                            </Link>
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
                                Ajukan Pengaduan
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
