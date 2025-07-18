"use client";

import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const IMAGES = [
  {
    src: "/lovable-uploads/0558b537-c818-4b1b-b263-278aa10d4c7a.png",
    alt: "Aerial view of roof damage with scattered shingles and repair materials",
  },
  {
    src: "/lovable-uploads/730b180b-6fbf-4b0e-8abc-1bf58608c568.png",
    alt: "Roofer working on residential roof replacement",
  },
  {
    src: "/lovable-uploads/b566dc6a-acc7-4aa0-8938-18a2fdcd76ea.png",
    alt: "New roof construction with shingles being installed",
  },
  {
    src: "/lovable-uploads/6a992879-5397-4477-b096-68ef98e8a293.png",
    alt: "Hurricane damaged roof with missing shingles and exposed areas",
  },
];

const FloridaRoofReplacementVsRepair = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pb-24 font-body">
      {/* Banner */}
      <div className="relative bg-zinc-900">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <FileText className="h-14 w-14 text-[#FFE241]" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-trobus font-extrabold tracking-tight text-[#FFE241] metallic-text">
              Florida Hurricane Roof Replacement vs. Repair: What You Need to Know
            </h1>
            <p className="text-lg text-gray-200 mt-4 max-w-xl font-medium font-rush italic">
              Making the right decision after hurricane damage.{" "}
              <span className="font-trobus font-bold text-white/90">Expert guidance</span> from Ridgeback Builders for Florida homeowners.
            </p>
          </div>
        </div>
      </div>

      {/* Blog body */}
      <section className="container mx-auto px-4 max-w-3xl">
        {/* Sticky CTA */}
        <div className="sticky top-0 z-20 py-4 bg-black/95 flex flex-col md:flex-row items-center justify-between border-b border-zinc-800 mb-8">
          <div className="flex items-center gap-4 text-yellow-300 font-trobus font-bold">
            <Clock className="h-4 w-4" />
            <span className="uppercase tracking-wider text-xs">FREE ROOF ASSESSMENT</span>
          </div>
          <Link href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base">
              Get Free Inspection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Blog content */}
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight font-oswald">
          {/* Image 1 */}
          <div className="w-full flex justify-center my-6">
            <Image
              src={IMAGES[0].src}
              alt={IMAGES[0].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          {/* Image 2 with text */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <div className="flex-1">
              <p className="text-gray-200">
                The Rodriguez family in Fort Myers had a 15-year-old asphalt shingle roof...
              </p>
              <p className="text-gray-200 mt-4">
                <span className="font-semibold text-white">Here&apos;s how Ridgeback Builders handled it:</span>
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src={IMAGES[1].src}
                alt={IMAGES[1].alt}
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover h-auto"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="w-full flex justify-center my-5">
            <Image
              src={IMAGES[2].src}
              alt={IMAGES[2].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          {/* Image 4 */}
          <div className="w-full flex justify-center my-6">
            <Image
              src={IMAGES[3].src}
              alt={IMAGES[3].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          {/* Add more text/content as needed */}
        </article>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button className="bg-zinc-900 border border-[#FFE241] text-[#FFE241] hover:bg-black/90 px-8 py-3 text-lg uppercase font-trobus font-bold">
              ← Back to All Articles
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FloridaRoofReplacementVsRepair;
