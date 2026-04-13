import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How does the AI matching process work?",
      answer:
        "Our proprietary algorithm analyzes over 50 data points from your preferences and lifestyle inputs to suggest properties that align with your unique needs, often uncovering options you might have missed.",
    },
    {
      id: 2,
      question: "What areas do you currently cover?",
      answer:
        "We currently cover major metropolitan areas including Ahmedabad, Mumbai, Delhi, Bangalore, and Pune. We’re expanding to more cities across India and regularly updating our coverage network.",
    },
    {
      id: 3,
      question: "Can I list my property exclusively with BuildEstate?",
      answer:
        "Yes, we offer exclusive listing support with premium marketing benefits including professional photography, virtual tours, AI-powered listing optimization, and dedicated consultant assistance throughout the selling journey.",
    },
    {
      id: 4,
      question: "How do I schedule a virtual tour?",
      answer:
        "You can schedule a virtual tour directly from any property listing page by clicking the appropriate booking button. Choose your preferred date and time, and our team will send a confirmation along with your joining details.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#FCFAF7] py-24 sm:py-28">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[8%] top-16 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[8%] h-52 w-52 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-white/80 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
              Help Center
            </span>
          </div>

          <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[58px]">
            Common
            <span className="italic text-[#C9A96E]"> Questions</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] font-manrope text-base leading-8 text-[#5B6472] sm:text-lg">
            Find clear answers to the most common questions about buying,
            selling, listing, and working with BuildEstate.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-[900px] space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-[26px] border transition-all duration-300 ${
                  isOpen
                    ? "border-[#C9A96E] bg-white shadow-[0_20px_50px_rgba(201,169,110,0.12)]"
                    : "border-[#E5D9C7] bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                >
                  {/* Number */}
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#C9A96E] bg-[#C9A96E] text-white"
                        : "border-[#E5D9C7] bg-[#F8F5EF] text-[#B89259]"
                    }`}
                  >
                    <span className="font-manrope text-sm font-bold">
                      {String(faq.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Question */}
                  <h3 className="flex-1 font-fraunces text-[22px] leading-snug text-[#0F172A] sm:text-[24px]">
                    {faq.question}
                  </h3>

                  {/* Icon */}
                  <span
                    className={`material-icons text-[28px] transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-[#C9A96E]"
                        : "text-[#B89259]"
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 pl-[74px] sm:px-6 sm:pb-6 sm:pl-[86px]">
                      <div className="mb-4 h-[2px] w-16 rounded-full bg-[#E8D8B8]" />
                      <p className="font-manrope text-[15px] leading-8 text-[#64748B] sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 font-manrope text-sm font-bold uppercase tracking-[0.18em] text-[#B89259] transition-all duration-300 hover:text-[#C9A96E]"
          >
            <span>Get Full Knowledge Base</span>
            <span className="material-icons text-lg transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;