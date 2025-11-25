"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-[hsl(var(--border))] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Elegant Typography */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--accent))] transition-colors duration-400">
              <span className="text-white font-semibold text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>S</span>
            </div>
            <span className="text-lg font-semibold text-[hsl(var(--primary))] tracking-wide" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>STRATOS DIGITAL</span>
          </Link>

          {/* Desktop Navigation - Elegant Spacing */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors duration-300 tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors duration-300 tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors duration-300 tracking-wide"
            >
              Portfolio
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors duration-300 tracking-wide"
            >
              Testimonials
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors duration-300 tracking-wide"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[hsl(var(--primary))] hover:text-white transition-all duration-300 border border-[hsl(var(--primary))] px-6 py-2.5 rounded-lg hover:bg-[hsl(var(--primary))] tracking-wide"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[hsl(var(--primary))]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-[hsl(var(--border))]">
            <div className="flex flex-col gap-5">
              <Link
                href="/"
                className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors py-2 tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors py-2 tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors py-2 tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/testimonials"
                className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors py-2 tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/team"
                className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors py-2 tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium bg-[hsl(var(--primary))] text-white px-6 py-3 rounded-lg hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] transition-all text-center tracking-wide mt-2"
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
