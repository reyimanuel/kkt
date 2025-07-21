import Image from "next/image"

export function GalleryGrid() {
    const galleryItems = [
        {
            src: "/placeholder.svg?height=300&width=400&text=Main+Street",
            alt: "Main Street shops",
            title: "Main Street",
            description: "Our charming main street with local shops and cafes",
        },
        {
            src: "/placeholder.svg?height=300&width=400&text=Village+Park",
            alt: "Village park",
            title: "Community Park",
            description: "Beautiful green spaces for families and recreation",
        },
        {
            src: "/placeholder.svg?height=300&width=400&text=Village+Hall",
            alt: "Village hall",
            title: "Village Hall",
            description: "Our historic village hall, center of local government",
        },
        {
            src: "/placeholder.svg?height=300&width=400&text=Village+Library",
            alt: "Village library",
            title: "Public Library",
            description: "A hub of learning and community activities",
        },
        {
            src: "/placeholder.svg?height=300&width=400&text=Farmers+Market",
            alt: "Farmers market",
            title: "Farmers Market",
            description: "Weekly market featuring local produce and crafts",
        },
        {
            src: "/placeholder.svg?height=300&width=400&text=Village+School",
            alt: "Village school",
            title: "Suluun Elementary",
            description: "Our excellent elementary school serving the community",
        },
    ]

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Village Gallery</h2>
                    <p className="text-gray-600">Explore the beauty and character of our community through photos</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="aspect-video relative">
                                <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
