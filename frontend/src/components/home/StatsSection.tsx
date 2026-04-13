import React from "react";

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "2,450+",
      label: "Properties Sold",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "150+",
      label: "Cities Covered",
    },
    {
      value: "$1.2B",
      label: "Market Value",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-14 sm:py-16">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[8%] top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[26px] border border-[#E5D9C7] bg-white/90 px-6 py-8 text-center shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(201,169,110,0.14)]"
            >
              <div className="font-fraunces text-[38px] leading-none text-[#C9A96E] sm:text-[44px]">
                {stat.value}
              </div>

              <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#E8D8B8]" />

              <p className="mt-4 font-manrope text-sm font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;