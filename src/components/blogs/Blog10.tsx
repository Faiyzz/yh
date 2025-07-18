import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const IMAGES = [
  {
    src: "/lovable-uploads/b10n1.jpeg",
    alt: "Modern efficiency unit interior in Florida",
  },
  {
    src: "/lovable-uploads/b10n2.jpeg",
    alt: "Compact kitchenette in an ADU",
  },
  {
    src: "/lovable-uploads/b10n3.jpeg",
    alt: "Converted garage efficiency unit",
  },
  {
    src: "/lovable-uploads/b10n4.jpeg",
    alt: "Converted garage efficiency unit",
  },
];

const Blog10 = () => {
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
              How to Create an Efficiency Unit in Your Florida Home to Rent Out
            </h1>
            <p
              className="text-lg text-gray-200 mt-4 max-w-xl font-medium"
              style={{
                fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif",
              }}
            >
              Ridgeback Builders shares the essentials for building a legal, comfortable, and profitable efficiency unit or ADU in Florida.
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
            <span className="uppercase tracking-wider text-xs">FREE ADU/CONVERSION CONSULTATION</span>
          </div>
          <a href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{fontFamily: "'Trobus Expanded', sans-serif"}}>
              Schedule Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Blog content */}
        <article
          className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {/* 1st image */}
          <div className="w-full flex justify-center my-6">
            <div className="relative w-full md:w-2/3 aspect-video rounded-xl shadow-md overflow-hidden">
              <Image
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
            </div>
          </div>

          <p>
            Florida’s real estate market has fueled a huge demand for accessory dwelling units (ADUs) and efficiency units. Whether you&apos;re creating a rentable suite for extra income, a guest room, or a space for extended family, converting part of your home into an efficiency unit can be a high-ROI upgrade.
          </p>
          <p>
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span>, we help homeowners throughout Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie convert garages, spare rooms, and additions into functional, rentable units that meet code and add long-term value.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            What Is an Efficiency Unit?
          </h3>
          <p>An efficiency unit is a small, self-contained living space that typically includes:</p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>A bedroom or sleeping area</li>
            <li>A small kitchenette</li>
            <li>A bathroom</li>
            <li>A private entry</li>
          </ul>
          <p>Some are attached (converted garages or rooms), while others are detached (shed-to-suite conversions or additions).</p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 1: Define the Space You’ll Convert
          </h3>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Garage conversions</li>
            <li>Florida room enclosures</li>
            <li>Split-layout additions with shared walls</li>
            <li>Backyard ADUs or tiny homes on slab</li>
          </ul>
          <p>Ridgeback Builders assesses zoning and building codes to determine what’s possible in your municipality.</p>

          {/* 2nd image */}
          <div className="w-full flex justify-center my-6">
            <div className="relative w-full md:w-2/3 aspect-video rounded-xl shadow-md overflow-hidden">
              <Image
                src={IMAGES[1].src}
                alt={IMAGES[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 2: Understand Florida Zoning Laws and Permits
          </h3>
          <p>Each city has different rules for ADUs and rental suites. You’ll need to consider:</p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Zoning restrictions (some areas limit short-term rentals)</li>
            <li>Square footage minimums</li>
            <li>Parking space requirements</li>
            <li>Separate utility access (in some counties)</li>
            <li>Egress and ventilation codes</li>
          </ul>
          <p>Ridgeback Builders handles the permitting process from start to finish, working with your city or county to ensure everything is up to code.</p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 3: Plan the Layout for Comfort and Functionality
          </h3>
          <p>We help you maximize space by including:</p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Compact kitchenettes with mini-fridge and sink</li>
            <li>Efficient plumbing routes for the bathroom</li>
            <li>Soundproofing between the unit and the main home</li>
            <li>Smart storage solutions</li>
            <li>Private entry doors for independence</li>
          </ul>
          <p>In a recent Tampa project, we converted a 1-car garage into a 350 sq. ft. efficiency unit with a full bath, kitchenette, and rear access door — perfect for Airbnb rental or long-term lease.</p>

          {/* 3rd image */}
          <div className="w-full flex justify-center my-6">
            <div className="relative w-full md:w-2/3 aspect-video rounded-xl shadow-md overflow-hidden">
              <Image
                src={IMAGES[2].src}
                alt={IMAGES[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 4: Build for Durability and Long-Term ROI
          </h3>
          <p>We use Florida-grade materials and finishes designed to last, such as:</p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Mold-resistant drywall and insulation</li>
            <li>Impact-rated windows</li>
            <li>Energy-efficient HVAC and lighting</li>
            <li>Water-resistant flooring</li>
            <li>Moisture-barrier protected plumbing</li>
          </ul>
          <p>Efficiency units should be both low-maintenance and cost-effective to operate, especially for short-term renters.</p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Why Ridgeback Builders Is the Right Partner
          </h3>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Expert in Florida zoning and ADU code</li>
            <li>Garage and room conversion specialists</li>
            <li>End-to-end service: design, permit, build</li>
            <li>Rental-ready finish standards</li>
          </ul>
          <p>Ridgeback Builders handles all of this to ensure every project is compliant with Florida Building Code. We serve the following Florida counties:</p>
          <ul className="list-disc pl-6 font-normal text-gray-100 columns-2 md:columns-3">
            <li>Lee County</li>
            <li>Collier County</li>
            <li>Charlotte County</li>
            <li>Hendry County</li>
            <li>Sarasota County</li>
            <li>Manatee County</li>
            <li>Hillsborough County</li>
            <li>Palm Beach County</li>
            <li>St. Lucie County</li>
          </ul>

          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl ">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">Turn Extra Space Into Rental Income</p>
            <p className="text-gray-100 font-medium">
              If you&apos;re ready to increase your home’s value and start generating monthly income, let Ridgeback Builders help you build a legal, beautiful, and highly functional efficiency unit.
            </p>
            <a href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90" style={{fontFamily: "'Oswald',sans-serif"}}>
                Schedule Your Free ADU/Conversion Consultation
              </Button>
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Serving Fort Myers, Naples, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie
            </p>
          </div>
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

export default Blog10;
