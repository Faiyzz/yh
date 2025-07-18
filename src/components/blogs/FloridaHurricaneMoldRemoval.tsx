"use client"
import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const IMAGES = [
  {
    src: "/lovable-uploads/b1n1.jpg",
    alt: "White concrete building after hurricane (landscape)",
  },
  {
    src: "/lovable-uploads/b1n2.jpg",
    alt: "Sunbeams - Humidity and Heat",
  },
  {
    src: "/lovable-uploads/b1n3.jpg",
    alt: "Aftermath - Mist over landscape after hurricane",
  },
  {
    src: "/lovable-uploads/b1n4.jpg",
    alt: "Home exterior - Damaged Florida building",
  },
];

const FloridaHurricaneMoldRemoval = () => {
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
              Florida Hurricane / Flood Remediation &amp; Mold Removal
            </h1>
            <p
              className="text-lg text-gray-200 mt-4 max-w-xl font-medium"
              style={{ fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif" }}
            >
              What to do after the water recedes. <span className="font-trobus font-bold text-white/90">Expert help</span> from Ridgeback Builders in Naples, Fort Myers, Port Charlotte, Sarasota & beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Blog body with updated font family and symmetrical image placement */}
      <section className="container mx-auto px-4 max-w-3xl">
        {/* Urgency and trust - sticky CTA */}
        <div className="sticky top-0 z-20 py-4 bg-black/95 flex flex-col md:flex-row items-center justify-between border-b border-zinc-800 mb-8">
          <div className="flex items-center gap-4 text-yellow-300 font-trobus font-bold">
            <Clock className="h-4 w-4" />
            <span className="uppercase tracking-wider text-xs">24/7 EMERGENCY RESPONSE</span>
          </div>
          <a href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{fontFamily: "'Trobus Expanded', sans-serif"}}>
              Get Immediate Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        {/* Blog content - now with FOUR images distributed symmetrically */}
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {/* 1st image: landscape */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[0].src} alt={IMAGES[0].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          <p className="font-normal text-gray-200">
            When a hurricane passes, Florida homeowners often face more damage than what's visible on the surface. Floodwaters bring hidden moisture, structural risks, and the rapid growth of mold — sometimes within 24 to 48 hours.{" "}
            <span className="font-semibold text-[#FFE241]">At Ridgeback Builders, we specialize in fast-response flood remediation and mold removal</span>, helping homeowners in Naples, Fort Myers, Port Charlotte, Sarasota, and other coastal communities recover safely and fully.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            What Happens After Flooding in a Florida Home?
          </h3>
          {/* 2nd image: landscape, to right of list */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <ul className="list-disc pl-6 font-normal text-gray-100 flex-1">
              <li>Drywall and insulation</li>
              <li>Underflooring materials</li>
              <li>HVAC ductwork</li>
              <li>Electrical outlets and junctions</li>
              <li>Studs and framing</li>
            </ul>
            <img src={IMAGES[1].src} alt={IMAGES[1].alt} className="rounded-xl shadow-md w-full md:w-1/3 object-cover" />
          </div>
          <p className="font-normal text-gray-200">
            <span className="font-semibold text-white">If not addressed promptly</span>, these damp areas become a breeding ground for black mold, compromise indoor air quality, and pose serious health risks, especially to children and the elderly.
          </p>
          {/* Divider */}
          <hr className="border-[#FFE241]/30 my-6"/>
          <h3 className="text-lg md:text-xl mt-8 text-[#FFE241] font-medium">
            Case Study: Emergency Mold Remediation in Cape Coral, FL
          </h3>
          {/* 3rd image: landscape, above steps */}
          <div className="w-full flex justify-center my-5">
            <img src={IMAGES[2].src} alt={IMAGES[2].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          <p className="font-normal text-gray-200">
            After Hurricane Milton, the Cortez family returned to their home in Cape Coral after evacuating during a Category 3 storm. The house appeared intact, but they noticed a <span className="font-semibold text-[#FFE241]">strong musty smell and signs of water pooling</span> near the walls. Within 12 hours of their call, Ridgeback Builders was on site with a remediation team.
          </p>
          <ol className="list-decimal pl-6 font-normal text-gray-100">
            <li>
              <span className="font-medium">Moisture Mapping &amp; Thermal Imaging:</span> Using infrared cameras and moisture sensors, we identified water intrusion behind the walls and under the laminate flooring.
            </li>
            <li>
              <span className="font-medium">Demolition &amp; Material Removal:</span> We removed all compromised drywall 2 feet above the water line, vinyl flooring and wet subfloor, and mold-infested insulation.
            </li>
            <li>
              <span className="font-medium">Industrial Drying &amp; Dehumidification:</span> Deployed high-power air movers and commercial-grade dehumidifiers to dry the structure for 72 hours while monitoring humidity levels daily.
            </li>
            <li>
              <span className="font-medium">Mold Remediation &amp; Air Scrubbing:</span> Treated all affected surfaces with EPA-approved antimicrobials and ran HEPA filtration systems to remove airborne spores.
            </li>
            <li>
              <span className="font-medium">Full Renovation &amp; Restoration:</span> Rebuilt the drywall, installed waterproof luxury vinyl plank flooring, and repainted with mold-resistant interior paint.
            </li>
          </ol>
          {/* 4th image: landscape, after steps */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[3].src} alt={IMAGES[3].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          <h3 className="mt-8 mb-1 text-[#FFE241] font-medium">
            What Makes Ridgeback Builders Different?
          </h3>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>✅ One expert team from remediation to rebuild</li>
            <li>✅ Licensed mold remediation and residential construction experts</li>
            <li>✅ Quick turnaround, fully insured, and insurance documentation provided</li>
            <li>✅ Servicing Fort Myers, Cape Coral, Naples, Port Charlotte, Sarasota, and beyond</li>
          </ul>
          <h3 className="mt-8 mb-1 font-medium text-[#FFE241]">
            Signs You Need Immediate Mold Remediation
          </h3>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Recent hurricane, roof leak, or standing water</li>
            <li>Strong musty odor after flooding</li>
            <li>Discoloration on walls or ceilings</li>
            <li>Allergy-like symptoms in the home</li>
            <li>Swollen or warped baseboards or flooring</li>
          </ul>
          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl ">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">Don't Wait — Water Damage Gets Worse Fast</p>
            <p className="text-gray-100 font-medium">
              Every minute counts. If you suspect water or mold damage in your Florida home, contact <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span> for a professional assessment and a fast-action plan.
            </p>
            <a href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90" style={{fontFamily: "'Oswald',sans-serif"}}>
                Call Now or Schedule Inspection
              </Button>
            </a>
          </div>
          <p className="font-normal text-gray-100">
            We're here <span className="font-semibold text-[#FFE241]">24/7</span> when the storm passes — so you're not facing it alone.
          </p>
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

export default FloridaHurricaneMoldRemoval;
