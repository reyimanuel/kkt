import type { LucideIcon } from "lucide-react"

interface ContactInfo {
    icon: LucideIcon
    title: string
    value: string
    color: string
}

interface ContactInfoSectionProps {

    contacts: ContactInfo[]
}

export function ContactInfoSection({ contacts }: ContactInfoSectionProps) {
    return (
        <section id="contact" className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Kontak Kami</h2>
                    <p className="text-gray-300">Hubungi kami melalui informasi di bawah ini:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 rounded-lg border border-gray-800 shadow-sm hover:shadow-lg transition-shadow text-center p-6"
                        >
                            <div className="flex justify-center mb-4">
                                <contact.icon className={`h-8 w-8 ${contact.color}`} />
                            </div>
                            <h3 className="font-semibold mb-2">{contact.title}</h3>
                            <p className="text-gray-300">{contact.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
