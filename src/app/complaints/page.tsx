"use client"
import { WhatsappSection } from "./components/whatsapp-section"
import { InstructionSection } from "./components/instruction-section"

export default function ComplaintsPage() {
    const mainContact = {
        name: "Kontak Pengaduan Desa",
        phone: "+6281526191092",
        hours: "Senin-Jumat: 8AM-5PM",
        description: "Satu kontak untuk semua pengaduan dan masalah desa",
    }

    return (
        <div className="min-h-screen">
            <WhatsappSection
                title="Kontak Pengaduan Desa"
                subtitle="Hubungi kami untuk semua pengaduan dan masalah desa"
                contact={mainContact}
            />

            <InstructionSection />
        </div>
    )
}
