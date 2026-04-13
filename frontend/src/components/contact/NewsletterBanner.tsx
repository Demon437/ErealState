import React, { useState } from "react";

const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-[#081120] py-20 sm:py-24">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[8%] top-10 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[10%] h-52 w-52 rounded-full bg-[#E8D8B8]/10 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="rounded-[32px] border border-[#E8D8B8]/20 bg-white/5 px-6 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-8 sm:py-12 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div className="max-w-[640px] text-white">
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#E8D8B8]/20 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#E8D8B8]">
                  Stay Updated
                </span>
              </div>

              <h2 className="font-fraunces text-[34px] leading-tight text-white sm:text-[42px] lg:text-[50px]">
                Get Premium Property
                <span className="italic text-[#C9A96E]"> Updates</span>
              </h2>

              <p className="mt-4 font-manrope text-base leading-8 text-white/75 sm:text-lg">
                Subscribe to receive curated listings, market insights, and
                exclusive property opportunities directly in your inbox.
              </p>
            </div>

            {/* Right */}
            <div className="w-full max-w-[520px]">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 rounded-2xl border border-[#E8D8B8]/20 bg-white/10 px-5 py-4 font-manrope text-sm text-white placeholder:text-white/50 outline-none transition-all duration-300 focus:border-[#C9A96E] focus:bg-white/15"
                  required
                />

                <button
                  type="submit"
                  className="rounded-2xl bg-[#C9A96E] px-7 py-4 font-manrope text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_35px_rgba(201,169,110,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B89259]"
                >
                  Subscribe
                </button>
              </form>

              <p className="mt-4 font-manrope text-xs leading-6 text-white/55">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;