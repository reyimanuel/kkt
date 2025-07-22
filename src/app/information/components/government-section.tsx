export function GovernmentSection() {
    const timelineItems = [
        { year: "1785 - 1881", name: "UKUNG WAWORUNTU" },
        { year: "1811 - 1835", name: "UKUNG UTU IGIR" },
        { year: "1835 - 1862", name: "HUKUM TUA REMBANG SUMUAL" },
        { year: "1862 - 1894", name: "HUKUM TUA LUKAS SUMUAL" },
        { year: "1894 - 1920", name: "HUKUM TUA JOHAN ZETH SUMUAL" },
        { year: "1920 - 1945", name: "HUKUM TUA PAULUS JOS WIOS SUMUAL" },
        { year: "1945 - 1945", name: "HUKUM TUA SEMUEL SUMUAL TUWO" },
        { year: "1945 - 1946", name: "PEJABAT HUKUM TUA FREDRIK SULING" },
        { year: "1946 - 1948", name: "HUKUM TUA GERARD  PAUL RUNTUWENE" },
        { year: "1948 - 1949", name: "PEJABAT HUKUM TUA ALEXANDER F. PIRIS" },
        { year: "1949 - 1950", name: "PEJABAT HUKUM TUA BERNARD LEONARD RAU" },
        { year: "1950 - 1956", name: "HUKUM TUA WILSON DJIDON IGIR" },
        { year: "1956 - 1958", name: "PEJABAT HUKUM TUA ALEXIUS NONOW MANTUR" },
        { year: "1958 - 1960", name: "HUKUM TUA KEES J. TUWO" },
        { year: "1960 - 1963", name: "HUKUM TUA BARNABAS LOLE TUAR" },
        { year: "1963 - 1964", name: "PEJABAT HUKUM TUA SEMUEL J. TANGKULUNG" },
        { year: "1964 - 1971", name: "HUKUM TUA WILLEM F.A. REGAR" },
        { year: "1971 - 1973", name: "PEJABAT HUKUM TUA SEMUEL J. TANGKULUNG" },
        { year: "1973 - 1978", name: "HUKUM TUA BONTEKU A. LUMEMPOW" },
    ]

    const tonaas = [
        { name: "Tonaas Palar" },
        { name: "Tonaas Koyansow" },
        { name: "Tonaas Mawara" },
        { name: "Tonaas Wuntuan" },
        { name: "Tonaas Waworuntu" },
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Sejarah Pimpinan Desa Suluun</h2>
                </div>

                <div className="max-w-4xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold mb-4">Tonaas-Tonaas Suluun</h3>
                    <p className="text-gray-600 mb-4">
                        Desa Suluun pada mulanya dipimpin oleh Tonaas-Tonaas yan dianggap kuat dan mampu memimpin rakyat terutama dalam menghadapi gangguan musuh
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        {tonaas.map((tonaas, index) => (
                            <li key={index} className="text-gray-700">{tonaas.name}</li>
                        ))}
                    </ul>
                </div>

                <div className="max-w-4xl mx-auto">
                    <p className="text-gray-600 mb-4">
                        Menjelang akhir abad XVIII Desa Suluun dipimpin oleh Ukung atau Hukum Tua/Kepala Desa yakni
                    </p>
                    <div className="space-y-8">
                        {timelineItems.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-20 text-right">
                                    <span className="inline-flex items-center px-1 py-0.5 rounded-full text-xs font-medium border border-gray-300 text-gray-700">
                                        {item.year}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold">{item.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
