export function VillageHeadsSection() {
    const villageHeads = [
        {
            name: "Kapitan Malakas",
            period: "1878-1885",
            achievements: [
                "First elected village captain",
                "Established village council",
                "Built first school",
                "Organized village militia",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Malakas",
        },
        {
            name: "Kapitan Bayani Santos",
            period: "1885-1892",
            achievements: [
                "Expanded village boundaries",
                "Introduced modern farming",
                "Built village church",
                "Established market system",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Santos",
        },
        {
            name: "Kapitan Ligaya Cruz",
            period: "1892-1899",
            achievements: [
                "First female village head",
                "Women's rights advocate",
                "Healthcare improvements",
                "Education expansion",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Cruz",
        },
        {
            name: "Kapitan Dakila Reyes",
            period: "1899-1906",
            achievements: [
                "Led during revolution",
                "Village defense organization",
                "Infrastructure development",
                "Community unity",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Reyes",
        },
        {
            name: "Kapitan Magiting Torres",
            period: "1906-1913",
            achievements: [
                "Post-war reconstruction",
                "Economic recovery programs",
                "Road construction",
                "Agricultural modernization",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Torres",
        },
        {
            name: "Kapitan Masigla Garcia",
            period: "1913-1920",
            achievements: [
                "Electrification project",
                "Telephone installation",
                "Water system upgrade",
                "Educational reforms",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Garcia",
        },
        {
            name: "Kapitan Matatag Lopez",
            period: "1920-1927",
            achievements: ["Banking services", "Cooperative establishment", "Rice mill construction", "Trade development"],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Lopez",
        },
        {
            name: "Kapitan Maliksi Fernandez",
            period: "1927-1934",
            achievements: ["Transportation improvements", "Market expansion", "Health clinic upgrade", "Youth programs"],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Fernandez",
        },
        {
            name: "Kapitan Matibay Gonzales",
            period: "1934-1941",
            achievements: ["Pre-war preparations", "Emergency planning", "Community resilience", "Defense organization"],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Gonzales",
        },
        {
            name: "Kapitan Mabait Rodriguez",
            period: "1945-1952",
            achievements: ["Post-WWII reconstruction", "War damage repair", "Community healing", "Economic recovery"],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Rodriguez",
        },
        {
            name: "Kapitan Masaya Villanueva",
            period: "1952-1959",
            achievements: [
                "Modernization programs",
                "Infrastructure development",
                "Educational advancement",
                "Cultural preservation",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Villanueva",
        },
        {
            name: "Kapitan Maunlad Castro",
            period: "1959-1966",
            achievements: [
                "High school establishment",
                "Healthcare expansion",
                "Agricultural innovation",
                "Youth development",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Castro",
        },
        {
            name: "Kapitan Makabago Mendoza",
            period: "1966-1973",
            achievements: [
                "Technology integration",
                "Communication systems",
                "Modern farming methods",
                "Environmental programs",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Mendoza",
        },
        {
            name: "Kapitan Matagumpay Rivera",
            period: "1973-1980",
            achievements: [
                "Economic diversification",
                "Tourism development",
                "Cultural festivals",
                "International relations",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Rivera",
        },
        {
            name: "Kapitan Mapagmahal Dela Cruz",
            period: "1980-1987",
            achievements: ["Social programs", "Senior citizen care", "Children's welfare", "Community solidarity"],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Dela+Cruz",
        },
        {
            name: "Kapitan Masipag Morales",
            period: "1987-1994",
            achievements: ["Digital transition", "Computer literacy", "Internet connectivity", "Modern governance"],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Morales",
        },
        {
            name: "Kapitan Matalino Ramos",
            period: "1994-2001",
            achievements: ["Educational excellence", "Scholarship programs", "Library expansion", "Research initiatives"],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Ramos",
        },
        {
            name: "Kapitan Mapagkakatiwalaan Santos",
            period: "2001-2008",
            achievements: [
                "Transparent governance",
                "Anti-corruption measures",
                "Public accountability",
                "Citizen participation",
            ],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Santos",
        },
        {
            name: "Kapitan Makabayan Flores",
            period: "2008-2015",
            achievements: ["Patriotic programs", "Cultural heritage", "National identity", "Historical preservation"],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Flores",
        },
        {
            name: "Kapitan Makakalikasan Torres",
            period: "2015-2022",
            achievements: ["Environmental protection", "Sustainable development", "Green energy", "Climate action"],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Torres",
        },
        {
            name: "Kapitan Makabago Villanueva",
            period: "2022-Present",
            achievements: ["Digital transformation", "Smart village initiatives", "Innovation programs", "Future planning"],
            image: "/placeholder.svg?height=150&width=150&text=Kap.+Villanueva",
        },
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Village Heads Throughout History</h2>
                        <p className="text-gray-600 text-lg">
                            Honoring the leaders who shaped Suluun Village over 145 years of governance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {villageHeads.map((head, index) => (
                            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                                <div className="text-center mb-4">
                                    <img
                                        src={head.image || "/placeholder.svg"}
                                        alt={head.name}
                                        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-green-100"
                                    />
                                    <h3 className="text-lg font-bold">{head.name}</h3>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        {head.period}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                                    <ul className="space-y-1">
                                        {head.achievements.map((achievement, idx) => (
                                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                                                <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 text-green-900">Leadership Legacy</h3>
                        <p className="text-green-800">
                            The village heads of Suluun have consistently demonstrated exceptional leadership, guiding the community
                            through various challenges and opportunities. From the pioneering spirit of Kapitan Malakas to the modern
                            innovation of Kapitan Makabago Villanueva, each leader has contributed to the village's continuous growth
                            and development while preserving its cultural heritage and community values.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
