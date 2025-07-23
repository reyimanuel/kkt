import { MessageSquare, FileText, Clock, CheckCircle } from "lucide-react"

export function InstructionSection() {
    const steps = [
        {
            icon: MessageSquare,
            title: "Kirim Pesan WhatsApp",
            description: "Klik tombol di atas untuk membuka WhatsApp dengan template yang sudah diisi",
            color: "text-blue-400",
        },
        {
            icon: FileText,
            title: "Isi Detail",
            description: "Lengkapi template dengan informasi pribadi dan detail pengaduan Anda",
            color: "text-green-400",
        },
        {
            icon: Clock,
            title: "Tunggu Respon",
            description: "Tim kami akan merespon dalam kurun waktu 24 jam",
            color: "text-yellow-400",
        },
        {
            icon: CheckCircle,
            title: "Tindak Lanjut",
            description: "Kami akan terus memperbarui Anda tentang kemajuan dan penyelesaian pengaduan Anda",
            color: "text-purple-400",
        },
    ]

    return (
        <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-100">Bagaimana memasukan pengaduan?</h2>
                        <p className="text-gray-400">Ikuti langkah-langkah sederhana ini untuk mengajukan pengaduan melalui WhatsApp</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="relative mb-4">
                                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto border-2 border-gray-600">
                                        <step.icon className={`h-8 w-8 ${step.color}`} />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-100">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-gray-700 rounded-lg border border-gray-600 p-6">
                        <h3 className="text-lg font-bold mb-4 text-gray-100">Apa yang harus dimasukkan dalam pesan WhatsApp Anda?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3 text-gray-200">Informasi yang Diperlukan:</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                                        <span>Nama lengkap dan informasi kontak Anda</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                                        <span>Alamat detailmu dalam Desa Suluun</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                                        <span>Komplain tentang bagian apa</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                                        <span>Penjelasan detail terkait masalah</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-gray-200">Optional but Helpful:</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                                        <span>Lokasi masalah (jika berlaku)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                                        <span>Foto atau video dari masalah</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                                        <span>Kapan masalah tersebut dimulai atau terjadi</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                                        <span>Upaya sebelumnya untuk menyelesaikannya</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
