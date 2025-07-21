"use client"

import type React from "react"

interface ComplaintFormProps {
    onSubmit: (data: FormData) => void
}

export function ComplaintForm({ onSubmit }: ComplaintFormProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        onSubmit(formData)
    }

    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Complaint Details</h2>
                <p className="text-gray-600 mt-1">
                    Please provide as much detail as possible to help us address your concern effectively.
                </p>
            </div>
            <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First Name *
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last Name *
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address (if relevant to complaint)
                            </label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Street address in Greenfield Village"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Complaint Details */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Complaint Information</h3>
                        <div className="space-y-2">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category *
                            </label>
                            <select
                                id="category"
                                name="category"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select complaint category</option>
                                <option value="roads">Roads & Infrastructure</option>
                                <option value="utilities">Utilities (Water, Sewer, Electric)</option>
                                <option value="noise">Noise Complaints</option>
                                <option value="property">Property Maintenance</option>
                                <option value="services">Village Services</option>
                                <option value="zoning">Zoning & Planning</option>
                                <option value="parks">Parks & Recreation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                                Priority Level
                            </label>
                            <select
                                id="priority"
                                name="priority"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select priority level</option>
                                <option value="low">Low - General concern</option>
                                <option value="medium">Medium - Needs attention</option>
                                <option value="high">High - Urgent issue</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject *
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Brief description of the issue"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Detailed Description *
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Please provide a detailed description of your complaint, including dates, times, and any relevant information that would help us understand and address the issue."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Specific Location (if applicable)
                            </label>
                            <input
                                id="location"
                                name="location"
                                type="text"
                                placeholder="e.g., 123 Main Street, Village Park, etc."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Preferences</h3>
                        <div className="space-y-2">
                            <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700">
                                Preferred Contact Method
                            </label>
                            <select
                                id="contactMethod"
                                name="contactMethod"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">How would you like us to contact you?</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                                <option value="mail">Mail</option>
                                <option value="no-contact">No contact needed</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                id="anonymous"
                                name="anonymous"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="anonymous" className="text-sm text-gray-700">
                                Submit this complaint anonymously (we won't be able to follow up with you)
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit Complaint
                    </button>
                </form>
            </div>
        </div>
    )
}
