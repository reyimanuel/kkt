export function GovernmentSection() {
    const governmentStructure = [
        {
            position: "Village Captain (Kapitan ng Barangay)",
            description:
                "Chief executive officer responsible for overall village administration and representing the village in external affairs",
            responsibilities: ["Executive leadership", "Budget management", "External relations", "Emergency response"],
        },
        {
            position: "Village Council (Sangguniang Barangay)",
            description: "Legislative body composed of elected councilors who create local ordinances and policies",
            responsibilities: ["Policy making", "Budget approval", "Local legislation", "Community planning"],
        },
        {
            position: "Village Secretary",
            description: "Administrative officer responsible for records, documentation, and official correspondence",
            responsibilities: ["Record keeping", "Documentation", "Meeting minutes", "Official correspondence"],
        },
        {
            position: "Village Treasurer",
            description: "Financial officer managing village funds, collections, and financial reporting",
            responsibilities: ["Financial management", "Tax collection", "Budget monitoring", "Financial reporting"],
        },
    ]

    const committees = [
        { name: "Peace and Order Committee", focus: "Community safety and conflict resolution" },
        { name: "Health Committee", focus: "Public health programs and sanitation" },
        { name: "Education Committee", focus: "School support and literacy programs" },
        { name: "Agriculture Committee", focus: "Farming support and agricultural development" },
        { name: "Infrastructure Committee", focus: "Roads, bridges, and public facilities" },
        { name: "Environment Committee", focus: "Environmental protection and sustainability" },
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Village Government Structure</h2>
                        <p className="text-gray-600 text-lg">
                            Democratic governance ensuring community participation and transparent administration
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-8">Government Positions</h3>
                        <div className="space-y-6">
                            {governmentStructure.map((position, index) => (
                                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                                    <h4 className="text-lg font-semibold mb-3 text-green-700">{position.position}</h4>
                                    <p className="text-gray-600 mb-4">{position.description}</p>
                                    <div>
                                        <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                                            {position.responsibilities.map((responsibility, idx) => (
                                                <li key={idx}>{responsibility}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-8">Village Committees</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {committees.map((committee, index) => (
                                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
                                    <h4 className="font-semibold mb-2">{committee.name}</h4>
                                    <p className="text-sm text-gray-600">{committee.focus}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                        <h3 className="text-xl font-bold mb-4">Democratic Processes</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Elections</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Held every three years</li>
                                    <li>• All residents 18+ eligible to vote</li>
                                    <li>• Secret ballot system</li>
                                    <li>• Supervised by election commission</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Community Participation</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Monthly town hall meetings</li>
                                    <li>• Public budget hearings</li>
                                    <li>• Community consultation sessions</li>
                                    <li>• Citizen feedback mechanisms</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
