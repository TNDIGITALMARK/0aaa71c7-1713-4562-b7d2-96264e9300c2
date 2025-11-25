"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[hsl(var(--primary))]/80 backdrop-blur-md text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[hsl(var(--accent))] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold">STRATOS DIGITAL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors border border-[hsl(var(--accent))] px-4 py-2 rounded hover:bg-[hsl(var(--accent))] hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/testimonials"
                className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/team"
                className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium bg-[hsl(var(--accent))] text-white px-4 py-2 rounded hover:opacity-90 transition-opacity text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
