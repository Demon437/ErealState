import React from "react";
import { Building2, Users, MapPin, CheckCircle } from "lucide-react";

const AboutStatsSection: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      value: "2,450+",
      label: "Properties",
    },
    {
      icon: Users,
      value: "12k+",
      label: "Happy Clients",
    },
    {
      icon: MapPin,
      value: "18",
      label: "Major Cities",
    },
    {
      icon: CheckCircle,
      value: "98%",
      label: "Match Rate",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-20 sm:py-24">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[8%] top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-[#E5D9C7] bg-white/90 px-6 py-8 text-center shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(201,169,110,0.16)]"
              >
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#E8D8B8] bg-[#F8F5EF] transition-all duration-300 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]">
                  <Icon
                    className="h-8 w-8 text-[#C9A96E] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.6}
                  />
                </div>

                {/* Value */}
                <div className="font-fraunces text-[38px] leading-none text-[#0F172A] sm:text-[44px]">
                  {stat.value}
                </div>

                {/* Divider */}
                <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#E8D8B8] transition-all duration-300 group-hover:w-20 group-hover:bg-[#C9A96E]" />

                {/* Label */}
                <p className="mt-4 font-manrope text-sm font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;