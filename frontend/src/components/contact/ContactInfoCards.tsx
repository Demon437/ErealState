import React from "react";

const ContactInfoCards: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Visit Our Office */}
      <div className="group rounded-[28px] border border-[#E5D9C7] bg-white/95 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(201,169,110,0.14)]">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#E8D8B8] bg-[#F8F5EF] transition-all duration-300 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]">
            <span className="material-icons text-[28px] text-[#C9A96E] transition-colors duration-300 group-hover:text-white">
              location_on
            </span>
          </div>

          <div className="flex-1">
            <h3 className="font-fraunces text-[26px] leading-tight text-[#0F172A]">
              Visit Our Office
            </h3>

            <p className="mt-3 font-manrope text-[15px] leading-7 text-[#64748B]">
              502, Devpath Building,
              <br />
              Near Torrent Lab,
              <br />
              Ashram Road, Ahmedabad
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-manrope text-sm font-bold uppercase tracking-[0.16em] text-[#B89259] transition-all duration-300 hover:gap-3 hover:text-[#C9A96E]"
            >
              <span>Get Directions</span>
              <span className="material-icons text-base">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      {/* Call or Email */}
      <div className="group rounded-[28px] border border-[#E5D9C7] bg-white/95 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(201,169,110,0.14)]">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#E8D8B8] bg-[#F8F5EF] transition-all duration-300 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]">
            <span className="material-icons text-[28px] text-[#C9A96E] transition-colors duration-300 group-hover:text-white">
              phone
            </span>
          </div>

          <div className="flex-1">
            <h3 className="font-fraunces text-[26px] leading-tight text-[#0F172A]">
              Call or Email Us
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 font-manrope text-[15px] text-[#64748B] transition-colors duration-300 hover:text-[#C9A96E]"
              >
                <span className="material-icons text-base">call</span>
                <span>+91 98765 43210</span>
              </a>

              <a
                href="mailto:hello@buildestate.com"
                className="flex items-center gap-3 font-manrope text-[15px] text-[#64748B] transition-colors duration-300 hover:text-[#C9A96E]"
              >
                <span className="material-icons text-base">email</span>
                <span>hello@buildestate.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="group rounded-[28px] border border-[#E5D9C7] bg-white/95 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(201,169,110,0.14)]">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#E8D8B8] bg-[#F8F5EF] transition-all duration-300 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]">
            <span className="material-icons text-[28px] text-[#C9A96E] transition-colors duration-300 group-hover:text-white">
              schedule
            </span>
          </div>

          <div className="flex-1">
            <h3 className="font-fraunces text-[26px] leading-tight text-[#0F172A]">
              Business Hours
            </h3>

            <div className="mt-4 space-y-3 font-manrope text-[15px] text-[#64748B]">
              <div className="flex items-center justify-between gap-4">
                <span>Mon - Fri</span>
                <span className="font-semibold text-[#0F172A]">09:00 - 18:00</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span>Saturday</span>
                <span className="font-semibold text-[#0F172A]">10:00 - 16:00</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span>Sunday</span>
                <span className="font-semibold text-[#0F172A]">Closed</span>
              </div>
            </div>

            <div className="mt-5 h-[2px] w-14 rounded-full bg-[#E8D8B8] transition-all duration-300 group-hover:w-24 group-hover:bg-[#C9A96E]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;