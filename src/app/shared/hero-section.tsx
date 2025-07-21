interface HeroSectionProps {
    title: string
    subtitle: string
    primaryButton?: {
        text: string
        href: string
    }
    secondaryButton?: {
        text: string
        href: string
    }
    backgroundGradient?: string
}

export function HeroSection({
    title,
    subtitle,
    primaryButton,
    secondaryButton,
    backgroundGradient = "from-green-600 to-blue-600",
}: HeroSectionProps) {
    return (
        <section className={`relative bg-gradient-to-r ${backgroundGradient} text-white`}>
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative container mx-auto px-4 py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
                {(primaryButton || secondaryButton) && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {primaryButton && (
                            <a
                                href={primaryButton.href}
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                            >
                                {primaryButton.text}
                            </a>
                        )}
                        {secondaryButton && (
                            <a
                                href={secondaryButton.href}
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
                            >
                                {secondaryButton.text}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}
