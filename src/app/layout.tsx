'use client'

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe.tsx";
import { AuthProvider } from "@/context/AuthContext";
import 'rodal/lib/rodal.css'
import { usePathname } from "next/navigation";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith("/admin")
  
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
