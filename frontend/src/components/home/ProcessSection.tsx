import React from "react";
import { Link } from "react-router-dom";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Profile Analysis",
      description:
        "Our AI deep-dives into your preferences, lifestyle needs, and financial goals to build a comprehensive buyer profile.",
    },
    {
      number: "02",
      title: "Smart Matching",
      description:
        "Algorithms scan thousands of listings to find properties that align with your unique criteria, filtering out the noise.",
    },
    {
      number: "03",
      title: "Virtual Tours & Insights",
      description:
        "Experience homes remotely with immersive 3D tours and receive detailed neighborhood analytics reports.",
    },
    {
      number: "04",
      title: "Seamless Closing",
      description:
        "From offer to keys, our digital platform handles paperwork, negotiations, and closing logistics effortlessly.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 sm:py-28">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-[8%] top-14 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[8%] h-52 w-52 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-white/80 px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
                  Process
                </span>
              </div>

              <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[56px]">
                The Path to Your
                <br />
                <span className="italic text-[#C9A96E]">New Beginning</span>
              </h2>

              <p className="mt-6 max-w-[430px] font-manrope text-base leading-8 text-[#5B6472] sm:text-lg">
                We&apos;ve simplified the complex journey of buying a home into
                four seamless, AI-assisted steps designed for a smarter and more
                refined experience.
              </p>

              <Link
                to="/signup"
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#C9A96E] px-8 py-4 font-manrope text-base font-bold text-white shadow-[0_18px_35px_rgba(201,169,110,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B89259]"
              >
                Start Your Journey
              </Link>
            </div>
          </div>

          {/* Right Steps */}
          <div className="relative lg:col-span-8">
            {/* timeline line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#E8D8B8] via-[#DCC7A0] to-transparent md:block" />

            <div className="space-y-8 md:space-y-10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group relative rounded-[28px] border border-[#E5D9C7] bg-white/90 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(201,169,110,0.16)] sm:p-8"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                    {/* Number */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCC7A0] bg-[#F8F5EF] shadow-sm transition-all duration-300 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]">
                        <span className="font-manrope text-sm font-bold tracking-[0.12em] text-[#B89259] transition-colors duration-300 group-hover:text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-fraunces text-[28px] leading-tight text-[#0F172A]">
                        {step.title}
                      </h3>
                      <p className="mt-3 font-manrope text-[16px] leading-8 text-[#64748B]">
                        {step.description}
                      </p>

                      <div className="mt-5 h-[2px] w-14 rounded-full bg-[#E8D8B8] transition-all duration-300 group-hover:w-24 group-hover:bg-[#C9A96E]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;