import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info - Elegant Typography */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[hsl(var(--accent))] rounded-lg flex items-center justify-center">
                <span className="text-[hsl(var(--accent-foreground))] font-semibold text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>S</span>
              </div>
              <span className="text-lg font-semibold tracking-wide" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>STRATOS DIGITAL</span>
            </div>
            <p className="text-sm text-white/70 mb-4 font-light">
              contact@stratosdigital.com
            </p>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              123 Marketing Ave, Suite 100<br />
              CA 90210
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-base tracking-wide" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-[hsl(var(--accent))] transition-colors duration-300 font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/70 hover:text-[hsl(var(--accent))] transition-colors duration-300 font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-white/70 hover:text-[hsl(var(--accent))] transition-colors duration-300 font-light">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-[hsl(var(--accent))] transition-colors duration-300 font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-base tracking-wide" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-white/70 font-light">Digital Marketing</li>
              <li className="text-sm text-white/70 font-light">Branding</li>
              <li className="text-sm text-white/70 font-light">Social Media</li>
              <li className="text-sm text-white/70 font-light">Lead Generation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6 text-base tracking-wide" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Connect</h3>
            <p className="text-sm text-white/70 mb-6 font-light">
              Phone: (555) 123-4567
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-all duration-400 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-all duration-400 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-all duration-400 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-all duration-400 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Elegant Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/50 font-light tracking-wide">
            © {new Date().getFullYear()} Stratos Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
