import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[hsl(var(--accent))] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-lg font-bold">STRATOS DIGITAL</span>
            </div>
            <p className="text-sm text-white/80 mb-4">
              email: contact@stratosdigital.com
            </p>
            <p className="text-sm text-white/80">
              123 Marketing Ave, Suite 100<br />
              CA 90210
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-[hsl(var(--accent))] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/80 hover:text-[hsl(var(--accent))] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-white/80 hover:text-[hsl(var(--accent))] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-[hsl(var(--accent))] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-white/80">Digital Marketing</li>
              <li className="text-sm text-white/80">Branding</li>
              <li className="text-sm text-white/80">Social Media</li>
              <li className="text-sm text-white/80">Lead Generation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <p className="text-sm text-white/80 mb-4">
              Phone: (555) 123-4567
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Stratos Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
