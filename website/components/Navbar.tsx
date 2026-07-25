"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white"
        >
          <span className="text-orange-500">AMPD</span> Electrical
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white hover:text-orange-500 transition">
            Services
          </a>

          <a href="#projects" className="text-white hover:text-orange-500 transition">
            Our Work
          </a>

          <a href="#about" className="text-white hover:text-orange-500 transition">
            About
          </a>

          <a href="#contact" className="text-white hover:text-orange-500 transition">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-xl transition"
        >
          Request Estimate
        </a>
      </div>
    </header>
  );
}