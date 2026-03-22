'use client'

import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import 'rodal/lib/rodal.css'
import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
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
