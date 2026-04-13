import React from "react";
import { Link } from "react-router-dom";
import glassPavilion from "../../assets/glass.jpg";
import skylinePenthouse from "../../assets/skyline.jpeg";
import desertOasis from "../../assets/desert.jpg";
import coastalRetreat from "../../assets/coastel.jpg";

const CuratedListingsSection: React.FC = () => {
  const properties = [
    {
      image: glassPavilion,
      title: "The Glass Pavilion",
      location: "Montecito, California",
      price: "$12,500,000",
      beds: "6 Beds",
      size: "8,200 sqft",
      featured: true,
      large: true,
    },
    {
      image: skylinePenthouse,
      title: "Skyline Penthouse",
      location: "New York, NY",
      price: "$8,950,000",
      beds: "4 Beds",
      size: "4,900 sqft",
      large: false,
    },
    {
      image: desertOasis,
      title: "Desert Oasis",
      location: "Joshua Tree, CA",
      price: "$3,200,000",
      beds: "3 Beds",
      size: "3,100 sqft",
      large: false,
    },
    {
      image: coastalRetreat,
      title: "Coastal Retreat",
      location: "Malibu, California",
      price: "$15,000,000",
      beds: "7 Beds",
      size: "9,400 sqft",
      large: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 sm:py-28">
      {/* soft glow */}
      <div className="pointer-events-none absolute left-[6%] top-16 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[8%] h-52 w-52 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-white/80 px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
                Exclusive Selection
              </span>
            </div>

            <h2 className="font-fraunces text-[38px] leading-tight text-[#0F172A] sm:text-[48px] lg:text-[58px]">
              Curated Luxury
              <span className="italic text-[#C9A96E]"> Listings</span>
            </h2>

            <p className="mt-5 max-w-[620px] font-manrope text-base leading-8 text-[#5B6472] sm:text-lg">
              Explore a handpicked collection of exceptional properties designed
              for refined living, long-term value, and an unmatched buying
              experience.
            </p>
          </div>

          <Link
            to="/properties"
            className="inline-flex items-center gap-2 font-manrope text-sm font-bold uppercase tracking-[0.18em] text-[#B89259] transition-all duration-300 hover:gap-3 hover:text-[#C9A96E]"
          >
            View All Properties
            <span className="font-material-icons text-base">arrow_forward</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Main Featured Card */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-[32px] border border-[#E5D9C7] bg-white shadow-[0_24px_55px_rgba(15,23,42,0.08)]">
              <div className="relative h-[540px] sm:h-[620px]">
                <img
                  src={properties[0].image}
                  alt={properties[0].title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="inline-flex rounded-full border border-[#E8D8B8]/30 bg-[#C9A96E] px-4 py-2 font-manrope text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_24px_rgba(201,169,110,0.28)]">
                    Featured
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 font-manrope text-xs font-semibold uppercase tracking-[0.16em] text-[#E8D8B8] backdrop-blur-md">
                      Signature Listing
                    </span>
                  </div>

                  <h3 className="font-fraunces text-[30px] text-white sm:text-[40px]">
                    {properties[0].title}
                  </h3>
                  <p className="mt-2 font-manrope text-base text-white/75 sm:text-lg">
                    {properties[0].location}
                  </p>

                  <div className="mt-6 flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-manrope text-2xl font-semibold text-white">
                      {properties[0].price}
                    </span>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                      <span className="font-manrope text-sm text-white/80">
                        {properties[0].beds}
                      </span>
                      <span className="font-manrope text-sm text-white/80">
                        {properties[0].size}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right stack */}
          <div className="grid gap-6 lg:col-span-5">
            {properties.slice(1, 3).map((property) => (
              <div
                key={property.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#E5D9C7] bg-white shadow-[0_20px_45px_rgba(15,23,42,0.07)]"
              >
                <div className="relative h-[300px] sm:h-[340px]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-fraunces text-[26px] text-white">
                      {property.title}
                    </h3>
                    <p className="mt-1 font-manrope text-sm text-white/75">
                      {property.location}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
                      <span className="font-manrope text-lg font-semibold text-white">
                        {property.price}
                      </span>

                      <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#C9A96E] hover:border-[#C9A96E]">
                        <span className="font-material-icons text-lg">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom wide card */}
          <div className="lg:col-span-12">
            <div className="group relative overflow-hidden rounded-[32px] border border-[#E5D9C7] bg-white shadow-[0_24px_55px_rgba(15,23,42,0.08)]">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[340px] sm:min-h-[420px]">
                  <img
                    src={properties[3].image}
                    alt={properties[3].title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent lg:bg-gradient-to-r lg:from-black/75 lg:to-transparent" />
                </div>

                <div className="flex flex-col justify-center bg-[#0F172A] px-6 py-8 sm:px-8 lg:px-10">
                  <span className="mb-4 inline-flex w-fit rounded-full border border-[#E8D8B8]/20 bg-white/5 px-4 py-2 font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#E8D8B8]">
                    Coastal Collection
                  </span>

                  <h3 className="font-fraunces text-[32px] leading-tight text-white sm:text-[40px]">
                    {properties[3].title}
                  </h3>

                  <p className="mt-3 font-manrope text-base leading-8 text-white/70">
                    {properties[3].location}
                  </p>

                  <p className="mt-6 font-manrope text-2xl font-semibold text-[#C9A96E]">
                    {properties[3].price}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-manrope text-sm text-white/80">
                      {properties[3].beds}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-manrope text-sm text-white/80">
                      {properties[3].size}
                    </span>
                  </div>

                  <Link
                    to="/properties"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#C9A96E] px-6 py-3 font-manrope text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#B89259]"
                  >
                    Explore Listing
                    <span className="font-material-icons text-base">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedListingsSection;