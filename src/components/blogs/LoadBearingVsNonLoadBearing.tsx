"use client";

import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "/lovable-uploads/ad619d3b-6c34-4eec-ac27-c99115e40002.png",
    alt: "Structural damage and ceiling cracks from load-bearing wall issues",
  },
  {
    src: "/lovable-uploads/8936c2a8-4aea-4a84-b5c9-1b10912a1e5b.png",
    alt: "Home renovation showing wood frame construction during demolition",
  },
  {
    src: "/lovable-uploads/788988ed-eb72-4dfe-8521-a1b57a44bb34.png",
    alt: "Wood stud framing and structural support beams in construction",
  },
  {
    src: "/lovable-uploads/4a9fc7a4-fcb3-4c6b-914f-8a409dd7cfea.png",
    alt: "Metal stud framing with insulation in wall construction",
  },
];

const LoadBearingVsNonLoadBearing = () => {
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
              How to Distinguish Load-Bearing vs. Non-Load-Bearing Walls in Your Home
            </h1>
            <p className="text-lg text-gray-200 mt-4 max-w-xl font-rush">
              Safe structural modifications for your remodel. <span className="font-trobus font-bold text-white/90">Expert guidance</span> from Ridgeback Builders.
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="container mx-auto px-4 max-w-3xl">
        {/* Sticky CTA */}
        <div className="sticky top-0 z-20 py-4 bg-black/95 flex flex-col md:flex-row items-center justify-between border-b border-zinc-800 mb-8">
          <div className="flex items-center gap-4 text-yellow-300 font-trobus font-bold">
            <Clock className="h-4 w-4" />
            <span className="uppercase tracking-wider text-xs">FREE STRUCTURAL ASSESSMENT</span>
          </div>
          <Link href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base">
              Get Free Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Article */}
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight font-oswald">
          {/* 1st Image */}
          <div className="w-full flex justify-center my-6">
            <Image
              src={IMAGES[0].src}
              alt={IMAGES[0].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          {/* 2nd Image with text wrap */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <div className="flex-1">
              <p>When we&apos;re brought in to consult on a remodel, we begin with a wall assessment that may include:</p>
              <ul className="list-disc pl-6">
                <li>Reviewing original construction plans or blueprints</li>
                <li>Determining ceiling joist direction</li>
                <li>Inspecting attics or crawlspaces for weight transfer points</li>
                <li>Using wall scanners to detect beams, plumbing, or ductwork</li>
              </ul>
            </div>
            <Image
              src={IMAGES[1].src}
              alt={IMAGES[1].alt}
              width={600}
              height={400}
              className="rounded-xl shadow-md w-full md:w-1/3 object-cover h-auto"
            />
          </div>

          {/* 3rd Image */}
          <div className="w-full flex justify-center my-5">
            <Image
              src={IMAGES[2].src}
              alt={IMAGES[2].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          {/* 4th Image */}
          <div className="w-full flex justify-center my-6">
            <Image
              src={IMAGES[3].src}
              alt={IMAGES[3].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          {/* Final CTA */}
          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">Why Florida Homeowners Trust Ridgeback Builders</p>
            <p className="text-gray-100 font-medium mb-4">
              We&apos;ve helped hundreds of homeowners make the most of their space without compromising the integrity of their home.
            </p>
            <ul className="list-none text-gray-100 text-left space-y-1 mb-4">
              <li>✅ Licensed and insured remodeling experts</li>
              <li>✅ Full-service structural and interior renovations</li>
              <li>✅ Specialists in both wood and metal frame construction</li>
              <li>✅ Experienced with load-bearing beam installation</li>
              <li>✅ Proven track record in Florida&apos;s unique climate and building codes</li>
            </ul>
            <Link href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90">
                Schedule Structural Assessment
              </Button>
            </Link>
          </div>
        </article>

        {/* Back Button */}
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

export default LoadBearingVsNonLoadBearing;
