import React from "react";
import mainAboutImage from "../../images/Main about image.jpg";

const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative h-[520px] sm:h-[580px] lg:h-[620px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={mainAboutImage}
        alt="Luxury Real Estate"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#081120]/70" />

      {/* Gold Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#081120]" />

      {/* Soft Gold Blur */}
      <div className="absolute left-[10%] top-20 w-40 h-40 bg-[#C9A96E]/20 blur-3xl rounded-full" />
      <div className="absolute right-[10%] bottom-20 w-52 h-52 bg-[#E8D8B8]/10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-[820px]">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#E8D8B8]/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#E8D8B8]">
              About BuildEstate
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-fraunces text-[40px] leading-tight text-white sm:text-[52px] lg:text-[64px]">
            Redefining Real Estate
            <br />
            with
            <span className="italic text-[#C9A96E]"> Intelligence & Elegance</span>
          </h1>

          {/* Divider */}
          <div className="mx-auto mt-6 h-[2px] w-20 rounded-full bg-[#E8D8B8]" />

          {/* Description */}
          <p className="mt-6 font-manrope text-base leading-8 text-white/75 sm:text-lg">
            Where data-driven precision meets the art of modern living,
            delivering curated property experiences with unmatched clarity and trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;