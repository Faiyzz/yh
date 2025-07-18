"use client";

import { Globe } from "lucide-react";
import Image from "next/image";

export const ServiceAreaSection = () => {
  return (
    <section id="service-area" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Heading with Icon */}
        <div className="flex justify-start items-center gap-4 mb-12">
          <Globe className="h-8 w-8 text-[#FFE241]" />
          <h2
            className="text-4xl font-bold text-white font-trobus"
          >
            <span className="text-white">COUNTIES WE</span>{" "}
            <span className="text-[#FFE241]">SERVE</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-trobus">
              <span className="text-white">BUILT FOR</span>{" "}
              <span className="text-[#FFE241]">FLORIDA</span>
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#FFE241] mt-1">•</span>
                <span>Resilient building solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE241] mt-1">•</span>
                <span>Hurricane-resistant construction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE241] mt-1">•</span>
                <span>Quality craftsmanship</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE241] mt-1">•</span>
                <span>Safety, efficiency and customer satisfaction at every step</span>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl border border-zinc-700 shadow-lg overflow-hidden">
              {/* Top-Right Logo */}
              <Image
                src="/lovable-uploads/logo.jpg"
                alt="Logo"
                width={112}
                height={112}
                className="absolute top-4 right-4 w-10 sm:w-10 md:w-10 lg:w-28 h-auto z-10"
              />

              {/* Map Image */}
              <Image
                src="/images/map.jpg"
                alt="Florida Service Area Map"
                width={1024}
                height={768}
                className="w-full h-auto object-contain select-none"
                draggable={false}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
