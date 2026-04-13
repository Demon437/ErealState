import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/hero-bg.jpg";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('Dubai');
  const [propertyType, setPropertyType] = useState('House');
  const [budget, setBudget] = useState('₹240k - ₹260k');

  const handleFindNow = () => {
    navigate(
      `/properties?location=${encodeURIComponent(location)}&propertyType=${encodeURIComponent(propertyType)}&budget=${encodeURIComponent(budget)}`
    );
  };

  return (
    <section className="relative">
      <div className="relative min-h-[760px] overflow-hidden sm:min-h-[820px] lg:min-h-[920px]">
        {/* Background Image */}
        <motion.img
          src={heroBg}
          alt="Luxury real estate"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.58)_42%,rgba(0,0,0,0.24)_100%)]" />

        {/* Golden soft glow */}
        <div className="absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute bottom-[10%] right-[8%] h-44 w-44 rounded-full bg-[#E8D8B8]/10 blur-3xl sm:h-64 sm:w-64" />

        {/* Decorative border */}
        <div className="absolute inset-0 border border-white/10" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[720px] items-center px-6 pb-16 pt-28 sm:px-10 sm:pt-32 lg:px-16 lg:min-h-[880px] lg:pt-36">
          <div className="w-full max-w-[1180px]">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-[900px]"
            >
              {/* Premium badge */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#E8D8B8]/30 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.24em] text-[#E8D8B8]">
                  Luxury Real Estate Experience
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-fraunces text-[42px] leading-[0.96] text-white sm:text-[60px] md:text-[78px] lg:text-[96px] xl:text-[108px]">
                Discover Your
                <br />
                <span className="italic text-[#C9A96E]">Dream Home</span> with
                <br />
                AI Intelligence
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[760px] font-manrope text-base leading-7 text-white/78 sm:text-lg sm:leading-8 md:mt-8 md:text-[21px] md:leading-9">
                Experience the future of real estate. Our proprietary AI curates
                the market&apos;s finest listings tailored specifically to your
                lifestyle, removing the noise from your property search.
              </p>
            </motion.div>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="mt-10 max-w-[1080px]"
            >
              <div className="rounded-[28px] border border-[#E8D8B8]/20 bg-white/10 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_0.9fr]">
                  <div className="rounded-[22px] border border-[#E8D8B8]/20 bg-black/20 px-4 py-4">
                    <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#E8D8B8]">
                      Location
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-transparent font-manrope text-[15px] font-medium text-white outline-none"
                    >
                      <option className="text-black">Dubai</option>
                      <option className="text-black">Los Angeles</option>
                      <option className="text-black">New York</option>
                      <option className="text-black">London</option>
                    </select>
                  </div>

                  <div className="rounded-[22px] border border-[#E8D8B8]/20 bg-black/20 px-4 py-4">
                    <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#E8D8B8]">
                      Property
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-transparent font-manrope text-[15px] font-medium text-white outline-none"
                    >
                      <option className="text-black">House</option>
                      <option className="text-black">Apartment</option>
                      <option className="text-black">Villa</option>
                      <option className="text-black">Office</option>
                    </select>
                  </div>

                  <div className="rounded-[22px] border border-[#E8D8B8]/20 bg-black/20 px-4 py-4">
                    <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#E8D8B8]">
                      Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-transparent font-manrope text-[15px] font-medium text-white outline-none"
                    >
                      <option className="text-black">₹240k - ₹260k</option>
                      <option className="text-black">₹260k - ₹500k</option>
                      <option className="text-black">₹500k - ₹1M</option>
                      <option className="text-black">₹1M+</option>
                    </select>
                  </div>

                  <button
                    onClick={handleFindNow}
                    className="min-h-[68px] rounded-full bg-[#C9A96E] px-6 font-manrope text-base font-bold text-white shadow-[0_18px_35px_rgba(201,169,110,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B89259]"
                  >
                    Find Now
                  </button>
                </div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            {/* <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/properties"
                className="inline-flex items-center justify-center rounded-2xl bg-[#C9A96E] px-8 py-4 font-manrope text-lg font-semibold text-white shadow-[0_20px_40px_rgba(201,169,110,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B89259]"
              >
                Explore Properties
                <span className="ml-2">→</span>
              </Link>

              <Link
                to="/ai-hub"
                className="inline-flex items-center justify-center rounded-2xl border border-[#E8D8B8]/35 bg-white/10 px-8 py-4 font-manrope text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-[#E8D8B8]"
              >
                Try AI Search
              </Link>
            </motion.div> */}

            {/* Stats / trust row */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <div className="rounded-2xl border border-[#E8D8B8]/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                <p className="font-fraunces text-2xl text-white sm:text-3xl">2K+</p>
                <p className="mt-1 font-manrope text-sm text-white/70">
                  Happy homeowners
                </p>
              </div>

              <div className="rounded-2xl border border-[#E8D8B8]/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                <p className="font-fraunces text-2xl text-white sm:text-3xl">150+</p>
                <p className="mt-1 font-manrope text-sm text-white/70">
                  Premium listings
                </p>
              </div>

              <div className="rounded-2xl border border-[#E8D8B8]/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                <p className="font-fraunces text-2xl text-white sm:text-3xl">98%</p>
                <p className="mt-1 font-manrope text-sm text-white/70">
                  Client satisfaction
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;