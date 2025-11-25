"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    challenge: "",
    budget: "",
    contactMethod: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-[hsl(var(--primary))] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let&apos;s start a conversation about growing your business
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--primary))]">
                Request a Consultation
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours to discuss your marketing needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="challenge"
                    className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                  >
                    Current Marketing Challenge *
                  </label>
                  <select
                    id="challenge"
                    name="challenge"
                    required
                    value={formData.challenge}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  >
                    <option value="">Select a challenge...</option>
                    <option value="lead-generation">Need more leads</option>
                    <option value="brand-awareness">Increase brand awareness</option>
                    <option value="social-media">Social media presence</option>
                    <option value="content">Content marketing</option>
                    <option value="advertising">Digital advertising</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                  >
                    Monthly Marketing Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  >
                    <option value="">Select a range...</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-plus">$25,000+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contactMethod"
                    className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  >
                    <option value="">Select a method...</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="video">Video Call</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                  >
                    Tell Us About Your Business
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[hsl(var(--accent))] text-white px-8 py-4 rounded font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  Send Request
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
                    Thank you! We&apos;ll be in touch soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Team */}
            <div>
              <div className="bg-[hsl(var(--background))] rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--primary))]">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[hsl(var(--accent))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                        Email
                      </h4>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        contact@stratosdigital.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[hsl(var(--accent))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                        Phone
                      </h4>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[hsl(var(--accent))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                        Office
                      </h4>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        123 Marketing Ave, Suite 100<br />
                        Los Angeles, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meet Our Team */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--primary))]">
                  Meet Our Experts
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg">
                      <Image
                        src="/generated/team-1.png"
                        alt="Sarah Chen"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-[hsl(var(--foreground))] text-sm">
                      Sarah Chen
                    </h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      Strategy Director
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg">
                      <Image
                        src="/generated/team-2.png"
                        alt="Marcus Rodriguez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-[hsl(var(--foreground))] text-sm">
                      Marcus Rodriguez
                    </h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      Creative Director
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg">
                      <Image
                        src="/generated/team-3.png"
                        alt="Jennifer Kim"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-[hsl(var(--foreground))] text-sm">
                      Jennifer Kim
                    </h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      Marketing Manager
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg">
                      <Image
                        src="/generated/team-4.png"
                        alt="Alex Thompson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-[hsl(var(--foreground))] text-sm">
                      Alex Thompson
                    </h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      Analytics Lead
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="py-16 bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get a Free Marketing Audit
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We&apos;ll analyze your current marketing efforts and provide actionable recommendations at no cost.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[hsl(var(--primary))] px-8 py-4 rounded font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            Request Your Free Audit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
