import React from "react";

const AIIntelligenceSection: React.FC = () => {
  const features = [
    {
      icon: "query_stats",
      title: "Live Market Scraping",
      description:
        "Real-time data feeds from every major listing source, aggregating hidden gems before they hit the mainstream market.",
    },
    {
      icon: "psychology",
      title: "Expert AI Insights",
      description:
        "Predictive analytics on value appreciation and investment potential, tailored to your financial goals.",
    },
    {
      icon: "location_city",
      title: "Best Area Suggestions",
      description:
        "Neighborhood matching based on your lifestyle habits, commute preferences, and local amenities.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 sm:py-28">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-[8%] top-10 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-10 h-48 w-48 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-[820px] text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-white/80 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
              Why Choose AI?
            </span>
          </div>

          <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[58px]">
            AI-Powered Property
            <span className="italic text-[#C9A96E]"> Intelligence</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[740px] font-manrope text-base leading-8 text-[#5B6472] sm:text-lg">
            We leverage advanced algorithms to give you a competitive edge in
            the market, turning data into your dream home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[28px] border border-[#E5D9C7] bg-white/90 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(201,169,110,0.16)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E8D8B8] bg-[#F8F5EF] transition-all duration-300 group-hover:bg-[#C9A96E] group-hover:border-[#C9A96E]">
                <span className="font-material-icons text-[30px] text-[#C9A96E] transition-colors duration-300 group-hover:text-white">
                  {feature.icon}
                </span>
              </div>

              <h3 className="font-fraunces text-[28px] leading-tight text-[#0F172A]">
                {feature.title}
              </h3>

              <p className="mt-4 font-manrope text-[16px] leading-8 text-[#64748B]">
                {feature.description}
              </p>

              <div className="mt-6 h-[2px] w-14 rounded-full bg-[#E8D8B8] transition-all duration-300 group-hover:w-24 group-hover:bg-[#C9A96E]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIIntelligenceSection;