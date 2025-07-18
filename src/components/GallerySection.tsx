"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, HardHat, X } from "lucide-react";

const galleryImages = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  src: `/site-imgs/${i + 1}.jpg`,
  title: `Construction Phase ${i + 1}`,
}));

export const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImg, setSelectedImg] = useState<null | typeof galleryImages[0]>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.7;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto px-6 flex items-center gap-4 mb-12">
        <HardHat className="h-8 w-8 text-[#FFE241]" />
        <h2 className="text-4xl font-bold" style={{ fontFamily: "'Trobus Expanded', sans-serif" }}>
          NEW <span className="text-[#FFE241]">CONSTRUCTION</span>
        </h2>
      </div>

      {/* Gradient overlays */}
      <div className="hidden md:block pointer-events-none absolute top-0 left-0 h-full w-24 z-20 bg-gradient-to-r from-black/90 to-transparent" />
      <div className="hidden md:block pointer-events-none absolute top-0 right-0 h-full w-24 z-20 bg-gradient-to-l from-black/90 to-transparent" />

      {/* Scroll Controls */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 bg-black/60 rounded-full text-white hover:bg-[#FFE241] hover:text-black transition"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 bg-black/60 rounded-full text-white hover:bg-[#FFE241] hover:text-black transition"
      >
        <ChevronRight />
      </button>

      {/* Scrollable Gallery */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              className="min-w-[320px] snap-center shrink-0 relative overflow-hidden rounded-2xl group bg-white flex items-center justify-center p-2 cursor-pointer"
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImg(img)}
            >
              <div className="relative w-[304px] md:w-full h-[400px] flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-[304px] md:w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3
                    className="text-xl font-bold text-white mb-1 text-outline-black"
                    style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
                  >
                    {img.title}
                  </h3>
                  <div className="h-1 w-12 bg-[#FFE241] group-hover:w-24 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className="relative bg-black rounded-2xl p-4 max-w-3xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white hover:text-[#FFE241] transition"
                onClick={() => setSelectedImg(null)}
                aria-label="Close"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="w-full max-h-[70vh] object-contain rounded-xl"
              />
              <div className="mt-4 text-center">
                <h3
                  className="text-2xl font-bold text-white text-outline-black"
                  style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
                >
                  {selectedImg.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
