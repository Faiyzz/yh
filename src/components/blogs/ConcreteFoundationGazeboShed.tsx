import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const IMAGES = [
  {
    src: "/lovable-uploads/b7n1.jpeg",
    alt: "Concrete slab foundation for outdoor structure",
  },
  {
    src: "/lovable-uploads/b7n2.jpeg",
    alt: "Gazebo on a concrete pad in Florida backyard",
  },
  {
    src: "/lovable-uploads/b7n3.jpeg",
    alt: "Shed construction with reinforced concrete foundation",
  },
  {
    src: "/lovable-uploads/b7n4.jpeg",
    alt: "Stamped concrete patio for pergola",
  },
];

const ConcreteFoundationGazeboShed = () => {
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
              How to Build Concrete Foundation for Gazebos, Pergolas, and Sheds in Florida
            </h1>
            <p
              className="text-lg text-gray-200 mt-4 max-w-xl font-medium"
              style={{ fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif" }}
            >
              The right slab is the key to a lasting outdoor structure. Ridgeback Builders shares expert tips for Florida homeowners.
            </p>
          </div>
        </div>
      </div>

      {/* Blog body */}
      <section className="container mx-auto px-4 max-w-3xl">
        {/* Urgency and trust - sticky CTA */}
        <div className="sticky top-0 z-20 py-4 bg-black/95 flex flex-col md:flex-row items-center justify-between border-b border-zinc-800 mb-8">
          <div className="flex items-center gap-4 text-yellow-300 font-trobus font-bold">
            <Clock className="h-4 w-4" />
            <span className="uppercase tracking-wider text-xs">FREE SLAB CONSULTATION</span>
          </div>
          <a href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{fontFamily: "'Trobus Expanded', sans-serif"}}>
              Book Your Evaluation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        {/* Blog content */}
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {/* 1st image: landscape */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[0].src} alt={IMAGES[0].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          <p className="font-normal text-gray-200">
            Adding a gazebo, pergola, shed, or any other outdoor structure to your Florida property is a great way to expand your living space, entertain guests, and increase property value. But the success of that addition depends on a solid foundation — specifically, a properly built concrete slab.
          </p>
          <p className="font-normal text-gray-200">
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span>, we’ve poured concrete pads and foundations for homeowners across Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie. Whether you're adding a shed, workshop, or outdoor retreat, here’s everything you need to know before installing a slab.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Why a Proper Concrete Slab Matters in Florida
          </h3>
          {/* 2nd image: landscape, to right of list */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <ul className="list-disc pl-6 font-normal text-gray-100 flex-1">
              <li>Proper support for the weight of the structure</li>
              <li>Moisture protection underneath</li>
              <li>Drainage planning to avoid water pooling</li>
              <li>Properly placed control joints</li>
              <li>A solid foundation that meets Florida Building Code</li>
            </ul>
            <img src={IMAGES[1].src} alt={IMAGES[1].alt} className="rounded-xl shadow-md w-full md:w-1/3 object-cover" />
          </div>
          <p className="font-normal text-gray-200">
            Florida’s ground is sandy, the water table is high, and storms are frequent. A poorly built slab in this climate can lead to shifting, cracking, or flooding issues, especially if it isn’t elevated or reinforced properly.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 1: Identify the Structure - Shed, Gazebo, or Pergola
          </h3>
          <p className="font-normal text-gray-200">
            The slab design depends on what you’re building on top of it.
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>
              <span className="font-semibold text-white">For sheds, we recommend:</span>
              <ul className="list-disc pl-6">
                <li>4–6 inches of slab thickness</li>
                <li>Over 3000 PSI reinforced concrete</li>
                <li>Vapor barrier to control moisture from the ground</li>
                <li>Control joints to minimize concrete cracking</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-white">For gazebos or pergolas:</span> Aside from a solid reinforced foundation, we focus on:
              <ul className="list-disc pl-6">
                <li>A clean, level finish with decorative options</li>
                <li>Built-in deep footers (perimeter) for post anchoring</li>
                <li>Slope planning for water runoff</li>
                <li>Aesthetic touches like colored concrete or stamped finishes</li>
              </ul>
            </li>
          </ul>
          <p className="font-normal text-gray-200">
            Ridgeback Builders tailors the slab design to the structure’s weight, use, and appearance.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 2: Site Prep Makes All the Difference
          </h3>
          {/* 3rd image: landscape, above steps */}
          <div className="w-full flex justify-center my-5">
            <img src={IMAGES[2].src} alt={IMAGES[2].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          <p className="font-normal text-gray-200">
            A slab is only as good as the surface it’s poured on. We begin with:
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Soil compaction to avoid settling</li>
            <li>Grading and laser leveling for slope control</li>
            <li>Formwork to contain and shape the pour</li>
          </ul>
          <p className="font-normal text-gray-200">
            In storm-prone cities like Naples or Fort Myers, we often elevate the slab slightly to prevent water intrusion and ensure long-term durability.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 3: Concrete Mix and Finishing Options
          </h3>
          <p className="font-normal text-gray-200">
            Ridgeback Builders uses the right mix for Florida’s hot and humid conditions. Our standard is over 3,000 PSI concrete, with optional air-entrainment or additives for extra moisture resistance.
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Smooth or broom finish</li>
            <li>Stamped patterns, colored concrete, or exposed aggregate</li>
            <li>Slip-resistant coatings</li>
            <li>UV-stable sealers</li>
          </ul>
          <p className="font-normal text-gray-200">
            We always include control joints to minimize cracking as the slab cures and shrinks.
          </p>
          {/* 4th image: landscape, after steps */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[3].src} alt={IMAGES[3].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 4: Anchoring and Florida Code Compliance
          </h3>
          <p className="font-normal text-gray-200">
            Outdoor structures must meet Florida Building Code wind-load requirements. That means we embed anchor bolts, tie-downs, or post brackets based on the slab type and local wind zone.
          </p>
          <p className="font-normal text-gray-200">
            In a Naples project, Ridgeback Builders installed a 10x14 shed slab with hurricane-rated tie-downs and passed all inspections on the first visit.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Permits and Inspections
          </h3>
          <p className="font-normal text-gray-200">
            Florida counties require permits for most outdoor structures. Ridgeback Builders handles:
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Permitting</li>
            <li>Property line setback checks</li>
            <li>HOA paperwork (if needed)</li>
            <li>Inspections and approvals</li>
          </ul>
          <p className="font-normal text-gray-200">
            We ensure your slab is legal, safe, and ready for construction.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Why Homeowners Choose Ridgeback Builders
          </h3>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Expert slab design for Florida soil and weather</li>
            <li>Full service: grading, pouring, finishing, and anchoring</li>
            <li>Decorative options for outdoor living upgrades</li>
            <li>Permitting and code compliance included</li>
          </ul>
          <p className="font-normal text-gray-200">
            Ridgeback Builders handles all of this to ensure every project is compliant with Florida Building Code. We serve the following Florida counties:
          </p>
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
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">Schedule a Free Slab Consultation</p>
            <p className="text-gray-100 font-medium">
              Planning a shed or gazebo in your backyard? Let Ridgeback Builders help you start with a foundation you can trust.
            </p>
            <a href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90" style={{fontFamily: "'Oswald',sans-serif"}}>
                Book Your Free On-Site Evaluation
              </Button>
            </a>
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

export default ConcreteFoundationGazeboShed;