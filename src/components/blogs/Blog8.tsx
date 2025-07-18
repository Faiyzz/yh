import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const IMAGES = [
  {
    src: "/lovable-uploads/b8n1.jpeg",
    alt: "Freshly poured concrete driveway in Florida",
  },
  {
    src: "/lovable-uploads/b8n2.jpeg",
    alt: "Concrete patio installation with forms and rebar",
  },
  {
    src: "/lovable-uploads/b8n3.jpeg",
    alt: "Concrete slab with reinforcement mesh",
  },
  {
    src: "/lovable-uploads/b8n4.jpeg",
    alt: "Stamped and finished concrete patio in Florida",
  },
];

const Blog8 = () => {
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
              New Concrete Installation Guide for Florida Homes: What Every Homeowner Should Know
            </h1>
            <p
              className="text-lg text-gray-200 mt-4 max-w-xl font-medium"
              style={{ fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif" }}
            >
              Ridgeback Builders shares expert advice for driveways, patios, foundations, and more—built to last in Florida’s unique climate.
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
            <span className="uppercase tracking-wider text-xs">FREE SITE EVALUATION</span>
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
          {/* 1st image */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[0].src} alt={IMAGES[0].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          <p>
            Whether you're planning a new driveway, patio, foundation, or sidewalk, installing concrete in Florida comes with its own set of challenges — from sandy soils and heavy rains to high humidity and hurricane preparedness.
          </p>
          <p>
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span>, we’ve helped homeowners across Fort Myers, Naples, Lehigh Acres, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie with expert concrete installations that hold up against Florida’s unique climate and conditions.
          </p>
          <p>
            Here’s everything you need to know before starting your concrete project.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 1: Plan the Purpose of the Concrete Installation
          </h3>
          <p>
            Before pouring concrete, it’s important to clarify what the slab is for. Each use requires a slightly different mix, reinforcement, and thickness.
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Driveways / Driveway extension</li>
            <li>Patios and lanais</li>
            <li>Walkways and sidewalks</li>
            <li>Shed or gazebo slabs</li>
            <li>Garage and addition foundations</li>
            <li>RV or boat pads</li>
          </ul>
          <p>
            At Ridgeback Builders, we tailor every concrete installation to its intended load, foot traffic, and location.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 2: Site Evaluation and Ground Preparation
          </h3>
          {/* 2nd image */}
          <div className="w-full flex justify-center my-5">
            <img src={IMAGES[1].src} alt={IMAGES[1].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          <p>
            Florida’s sandy and unstable soil requires thorough site prep to ensure long-term slab performance. We begin with:
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Soil evaluation to determine drainage capability</li>
            <li>Grading the site to prevent water pooling</li>
            <li>Installing a moisture barrier layer</li>
            <li>Compacting the subbase to avoid settling and cracking</li>
            <li>Creating forms and elevation levels for drainage control</li>
          </ul>
          <p>
            In low-lying areas like Bradenton or Port St. Lucie, we may raise the slab slightly or add drainage channels to handle seasonal rainfall.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 3: Choosing the Right Concrete Mix for Florida
          </h3>
          <p>
            We use a variety of concrete mixes depending on the project type and exposure.
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Over 3,000 PSI concrete for residential applications</li>
            <li>Rebar, Fiber-mesh or welded wire-mesh concrete reinforcement to reduce shrinkage and cracking</li>
            <li>Air-entrained concrete in flood-prone zones</li>
            <li>Additives for moisture resistance and faster curing</li>
          </ul>
          <p>
            Our goal is a mix that’s strong, smooth, and durable — even when exposed to salt air, heavy vehicles, or direct sun.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 4: Reinforcement and Pouring
          </h3>
          {/* 3rd image */}
          <div className="w-full flex justify-center my-5">
            <img src={IMAGES[2].src} alt={IMAGES[2].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          <p>
            Depending on the installation, Ridgeback Builders uses:
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Rebar, fiber-mesh, or welded wire-mesh for structural strength</li>
            <li>Control joints to manage cracking</li>
            <li>Expansion joints adjacent to existing concrete</li>
            <li>Precise pouring techniques to ensure even coverage and slope</li>
          </ul>
          <p>
            For example, in a Sarasota driveway installation, we used welded wire-mesh reinforcement with 4,000 PSI concrete, 6” thick, at a 5” slump, sloped at a 2% grade. This made for a very thick and strong concrete slab to withstand the weight of heavy vehicles.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 5: Finishing the Concrete Surface
          </h3>
          {/* 4th image */}
          <div className="w-full flex justify-center my-5">
            <img src={IMAGES[3].src} alt={IMAGES[3].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          <p>
            The right finish enhances both the look and function of your new concrete. Finish options include:
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Broom finish for slip resistance (ideal for driveways and walkways)</li>
            <li>Trowel finish for smooth surfaces</li>
            <li>Stamped or decorative finishes (ideal for patios and lanais)</li>
            <li>Exposed aggregate for a more textured, modern look</li>
            <li>Custom colors, or sealers to enhance durability and design</li>
          </ul>
          <p>
            We also offer UV-stable and water-repellent sealers on exposed slabs to protect against Florida’s sun and rain.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Step 6: Curing and Aftercare
          </h3>
          <p>
            Concrete doesn’t reach full strength overnight. Full PSI strength is reached after a month. It needs a proper curing process to prevent premature cracking and surface failure.
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Allow light foot traffic after 24–48 hours</li>
            <li>Allow vehicle use after 7 days</li>
            <li>Full cure typically takes 28 days.</li>
          </ul>
          <p>
            We advise homeowners on proper watering, sealing, and maintenance to extend the life of their slab for decades.
          </p>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Permits and Florida Building Code Compliance
          </h3>
          <p>
            In many Florida cities, you need a permit for concrete installations — especially if you’re installing structural footings, driveways, or sidewalks near public property.
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Local permit applications</li>
            <li>HOA approvals (if required)</li>
            <li>Site inspections</li>
            <li>Full compliance with the Florida Building Code</li>
          </ul>
          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Why Florida Homeowners Choose Ridgeback Builders
          </h3>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Local experience with Florida’s soil, climate, and weather</li>
            <li>Licensed and insured concrete contractors</li>
            <li>Custom slab design and layout</li>
            <li>Full project management from prep to finish</li>
            <li>High-quality concrete work for homeowners across the state</li>
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
          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl ">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">Schedule Your Concrete Installation Estimate</p>
            <p className="text-gray-100 font-medium">
              If you're planning a new concrete project — big or small — trust Ridgeback Builders to guide you through the process from start to finish. We’ll help you avoid costly mistakes and get it right the first time.
            </p>
            <a href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90" style={{fontFamily: "'Oswald',sans-serif"}}>
                Book Your Free Site Evaluation Today
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

export default Blog8;