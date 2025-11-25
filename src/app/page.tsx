import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Megaphone, Users, TrendingUp, Award, CheckCircle, BarChart3, Zap, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Elegant Refined Design */}
      <section className="relative min-h-[95vh] flex items-center bg-[hsl(var(--background))] overflow-hidden">
        {/* Elegant Decorative Element */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[hsl(var(--accent))] rounded-full blur-[180px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[hsl(var(--primary))] rounded-full blur-[150px]"></div>
        </div>

        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-24">
          <div className="max-w-6xl mx-auto">
            {/* Refined Badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[hsl(var(--muted))] border border-[hsl(var(--border))]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] animate-pulse"></span>
                <span className="text-sm font-medium text-[hsl(var(--muted-foreground))] tracking-wide">Award-Winning Marketing Agency</span>
              </div>
            </div>

            {/* Elegant Headline */}
            <div className="text-center space-y-8 mb-14">
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-[hsl(var(--primary))]">
                <span className="block">Elevate Your</span>
                <span className="block italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Brand Presence
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-[hsl(var(--muted-foreground))] font-light max-w-3xl mx-auto leading-relaxed">
                Where strategic vision meets creative excellence. We craft marketing experiences that resonate, engage, and transform.
              </p>
            </div>

            {/* Elegant CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-10 py-4 text-base font-medium bg-[hsl(var(--primary))] text-white rounded-lg transition-all duration-400 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] hover:shadow-xl hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2 tracking-wide">
                  Begin Your Journey
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center px-10 py-4 text-base font-medium bg-transparent text-[hsl(var(--primary))] rounded-lg border border-[hsl(var(--primary))] transition-all duration-400 hover:bg-[hsl(var(--primary))] hover:text-white hover:shadow-xl hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2 tracking-wide">
                  Explore Our Work
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Elegant Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 text-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-light text-[hsl(var(--accent))] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>500+</div>
                <div className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] uppercase tracking-widest">Campaigns</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-[hsl(var(--border))]"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-light text-[hsl(var(--accent))] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>250+</div>
                <div className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] uppercase tracking-widest">Clients</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-[hsl(var(--border))]"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-light text-[hsl(var(--accent))] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>98%</div>
                <div className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] uppercase tracking-widest">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-3 text-[hsl(var(--muted-foreground))]">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Discover More</span>
            <svg className="w-5 h-5 animate-bounce opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section - Elegant Design */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-5">
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-[hsl(var(--accent))]">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-7 text-[hsl(var(--primary))]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive marketing solutions crafted with precision and care to elevate your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {/* Digital Marketing Card */}
            <div className="group relative bg-white rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-500 border border-[hsl(var(--border))]">
              <div className="w-14 h-14 mb-8 rounded-lg bg-[hsl(var(--muted))] flex items-center justify-center group-hover:bg-[hsl(var(--accent))] transition-all duration-500">
                <Target className="w-7 h-7 text-[hsl(var(--primary))] group-hover:text-[hsl(var(--accent-foreground))] transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-5 text-[hsl(var(--primary))]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Digital Marketing
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed font-light">
                Strategic campaigns that drive measurable results through data-driven insights and innovative approaches.
              </p>
            </div>

            {/* Branding Card */}
            <div className="group relative bg-white rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-500 border border-[hsl(var(--border))]">
              <div className="w-14 h-14 mb-8 rounded-lg bg-[hsl(var(--muted))] flex items-center justify-center group-hover:bg-[hsl(var(--accent))] transition-all duration-500">
                <Megaphone className="w-7 h-7 text-[hsl(var(--primary))] group-hover:text-[hsl(var(--accent-foreground))] transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-5 text-[hsl(var(--primary))]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Brand Strategy
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed font-light">
                Build a powerful brand identity that resonates deeply with your audience and creates lasting connections.
              </p>
            </div>

            {/* Social Media Card */}
            <div className="group relative bg-white rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-500 border border-[hsl(var(--border))]">
              <div className="w-14 h-14 mb-8 rounded-lg bg-[hsl(var(--muted))] flex items-center justify-center group-hover:bg-[hsl(var(--accent))] transition-all duration-500">
                <Users className="w-7 h-7 text-[hsl(var(--primary))] group-hover:text-[hsl(var(--accent-foreground))] transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-5 text-[hsl(var(--primary))]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Social Media
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed font-light">
                Engage your audience with compelling content and strategic social media management that drives engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Elegant Design */}
      <section className="py-28 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-7 text-[hsl(var(--primary))]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto font-light">
              We combine creativity, data, and expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-500 border border-[hsl(var(--border))]">
              <div className="w-12 h-12 mb-6 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--primary))]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Proven Results
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Track record of delivering measurable ROI and sustainable growth for our clients across industries.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-500 border border-[hsl(var(--border))]">
              <div className="w-12 h-12 mb-6 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--primary))]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Award-Winning Team
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Industry-recognized experts who stay ahead of trends and bring innovative solutions to every project.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-500 border border-[hsl(var(--border))]">
              <div className="w-12 h-12 mb-6 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--primary))]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Data-Driven Strategy
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Every decision backed by analytics and insights to maximize your marketing investment.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-500 border border-[hsl(var(--border))]">
              <div className="w-12 h-12 mb-6 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--primary))]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Fast Execution
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Agile processes that deliver campaigns quickly without compromising on quality or effectiveness.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-500 border border-[hsl(var(--border))]">
              <div className="w-12 h-12 mb-6 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--primary))]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Full Transparency
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Clear reporting, open communication, and complete visibility into campaign performance and budget.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-500 border border-[hsl(var(--border))]">
              <div className="w-12 h-12 mb-6 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--primary))]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Global Reach
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Experience working with brands across markets, with local insights and global best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section - Elegant Design */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-7 text-[hsl(var(--primary))]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Success Stories
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto font-light">
              Explore how we've helped brands transform their presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-72 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] shadow-md">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center px-6">
                    <div className="text-3xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Tech Startup</div>
                    <div className="text-sm opacity-80 font-light tracking-wide">Brand Launch Campaign</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
              <div className="flex items-center justify-between px-2">
                <span className="text-base font-semibold text-[hsl(var(--accent))]">300% Growth</span>
                <span className="text-sm text-[hsl(var(--muted-foreground))] font-light">Digital Marketing</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-72 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--primary))] shadow-md">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center px-6">
                    <div className="text-3xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>E-Commerce</div>
                    <div className="text-sm opacity-80 font-light tracking-wide">Social Media Revamp</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
              <div className="flex items-center justify-between px-2">
                <span className="text-base font-semibold text-[hsl(var(--accent))]">10x Engagement</span>
                <span className="text-sm text-[hsl(var(--muted-foreground))] font-light">Social Strategy</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-72 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--primary))] shadow-md">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center px-6">
                    <div className="text-3xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>SaaS Platform</div>
                    <div className="text-sm opacity-80 font-light tracking-wide">Complete Rebrand</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
              <div className="flex items-center justify-between px-2">
                <span className="text-base font-semibold text-[hsl(var(--accent))]">140% YoY</span>
                <span className="text-sm text-[hsl(var(--muted-foreground))] font-light">Brand Identity</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-white px-10 py-4 rounded-lg font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400 tracking-wide"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section - Elegant Design */}
      <section className="py-28 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20 text-[hsl(var(--primary))]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Client Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[hsl(var(--border))]">
              <div className="text-5xl text-[hsl(var(--accent))] mb-4 font-serif">&ldquo;</div>
              <p className="text-base text-[hsl(var(--foreground))] mb-6 font-light leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Stratos transformed our online presence! We saw a 300% lift in web sales, annually.
              </p>
              <div className="w-12 h-12 border border-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-[hsl(var(--accent))]">CH</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[hsl(var(--border))]">
              <div className="text-5xl text-[hsl(var(--accent))] mb-4 font-serif">&ldquo;</div>
              <p className="text-base text-[hsl(var(--foreground))] mb-6 font-light leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Our brand recognition skyrocketed. 140% year-over-year growth achieved!
              </p>
              <div className="w-12 h-12 border border-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-[hsl(var(--accent))]">MW</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[hsl(var(--border))]">
              <div className="text-5xl text-[hsl(var(--accent))] mb-4 font-serif">&ldquo;</div>
              <p className="text-base text-[hsl(var(--foreground))] mb-6 font-light leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Their social media strategy generated 10X more engagement for our brand.
              </p>
              <div className="w-12 h-12 border border-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-[hsl(var(--accent))]">KL</span>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[hsl(var(--border))]">
              <div className="text-5xl text-[hsl(var(--accent))] mb-4 font-serif">&ldquo;</div>
              <p className="text-base text-[hsl(var(--foreground))] mb-6 font-light leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Professional, responsive, and results-driven. Highly recommended!
              </p>
              <div className="w-12 h-12 border border-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-[hsl(var(--accent))]">RJ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section - Elegant Design */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20 text-[hsl(var(--primary))]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl border border-[hsl(var(--border))] shadow-md group-hover:shadow-lg transition-shadow duration-500">
                <Image
                  src="/generated/team-1.png"
                  alt="Prajata Ashka"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-semibold text-lg text-[hsl(var(--primary))] mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Prajata Ashka
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] font-light">
                Founder & Strategy Director
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl border border-[hsl(var(--border))] shadow-md group-hover:shadow-lg transition-shadow duration-500">
                <Image
                  src="/generated/team-2.png"
                  alt="Ben Carter"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-semibold text-lg text-[hsl(var(--primary))] mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Ben Carter
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] font-light">
                Creative Director
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl border border-[hsl(var(--border))] shadow-md group-hover:shadow-lg transition-shadow duration-500">
                <Image
                  src="/generated/team-3.png"
                  alt="Lezel Danba"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-semibold text-lg text-[hsl(var(--primary))] mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Lezel Danba
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] font-light">
                Marketing Manager
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center group">
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl border border-[hsl(var(--border))] shadow-md group-hover:shadow-lg transition-shadow duration-500">
                <Image
                  src="/generated/team-4.png"
                  alt="Chloe Davis"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-semibold text-lg text-[hsl(var(--primary))] mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Chloe Davis
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] font-light">
                Analytics Specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Elegant Design */}
      <section className="py-28 bg-[hsl(var(--primary))] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(var(--accent))] rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--accent))] rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-semibold mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/80 font-light max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your marketing goals and drive meaningful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-10 py-4 rounded-lg font-medium hover:bg-white hover:text-[hsl(var(--primary))] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400 tracking-wide"
              >
                Get Started Today
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-transparent text-white px-10 py-4 rounded-lg font-medium border border-white/30 hover:bg-white hover:text-[hsl(var(--primary))] hover:border-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400 tracking-wide"
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