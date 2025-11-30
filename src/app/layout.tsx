import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ---- GEIST FONTS (keep from starter template) ----
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---- PAGE METADATA ----
export const metadata: Metadata = {
  title: "Anuj Shah — Portfolio",
  description: "Software Engineer & AI Researcher Portfolio",
};

// ---- ROOT LAYOUT ----
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Theme provider handles dark/light mode globally */}
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="min-h-screen flex flex-col">
            
            {/* Navigation bar */}
            <Navbar />

            {/* Main content */}
            <main className="container py-10 flex-1">{children}</main>

            {/* Footer */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
