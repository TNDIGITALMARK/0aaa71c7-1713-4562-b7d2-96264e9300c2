import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-[hsl(var(--primary))] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Success stories from businesses we&apos;ve helped grow
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-xs font-semibold mb-3">
                  Restaurant Chain
                </span>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]">
                  Local Restaurant Chain
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                  340% increase in online orders through targeted social media campaigns.
                </p>
                <a href="/services" className="inline-flex items-center text-[hsl(var(--accent))] font-semibold text-sm hover:underline">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-xs font-semibold mb-3">
                  B2B Software
                </span>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]">
                  Software Company
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                  150 qualified leads per month through content marketing and SEO.
                </p>
                <a href="/services" className="inline-flex items-center text-[hsl(var(--accent))] font-semibold text-sm hover:underline">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-red-600"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-xs font-semibold mb-3">
                  Retail Boutique
                </span>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]">
                  Fashion Boutique
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                  85% sales increase through comprehensive digital marketing strategy.
                </p>
                <a href="/services" className="inline-flex items-center text-[hsl(var(--accent))] font-semibold text-sm hover:underline">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-yellow-600"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-xs font-semibold mb-3">
                  E-commerce
                </span>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]">
                  Online Store
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                  Tripled conversion rate with optimized landing pages and email campaigns.
                </p>
                <a href="/services" className="inline-flex items-center text-[hsl(var(--accent))] font-semibold text-sm hover:underline">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Portfolio Item 5 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-xs font-semibold mb-3">
                  Healthcare
                </span>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]">
                  Medical Practice
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                  200% increase in new patient appointments through local SEO and ads.
                </p>
                <a href="/services" className="inline-flex items-center text-[hsl(var(--accent))] font-semibold text-sm hover:underline">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Portfolio Item 6 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-xs font-semibold mb-3">
                  Real Estate
                </span>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]">
                  Real Estate Agency
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                  Generated 50+ qualified leads monthly through strategic Facebook ads.
                </p>
                <a href="/services" className="inline-flex items-center text-[hsl(var(--accent))] font-semibold text-sm hover:underline">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s create a marketing strategy that delivers real results for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[hsl(var(--accent))] text-white px-8 py-4 rounded font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
