export function VillageProcessSection() {
    const processSteps = [
        {
            step: "1",
            title: "Community Petition",
            year: "1875",
        },
        {
            step: "2",
            title: "Population Verification",
            year: "1876",
        },
        {
            step: "3",
            title: "Infrastructure Assessment",
            year: "1876",
        },
        {
            step: "4",
            title: "Boundary Demarcation",
            year: "1877",
        },
        {
            step: "5",
            title: "Government Approval",
            year: "1878",
        },
        {
            step: "6",
            title: "First Elections",
            year: "1878",
        },
    ]

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Pemekaran</h2>
                        <p className="text-gray-600 text-lg">
                            The formal journey from settlement to officially recognized village status
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold mb-3 text-blue-900">Legal Framework</h3>
                            <p className="text-blue-800">
                                Under the Spanish colonial administration, settlements needed to meet specific criteria to achieve
                                official village status. This included minimum population requirements, established governance
                                structures, adequate infrastructure, and demonstrated economic viability.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {step.step}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-lg font-semibold">{step.title}</h4>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                            {step.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-3 text-green-900">Official Recognition</h3>
                        <p className="text-green-800 mb-4">
                            On December 15, 1878, Suluun officially became a recognized village under Spanish colonial law. This
                            milestone marked the beginning of formal governance and the village's integration into the broader
                            administrative system of the province.
                        </p>
                        <p className="text-green-800">
                            The official recognition brought both opportunities and responsibilities, including tax obligations,
                            military service requirements, and participation in colonial administrative processes, while also
                            providing legal protection and access to government services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
