import React from "react";
import teamImage from "../../images/Team section.jpg";

const TrustSignalsSection: React.FC = () => {
  const features = [
    {
      icon: "verified_user",
      title: "Verified Listings Only",
      description:
        "Every property on our platform is physically verified by our team to ensure what you see is exactly what you get.",
    },
    {
      icon: "support_agent",
      title: "24/7 Concierge Support",
      description:
        "Our dedicated team is always available to answer questions, schedule viewings, and provide expert guidance at every step.",
    },
    {
      icon: "savings",
      title: "Transparent Pricing",
      description:
        "No hidden fees. We provide clear, upfront cost breakdowns so you can budget with confidence and clarity.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 sm:py-28">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[7%] top-16 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[8%] h-52 w-52 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-white/80 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
              Why BuildEstate
            </span>
          </div>

          <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[58px]">
            Redefining
            <span className="italic text-[#C9A96E]"> Real Estate</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] font-manrope text-base leading-8 text-[#5B6472] sm:text-lg">
            Combining trusted expertise with intelligent technology to create a
            refined property buying experience from first search to final
            closing.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-[#C9A96E]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-[#E5D9C7] bg-white p-3 shadow-[0_24px_55px_rgba(15,23,42,0.08)] sm:p-4">
              <div className="overflow-hidden rounded-[26px]">
                <img
                  src={teamImage}
                  alt="Team meeting in modern office"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-[28px] border border-[#E5D9C7] bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(201,169,110,0.14)] sm:p-7"
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8D8B8] bg-[#F8F5EF] transition-all duration-300 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]">
                      <span className="font-material-icons text-[28px] text-[#C9A96E] transition-colors duration-300 group-hover:text-white">
                        {feature.icon}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-fraunces text-[28px] leading-tight text-[#0F172A]">
                      {feature.title}
                    </h4>
                    <p className="mt-3 font-manrope text-[16px] leading-8 text-[#64748B]">
                      {feature.description}
                    </p>

                    <div className="mt-5 h-[2px] w-14 rounded-full bg-[#E8D8B8] transition-all duration-300 group-hover:w-24 group-hover:bg-[#C9A96E]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;