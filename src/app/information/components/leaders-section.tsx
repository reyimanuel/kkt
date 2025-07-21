export function LeadersSection() {
    const currentLeaders = [
        {
            name: "Kapitan Makabago Villanueva",
            position: "Village Captain",
            term: "2022-2025",
            background: "Former engineer with 15 years in public service",
            initiatives: ["Smart Village Program", "Digital Governance", "Green Energy Project", "Youth Development"],
            image: "/placeholder.svg?height=200&width=200&text=Kap.+Villanueva",
        },
    ]

    const councilMembers = [
        {
            name: "Kagawad Maria Santos",
            position: "Councilor - Health & Sanitation",
            expertise: "Public Health",
            projects: ["Community Health Program", "Sanitation Drive", "Maternal Care Initiative"],
        },
        {
            name: "Kagawad Juan Dela Cruz",
            position: "Councilor - Agriculture & Environment",
            expertise: "Agricultural Engineering",
            projects: ["Organic Farming Program", "Reforestation Project", "Water Conservation"],
        },
        {
            name: "Kagawad Rosa Garcia",
            position: "Councilor - Education & Culture",
            expertise: "Education Administration",
            projects: ["Scholarship Program", "Cultural Festival", "Library Modernization"],
        },
        {
            name: "Kagawad Pedro Morales",
            position: "Councilor - Infrastructure & Development",
            expertise: "Civil Engineering",
            projects: ["Road Improvement", "Bridge Construction", "Drainage System"],
        },
        {
            name: "Kagawad Ana Rodriguez",
            position: "Councilor - Social Services",
            expertise: "Social Work",
            projects: ["Senior Citizen Program", "PWD Assistance", "Family Counseling"],
        },
        {
            name: "Kagawad Miguel Torres",
            position: "Councilor - Peace & Order",
            expertise: "Law Enforcement",
            projects: ["Community Patrol", "Conflict Resolution", "Emergency Response"],
        },
        {
            name: "Kagawad Carmen Lopez",
            position: "Councilor - Women & Children",
            expertise: "Child Psychology",
            projects: ["Women's Empowerment", "Child Protection", "Family Planning"],
        },
    ]

    const officials = [
        {
            name: "Secretary Linda Fernandez",
            position: "Village Secretary",
            responsibilities: ["Records Management", "Documentation", "Official Correspondence"],
            experience: "12 years in village administration",
        },
        {
            name: "Treasurer Roberto Castro",
            position: "Village Treasurer",
            responsibilities: ["Financial Management", "Budget Planning", "Revenue Collection"],
            experience: "8 years in financial services",
        },
    ]

    const committees = [
        {
            name: "Lupong Tagapamayapa",
            chair: "Kagawad Pedro Morales",
            members: ["Citizen Rep. Elena Ramos", "Citizen Rep. Carlos Mendoza", "Citizen Rep. Sofia Gonzales"],
            purpose: "Mediation and conflict resolution",
        },
        {
            name: "Disaster Risk Reduction Committee",
            chair: "Kagawad Miguel Torres",
            members: ["Fire Chief Antonio Cruz", "Health Officer Dr. Isabel Santos", "Engineer Mark Rivera"],
            purpose: "Emergency preparedness and response",
        },
        {
            name: "Development Planning Committee",
            chair: "Kagawad Juan Dela Cruz",
            members: ["Business Rep. Gloria Villanueva", "Youth Rep. Jason Morales", "Senior Rep. Lola Esperanza"],
            purpose: "Community development planning",
        },
    ]

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Current Leaders of Suluun Village</h2>
                        <p className="text-gray-600 text-lg">
                            Meet the dedicated public servants leading our community toward progress and prosperity
                        </p>
                    </div>

                    {/* Current Village Captain */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Village Captain</h3>
                        {currentLeaders.map((leader, index) => (
                            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                    <div className="text-center">
                                        <img
                                            src={leader.image || "/placeholder.svg"}
                                            alt={leader.name}
                                            className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
                                        />
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            {leader.term}
                                        </span>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <h4 className="text-2xl font-bold mb-2">{leader.name}</h4>
                                        <p className="text-lg text-green-600 mb-3">{leader.position}</p>
                                        <p className="text-gray-600 mb-4">{leader.background}</p>
                                        <div>
                                            <h5 className="font-semibold mb-2">Key Initiatives:</h5>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {leader.initiatives.map((initiative, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                        <span className="text-sm text-gray-600">{initiative}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Village Council */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Village Council Members</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {councilMembers.map((member, index) => (
                                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                                    <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                                    <p className="text-green-600 text-sm mb-2">{member.position}</p>
                                    <p className="text-gray-600 text-sm mb-3">Expertise: {member.expertise}</p>
                                    <div>
                                        <h5 className="font-semibold mb-2 text-sm">Current Projects:</h5>
                                        <ul className="space-y-1">
                                            {member.projects.map((project, idx) => (
                                                <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                                                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                                    <span>{project}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Village Officials */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Village Officials</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {officials.map((official, index) => (
                                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                                    <h4 className="text-lg font-bold mb-1">{official.name}</h4>
                                    <p className="text-blue-600 text-sm mb-2">{official.position}</p>
                                    <p className="text-gray-600 text-sm mb-3">{official.experience}</p>
                                    <div>
                                        <h5 className="font-semibold mb-2 text-sm">Key Responsibilities:</h5>
                                        <ul className="space-y-1">
                                            {official.responsibilities.map((responsibility, idx) => (
                                                <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                                                    <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                                    <span>{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Committees */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-center">Village Committees</h3>
                        <div className="space-y-6">
                            {committees.map((committee, index) => (
                                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-lg font-bold">{committee.name}</h4>
                                        <span className="text-sm text-gray-500">Chair: {committee.chair}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">{committee.purpose}</p>
                                    <div>
                                        <h5 className="font-semibold mb-2 text-sm">Committee Members:</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {committee.members.map((member, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                                                >
                                                    {member}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
