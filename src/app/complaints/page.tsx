"use client"
import { AlertCircle, Phone, Mail, Clock, FileText } from "lucide-react"
import { useState } from "react"
import { HeroSection } from "../shared/hero-section"
import { ComplaintForm } from "./components/complaint-form"

export default function ComplaintsPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (formData: FormData) => {
        setSubmitted(true)
        // In a real application, you would submit the form data here
    }

    const sidebarItems = [
        {
            icon: Clock,
            title: "Response Time",
            content: (
                <p className="text-sm text-gray-600">
                    We aim to acknowledge all complaints within 2 business days and provide a resolution or update within 5-10
                    business days.
                </p>
            ),
        },
        {
            icon: Phone,
            title: "Emergency Contact",
            content: (
                <div className="space-y-2">
                    <p className="text-sm">
                        <strong>Emergency Line:</strong>
                        <br />
                        (555) 123-4567
                    </p>
                    <p className="text-sm text-gray-600">Available 24/7 for urgent issues requiring immediate attention.</p>
                </div>
            ),
        },
        {
            icon: Mail,
            title: "Other Contact Methods",
            content: (
                <div className="space-y-2">
                    <p className="text-sm">
                        <strong>Email:</strong>
                        <br />
                        complaints@greenfieldvillage.gov
                    </p>
                    <p className="text-sm">
                        <strong>Mail:</strong>
                        <br />
                        Village Hall
                        <br />
                        123 Main Street
                        <br />
                        Greenfield Village, ST 12345
                    </p>
                    <p className="text-sm">
                        <strong>In Person:</strong>
                        <br />
                        Monday-Friday, 8:00 AM - 5:00 PM
                    </p>
                </div>
            ),
        },
        {
            icon: FileText,
            title: "What Happens Next?",
            content: (
                <ol className="text-sm space-y-2 list-decimal list-inside text-gray-600">
                    <li>Your complaint is reviewed by our staff</li>
                    <li>We investigate the issue and gather information</li>
                    <li>You receive an update on our findings</li>
                    <li>We work to resolve the issue or explain our decision</li>
                    <li>Follow-up to ensure satisfaction</li>
                </ol>
            ),
        },
    ]

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm max-w-md mx-auto">
                    <div className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="rounded-full bg-green-100 p-3">
                                <FileText className="h-8 w-8 text-green-600" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold mb-2">Complaint Submitted</h2>
                        <p className="text-gray-600 mb-4">
                            Thank you for your submission. We have received your complaint and will review it within 3-5 business
                            days.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <p className="text-sm font-medium mb-2">Reference Number:</p>
                            <p className="text-lg font-mono">
                                GV-2024-
                                {Math.floor(Math.random() * 10000)
                                    .toString()
                                    .padStart(4, "0")}
                            </p>
                        </div>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            Submit Another Complaint
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            <HeroSection
                title="Submit a Complaint"
                subtitle="We value your feedback and are committed to addressing community concerns promptly"
                backgroundGradient="from-red-600 to-orange-600"
            />

            {/* Important Information */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-yellow-50 border border-yellow-200 rounded-md p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <AlertCircle className="h-5 w-5 text-yellow-400" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-800">
                                    <strong>Emergency Situations:</strong> For urgent matters requiring immediate attention (water leaks,
                                    power outages, safety hazards), please call our emergency line at (555) 123-4567 instead of using this
                                    form.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complaint Form */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Form */}
                            <div className="lg:col-span-2">
                                <ComplaintForm onSubmit={handleSubmit} />
                            </div>

                            {/* Sidebar Information */}
                            <div className="space-y-6">
                                {sidebarItems.map((item, index) => (
                                    <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm">
                                        <div className="p-4 border-b border-gray-200">
                                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                                <item.icon className="h-5 w-5" />
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="p-4">{item.content}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
