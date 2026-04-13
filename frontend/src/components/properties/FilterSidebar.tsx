import React, { useEffect, useRef, useState } from "react";

interface FilterSidebarProps {
  onFilterChange?: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const isFirstRender = useRef(true);

  const propertyTypes = [
    { id: "apartment", label: "Apartment", icon: "apartment" },
    { id: "house", label: "House", icon: "house" },
    { id: "villa", label: "Villa", icon: "villa" },
    { id: "office", label: "Office", icon: "business" },
  ];

  const availabilityTypes = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
  ];

  const amenitiesList = [
    "Parking",
    "Swimming Pool",
    "Gym",
    "Garden",
    "Security",
    "Clubhouse",
    "Power Backup",
    "Lift",
    "Balcony",
    "CCTV Surveillance",
    "Children Play Area",
    "Gated Community",
  ];

  const formatPriceLabel = (value: number): string => {
    if (value >= 200) return "₹20+ Cr";
    if (value >= 10) return `₹${(value / 10).toFixed(value % 10 === 0 ? 0 : 1)} Cr`;
    return `₹${value * 10} L`;
  };

  const buildFilters = () => {
    const filters: any = {};

    if (selectedLocation.trim()) filters.location = selectedLocation.trim();
    if (selectedPropertyType.length > 0) filters.propertyType = selectedPropertyType;
    if (selectedAvailability) filters.availability = selectedAvailability;
    if (priceRange[0] > 0 || priceRange[1] < 200) filters.priceRange = priceRange;
    if (bedrooms > 0) filters.bedrooms = bedrooms;
    if (bathrooms > 0) filters.bathrooms = bathrooms;
    if (selectedAmenities.length > 0) filters.amenities = selectedAmenities;

    return filters;
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    onFilterChange?.(buildFilters());
  }, [
    selectedLocation,
    selectedPropertyType,
    selectedAvailability,
    priceRange,
    bedrooms,
    bathrooms,
    selectedAmenities,
    onFilterChange,
  ]);

  const handleApply = () => {
    onFilterChange?.(buildFilters());
  };

  const handleReset = () => {
    setSelectedLocation("");
    setSelectedPropertyType([]);
    setSelectedAvailability("");
    setPriceRange([0, 200]);
    setBedrooms(0);
    setBathrooms(0);
    setSelectedAmenities([]);
    onFilterChange?.({});
  };

  const togglePropertyType = (type: string) => {
    setSelectedPropertyType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  return (
  <aside className="sticky top-[5rem] w-full max-w-[360px] border-r border-[#E5D9C7] bg-[#F8F5EF] self-start">
    <div className="h-[calc(100vh-5rem)] overflow-y-auto">
      <div className="p-6">

          {/* Header */}
          <div className="mb-8 flex items-center justify-between pt-4">
            <h2 className="font-fraunces text-[30px] leading-none text-[#0F172A]">
              Refine Search
            </h2>
            <button
              type="button"
              onClick={handleReset}
              className="font-manrope text-sm font-semibold text-[#B89259] transition hover:text-[#C9A96E]"
            >
              Reset
            </button>
          </div>

          {/* Location */}
          <div className="mb-8 border-b border-[#E5D9C7]/80 pb-8">
            <h3 className="mb-4 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#7C8798]">
              Location
            </h3>
            <input
              type="text"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              placeholder="Search city..."
              className="w-full rounded-2xl border border-[#E5D9C7] bg-white px-5 py-4 font-manrope text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition focus:border-[#C9A96E]"
            />
          </div>

          {/* Availability */}
          <div className="mb-8 border-b border-[#E5D9C7]/80 pb-8">
            <h3 className="mb-4 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#7C8798]">
              Availability
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {availabilityTypes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    setSelectedAvailability(
                      selectedAvailability === item.id ? "" : item.id
                    )
                  }
                  className={`rounded-2xl border py-3 text-base font-semibold transition ${
                    selectedAvailability === item.id
                      ? "border-[#C9A96E] bg-[#C9A96E] text-white"
                      : "border-[#E5D9C7] bg-white text-[#64748B] hover:border-[#C9A96E]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8 border-b border-[#E5D9C7]/80 pb-8">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#7C8798]">
                Price Range
              </h3>
              <span className="font-manrope text-sm font-semibold text-[#B89259]">
                {formatPriceLabel(priceRange[0])} - {formatPriceLabel(priceRange[1])}
              </span>
            </div>

            <label className="mb-2 block font-manrope text-xs text-[#94A3B8]">
              Min
            </label>
            <input
              type="range"
              min="0"
              max="200"
              step="1"
              value={priceRange[0]}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (val < priceRange[1]) setPriceRange([val, priceRange[1]]);
              }}
              className="mb-5 w-full cursor-pointer accent-[#C9A96E]"
            />

            <label className="mb-2 block font-manrope text-xs text-[#94A3B8]">
              Max
            </label>
            <input
              type="range"
              min="0"
              max="200"
              step="1"
              value={priceRange[1]}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (val > priceRange[0]) setPriceRange([priceRange[0], val]);
              }}
              className="w-full cursor-pointer accent-[#C9A96E]"
            />

            <div className="mt-2 flex justify-between">
              <span className="font-manrope text-xs text-[#94A3B8]">₹0</span>
              <span className="font-manrope text-xs text-[#94A3B8]">₹20 Cr+</span>
            </div>
          </div>

          {/* Property Type */}
          <div className="mb-8 border-b border-[#E5D9C7]/80 pb-8">
            <h3 className="mb-4 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#7C8798]">
              Property Type
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {propertyTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => togglePropertyType(type.label)}
                  className={`flex h-[82px] flex-col items-center justify-center rounded-2xl border transition ${
                    selectedPropertyType.includes(type.label)
                      ? "border-[#C9A96E] bg-[#C9A96E] text-white"
                      : "border-[#E5D9C7] bg-white text-[#64748B] hover:border-[#C9A96E]"
                  }`}
                >
                  <span className="material-icons text-[22px]">{type.icon}</span>
                  <span className="mt-1 text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div className="mb-8 border-b border-[#E5D9C7]/80 pb-8">
            <h3 className="mb-4 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#7C8798]">
              Bedrooms
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setBedrooms(num)}
                  className={`rounded-xl border py-3 text-sm font-semibold transition ${
                    bedrooms === num
                      ? "border-[#C9A96E] bg-[#C9A96E] text-white"
                      : "border-[#E5D9C7] bg-white text-[#64748B] hover:border-[#C9A96E]"
                  }`}
                >
                  {num === 0 ? "Any" : num === 5 ? "5+" : num}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div className="mb-8 border-b border-[#E5D9C7]/80 pb-8">
            <h3 className="mb-4 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#7C8798]">
              Bathrooms
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setBathrooms(num)}
                  className={`rounded-xl border py-3 text-sm font-semibold transition ${
                    bathrooms === num
                      ? "border-[#C9A96E] bg-[#C9A96E] text-white"
                      : "border-[#E5D9C7] bg-white text-[#64748B] hover:border-[#C9A96E]"
                  }`}
                >
                  {num === 0 ? "Any" : num === 4 ? "4+" : num}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-24">
            <h3 className="mb-4 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#7C8798]">
              Amenities
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {amenitiesList.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleAmenity(item)}
                  className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                    selectedAmenities.includes(item)
                      ? "border-[#C9A96E] bg-[#C9A96E] text-white"
                      : "border-[#E5D9C7] bg-white text-[#64748B] hover:border-[#C9A96E]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="sticky bottom-0 border-t border-[#E5D9C7] bg-[#F8F5EF] p-4">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 rounded-2xl border border-[#E5D9C7] bg-white py-3 font-manrope text-sm font-semibold text-[#64748B] transition hover:border-[#C9A96E] hover:text-[#C9A96E]"
            >
              Reset Filters
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="flex-1 rounded-2xl bg-[#0F172A] py-3 font-manrope text-sm font-semibold text-white transition hover:bg-[#1e293b]"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar; 