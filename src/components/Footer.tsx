'use client';

import { Instagram, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white pt-16 relative">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-16 border-b border-zinc-800">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <Image
              src="/lovable-uploads/logo.jpg"
              alt="Ridgeback Construction"
              width={160}
              height={96}
              className="h-24 w-auto mb-4"
            />
            <p className="text-gray-400 metallic-text transition-all duration-1000 ms-3">
              BUILT STRONG. BUILT RIGHT
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.instagram.com/ridgebackbuilders/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#FFE241] hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:info@ridgebackbuilt.com"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#FFE241] hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:8139211717"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#FFE241] hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in delay-200">
            <h3 className="text-xl font-bold mb-6 text-white font-trobus">QUICK LINKS</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-[#FFE241] flex items-center group transition-all duration-300 hover:translate-x-2"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center animate-fade-in delay-600">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {year} Ridgeback Builders. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-400 text-sm hover:text-[#FFE241] transition-all duration-300 hover:scale-105"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 text-sm hover:text-[#FFE241] transition-all duration-300 hover:scale-105"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Yellow bottom bar */}
      <div className="h-2 bg-[#FFE241] w-full animate-fade-in delay-800"></div>
    </footer>
  );
};
