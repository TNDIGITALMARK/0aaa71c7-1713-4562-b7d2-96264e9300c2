import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Megaphone, Users, TrendingUp, Award, CheckCircle, BarChart3, Zap, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-[hsl(var(--primary))] text-white py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/generated/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/95 via-[hsl(var(--primary))]/90 to-[hsl(var(--primary))]/85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[hsl(var(--accent))] drop-shadow-lg [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.4)]">
              Creative Marketing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white font-medium drop-shadow-md">
              Innovate. Engage. Grow Your Brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block bg-[hsl(var(--accent))] text-white px-10 py-5 rounded-lg font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 shadow-xl"
              >
                VIEW OUR WORK
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 hover:transform hover:-translate-y-1 transition-all duration-200 border-2 border-white/30"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[hsl(var(--primary))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[hsl(var(--accent))]">500+</div>
              <p className="text-sm md:text-base text-white/80">Successful Campaigns</p>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[hsl(var(--accent))]">250+</div>
              <p className="text-sm md:text-base text-white/80">Happy Clients</p>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[hsl(var(--accent))]">98%</div>
              <p className="text-sm md:text-base text-white/80">Client Satisfaction</p>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[hsl(var(--accent))]">15+</div>
              <p className="text-sm md:text-base text-white/80">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--primary))]">
              Our Core Services
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              We deliver comprehensive marketing solutions tailored to your business needs
            </p>
          </div>
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--primary))]">
              Why Choose Stratos Marketing?
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              We combine creativity, data, and expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mb-4 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Proven Results
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Track record of delivering measurable ROI and sustainable growth for our clients across industries.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mb-4 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Award-Winning Team
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Industry-recognized experts who stay ahead of trends and bring innovative solutions to every project.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mb-4 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Data-Driven Strategy
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Every decision backed by analytics and insights to maximize your marketing investment.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mb-4 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Fast Execution
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Agile processes that deliver campaigns quickly without compromising on quality or effectiveness.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mb-4 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Full Transparency
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Clear reporting, open communication, and complete visibility into campaign performance and budget.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mb-4 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <Globe className="w-7 h-7 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Global Reach
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Experience working with brands across markets, with local insights and global best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--primary))]">
              Recent Success Stories
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Explore how we&apos;ve helped brands transform their digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">Tech Startup</div>
                    <div className="text-sm opacity-80">Brand Launch Campaign</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[hsl(var(--primary))]">300% Growth</span>
                <span className="text-sm text-[hsl(var(--muted-foreground))]">Digital Marketing</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-orange-500 to-red-600">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">E-Commerce</div>
                    <div className="text-sm opacity-80">Social Media Revamp</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[hsl(var(--primary))]">10x Engagement</span>
                <span className="text-sm text-[hsl(var(--muted-foreground))]">Social Strategy</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-green-500 to-teal-600">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">SaaS Platform</div>
                    <div className="text-sm opacity-80">Complete Rebrand</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[hsl(var(--primary))]">140% YoY</span>
                <span className="text-sm text-[hsl(var(--muted-foreground))]">Brand Identity</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block bg-[hsl(var(--primary))] text-white px-8 py-4 rounded-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            >
              View Full Portfolio
            </Link>
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(var(--accent))] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(var(--accent))] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let&apos;s discuss how we can help you achieve your marketing goals and drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block bg-[hsl(var(--accent))] text-white px-10 py-5 rounded-lg font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                href="/portfolio"
                className="inline-block bg-white text-[hsl(var(--primary))] px-10 py-5 rounded-lg font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}