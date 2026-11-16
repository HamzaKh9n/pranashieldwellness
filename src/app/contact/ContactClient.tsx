"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedNotice(true);
    setTimeout(() => setSubmittedNotice(false), 5000);
  };

  return (
    <>
      {/* 1. Page Header */}
      <div className="py-12 md:py-16 bg-[#F3F8F2] border-b border-[#E4ECE4]">
        <Container>
          <SectionHeading
            eyebrow="COMMUNICATION & INQUIRIES"
            heading="Contact Us"
            description="Have questions about our wellness products, forthcoming releases, or brand standards? Our team is glad to assist you."
          />
        </Container>
      </div>

      {/* 2. Main Contact Section */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2
                  className="text-2xl font-semibold mb-2 text-[#183D32]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Direct Channels
                </h2>
                <p className="text-sm text-[#526157] leading-relaxed mb-6">
                  Reach out directly through email or send a message using the form.
                  All inquiries receive a personal response.
                </p>
              </div>

              <div className="space-y-4">
                <Card
                  variant="default"
                  className="p-5 border border-[#E4ECE4] bg-[#FAF9F4] flex items-start gap-4 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#DCEEDC] text-[#126336] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#126336] mb-1">
                      Email Inquiries
                    </p>
                    <a
                      href="mailto:contact@pranashieldwellness.com"
                      className="text-sm font-medium text-[#183D32] hover:text-[#25834B] transition-colors"
                    >
                      contact@pranashieldwellness.com
                    </a>
                    <p className="text-xs text-[#526157] mt-0.5">
                      Response within 24–48 business hours
                    </p>
                  </div>
                </Card>

                <Card
                  variant="default"
                  className="p-5 border border-[#E4ECE4] bg-[#FAF9F4] flex items-start gap-4 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#DCEEDC] text-[#126336] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#126336] mb-1">
                      Operating Schedule
                    </p>
                    <p className="text-sm font-medium text-[#183D32]">
                      Monday – Friday: 9:30 AM – 6:00 PM IST
                    </p>
                    <p className="text-xs text-[#526157] mt-0.5">
                      Closed on Sundays and public holidays
                    </p>
                  </div>
                </Card>

                <Card
                  variant="default"
                  className="p-5 border border-[#E4ECE4] bg-[#FAF9F4] flex items-start gap-4 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#DCEEDC] text-[#126336] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#126336] mb-1">
                      Registered Location
                    </p>
                    <p className="text-sm font-medium text-[#183D32]">
                      Pranashieldwellness
                    </p>
                    <p className="text-xs text-[#526157] mt-0.5 italic">
                      Physical warehouse & corporate dispatch address will be published at launch.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-[#F3F8F2] p-8 sm:p-10 rounded-2xl border border-[#E4ECE4]">
              <h2
                className="text-2xl font-semibold mb-2 text-[#183D32]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Send Us a Message
              </h2>
              <p className="text-sm text-[#526157] leading-relaxed mb-6">
                Fill in the details below and our team will get in touch with you shortly.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block mb-1.5 text-xs font-semibold tracking-wide uppercase text-[#183D32]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E4ECE4] rounded-lg text-[#183D32] placeholder-[#526157] outline-none focus:border-[#25834B] focus:ring-1 focus:ring-[#25834B] transition-colors"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block mb-1.5 text-xs font-semibold tracking-wide uppercase text-[#183D32]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E4ECE4] rounded-lg text-[#183D32] placeholder-[#526157] outline-none focus:border-[#25834B] focus:ring-1 focus:ring-[#25834B] transition-colors"
                      placeholder="e.g. rahul@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block mb-1.5 text-xs font-semibold tracking-wide uppercase text-[#183D32]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E4ECE4] rounded-lg text-[#183D32] placeholder-[#526157] outline-none focus:border-[#25834B] focus:ring-1 focus:ring-[#25834B] transition-colors"
                    placeholder="Product inquiry, launch notification, partnership…"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block mb-1.5 text-xs font-semibold tracking-wide uppercase text-[#183D32]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E4ECE4] rounded-lg text-[#183D32] placeholder-[#526157] outline-none focus:border-[#25834B] focus:ring-1 focus:ring-[#25834B] transition-colors resize-y"
                    placeholder="Write your question or feedback here…"
                  />
                </div>

                <div className="p-3.5 text-xs bg-white rounded-lg border border-[#E4ECE4] text-[#526157] leading-relaxed">
                  <span className="font-semibold text-[#183D32]">Notice: </span>
                  Form dispatch is currently connected for frontend verification. Production server mailing will activate upon backend configuration.
                </div>

                {submittedNotice && (
                  <div className="p-3 bg-[#DCEEDC] text-[#126336] text-xs font-semibold rounded-lg text-center">
                    ✓ Thank you! Your test inquiry has been recorded.
                  </div>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
