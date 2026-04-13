import React from "react";
import { ArrowRight } from "lucide-react";
import heritageImage from "../../images/Heritage section.jpg";

const AboutHeritageSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFAF7] py-24 sm:py-28">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[8%] top-16 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[8%] h-52 w-52 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-[#C9A96E]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-[#E5D9C7] bg-white p-3 shadow-[0_24px_55px_rgba(15,23,42,0.08)] sm:p-4">
              <div className="relative overflow-hidden rounded-[26px]">
                <img
                  src={heritageImage}
                  alt="Architectural detail"
                  className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[680px] transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pt-8">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-white/80 px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
                Our Heritage
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[58px]">
              Redefining the Real
              <br />
              Estate Landscape with
              <br />
              <span className="italic text-[#C9A96E]">
                Better Property Discovery
              </span>
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-5">
              <p className="font-manrope text-[16px] leading-8 text-[#5B6472] sm:text-lg">
                Founded by architects and data scientists, BuildEstate emerged
                from a simple observation: the search for a home had become a
                transaction, losing the emotional resonance of finding one’s
                sanctuary.
              </p>

              <p className="font-manrope text-[16px] leading-8 text-[#5B6472] sm:text-lg">
                We set out to bridge the gap between cold data and warm living
                spaces. By harnessing advanced AI, we don’t just match square
                footage; we match lifestyles, aesthetics, and the intangible
                feelings that make a house a home.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 rounded-[24px] border border-[#E8D8B8] bg-[#F8F5EF] px-6 py-6 shadow-sm">
              <p className="font-fraunces text-[24px] italic leading-9 text-[#C9A96E] sm:text-[28px]">
                “We believe finding a home should be inspiring, not exhausting.”
              </p>
            </blockquote>

            {/* Link */}
            <a
              href="#team"
              className="group mt-8 inline-flex items-center gap-3 font-manrope text-sm font-bold uppercase tracking-[0.16em] text-[#B89259] transition-all duration-300 hover:gap-4 hover:text-[#C9A96E]"
            >
              <span>Meet the Architects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeritageSection;