"use client";

import { Button } from "@/components/ui/button";
import { HardHat, Mail, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`relative h-screen w-full flex flex-col justify-center items-center overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Content */}
      <div
        className={`container relative z-20 px-4 md:px-8 flex flex-col items-center text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0" : "translate-y-20"
        }`}
      >
        {/* Logo */}
        <div
          className={`mb-6 transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <Image
            src="/lovable-uploads/logo.jpg"
            alt="Ridgeback Construction Logo"
            width={320}
            height={208}
            className="h-40 md:h-52 w-auto"
            priority
          />
        </div>

        {/* Heading */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-trobus tracking-wider transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <span className="inline-block text-[#FFE241] metallic-text">BUILT</span>{" "}
          <span
            className={`inline-block text-white metallic-text transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            STRONG.
          </span>{" "}
          <span
            className={`inline-block text-white metallic-text transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            BUILT RIGHT
          </span>
        </h1>

        {/* CTA Buttons */}
        <div
          className={`flex gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Link href="/projects" passHref>
            <Button
              size="lg"
              className="bg-[#FFE241] text-black hover:bg-[#FFE241]/90 group relative overflow-hidden transition-all duration-300"
              aria-label="View our projects"
            >
              <span className="relative z-10 flex items-center">
                Our Projects
                <HardHat className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              variant="outline"
              size="lg"
              className="border-[#FFE241] bg-white text-black hover:text-[#FFE241] hover:bg-[#FFE241]/10 group relative overflow-hidden transition-all duration-300"
              aria-label="Contact us"
            >
              <span className="relative z-10 flex items-center">
                Contact Us
                <Mail className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-[#FFE241] opacity-0 group-hover:opacity-10 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-[#FFE241] text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#FFE241]/90 hover:shadow-[#FFE241]/20 hover:shadow-xl ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};
