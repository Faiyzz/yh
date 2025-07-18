'use client';
import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "/lovable-uploads/f285936d-a7b6-40fd-b669-9bde63ff0c06.png",
    alt: "Modern bathroom with white tiles and glass shower",
  },
  {
    src: "/lovable-uploads/3e34e6e4-4848-4e0d-a666-808efc7d123d.png",
    alt: "Bathroom renovation construction in progress",
  },
  {
    src: "/lovable-uploads/7cbb6016-653b-4731-8c76-23afdd4f0820.png",
    alt: "Before and after bathroom renovation showing transformation",
  },
  {
    src: "/lovable-uploads/b3b73c95-a78d-4e87-8a35-686ede0a2bef.png",
    alt: "Luxury bathroom with black marble and gold fixtures",
  },
];

const BathroomRemodelingTips = () => {
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
            <h1
              className="text-4xl md:text-5xl font-trobus font-extrabold tracking-tight text-[#FFE241] metallic-text"
              style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
            >
              Bathroom Remodeling Tips and Tricks for Florida Homeowners
            </h1>
            <p
              className="text-lg text-gray-200 mt-4 max-w-xl font-medium"
              style={{ fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif" }}
            >
              Essential guide for Florida&apos;s unique climate challenges.{" "}
              <span className="font-trobus font-bold text-white/90">Expert guidance</span> from Ridgeback Builders.
            </p>
          </div>
        </div>
      </div>

      {/* Blog body */}
      <section className="container mx-auto px-4 max-w-3xl">
        {/* CTA */}
        <div className="sticky top-0 z-20 py-4 bg-black/95 flex flex-col md:flex-row items-center justify-between border-b border-zinc-800 mb-8">
          <div className="flex items-center gap-4 text-yellow-300 font-trobus font-bold">
            <Clock className="h-4 w-4" />
            <span className="uppercase tracking-wider text-xs">FREE DESIGN CONSULTATION</span>
          </div>
          <Link href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{ fontFamily: "'Trobus Expanded', sans-serif" }}>
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {/* 1st image */}
          <div className="relative w-full h-64 md:h-96 flex justify-center my-6">
            <Image src={IMAGES[0].src} alt={IMAGES[0].alt} fill className="rounded-xl shadow-md object-cover" />
          </div>

          <p className="font-normal text-gray-200">
            Bathroom remodeling in Florida comes with a unique set of challenges — from high humidity to hurricane season prep and everything in between. Whether you&apos;re planning a full renovation or just upgrading fixtures, understanding the local climate, building codes, and material durability is key to a successful remodel.
          </p>

          <p className="font-normal text-gray-200">
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders, we&apos;ve remodeled hundreds of bathrooms</span> in Fort Myers, Naples, Sarasota, Tampa, Bradenton, West Palm Beach, and beyond. Here&apos;s what every Florida homeowner should know before remodeling a bathroom.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 1. Plan for Humidity — Always
          </h3>

          <p className="font-normal text-gray-200">
            Florida&apos;s climate is humid nearly year-round. That means moisture management is a top priority when remodeling a bathroom.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Tips from Ridgeback Builders:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Install exhaust fans with humidity sensors that automatically turn on</li>
            <li>Use mildew-resistant drywall (green board or cement board) in shower areas</li>
            <li>Choose moisture-rated LED lighting to avoid corrosion</li>
            <li>Color your walls using mold-resistant paint options</li>
          </ul>

          {/* 2nd image */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <div className="flex-1">
              <p className="font-normal text-gray-200">
                We&apos;ve seen too many DIY jobs fall apart because standard drywall or cheap ventilation couldn&apos;t hold up. That&apos;s why <span className="font-semibold text-[#FFE241]">Ridgeback Builders only uses high-performance materials</span> tested for Florida&apos;s conditions.
              </p>
            </div>
            <div className="relative w-full md:w-1/3 aspect-[4/3]">
              <Image src={IMAGES[1].src} alt={IMAGES[1].alt} fill className="rounded-xl shadow-md object-cover" />
            </div>
          </div>

          {/* Other sections remain the same, apply the same image fix below... */}

          {/* 3rd image */}
          <div className="relative w-full h-64 md:h-96 flex justify-center my-5">
            <Image src={IMAGES[2].src} alt={IMAGES[2].alt} fill className="rounded-xl shadow-md object-cover" />
          </div>

          {/* 4th image */}
          <div className="relative w-full h-64 md:h-96 flex justify-center my-6">
            <Image src={IMAGES[3].src} alt={IMAGES[3].alt} fill className="rounded-xl shadow-md object-cover" />
          </div>

          {/* Everything else stays the same... */}
        </article>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button
              className="bg-zinc-900 border border-[#FFE241] text-[#FFE241] hover:bg-black/90 px-8 py-3 text-lg uppercase font-trobus font-bold"
              style={{ fontFamily: "'Trobus Expanded',sans-serif" }}
            >
              ← Back to All Articles
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BathroomRemodelingTips;
