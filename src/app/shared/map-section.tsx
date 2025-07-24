export function MapSection() {
    return <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Peta</h2>
                <p className="text-gray-300">Berlokasi di Sulta, Kabupaten Minahasa Selatan, Sulawesi Utara</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.567891234567!2d124.6983421!3d1.2721545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328768426256fe3b%3A0x55802b478e6c1b5b!2sSuluun%20Tiga%2C%20Sulta%2C%20Kabupaten%20Minahasa%20Selatan%2C%20Sulawesi%20Utara!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Suluun Village Location" />
                </div>
                <div className="mt-6 text-center">
                    <p className="text-gray-300 mb-2">
                        <strong>Alamat:</strong> Suluun Tiga, Sulta, Kabupaten Minahasa Selatan, Sulawesi Utara, Indonesia
                    </p>
                    <a
                        href="https://www.google.com/maps/place/Suluun+Tiga,+Sulta,+Kabupaten+Minahasa+Selatan,+Sulawesi+Utara/@1.2721545,124.6983421,15z/data=!3m1!4b1!4m6!3m5!1s0x328768426256fe3b:0x55802b478e6c1b5b!8m2!3d1.2722053!4d124.7105306!16s%2Fg%2F1hc0gkzy0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-500 transition-colors"
                    >
                        Lihat di Google Maps
                    </a>
                </div>
            </div>
        </div>
    </section>
}

