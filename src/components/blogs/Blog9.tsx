import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image"; // ✅ added

const IMAGES = [
  {
    src: "/lovable-uploads/b9n1.jpeg",
    alt: "Florida garage with new exterior entry door",
  },
  {
    src: "/lovable-uploads/b9n2.jpeg",
    alt: "Cutting and framing a new garage door opening",
  },
  {
    src: "/lovable-uploads/b9n3.jpeg",
    alt: "Installed impact-rated garage entry door",
  },
  {
    src: "/lovable-uploads/b9n4.jpeg",
    alt: "Installed impact-rated garage entry door",
  },
];

const GarageEntryDoorFlorida = () => {
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
              How to Add a New Exterior Entry Door in Your Florida Garage
            </h1>
            <p
              className="text-lg text-gray-200 mt-4 max-w-xl font-medium"
              style={{ fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif" }}
            >
              Ridgeback Builders explains the process, code, and best practices for adding a secure, weatherproof garage entry door in Florida.
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
            <span className="uppercase tracking-wider text-xs">FREE GARAGE DOOR CONSULTATION</span>
          </div>
          <a href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{ fontFamily: "'Trobus Expanded', sans-serif" }}>
              Schedule Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Blog content */}
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {/* 1st image */}
          <div className="w-full flex justify-center my-6">
            <div className="relative w-full md:w-2/3 aspect-video rounded-xl shadow-md overflow-hidden">
              <Image
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>

          <p>
            Adding a new door to your garage is one of the most overlooked upgrades for Florida homeowners. It boosts convenience, improves ventilation, and increases resale value.
          </p>
          <p>
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span>, we’ve helped homeowners across Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie safely cut into garage walls and install new doors that are secure, weather-resistant, and code-compliant.
          </p>
          <p>
            Here’s what you need to know before creating a new door in your Florida garage.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Why Homeowners Want a Garage Entry Door
          </h3>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Easy access to the outside, the yard, pool, or trash bins</li>
            <li>Separate entrance for tenants or workshops</li>
            <li>Better airflow, insulation, and lighting</li>
            <li>Emergency exit</li>
          </ul>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 1: Identify the Structural Wall Type
          </h3>
          <p>
            The first step is determining whether the garage wall is made from cinderblock or from wood. Many garage side and rear walls support trusses or roof systems.
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Use wall scanners and framing knowledge to confirm stud types</li>
            <li>Check the joist direction from the attic space</li>
            <li>Ensure any structural changes include headers, pre-cast lintels, or load redistribution</li>
            <li>Reinforce the opening before cutting</li>
          </ul>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 2: Choose the Right Door Type
          </h3>
          <p>
            In Florida, door choice isn’t just about looks — it’s about weather resistance, energy efficiency, and durability.
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Steel or fiberglass insulated doors</li>
            <li>Impact-rated doors (especially for coastal areas)</li>
            <li>Pre-hung entry doors with thresholds</li>
            <li>Flush doors with hurricane brackets</li>
          </ul>
          <p>
            We also advise on door swing direction based on yard layout, security, and Florida wind zone requirements.
          </p>

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
            Step 3: Cutting and Framing the Opening
          </h3>
          <p>Our team will:</p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Mark and cut the wall with precision tools</li>
            <li>Frame the opening to match the door size and code requirements</li>
            <li>Add moisture barriers and sealants</li>
            <li>Install flashing and other waterproofing materials around the doorway</li>
            <li>Finish the stucco flashing, and paint where necessary</li>
          </ul>
          <p>
            In a recent Sarasota project, Ridgeback Builders installed a new garage-to-backyard entry door in just two days, including permit approvals and full exterior stucco patching, giving the homeowners easy access without compromising curb appeal.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 4: Engineering Plans, Permits, Inspections, and Florida Code
          </h3>
          <p>
            Adding an exterior door in Florida usually requires a building permit and inspections. If your garage is air-conditioned or part of a conditioned space, additional code requirements apply (like insulated doors and air sealing).
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Permit applications</li>
            <li>Engineering drawings (if structural changes apply)</li>
            <li>Coastal wind zone compliance</li>
            <li>Inspection coordination with your city or county</li>
          </ul>

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
            Why Florida Homeowners Choose Ridgeback Builders
          </h3>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Garage wall evaluation and structural support installation</li>
            <li>Secure, weatherproof, and code-compliant door options</li>
            <li>Permitting and inspection included</li>
            <li>Expert finishing, patching, and painting</li>
            <li>Trusted across Florida’s Gulf Coast and Atlantic corridor</li>
          </ul>
          <p>
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

          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">
              Ready to Add That Garage Door?
            </p>
            <p className="text-gray-100 font-medium">
              Let Ridgeback Builders evaluate your space, help you pick the right door, and install it professionally from start to finish.
            </p>
            <a href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90" style={{ fontFamily: "'Oswald',sans-serif" }}>
                Schedule a Free Garage Door Consultation
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

export default GarageEntryDoorFlorida;
