import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Megaphone, Users, TrendingUp, BarChart3, PenTool } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-[hsl(var(--primary))] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to grow your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Advertising */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center">
                <Target className="w-8 h-8 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Digital Advertising
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                Google Ads and Facebook campaigns that target your ideal customers and maximize ROI.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Google Ads Management</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Facebook & Instagram Ads</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Retargeting Campaigns</li>
              </ul>
            </div>

            {/* Content Marketing */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center">
                <PenTool className="w-8 h-8 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Content Marketing
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                Engaging content that tells your story and connects with your audience.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Blog Writing & Strategy</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Social Media Content</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Video Marketing</li>
              </ul>
            </div>

            {/* Brand Development */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center">
                <Megaphone className="w-8 h-8 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Brand Development
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                Create a memorable brand identity that stands out in your market.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Logo Design</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Brand Strategy</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Visual Identity</li>
              </ul>
            </div>

            {/* Lead Generation */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Lead Generation
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                Attract and convert qualified leads through strategic campaigns.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Landing Page Optimization</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Email Marketing</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Conversion Rate Optimization</li>
              </ul>
            </div>

            {/* Social Media Management */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center">
                <Users className="w-8 h-8 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Social Media Management
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                Build and engage your community across all social platforms.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Community Management</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Content Scheduling</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Performance Analytics</li>
              </ul>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                Analytics & Reporting
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                Data-driven insights to measure success and optimize performance.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Google Analytics Setup</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Monthly Reports</li>
                <li className="text-sm text-[hsl(var(--foreground))]">✓ Performance Tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[hsl(var(--primary))]">
            Case Studies
          </h2>
          <p className="text-center text-[hsl(var(--muted-foreground))] mb-12 max-w-2xl mx-auto">
            Real results from real businesses. See how we&apos;ve helped our clients achieve their goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-sm font-semibold">
                  Restaurant Chain
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                340% Increase in Online Orders
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                Through targeted social media advertising and strategic content marketing, we helped a local restaurant chain dramatically increase their online ordering volume.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-[hsl(var(--muted-foreground))]">Timeline:</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">6 months</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-sm font-semibold">
                  B2B Software
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                150 Qualified Leads per Month
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                Content marketing and SEO optimization transformed this B2B software company&apos;s lead generation, consistently delivering high-quality prospects.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-[hsl(var(--muted-foreground))]">Timeline:</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">12 months</span>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-sm font-semibold">
                  Retail Boutique
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--primary))]">
                85% Increase in Sales
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                A comprehensive digital marketing strategy doubled website traffic and increased sales by 85% for this fashion boutique.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-[hsl(var(--muted-foreground))]">Timeline:</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">9 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our marketing services can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[hsl(var(--accent))] text-white px-8 py-4 rounded font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
