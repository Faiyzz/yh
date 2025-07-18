'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ThreeBackground } from "@/components/ThreeBackground";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <ThreeBackground />
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 z-10 bg-black/40 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <nav className="p-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FFE241] hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </nav>

        {/* Contact Content */}
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
