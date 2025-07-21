import { Calendar, MapPin, Clock, Users, Music, Utensils, Gift, Star } from "lucide-react"
import { HeroSection } from "../shared/hero-section"
import { AnnouncementCard } from "../shared/announcement-card"
import { FeaturedEvent } from "./components/featured-event"

export default function AnnouncementsPage() {
  const featuredEventData = {
    badge: "Featured Event",
    title: "A Magical Winter Celebration",
    subtitle: "Join us for our most beloved community celebration",
    description:
      "Experience the magic of winter at our annual festival featuring local artisans, delicious food, live entertainment, and activities for the whole family. This year marks our 25th anniversary of bringing the community together during the holiday season.",
    image: {
      src: "/placeholder.svg?height=500&width=600",
      alt: "Winter Festival",
    },
    details: [
      { icon: Calendar, label: "Date", value: "December 15, 2024", color: "text-blue-600" },
      { icon: Clock, label: "Time", value: "2:00 PM - 8:00 PM", color: "text-green-600" },
      { icon: MapPin, label: "Location", value: "Village Square", color: "text-red-600" },
      { icon: Users, label: "Admission", value: "Free for all", color: "text-purple-600" },
    ],
    highlights: [
      { icon: Music, text: "Live Music & Performances", color: "text-blue-600" },
      { icon: Utensils, text: "Local Food Vendors", color: "text-green-600" },
      { icon: Gift, text: "Artisan Craft Market", color: "text-red-600" },
      { icon: Star, text: "Kids Activities Zone", color: "text-yellow-600" },
    ],
    buttons: {
      primary: { text: "Register to Attend" },
      secondary: { text: "Volunteer to Help" },
    },
  }

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Village Announcements & Events"
        subtitle="Stay connected with the latest news, events, and happenings in our community"
        backgroundGradient="from-purple-600 to-pink-600"
      />

      <FeaturedEvent {...featuredEventData} />

      {/* Recent Announcements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Announcements</h2>
            <p className="text-gray-600">Stay informed about important village news and updates</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Individual announcement cards with custom styling */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Important
                    </span>
                    <span className="text-sm text-gray-500">December 10, 2024</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Road Maintenance on Main Street</h3>
                <p className="text-gray-600 mb-4">Planned infrastructure improvements will affect traffic flow</p>
                <p className="text-gray-600 mb-4">
                  The Village will be conducting essential road maintenance on Main Street from December 20-30, 2024.
                  Work will include repaving, sidewalk repairs, and utility line updates. Traffic will be reduced to one
                  lane with flaggers directing traffic during business hours (8 AM - 5 PM).
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Dec 20-30, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    8:00 AM - 5:00 PM
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Main Street (1st to 5th Ave)
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Community
                    </span>
                    <span className="text-sm text-gray-500">December 8, 2024</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">New Community Garden Project</h3>
                <p className="text-gray-600 mb-4">Applications now open for garden plots in our new community space</p>
                <p className="text-gray-600 mb-4">
                  We're excited to announce the opening of our new community garden located behind the Village Hall. The
                  garden features 50 individual plots available for rent to village residents. Each plot is 10x10 feet
                  and includes water access, basic tools storage, and composting facilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold mb-1">Plot Rental Fee:</p>
                    <p className="text-sm text-gray-600">$25 per season</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold mb-1">Application Deadline:</p>
                    <p className="text-sm text-gray-600">January 15, 2025</p>
                  </div>
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  Download Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600">Mark your calendar for these exciting community events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnnouncementCard
              badge={{ text: "Workshop" }}
              date="Jan 20, 2025"
              title="Gardening Workshop"
              description="Learn winter gardening techniques from local experts"
              buttonText="Register"
              buttonHref="#"
            />
            <AnnouncementCard
              badge={{ text: "Meeting", variant: "secondary" }}
              date="Feb 1, 2025"
              title="Town Hall Meeting"
              description="Discuss the 2025 village improvement projects"
              buttonText="Learn More"
              buttonHref="#"
            />
            <AnnouncementCard
              badge={{ text: "Recreation", variant: "outline" }}
              date="Feb 14, 2025"
              title="Valentine's Dance"
              description="Community dance for couples and families"
              buttonText="Get Tickets"
              buttonHref="#"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm max-w-2xl mx-auto text-center p-8">
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest announcements and event notifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
