import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">GV</span>
                            </div>
                            <span className="font-bold text-lg">Greenfield Village</span>
                        </div>
                        <p className="text-sm text-gray-600">A peaceful community where tradition meets progress.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/information" className="text-gray-600 hover:text-green-600 transition-colors">
                                    Village History
                                </Link>
                            </li>
                            <li>
                                <Link href="/announcements" className="text-gray-600 hover:text-green-600 transition-colors">
                                    Events & News
                                </Link>
                            </li>
                            <li>
                                <Link href="/complaints" className="text-gray-600 hover:text-green-600 transition-colors">
                                    Submit Complaint
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                                    Village Council
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                                    Public Works
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                                    Parks & Recreation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                                    Emergency Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span className="text-gray-600">(555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span className="text-gray-600">info@greenfieldvillage.gov</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span className="text-gray-600">
                                    123 Main Street
                                    <br />
                                    Greenfield Village, ST 12345
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-600">© {new Date().getFullYear()} Greenfield Village. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
