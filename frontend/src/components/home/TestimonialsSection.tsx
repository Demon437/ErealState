import React from "react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Los Angeles, CA",
      quote:
        "BuildEstate's AI matched us with our dream home in just 2 weeks. The process was seamless, refined, and deeply personalized from start to finish.",
    },
    {
      name: "Michael Chen",
      location: "San Francisco, CA",
      quote:
        "The neighborhood insights were invaluable. We knew exactly what we were getting before even visiting, which made every decision more confident and strategic.",
    },
    {
      name: "Emily Rodriguez",
      location: "Austin, TX",
      quote:
        "The best real estate experience we’ve ever had. The AI recommendations were spot-on and saved us months of searching and uncertainty.",
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
              Testimonials
            </span>
          </div>

          <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[58px]">
            What Our Clients
            <span className="italic text-[#C9A96E]"> Say</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] font-manrope text-base leading-8 text-[#5B6472] sm:text-lg">
            Trusted by homeowners who value premium service, intelligent
            property matching, and a seamless journey from search to closing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group rounded-[28px] border border-[#E5D9C7] bg-white/90 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(201,169,110,0.16)] ${
                index === 1 ? "lg:-mt-4" : ""
              }`}
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-icons text-[20px] text-[#C9A96E]"
                  >
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-manrope text-[17px] leading-8 text-[#475569]">
                “{testimonial.quote}”
              </p>

              {/* Divider */}
              <div className="mt-6 h-[2px] w-16 rounded-full bg-[#E8D8B8] transition-all duration-300 group-hover:w-24 group-hover:bg-[#C9A96E]" />

              {/* Author */}
              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E5D9C7] bg-[#F8F5EF] font-fraunces text-lg text-[#C9A96E] shadow-sm">
                  {testimonial.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <div className="font-fraunces text-[20px] text-[#0F172A]">
                    {testimonial.name}
                  </div>
                  <div className="mt-1 font-manrope text-sm uppercase tracking-[0.16em] text-[#7C8798]">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;