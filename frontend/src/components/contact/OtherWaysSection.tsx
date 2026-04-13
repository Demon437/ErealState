import React from "react";

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  action: string;
  actionLink: string;
}

const OtherWaysSection: React.FC = () => {
  const methods: ContactMethod[] = [
    {
      icon: "chat",
      title: "WhatsApp Us",
      description:
        "Chat directly with our support team via WhatsApp for quick guidance, updates, and instant assistance.",
      action: "Start Chat",
      actionLink: "https://wa.me/919876543210",
    },
    {
      icon: "chat_bubble",
      title: "Live Chat",
      description:
        "Connect instantly with a property expert through our live chat experience for fast support and smart recommendations.",
      action: "Launch Chat",
      actionLink: "#",
    },
    {
      icon: "event",
      title: "Schedule a Call",
      description:
        "Book a convenient consultation with our specialists and get tailored advice for your next property decision.",
      action: "Book Now",
      actionLink: "#",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FCFAF7] py-24 sm:py-28">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[8%] top-14 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[8%] h-52 w-52 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-white/80 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
              More Ways to Connect
            </span>
          </div>

          <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[58px]">
            Other Ways to
            <span className="italic text-[#C9A96E]"> Connect</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] font-manrope text-base leading-8 text-[#5B6472] sm:text-lg">
            Need faster support? Choose the channel that works best for you and
            connect with our team instantly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {methods.map((method, index) => (
            <div
              key={index}
              className="group rounded-[28px] border border-[#E5D9C7] bg-white/90 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(201,169,110,0.16)]"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E8D8B8] bg-[#F8F5EF] transition-all duration-300 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]">
                <span className="material-icons text-[30px] text-[#C9A96E] transition-colors duration-300 group-hover:text-white">
                  {method.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-fraunces text-[28px] leading-tight text-[#0F172A]">
                {method.title}
              </h3>

              {/* Description */}
              <p className="mt-4 font-manrope text-[16px] leading-8 text-[#64748B]">
                {method.description}
              </p>

              {/* Divider */}
              <div className="mt-6 h-[2px] w-14 rounded-full bg-[#E8D8B8] transition-all duration-300 group-hover:w-24 group-hover:bg-[#C9A96E]" />

              {/* Action */}
              <a
                href={method.actionLink}
                target={method.actionLink.startsWith("http") ? "_blank" : "_self"}
                rel={
                  method.actionLink.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mt-6 inline-flex items-center gap-2 font-manrope text-sm font-bold uppercase tracking-[0.16em] text-[#B89259] transition-all duration-300 hover:gap-3 hover:text-[#C9A96E]"
              >
                <span>{method.action}</span>
                <span className="material-icons text-base">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherWaysSection;