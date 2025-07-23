import { MessageCircle, Phone, Clock, Users } from "lucide-react"

interface WhatsappSectionProps {
    title: string
    subtitle: string
    contact: {
        name: string
        phone: string
        hours: string
        description: string
    }
}

export function WhatsappSection({ title, subtitle, contact }: WhatsappSectionProps) {
    const generateWhatsAppLink = (phone: string) => {
        const message = encodeURIComponent(
            `Halo, saya ingin menyampaikan keluhan.\n\nNama: \nAlamat: \nKeluhan: \n\nTerima kasih atas waktu dan perhatiannya.`,
        )
        return `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${message}`
    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-100">{title}</h2>
                        <p className="text-gray-400 text-lg">{subtitle}</p>
                    </div>

                    {/* Main Contact Card */}
                    <div className="bg-green-900 rounded-lg border border-green-700 shadow-xl p-8 mb-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                                    <Users className="h-10 w-10 text-white" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-green-100 mb-2">Pengaduan Desa</h3>
                            <p className="text-green-200 mb-6">{contact.description}</p>

                            <div className="bg-green-800 rounded-lg p-6 mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                    <div>
                                        <Phone className="h-6 w-6 text-green-300 mx-auto mb-2" />
                                        <p className="font-semibold text-green-100">{contact.name}</p>
                                        <p className="text-green-200 text-sm">{contact.phone}</p>
                                    </div>
                                    <div>
                                        <Clock className="h-6 w-6 text-green-300 mx-auto mb-2" />
                                        <p className="font-semibold text-green-100">Tersedia</p>
                                        <p className="text-green-200 text-sm">{contact.hours}</p>
                                    </div>
                                    <div>
                                        <MessageCircle className="h-6 w-6 text-green-300 mx-auto mb-2" />
                                        <p className="font-semibold text-green-100">Waktu Respon</p>
                                        <p className="text-green-200 text-sm">Dalam 24 Jam</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={generateWhatsAppLink(contact.phone)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold shadow-lg"
                            >
                                <MessageCircle className="h-6 w-6" />
                                Kirim Pesan
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
