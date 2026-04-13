import React from "react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#081120] py-24 sm:py-28">
      {/* Background texture */}
      <img
        src="/src/images/Abstract architectural texture with light and shadow.png"
        alt="Background Texture"
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
      />

      {/* Premium overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,17,32,0.92)_0%,rgba(10,18,35,0.96)_45%,rgba(6,12,24,0.98)_100%)]" />
      <div className="absolute left-[10%] top-[18%] h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl sm:h-56 sm:w-56" />
      <div className="absolute bottom-[8%] right-[12%] h-48 w-48 rounded-full bg-[#E8D8B8]/10 blur-3xl sm:h-64 sm:w-64" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="mx-auto max-w-[980px] rounded-[32px] border border-[#E8D8B8]/20 bg-white/5 px-6 py-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-10 sm:py-16 lg:px-14">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#E8D8B8]/25 bg-white/8 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#E8D8B8]">
              Start Your Luxury Journey
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-fraunces text-[38px] leading-[1.05] text-white sm:text-[50px] lg:text-[62px]">
            Ready to Find Your
            <br />
            <span className="italic text-[#C9A96E]">Dream Home?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[720px] font-manrope text-base leading-8 text-white/75 sm:text-lg">
            Join thousands of satisfied homeowners who found their perfect
            property with BuildEstate&apos;s AI-powered platform, curated for a
            smarter and more refined real estate experience.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-[#C9A96E] px-8 py-4 font-manrope text-lg font-bold text-white shadow-[0_20px_40px_rgba(201,169,110,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B89259]"
            >
              Get Started
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-[#E8D8B8]/35 bg-white/5 px-8 py-4 font-manrope text-lg font-bold text-white transition-all duration-300 hover:border-[#E8D8B8] hover:bg-white/10"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;