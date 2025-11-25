import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-[hsl(var(--primary))] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                  />
                ))}
              </div>
              <p className="text-[hsl(var(--foreground))] mb-6 italic">
                &quot;Stratos Digital completely transformed our online presence. The 300% increase in web sales has exceeded all our expectations. Their team is professional, responsive, and truly understands digital marketing.&quot;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[hsl(var(--foreground))]">Michael Chen</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Owner, Local Restaurant Chain</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                  />
                ))}
              </div>
              <p className="text-[hsl(var(--foreground))] mb-6 italic">
                &quot;Our brand recognition skyrocketed after working with Stratos. The 140% year-over-year growth we achieved is a testament to their strategic approach and creative excellence.&quot;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[hsl(var(--foreground))]">Sarah Martinez</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">CMO, TechStart Solutions</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                  />
                ))}
              </div>
              <p className="text-[hsl(var(--foreground))] mb-6 italic">
                &quot;The social media strategy they developed generated 10X more engagement for our brand. We&apos;ve seen tremendous growth in both followers and actual conversions.&quot;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[hsl(var(--foreground))]">David Thompson</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Founder, Boutique Fashion Co.</p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                  />
                ))}
              </div>
              <p className="text-[hsl(var(--foreground))] mb-6 italic">
                &quot;Professional, responsive, and results-driven. Stratos Digital delivered beyond our expectations and continues to be an invaluable partner in our growth.&quot;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[hsl(var(--foreground))]">Jennifer Lee</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">VP Marketing, B2B Software Inc.</p>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                  />
                ))}
              </div>
              <p className="text-[hsl(var(--foreground))] mb-6 italic">
                &quot;The content marketing strategy they created has positioned us as thought leaders in our industry. We&apos;re now generating 150 qualified leads every month.&quot;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[hsl(var(--foreground))]">Robert Garcia</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">CEO, Innovation Labs</p>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                  />
                ))}
              </div>
              <p className="text-[hsl(var(--foreground))] mb-6 italic">
                &quot;From branding to digital advertising, Stratos Digital handled everything with expertise and care. Our sales have increased by 85% since partnering with them.&quot;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[hsl(var(--foreground))]">Amanda White</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Owner, Retail Boutique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--primary))]">
            Results That Speak
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--accent))] mb-2">200+</div>
              <p className="text-[hsl(var(--muted-foreground))]">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--accent))] mb-2">150%</div>
              <p className="text-[hsl(var(--muted-foreground))]">Average ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--accent))] mb-2">$50M+</div>
              <p className="text-[hsl(var(--muted-foreground))]">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--accent))] mb-2">98%</div>
              <p className="text-[hsl(var(--muted-foreground))]">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing List of Success Stories
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your business achieve similar results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[hsl(var(--accent))] text-white px-8 py-4 rounded font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
