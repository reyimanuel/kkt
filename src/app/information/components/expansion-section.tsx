export function ExpansionSection() {
    const expansionPeriods = [
        {
            period: "1880-1900",
            title: "Early Growth",
            description: "Population doubled from 200 to 400 residents. First school and health clinic established.",
            achievements: [
                "First elementary school built",
                "Village health clinic opened",
                "Main road constructed",
                "Market area established",
            ],
        },
        {
            period: "1900-1920",
            title: "Infrastructure Development",
            description: "Major infrastructure projects improved quality of life and connected village to regional networks.",
            achievements: [
                "Electric power lines installed",
                "Telephone service introduced",
                "Water distribution system",
                "Village hall constructed",
            ],
        },
        {
            period: "1920-1940",
            title: "Economic Expansion",
            description: "Agricultural modernization and small business development boosted the local economy.",
            achievements: [
                "Cooperative farming established",
                "Rice mill constructed",
                "Small businesses flourished",
                "Banking services introduced",
            ],
        },
        {
            period: "1940-1960",
            title: "Post-War Reconstruction",
            description: "Recovery and rebuilding after World War II, with focus on modernization and development.",
            achievements: [
                "War damage repaired",
                "Modern farming techniques",
                "Improved transportation",
                "Educational expansion",
            ],
        },
        {
            period: "1960-1980",
            title: "Modernization Era",
            description: "Significant modernization with improved infrastructure and expanded public services.",
            achievements: [
                "Paved roads completed",
                "Modern water system",
                "High school established",
                "Healthcare center upgraded",
            ],
        },
        {
            period: "1980-2000",
            title: "Technological Integration",
            description: "Introduction of modern technology and communication systems transformed village life.",
            achievements: [
                "Internet connectivity",
                "Mobile phone coverage",
                "Computer literacy programs",
                "Modern farming equipment",
            ],
        },
        {
            period: "2000-Present",
            title: "Sustainable Development",
            description: "Focus on sustainable development, environmental protection, and digital transformation.",
            achievements: [
                "Solar power projects",
                "Waste management system",
                "Digital governance",
                "Eco-tourism development",
            ],
        },
    ]

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Village Expansion & Development</h2>
                        <p className="text-gray-600 text-lg">Over 140 years of continuous growth and modernization</p>
                    </div>

                    <div className="space-y-8">
                        {expansionPeriods.map((period, index) => (
                            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        {period.period}
                                    </span>
                                    <h3 className="text-xl font-bold">{period.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{period.description}</p>
                                <div>
                                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {period.achievements.map((achievement, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-sm text-gray-600">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 text-green-900">Current Status</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-700">2,847</div>
                                <div className="text-sm text-green-600">Current Population</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-700">450</div>
                                <div className="text-sm text-green-600">Households</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-700">12</div>
                                <div className="text-sm text-green-600">Square Kilometers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
