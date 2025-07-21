import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"
import { Navigation } from "./shared/navigation"
import { Footer } from "./shared/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Desa Suluun - Official Website",
    description: "Selamat datang di Desa Suluun - Sebuah komunitas yang damai di mana tradisi bertemu dengan kemajuan",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col">
                    <Navigation />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
