"use client"

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Subscribe from "./Subscribe.tsx"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isAdmin = pathname.startsWith("/admin")

    return (
        <>
            {!isAdmin && <Navbar />}
            {children}
            {!isAdmin && <Subscribe />}
            {!isAdmin && <Footer />}
        </>
    )
}