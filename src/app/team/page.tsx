import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-[hsl(var(--primary))] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/generated/team-1.png"
                  alt="Sarah Chen"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-1">
                Sarah Chen
              </h3>
              <p className="text-sm text-[hsl(var(--accent))] font-semibold mb-2">
                Founder & Strategy Director
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                8 years of experience at Fortune 500 companies. Expert in developing comprehensive marketing strategies that drive growth.
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/generated/team-2.png"
                  alt="Marcus Rodriguez"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-1">
                Marcus Rodriguez
              </h3>
              <p className="text-sm text-[hsl(var(--accent))] font-semibold mb-2">
                Creative Director
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                Award-winning creative with expertise in brand development and visual campaigns that captivate audiences.
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/generated/team-3.png"
                  alt="Jennifer Kim"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-1">
                Jennifer Kim
              </h3>
              <p className="text-sm text-[hsl(var(--accent))] font-semibold mb-2">
                Digital Marketing Manager
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                Specializes in paid advertising and analytics, with proven track record of maximizing campaign ROI.
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="text-center group">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/generated/team-4.png"
                  alt="Alex Thompson"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-1">
                Alex Thompson
              </h3>
              <p className="text-sm text-[hsl(var(--accent))] font-semibold mb-2">
                Analytics Specialist
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                Data-driven strategist who transforms complex metrics into actionable insights for business growth.
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--primary))]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Results-Driven
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                We measure success by your growth and ROI, not vanity metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Collaborative
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                Your success is our success. We work as an extension of your team.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Innovative
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                We stay ahead of trends to give your brand a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is ready to help your business reach its full potential.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[hsl(var(--accent))] text-white px-8 py-4 rounded font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
