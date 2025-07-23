export function ExpansionSection() {
    const villageExpansion = {
        originalDivision: {
            date: "14 Februari 1978",
            description: "Desa Suluun dibagi menjadi 2 bagian",
            divisions: [
                { original: "Desa Suluun Timur", renamed: "Desa Suluun Satu" },
                { original: "Desa Suluun Barat", renamed: "Desa Suluun Dua" },
            ],
        },
        secondDivision: {
            date: "14 Februari 2007",
            description:
                "Karena kemajuan, perluasan pemukiman, pertumbuhan penduduk yang pesat, dan peningkatan kesejahteraan masyarakat, Desa Suluun Satu kemudian dibagi lagi",
            result: ["Desa Suluun Satu", "Desa Suluun Tiga"],
        },
    }

    const suluunSatuLeaders = [
        { name: "Bonteku A. Lumempow", position: "Kepala Desa", period: "1978" },
        { name: "Semuel J. Tangkulung", position: "Pejabat Hukum Tua", period: "1978 – 1979" },
        { name: "Jocke J. Tuwo", position: "Kepala Desa", period: "1979 – 1982" },
        { name: "Jootje J. Tengor", position: "Pejabat Kepala Desa", period: "1982 – 1984" },
        { name: "Johan A. Tuwo", position: "Kepala Desa", period: "1984 – 1993" },
        { name: "Engel N. Walangitan", position: "Pejabat Kepala Desa", period: "1993" },
        { name: "Johan A. Tuwo", position: "Kepala Desa", period: "1993 – 2002" },
        { name: "Jhonry Regar", position: "Kepala Desa", period: "2003" },
        { name: "Johan F. Igir", position: "Plt. Hukum Tua", period: "2003" },
        { name: "Johan A. Tuwo", position: "Kepala Desa", period: "2004 – 2008" },
    ]

    const expansionCommittee = [
        { position: "Ketua", name: "Wolter Rindengan" },
        { position: "Wakil Ketua", name: "Lexi Walangitan" },
        { position: "Sekretaris", name: "Raymond S.A. Tengor" },
    ]

    const suluunTigaOfficials = [
        { position: "Sekretaris Desa", name: "Raymond S.A. Tengor" },
        { position: "Kaur Pemerintahan", name: "Marthen Langi" },
        { position: "Kaur Pembangunan", name: "Zony Mantur" },
        { position: "Kaur Keuangan", name: "Joke Runtuwene" },
        { position: "Kepala Jaga I", name: "Joke Momongan" },
        { position: "Meweteng Jaga I", name: "Jefry Rauan" },
        { position: "Kepala Jaga II", name: "Albert Kowal" },
        { position: "Meweteng Jaga II", name: "Servius Wior" },
        { position: "Kepala Jaga III", name: "Tomeks Sumual" },
        { position: "Meweteng Jaga III", name: "Jutje Langi" },
        { position: "Kepala Jaga IV", name: "Ventje Kowal" },
        { position: "Meweteng Jaga IV", name: "Wildat Monintja" },
        { position: "Kepala Jaga V", name: "Jhon Tumober" },
        { position: "Meweteng Jaga V", name: "Welem Pomantow" },
    ]

    const suluunTigaLeaders = [
        { name: "Lexi Walangitan", position: "Pejabat Hukum Tua", period: "2007 – 2008" },
        { name: "Noudy N. Runtuwene", position: "Hukum Tua", period: "2008 – 2015" },
        { name: "Frederik J. Pomantow, SPd, MSi", position: "Pejabat Hukum Tua", period: "2015 – 2016" },
        { name: "Jery Robert Regar, S.Sos", position: "Hukum Tua", period: "2016 – 2022" },
        { name: "Ellen I. Tuwo, SE", position: "Pejabat Hukum Tua", period: "2022 – Present" },
    ]

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Sejarah Pemekaran Desa</h2>
                        <p className="text-gray-100 text-lg">
                            Informasi sejarah pemekaran desa Suluun
                        </p>
                    </div>

                    {/* First Division - 1978 */}
                    <div className="mb-16">
                        <div className="bg-blue-800 border border-blue-900 rounded-lg p-8 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-blue-100">
                                    {villageExpansion.originalDivision.date}
                                </span>
                                <h3 className="text-2xl font-bold text-blue-100">Pemekaran Desa Pertama</h3>
                            </div>
                            <p className="text-blue-100 mb-6">{villageExpansion.originalDivision.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {villageExpansion.originalDivision.divisions.map((division, index) => (
                                    <div key={index} className="bg-gray-700 rounded-lg p-6 border border-blue-700">
                                        <div className="text-center">
                                            <div className="text-lg font-semibold text-gray-200 mb-2">Nama desa sebelumnya:</div>
                                            <div className="text-xl font-bold text-blue-200 mb-4">{division.original}</div>
                                            <div className="text-sm text-gray-200 mb-2">Berubah menjadi</div>
                                            <div className="text-lg font-bold text-green-200">{division.renamed}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Suluun Satu Leaders */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Kepala Desa Suluun Satu</h3>
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                No.
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Nama
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Posisi
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Periode
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-600 divide-y divide-gray-200">
                                        {suluunSatuLeaders.map((leader, index) => (
                                            <tr key={index} className="hover:bg-gray-900">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">{index + 1}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">{leader.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{leader.position}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{leader.period}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Second Division - 2007 */}
                    <div className="mb-16">
                        <div className="bg-green-900 border border-green-800 rounded-lg p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-green-100">
                                    {villageExpansion.secondDivision.date}
                                </span>
                                <h3 className="text-2xl font-bold text-green-100">Pemekaran Kedua Desa</h3>
                            </div>
                            <p className="text-green-100 mb-6">{villageExpansion.secondDivision.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {villageExpansion.secondDivision.result.map((village, index) => (
                                    <div key={index} className="bg-gray-600 rounded-lg p-6 border border-green-700 text-center">
                                        <div className="text-xl font-bold text-gray-100">{village}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-600 rounded-lg p-6 border border-green-700">
                                <h4 className="text-lg font-bold mb-4 text-gray-100">Panitia Pemekaran</h4>
                                <p className="text-sm text-gray-100 mb-4">
                                    Berdasarkan Surat Keputusan Badan Permusyawaratan Desa, dibentuknya panitia pemekaran
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {expansionCommittee.map((member, index) => (
                                        <div key={index} className="text-center p-4 bg-green-700 rounded-lg">
                                            <div className="font-semibold text-green-100">{member.position}</div>
                                            <div className="text-green-100">{member.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Legal Framework */}
                    <div className="mb-16">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold mb-3 text-yellow-900">Kerangka Hukum</h4>
                            <p className="text-yellow-800 mb-4">
                                Pemekaran desa ini resmi ditetapkan melalui Peraturan Daerah Kabupaten Minahasa Selatan (PERDA)
                                No. 60 Tahun 2006 tentang Pembentukan 11 Desa, salah satunya adalah Desa Suluun Tiga.
                            </p>
                            <p className="text-yellow-800">
                                Perluasan tersebut diresmikan secara resmi oleh Bupati Minahasa Selatan,
                                <strong> Drs. Ramoy Markus Luntungan</strong> yang juga ditunjuk sebagai Penjabat Kepala Desa (Pejabat Hukum
                                Tua) dari Desa Suluun Tiga, <strong>Bpk. Lexi Walangitan</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Suluun Tiga Village Officials */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Perangkat Desa Suluun Tiga</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {suluunTigaOfficials.map((official, index) => (
                                <div key={index} className="bg-gray-600 rounded-lg border border-gray-800 shadow-sm p-4">
                                    <div className="text-sm font-medium text-gray-100 mb-1">{official.position}</div>
                                    <div className="text-lg font-bold text-gray-100">{official.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Suluun Tiga Leaders */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Hukum Tua yang memimpin desa Suluun Tiga</h3>
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                No.
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Nama
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Posisi
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Periode
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-600 divide-y divide-gray-200">
                                        {suluunTigaLeaders.map((leader, index) => (
                                            <tr key={index} className="hover:bg-gray-800">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">{index + 1}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">{leader.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{leader.position}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{leader.period}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Current Status */}
                    <div className="bg-purple-800 border border-purple-900 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-4 text-purple-100">Struktur Desa</h3>
                        <p className="text-purple-100 mb-6">
                            Saat ini, Desa Suluun yang asli telah berkembang menjadi tiga desa administratif terpisah:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-600 rounded-lg p-6 border border-purple-800 text-center">
                                <div className="text-xl font-bold text-purple-100 mb-2">Desa Suluun Satu</div>
                                <div className="text-sm text-purple-100">Dibentuk: 1978</div>
                            </div>
                            <div className="bg-gray-600 rounded-lg p-6 border border-purple-800 text-center">
                                <div className="text-xl font-bold text-purple-100 mb-2">Desa Suluun Dua</div>
                                <div className="text-sm text-purple-100">Dibentuk: 1978</div>
                            </div>
                            <div className="bg-gray-600 rounded-lg p-6 border border-purple-800 text-center">
                                <div className="text-xl font-bold text-purple-100 mb-2">Desa Suluun Tiga</div>
                                <div className="text-sm text-purple-100">Dibentuk: 2007</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
