import { Users, UserCheck, Home, MapPin } from "lucide-react"

export function VillageStatisticSection() {
    const mainStats = [
        {
            icon: Users,
            value: "1,022",
            label: "Total Populasi",
            color: "text-blue-400",
            bgColor: "bg-blue-900/20",
            borderColor: "border-blue-700",
        },
        {
            icon: UserCheck,
            value: "532",
            label: "Populasi Laki-laki",
            color: "text-green-400",
            bgColor: "bg-green-900/20",
            borderColor: "border-green-700",
        },
        {
            icon: UserCheck,
            value: "490",
            label: "Populasi     Perempuan",
            color: "text-purple-400",
            bgColor: "bg-purple-900/20",
            borderColor: "border-purple-700",
        },
        {
            icon: Home,
            value: "320",
            label: "Kepala Keluarga (KK)",
            color: "text-orange-400",
            bgColor: "bg-orange-900/20",
            borderColor: "border-orange-700",
        },
    ]

    const jagaData = [
        {
            name: "Jaga I",
            population: 205,
            households: 65,
            color: "bg-gradient-to-br from-blue-600 to-blue-700",
            textColor: "text-blue-400",
        },
        {
            name: "Jaga II",
            population: 251,
            households: 78,
            color: "bg-gradient-to-br from-green-600 to-green-700",
            textColor: "text-green-400",
        },
        {
            name: "Jaga III",
            population: 198,
            households: 62,
            color: "bg-gradient-to-br from-purple-600 to-purple-700",
            textColor: "text-purple-400",
        },
        {
            name: "Jaga IV",
            population: 195,
            households: 59,
            color: "bg-gradient-to-br from-orange-600 to-orange-700",
            textColor: "text-orange-400",
        },
        {
            name: "Jaga V",
            population: 173,
            households: 56,
            color: "bg-gradient-to-br from-red-600 to-red-700",
            textColor: "text-red-400",
        },
    ]

    // Calculate percentages for gender distribution
    const malePercentage = ((532 / 1022) * 100).toFixed(1)
    const femalePercentage = ((490 / 1022) * 100).toFixed(1)

    return (
        <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-100">Statistik Populasi Desa</h2>
                        <p className="text-gray-400 text-lg">Data demografis Desa Suluun 3</p>
                    </div>

                    {/* Main Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {mainStats.map((stat, index) => (
                            <div
                                key={index}
                                className={`${stat.bgColor} ${stat.borderColor} border rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300`}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className={`p-3 rounded-full ${stat.bgColor} border ${stat.borderColor}`}>
                                        <stat.icon className={`h-8 w-8 ${stat.color}`} />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold mb-2 text-gray-100">{stat.value}</h3>
                                <p className="text-gray-300 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Gender Distribution Chart */}
                    <div className="mb-16">
                        <div className="bg-gray-700 rounded-lg border border-gray-600 p-8">
                            <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">Distribusi Gender</h3>
                            <div className="max-w-2xl mx-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                                        <span className="text-gray-300">Laki-laki</span>
                                    </div>
                                    <div className="text-gray-100 font-semibold">532 ({malePercentage}%)</div>
                                </div>
                                <div className="w-full bg-gray-600 rounded-full h-3 mb-4">
                                    <div
                                        className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                                        style={{ width: `${malePercentage}%` }}
                                    ></div>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                                        <span className="text-gray-300">Perempuan</span>
                                    </div>
                                    <div className="text-gray-100 font-semibold">490 ({femalePercentage}%)</div>
                                </div>
                                <div className="w-full bg-gray-600 rounded-full h-3">
                                    <div
                                        className="bg-purple-500 h-3 rounded-full transition-all duration-1000"
                                        style={{ width: `${femalePercentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Jaga (Neighborhood) Breakdown */}
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-100 mb-2">Populasi berdasarkan Jaga</h3>
                            <p className="text-gray-400">Distribusi berdasarkan 5 area jaga</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                            {jagaData.map((jaga, index) => (
                                <div key={index} className="bg-gray-700 rounded-lg border border-gray-600 overflow-hidden">
                                    <div className={`${jaga.color} p-4 text-center`}>
                                        <MapPin className="h-6 w-6 text-white mx-auto mb-2" />
                                        <h4 className="text-lg font-bold text-white">{jaga.name}</h4>
                                    </div>
                                    <div className="p-4 text-center">
                                        <div className="mb-3">
                                            <div className={`text-2xl font-bold ${jaga.textColor} mb-1`}>{jaga.population}</div>
                                            <div className="text-gray-400 text-sm">Populasi</div>
                                        </div>
                                        <div>
                                            <div className={`text-xl font-semibold ${jaga.textColor} mb-1`}>{jaga.households}</div>
                                            <div className="text-gray-400 text-sm">Rumah Tangga</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Jaga Summary Table */}
                        <div className="bg-gray-700 rounded-lg border border-gray-600 overflow-hidden">
                            <div className="p-6">
                                <h4 className="text-lg font-bold text-gray-100 mb-4">Informas Detail</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-600">
                                                <th className="text-left py-3 px-4 text-gray-300 font-semibold">Jaga</th>
                                                <th className="text-center py-3 px-4 text-gray-300 font-semibold">Populasi</th>
                                                <th className="text-center py-3 px-4 text-gray-300 font-semibold">Lingkungan</th>
                                                <th className="text-center py-3 px-4 text-gray-300 font-semibold">Rata - rata/lingkungan</th>
                                                <th className="text-center py-3 px-4 text-gray-300 font-semibold">% total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {jagaData.map((jaga, index) => {
                                                const avgPerHousehold = (jaga.population / jaga.households).toFixed(1)
                                                const percentageOfTotal = ((jaga.population / 1022) * 100).toFixed(1)
                                                return (
                                                    <tr key={index} className="border-b border-gray-600 hover:bg-gray-600/50">
                                                        <td className="py-3 px-4">
                                                            <div className="flex items-center gap-2">
                                                                <div className={`w-3 h-3 rounded-full ${jaga.color}`}></div>
                                                                <span className="text-gray-100 font-medium">{jaga.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="text-center py-3 px-4 text-gray-100 font-semibold">{jaga.population}</td>
                                                        <td className="text-center py-3 px-4 text-gray-100 font-semibold">{jaga.households}</td>
                                                        <td className="text-center py-3 px-4 text-gray-300">{avgPerHousehold}</td>
                                                        <td className="text-center py-3 px-4 text-gray-300">{percentageOfTotal}%</td>
                                                    </tr>
                                                )
                                            })}
                                            <tr className="bg-gray-600/30 font-semibold">
                                                <td className="py-3 px-4 text-gray-100">Total</td>
                                                <td className="text-center py-3 px-4 text-gray-100">1,022</td>
                                                <td className="text-center py-3 px-4 text-gray-100">320</td>
                                                <td className="text-center py-3 px-4 text-gray-100">3.2</td>
                                                <td className="text-center py-3 px-4 text-gray-100">100%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Statistics */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-700 rounded-lg border border-gray-600 p-6 text-center">
                            <div className="text-2xl font-bold text-blue-400 mb-2">3.2</div>
                            <div className="text-gray-300 font-medium">Rata - rata lingkungan</div>
                            <div className="text-gray-500 text-sm mt-1">Warga/lingkungan</div>
                        </div>

                        <div className="bg-gray-700 rounded-lg border border-gray-600 p-6 text-center">
                            <div className="text-2xl font-bold text-green-400 mb-2">251</div>
                            <div className="text-gray-300 font-medium">Jaga Terbesar</div>
                            <div className="text-gray-500 text-sm mt-1">Populasi Jaga II</div>
                        </div>

                        <div className="bg-gray-700 rounded-lg border border-gray-600 p-6 text-center">
                            <div className="text-2xl font-bold text-purple-400 mb-2">78</div>
                            <div className="text-gray-300 font-medium">Rumah Tangga Terbesar</div>
                            <div className="text-gray-500 text-sm mt-1">Rumah Tangga Jaga II</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
