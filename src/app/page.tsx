import { Users, TreePine, Building, MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"
import { HeroSection } from "./shared/hero-section"
import { StatsSection } from "./shared/stats-section"
import { AnnouncementCard } from "./shared/announcement-card"

export default function HomePage() {
    const stats = [
        { icon: Users, value: "2,847", label: "Residents", color: "text-green-600" },
        { icon: Building, value: "156", label: "Years of History", color: "text-blue-600" },
        { icon: TreePine, value: "45%", label: "Green Spaces", color: "text-green-600" },
        { icon: MapPin, value: "12", label: "Square Miles", color: "text-blue-600" },
    ]

    const quickLinks = [
        {
            icon: Building,
            title: "Village History",
            description: "Discover our rich heritage and historical landmarks",
            buttonText: "Explore History",
            href: "/information",
            iconColor: "text-blue-600",
        },
        {
            icon: Mail,
            title: "Submit Complaint",
            description: "Report issues or concerns to the village council",
            buttonText: "File Complaint",
            href: "/complaints",
            iconColor: "text-green-600",
        },
        {
            icon: Calendar,
            title: "Events & News",
            description: "Stay updated with upcoming events and announcements",
            buttonText: "View Events",
            href: "/announcements",
            iconColor: "text-purple-600",
        },
        {
            icon: Phone,
            title: "Contact Us",
            description: "Get in touch with village administration",
            buttonText: "Contact Info",
            href: "#contact",
            iconColor: "text-red-600",
        },
    ]

    const contacts = [
        { icon: Phone, title: "Phone", value: "(555) 123-4567", color: "text-blue-600" },
        { icon: Mail, title: "Email", value: "info@greenfieldvillage.gov", color: "text-green-600" },
        { icon: Clock, title: "Office Hours", value: "Mon-Fri: 8AM-5PM", color: "text-purple-600" },
    ]

    return (
        <div className="min-h-screen">
            <HeroSection
                title="Welcome to Greenfield Village"
                subtitle="A peaceful community nestled in the heart of nature, where tradition meets progress"
                primaryButton={{ text: "Learn About Our Village", href: "/information" }}
                secondaryButton={{ text: "Latest Events", href: "/announcements" }}
            />

            <StatsSection stats={stats} />

            {/* Recent Announcements */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Latest Announcements</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Stay updated with the latest news and events in our community
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnnouncementCard
                            badge={{ text: "Event" }}
                            date="Dec 15, 2024"
                            title="Annual Winter Festival"
                            description="Join us for our traditional winter celebration with local crafts, food, and entertainment"
                            buttonText="Learn More"
                            buttonHref="/announcements"
                        />
                        <AnnouncementCard
                            badge={{ text: "Notice", variant: "outline" }}
                            date="Dec 10, 2024"
                            title="Road Maintenance Schedule"
                            description="Planned road improvements on Main Street from December 20-30"
                            buttonText="View Details"
                            buttonHref="/announcements"
                        />
                        <AnnouncementCard
                            badge={{ text: "Community" }}
                            date="Dec 8, 2024"
                            title="New Community Garden"
                            description="Applications now open for plots in our new community garden project"
                            buttonText="Apply Now"
                            buttonHref="/announcements"
                        />
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
                        <p className="text-gray-600">Access important village services and information</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickLinks.map((link, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow text-center p-6"
                            >
                                <div className="flex justify-center mb-4">
                                    <link.icon className={`h-12 w-12 ${link.iconColor}`} />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                                <p className="text-gray-600 mb-4">{link.description}</p>
                                <a
                                    href={link.href}
                                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                                >
                                    {link.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                        <p className="text-gray-600">Reach out to us for any questions or assistance</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {contacts.map((contact, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <contact.icon className={`h-8 w-8 ${contact.color}`} />
                                </div>
                                <h3 className="font-semibold mb-2">{contact.title}</h3>
                                <p className="text-gray-600">{contact.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
