import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const AboutAISection: React.FC = () => {
  const imgVerticalArchitecturalDetail =
    "https://images.unsplash.com/photo-1695067440629-b5e513976100?w=1200";

  const features = [
    "Predictive Market Analysis",
    "Hyper-local Neighborhood Data",
    "Investment Value Projection",
    "Lifestyle Compatibility Scoring",
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 sm:py-28">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[8%] top-16 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[8%] h-52 w-52 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Content */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-white/80 px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
                The Engine
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[58px]">
              AI-Powered
              <br />
              <span className="italic text-[#C9A96E]">
                Property Intelligence
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[620px] font-manrope text-[16px] leading-8 text-[#5B6472] sm:text-lg">
              Our proprietary algorithms analyze millions of data points—from
              sun patterns and neighborhood noise levels to architectural styles
              and historical value trends—to present you with opportunities
              others miss.
            </p>

            {/* Features */}
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8D8B8] bg-white shadow-sm">
                    <Check className="h-4 w-4 text-[#C9A96E]" />
                  </div>
                  <span className="font-manrope text-[16px] text-[#0F172A]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-3 font-manrope text-sm font-bold uppercase tracking-[0.16em] text-[#B89259] transition-all duration-300 hover:gap-4 hover:text-[#C9A96E]"
            >
              <span>Learn About Our Tech</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right - Image */}
          <div className="relative">
            {/* Decorative bg card */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[32px] border border-[#E5D9C7] bg-white/50" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#E5D9C7] bg-white p-3 shadow-[0_24px_55px_rgba(15,23,42,0.08)] sm:p-4">
              <div className="relative aspect-[560/700] overflow-hidden rounded-[26px]">
                <img
                  src={imgVerticalArchitecturalDetail}
                  alt="AI Property Intelligence"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/25 via-transparent to-transparent" />

                {/* Floating Match Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-[#E8D8B8]/20 bg-white/88 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#F8F5EF] border border-[#E8D8B8]">
                      <Sparkles className="h-6 w-6 text-[#C9A96E]" />
                    </div>

                    <div>
                      <p className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
                        Match Score
                      </p>
                      <p className="mt-1 font-fraunces text-[24px] leading-none text-[#0F172A] sm:text-[28px]">
                        98.5% Compatibility
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#E8D8B8]/50">
                    <div className="h-full w-[98.5%] rounded-full bg-[#C9A96E]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End right */}
        </div>
      </div>
    </section>
  );
};

export default AboutAISection;