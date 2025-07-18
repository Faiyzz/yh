'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/Footer";
import { ThreeBackground } from "@/components/ThreeBackground";

const AboutPage = () => {
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

        {/* About Us Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1
              className="text-6xl font-bold mb-12 text-center"
              style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
            >
              <span className="text-white metallic-text">ABOUT</span>{" "}
              <span className="text-[#FFE241] metallic-text">US</span>
            </h1>

            <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
              <p>
                At Ridgeback Builders, we are dedicated to building more than
                just structures – we build dreams, foundations for families, and
                landmarks for communities. With years of experience in the
                construction industry, our team brings expertise, passion, and
                unwavering commitment to every project we undertake.
              </p>

              <p>
                Founded on the principles of quality craftsmanship and customer
                satisfaction, Ridgeback Builders has established itself as a
                trusted name in residential construction and renovation
                services. Our motto, "BUILT STRONG. BUILT RIGHT," reflects our
                dedication to excellence in every aspect of our work.
              </p>

              <h2
                className="text-3xl font-bold text-[#FFE241] mt-12 mb-6"
                style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
              >
                OUR MISSION
              </h2>

              <p>
                To deliver exceptional construction services that exceed our
                clients' expectations while maintaining the highest standards of
                safety, quality, and professionalism. We believe in building
                lasting relationships with our clients through transparent
                communication, reliable service, and superior results.
              </p>

              <h2
                className="text-3xl font-bold text-[#FFE241] mt-12 mb-6"
                style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
              >
                WHY CHOOSE US
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFE241] text-xl">•</span>
                  <span>Expert craftsmanship with attention to detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFE241] text-xl">•</span>
                  <span>Transparent pricing and timeline communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFE241] text-xl">•</span>
                  <span>Commitment to using quality materials and methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFE241] text-xl">•</span>
                  <span>Craftsmanship Warranty included</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
