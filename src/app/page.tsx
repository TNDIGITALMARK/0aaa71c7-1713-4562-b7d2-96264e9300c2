import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Megaphone, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-[hsl(var(--primary))] text-white py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/generated/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--primary))]/85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Creative Marketing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Innovate. Engage. Grow
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[hsl(var(--accent))] text-white px-8 py-4 rounded font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              VIEW OUR WORK
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Digital Marketing Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center">
                <Target className="w-8 h-8 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                DIGITAL MARKETING
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                Strategic campaigns that drive results and maximize your ROI through data-driven approaches.
              </p>
            </div>

            {/* Branding Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center">
                <Megaphone className="w-8 h-8 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                BRANDING
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                Build a powerful brand identity that resonates with your target audience and stands out.
              </p>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center">
                <Users className="w-8 h-8 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                SOCIAL MEDIA
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                Engage your audience with compelling content and strategic social media management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--primary))]">
            CLIENT TESTIMONIALS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl text-[hsl(var(--accent))] mb-3">"</div>
              <p className="text-sm text-[hsl(var(--foreground))] mb-4 italic">
                Stratos transformed our online presence! We&apos;ll see a 300% lift in web sales, annually.
              </p>
              <div className="w-12 h-12 mx-auto border-2 border-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-[hsl(var(--accent))]">Client 1</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl text-[hsl(var(--accent))] mb-3">"</div>
              <p className="text-sm text-[hsl(var(--foreground))] mb-4 italic">
                Our brand recognition skyrocketed. 140% Y-o-Y growth achieved!
              </p>
              <div className="w-12 h-12 mx-auto border-2 border-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-[hsl(var(--accent))]">Client 2</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl text-[hsl(var(--accent))] mb-3">"</div>
              <p className="text-sm text-[hsl(var(--foreground))] mb-4 italic">
                Their social media strategy generated 10X more engagement for our brand.
              </p>
              <div className="w-12 h-12 mx-auto border-2 border-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-[hsl(var(--accent))]">Client 3</span>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl text-[hsl(var(--accent))] mb-3">"</div>
              <p className="text-sm text-[hsl(var(--foreground))] mb-4 italic">
                Professional, responsive, and results-driven. Highly recommended!
              </p>
              <div className="w-12 h-12 mx-auto border-2 border-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-[hsl(var(--accent))]">Client 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--primary))]">
            MEET THE TEAM
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/generated/team-1.png"
                  alt="Prajata Ashka"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-[hsl(var(--primary))] mb-1">
                Prajata Ashka
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Founder & Strategy Director
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/generated/team-2.png"
                  alt="Ben Carter"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-[hsl(var(--primary))] mb-1">
                Ben Carter
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Creative Director
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/generated/team-3.png"
                  alt="Lezel Danba"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-[hsl(var(--primary))] mb-1">
                Lezel Danba
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Marketing Manager
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/generated/team-4.png"
                  alt="Chloe Davis"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-[hsl(var(--primary))] mb-1">
                Chloe Davis
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Analytics Specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}