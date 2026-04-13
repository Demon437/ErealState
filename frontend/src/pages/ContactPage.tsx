import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useSEO } from "../hooks/useSEO";
import ContactHeroSection from "../components/contact/ContactHeroSection";
import ContactFormCard from "../components/contact/ContactFormCard";
import ContactInfoCards from "../components/contact/ContactInfoCards";
import ContactMapSection from "../components/contact/ContactMapSection";
import FAQSection from "../components/contact/FAQSection";
import OtherWaysSection from "../components/contact/OtherWaysSection";
import NewsletterBanner from "../components/contact/NewsletterBanner";

const ContactPage: React.FC = () => {
  useSEO({
    title: "Contact Us",
    description:
      "Get in touch with BuildEstate. We're here to help you find your dream property.",
  });

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#0F172A]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero */}
        <ContactHeroSection />

        {/* Contact Form + Info */}
        <section className="relative overflow-hidden bg-[#F8F5EF] py-20 sm:py-24">
          <div className="pointer-events-none absolute left-[8%] top-10 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-[8%] h-48 w-48 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

          <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-white/80 px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
                  Get In Touch
                </span>
              </div>

              <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[58px]">
                Let’s Start the
                <span className="italic text-[#C9A96E]"> Conversation</span>
              </h2>

              <p className="mx-auto mt-5 max-w-[720px] font-manrope text-base leading-8 text-[#5B6472] sm:text-lg">
                Whether you're exploring premium properties, need expert
                guidance, or want to schedule a consultation, our team is here
                to help.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ContactFormCard />
              </div>

              <div className="lg:col-span-1">
                <ContactInfoCards />
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-[#FCFAF7]">
          <ContactMapSection />
        </section>

        {/* FAQ */}
        <section className="bg-[#F8F5EF]">
          <FAQSection />
        </section>

        {/* Other Ways */}
        <section className="bg-[#FCFAF7]">
          <OtherWaysSection />
        </section>

        {/* Newsletter */}
        <section className="bg-[#081120]">
          <NewsletterBanner />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;