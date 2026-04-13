import React from "react";
import { Lightbulb, Eye, Award } from "lucide-react";

const AboutValuesSection: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We challenge the status quo of real estate, blending traditional service with cutting-edge technology to redefine what’s possible.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "No hidden data, no obscured histories. We believe in complete clarity, empowering you to make decisions with absolute confidence.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "From the first search to the final signature, we curate an experience of uncompromising quality and refined elegance.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 sm:py-28">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[8%] top-16 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[8%] h-52 w-52 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-white/80 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
              Our Ethos
            </span>
          </div>

          <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[58px]">
            Driven by
            <span className="italic text-[#C9A96E]"> Purpose</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] font-manrope text-base leading-8 text-[#5B6472] sm:text-lg">
            Our values shape every interaction, every recommendation, and every
            experience we create for clients seeking premium real estate
            guidance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-[#E5D9C7] bg-white/90 p-8 text-center shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(201,169,110,0.16)]"
              >
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-18 w-18 h-16 w-16 items-center justify-center rounded-full border border-[#E8D8B8] bg-[#F8F5EF] transition-all duration-300 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]">
                  <Icon
                    className="h-8 w-8 text-[#C9A96E] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.6}
                  />
                </div>

                {/* Title */}
                <h3 className="font-fraunces text-[28px] leading-tight text-[#0F172A]">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-4 font-manrope text-[16px] leading-8 text-[#64748B]">
                  {value.description}
                </p>

                {/* Divider */}
                <div className="mx-auto mt-6 h-[2px] w-14 rounded-full bg-[#E8D8B8] transition-all duration-300 group-hover:w-24 group-hover:bg-[#C9A96E]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;