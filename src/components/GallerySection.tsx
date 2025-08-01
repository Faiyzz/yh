'use client';

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, HardHat, X } from "lucide-react";
import Image from "next/image";

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
        <h2 className="text-3xl md:text-4xl font-bold font-trobus">
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
        aria-label="Scroll Left"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 bg-black/60 rounded-full text-white hover:bg-[#FFE241] hover:text-black transition"
        aria-label="Scroll Right"
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
              className="min-w-[280px] md:min-w-[320px] snap-center shrink-0 relative overflow-hidden rounded-2xl group bg-white flex items-center justify-center p-2 cursor-pointer"
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImg(img)}
            >
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 text-outline-black font-trobus">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className="relative bg-black rounded-2xl p-4 max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white hover:text-[#FFE241] transition z-10"
                onClick={() => setSelectedImg(null)}
                aria-label="Close Modal"
              >
                <X size={32} />
              </button>
              <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white text-outline-black font-trobus">
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