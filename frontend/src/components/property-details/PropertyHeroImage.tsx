import React, { useState, useEffect } from 'react';

interface PropertyHeroImageProps {
  images?: string[] | string; // 🔥 string bhi handle karega
}

const fallbackImage =
  "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?w=1200";

const PropertyHeroImage: React.FC<PropertyHeroImageProps> = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔥 normalize images (IMPORTANT FIX)
  const normalizedImages =
    typeof images === "string"
      ? [images]
      : Array.isArray(images) && images.length > 0
        ? images
        : [fallbackImage];

  const [isOpen, setIsOpen] = useState(false);


  // 🔍 DEBUG (console me check karna)
  useEffect(() => {
    console.log("Hero Images:", normalizedImages);
  }, [normalizedImages]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? normalizedImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-[#F2EFE9] py-8">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="relative aspect-[1280/440] rounded-2xl overflow-hidden shadow-xl">

          {/* MAIN IMAGE */}
          <img
            src={normalizedImages[currentIndex]}
            alt="Property"
            onClick={() => {
              console.log("IMAGE CLICKED"); // 👈 DEBUG
              setIsOpen(true);
            }}
            className="w-full h-full object-cover cursor-pointer"
          />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          {/* LEFT */}
          {normalizedImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
            >
              ‹
            </button>
          )}

          {/* RIGHT */}
          {normalizedImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
            >
              ›
            </button>
          )}

          {/* DOTS */}
          {normalizedImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {normalizedImages.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === currentIndex ? "bg-white" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* THUMBNAILS */}
        {normalizedImages.length > 1 && (
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {normalizedImages.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setCurrentIndex(i)}
                className={`w-24 h-16 object-cover rounded-lg cursor-pointer border-2 ${i === currentIndex ? "border-[#C9A96E]" : "border-transparent"
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center">

          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={normalizedImages[currentIndex]}
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />

          {/* Left */}
          {normalizedImages.length > 1 && (
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? normalizedImages.length - 1 : prev - 1
                )
              }
              className="absolute left-5 text-white text-4xl"
            >
              ‹
            </button>
          )}

          {/* Right */}
          {normalizedImages.length > 1 && (
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  (prev + 1) % normalizedImages.length
                )
              }
              className="absolute right-5 text-white text-4xl"
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyHeroImage; 