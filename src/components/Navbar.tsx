"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/experience", label: "Experience" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-20 w-[90%] md:w-[80%] lg:w-[70%]">
      <nav
        className="
          flex items-center justify-between
          px-8 py-3
          rounded-2xl
          bg-[#221e1e]/90
          shadow-lg
          backdrop-blur-md
          border border-black/20
          text-white
        "
      >
        {/* LEFT SECTION — TITLE */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          My Portfolio
        </Link>

        {/* RIGHT SECTION — NAV LINKS */}
        <ul className="flex items-center gap-8 text-white">
          {navItems.map((item) => {
            const isActive = path === item.href;

            return (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`
                    relative text-sm tracking-wide transition
                    ${isActive ? "text-blue-400 font-semibold" : "text-gray-300 group-hover:text-white"}
                  `}
                >
                  {item.label}

                  {/* Underline animation */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] transition-all duration-300
                      ${isActive ? "w-full bg-blue-400" : "w-0 bg-white group-hover:w-full"}
                    `}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
