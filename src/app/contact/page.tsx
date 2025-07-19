import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ThreeBackground } from "@/components/ThreeBackground";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Ridgeback Builders for your construction and renovation needs. Free consultations and estimates available.",
  openGraph: {
    title: "Contact Ridgeback Builders",
    description: "Get in touch for your construction and renovation needs in Florida.",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" }
];

export default function ContactPage() {
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
        <Breadcrumbs items={breadcrumbItems} />
        
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
}