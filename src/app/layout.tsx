import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

// ---- GEIST FONTS ----
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
  description:
    "Portfolio website of Anuj Shah (Software Engineer & AI Researcher). Resume, projects, research publications, and achievements.",
};

// ---- ROOT LAYOUT ----
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* ⭐ FULLSCREEN PARTICLES BACKGROUND */}
        <ParticlesBackground />

        {/* ⭐ ALL WEBSITE CONTENT ABOVE BACKGROUND */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="container py-10 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
