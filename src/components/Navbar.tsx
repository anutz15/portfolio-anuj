"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const path = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    // { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/experience", label: "Experience" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full border-b py-4 bg-white dark:bg-[#071024]/70 backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div
            aria-hidden
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold"
          >
            AS
          </div>
          <div className="hidden md:block">
            <div className="font-semibold">Anuj Shah</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Aspiring AI Researcher</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-sm transition-colors ${
                path === n.href ? "text-primary font-medium" : "text-gray-500 hover:text-primary"
              }`}
            >
              {n.label}
            </Link>
          ))}

        </nav>
      </div>
    </header>
  );
}
