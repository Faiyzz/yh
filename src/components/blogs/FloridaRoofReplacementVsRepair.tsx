import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
            <h1
              className="text-4xl md:text-5xl font-trobus font-extrabold tracking-tight text-[#FFE241] metallic-text"
              style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
            >
              Florida Hurricane Roof Replacement vs. Repair: What You Need to Know
            </h1>
            <p
              className="text-lg text-gray-200 mt-4 max-w-xl font-medium"
              style={{ fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif" }}
            >
              Making the right decision after hurricane damage. <span className="font-trobus font-bold text-white/90">Expert guidance</span> from Ridgeback Builders for Florida homeowners.
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
            <span className="uppercase tracking-wider text-xs">FREE ROOF ASSESSMENT</span>
          </div>
          <a href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{fontFamily: "'Trobus Expanded', sans-serif"}}>
              Get Free Inspection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Blog content with FOUR images distributed symmetrically */}
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {/* 1st image: aerial damage view */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[0].src} alt={IMAGES[0].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>
          
          <p className="font-normal text-gray-200">
            Florida's hurricane season brings with it a major concern for homeowners: roof damage. While it's tempting to "just fix what's broken," in many cases, a repair may be a band-aid solution, especially after a severe storm.{" "}
            <span className="font-semibold text-[#FFE241]">At Ridgeback Builders, we help homeowners in Fort Myers, Sarasota, Naples, and surrounding areas</span> assess whether a roof repair or full replacement is the smarter long-term choice.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Case Study: Fort Myers Roof Replacement After Hurricane Damage
          </h3>

          {/* 2nd image: roofer working */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <div className="flex-1">
              <p className="font-normal text-gray-200">
                The Rodriguez family in Fort Myers had a 15-year-old asphalt shingle roof. After Hurricane Milton, they noticed missing shingles, and water spots on the ceiling. They weren't sure whether to repair or replace — and their insurance company had sent a confusing report.
              </p>
              <p className="font-normal text-gray-200 mt-4">
                <span className="font-semibold text-white">Here's how Ridgeback Builders handled it:</span>
              </p>
            </div>
            <img src={IMAGES[1].src} alt={IMAGES[1].alt} className="rounded-xl shadow-md w-full md:w-1/3 object-cover" />
          </div>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Step 1: Structural Assessment & Insurance Support</h4>
          <p className="font-normal text-gray-200">Our project manager conducted a full inspection:</p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li><span className="font-medium">Missing shingles:</span> over 30% of the roof</li>
            <li>Exposed decking with visible water stains</li>
            <li>Moisture detected in attic insulation</li>
            <li>Trusses showing signs of warping</li>
          </ul>
          <p className="font-normal text-gray-200">
            We created a comprehensive damage report, annotated it with photos and measurements, and assisted the homeowner in submitting it to their insurance carrier.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Step 2: Repair vs. Replacement Decision</h4>
          <p className="font-normal text-gray-200">We compared both options side-by-side:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-zinc-600">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="border border-zinc-600 px-4 py-3 text-left text-[#FFE241]">Option</th>
                  <th className="border border-zinc-600 px-4 py-3 text-left text-[#FFE241]">Pros</th>
                  <th className="border border-zinc-600 px-4 py-3 text-left text-[#FFE241]">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-600 px-4 py-3 font-medium">Repair</td>
                  <td className="border border-zinc-600 px-4 py-3">Lower upfront cost</td>
                  <td className="border border-zinc-600 px-4 py-3">Doesn't address hidden damage, shorter life, no manufacturer warranty</td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="border border-zinc-600 px-4 py-3 font-medium">Full Replacement</td>
                  <td className="border border-zinc-600 px-4 py-3">Stronger structure, warranty-backed, long-term value</td>
                  <td className="border border-zinc-600 px-4 py-3">Higher initial investment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Step 3: Roof Replacement</h4>
          
          {/* 3rd image: new roof construction */}
          <div className="w-full flex justify-center my-5">
            <img src={IMAGES[2].src} alt={IMAGES[2].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <p className="font-normal text-gray-200">We replaced the roof with:</p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Temporary tarp coverage to prevent further leaks</li>
            <li>Architectural shingles rated for 130 mph wind</li>
            <li>Underlayment for moisture resistance</li>
            <li>New flashing and ridge venting</li>
            <li>Complete removal of previous shingles, and underlayment</li>
          </ul>

          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-6 py-4 my-6">
            <p className="text-lg font-bold text-[#FFE241] mb-2">Result:</p>
            <p className="text-gray-100 font-medium">
              A stronger, safer, better-ventilated roof that increased the home's value and energy efficiency.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-[#FFE241]/30 my-6"/>

          <h3 className="text-lg md:text-xl mt-8 text-[#FFE241] font-medium">
            How to Know If You Need Roof Repair or Replacement
          </h3>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-zinc-600">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="border border-zinc-600 px-4 py-3 text-left text-[#FFE241]">Symptom</th>
                  <th className="border border-zinc-600 px-4 py-3 text-left text-[#FFE241]">What It Suggests</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-600 px-4 py-3">Shingles missing in large areas</td>
                  <td className="border border-zinc-600 px-4 py-3">Likely full replacement</td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="border border-zinc-600 px-4 py-3">Leaks in multiple rooms</td>
                  <td className="border border-zinc-600 px-4 py-3">Possible decking damage</td>
                </tr>
                <tr>
                  <td className="border border-zinc-600 px-4 py-3">Roof older than 15 years</td>
                  <td className="border border-zinc-600 px-4 py-3">Near the end of the lifespan</td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="border border-zinc-600 px-4 py-3">Curling, buckling shingles</td>
                  <td className="border border-zinc-600 px-4 py-3">Moisture and heat damage</td>
                </tr>
                <tr>
                  <td className="border border-zinc-600 px-4 py-3">Light in the attic</td>
                  <td className="border border-zinc-600 px-4 py-3">Structural compromise</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4th image: hurricane damage */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[3].src} alt={IMAGES[3].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <h3 className="mt-8 mb-1 text-[#FFE241] font-medium">
            Why Trust Ridgeback Builders?
          </h3>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>✅ Licensed Florida contractors</li>
            <li>✅ Specialize in hurricane roof damage & insurance restoration</li>
            <li>✅ Fast and knowledgeable roofing inspectors</li>
            <li>✅ Serving Tampa, Fort Myers, Bradenton, Sarasota, Port St. Lucie, and more</li>
          </ul>

          <h3 className="mt-8 mb-1 font-medium text-[#FFE241]">
            Bonus: Insurance Help Without the Headache
          </h3>
          <p className="font-normal text-gray-200">We help homeowners:</p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>File claims</li>
            <li>Prepare documentation</li>
            <li>Communicate with adjusters</li>
            <li>Maximize what insurance will cover</li>
          </ul>

          <p className="font-normal text-gray-200 mt-4">
            <span className="font-semibold text-[#FFE241]">You're not alone in this</span> — Ridgeback Builders stands with Florida homeowners after every storm.
          </p>

          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">Get a Free Roof Assessment Today</p>
            <p className="text-gray-100 font-medium">
              If your roof took damage during this hurricane season, don't wait for leaks to turn into mold and rot. Let <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span> inspect your roof, explain your options, and provide a written estimate for insurance or personal use.
            </p>
            <a href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90" style={{fontFamily: "'Oswald',sans-serif"}}>
                Schedule Free Inspection
              </Button>
            </a>
          </div>

          <p className="font-normal text-gray-100">
            Contact us today — we serve <span className="font-semibold text-[#FFE241]">Fort Myers, Naples, Sarasota, Tampa, Bradenton, West Palm Beach</span>, and nearby cities with pride and precision.
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

export default FloridaRoofReplacementVsRepair;
