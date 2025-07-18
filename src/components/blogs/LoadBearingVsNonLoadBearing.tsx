
import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

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
            <h1
              className="text-4xl md:text-5xl font-trobus font-extrabold tracking-tight text-[#FFE241] metallic-text"
              style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
            >
              How to Distinguish Load-Bearing vs. Non-Load-Bearing Walls in Your Home
            </h1>
            <p
              className="text-lg text-gray-200 mt-4 max-w-xl font-medium"
              style={{ fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif" }}
            >
              Safe structural modifications for your remodel. <span className="font-trobus font-bold text-white/90">Expert guidance</span> from Ridgeback Builders.
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
            <span className="uppercase tracking-wider text-xs">FREE STRUCTURAL ASSESSMENT</span>
          </div>
          <a href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{fontFamily: "'Trobus Expanded', sans-serif"}}>
              Get Free Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {/* 1st image */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[0].src} alt={IMAGES[0].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <p className="font-normal text-gray-200">
            Whether you're opening up your kitchen, expanding your living space, or just trying to add natural light to a room, one of the most critical — and risky — steps is removing an interior wall. The first question we always ask is: Is it load-bearing?
          </p>

          <p className="font-normal text-gray-200">
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders, we've helped homeowners</span> across Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie make safe, structurally sound modifications during renovations. Here's what you need to know before removing or relocating a wall in your Florida home.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            What Is a Load-Bearing Wall?
          </h3>

          <p className="font-normal text-gray-200">
            A load-bearing wall supports the structural weight of your home — including the roof, second floor (if applicable), trusses, and ceiling joists. Removing or altering this wall without reinforcement can cause:
          </p>

          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Cracks in ceilings and walls</li>
            <li>Sagging floors above</li>
            <li>Foundation shifts</li>
            <li>In worst cases, partial collapse over time</li>
          </ul>

          <p className="font-normal text-gray-200">
            Non-load-bearing walls, often called partition walls, are used simply to divide spaces. These can typically be removed or modified without structural consequences — if confirmed by a professional.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            How Ridgeback Builders Identifies Structural Walls
          </h3>

          {/* 2nd image */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <div className="flex-1">
              <p className="font-normal text-gray-200">
                When we're brought in to consult on a remodel, we begin with a wall assessment that may include:
              </p>
              <ul className="list-disc pl-6 font-normal text-gray-100">
                <li>Reviewing original construction plans or blueprints</li>
                <li>Determining ceiling joist direction</li>
                <li>Inspecting attics or crawlspaces for weight transfer points</li>
                <li>Using wall scanners to detect beams, plumbing, or ductwork</li>
              </ul>
            </div>
            <img src={IMAGES[1].src} alt={IMAGES[1].alt} className="rounded-xl shadow-md w-full md:w-1/3 object-cover" />
          </div>

          <p className="font-normal text-gray-200">
            In many cases, especially in older homes in Fort Myers or Tampa, we discover structural support hidden in what looks like a basic drywall partition. That's why homeowners trust <span className="font-semibold text-[#FFE241]">Ridgeback Builders to confirm the wall's role</span> before construction begins.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Understanding Wood Studs vs. Metal Studs in Florida Homes
          </h3>

          <p className="font-normal text-gray-200">
            Framing type plays a major role in renovation decisions. Here's how Florida homes generally break down:
          </p>

          {/* 3rd image */}
          <div className="w-full flex justify-center my-5">
            <img src={IMAGES[2].src} alt={IMAGES[2].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Wood Studs</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Common in single-family homes built before 2010 (still used today)</li>
            <li>Ideal for both structural and non-structural use</li>
            <li>Easier to modify for doorways, windows, and support headers</li>
            <li>Can be vulnerable to termites and humidity without treatment</li>
          </ul>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Metal Studs</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Frequently used in condos and newer construction in coastal areas</li>
            <li>Typically used for non-load-bearing partitions only</li>
            <li>Rust-resistant and lighter, but require special fastening techniques</li>
            <li>Not suitable for bearing vertical loads unless part of engineered framing</li>
          </ul>

          <p className="font-normal text-gray-200">
            Recently, <span className="font-semibold text-[#FFE241]">Ridgeback Builders remodeled a Bradenton condo</span> with metal stud interior walls. Although the homeowner assumed the walls were structural, we verified that they were non-load-bearing, allowing for safe, cost-effective removal and a more open floor plan, raising the property's value.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Signs a Wall Might Be Load-Bearing
          </h3>

          <p className="font-normal text-gray-200">
            While it's never safe to guess, here are some common indicators:
          </p>

          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>The wall is located near the center of the home</li>
            <li>Ceiling or floor joists run perpendicular to the wall</li>
            <li>Another wall is directly above it on the second floor</li>
            <li>The attic shows joists or beams resting on it</li>
            <li>The wall is thicker than other partition walls</li>
          </ul>

          <p className="font-normal text-gray-200">
            Even one of these signs should trigger a professional assessment before any demo begins. <span className="font-semibold text-[#FFE241]">Ridgeback Builders provides structural evaluations</span> as part of all major remodeling projects.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            What If You Want to Remove a Load-Bearing Wall?
          </h3>

          <p className="font-normal text-gray-200">
            If you still want that open-concept design — even after discovering the wall is load-bearing — there are safe, proven ways to do it.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">We can replace the wall with:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Structural LVL or steel beams</li>
            <li>Header beams over doorways or passthroughs</li>
            <li>Support posts or columns integrated into design features</li>
            <li>Hidden ceiling reinforcements for a clean, open look</li>
          </ul>

          {/* 4th image */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[3].src} alt={IMAGES[3].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <p className="font-normal text-gray-200">
            For example, during a kitchen remodel in Naples, <span className="font-semibold text-[#FFE241]">Ridgeback Builders removed a major structural wall</span> and replaced it with a flush-mounted LVL beam. The result was a seamless transition to an open-concept layout, with zero sagging or shifting.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Permits and Building Codes in Florida
          </h3>

          <p className="font-normal text-gray-200">
            In most counties, including Lee, Collier, and Palm Beach, structural modifications require:
          </p>

          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Official engineering drawings</li>
            <li>City or county building permits</li>
            <li>Multiple on-site inspections during the build</li>
          </ul>

          <p className="font-normal text-gray-200">
            <span className="font-semibold text-[#FFE241]">Ridgeback Builders handles all of this</span> — including structural drawings, permit applications, and scheduling inspections — to ensure every project is compliant with Florida Building Code.
          </p>

          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">Why Florida Homeowners Trust Ridgeback Builders</p>
            <p className="text-gray-100 font-medium mb-4">
              We've helped hundreds of homeowners make the most of their space without compromising the integrity of their home.
            </p>
            <ul className="list-none text-gray-100 text-left space-y-1 mb-4">
              <li>✅ Licensed and insured remodeling experts</li>
              <li>✅ Full-service structural and interior renovations</li>
              <li>✅ Specialists in both wood and metal frame construction</li>
              <li>✅ Experienced with load-bearing beam installation</li>
              <li>✅ Proven track record in Florida's unique climate and building codes</li>
            </ul>
            <a href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90" style={{fontFamily: "'Oswald',sans-serif"}}>
                Schedule Structural Assessment
              </Button>
            </a>
          </div>

          <p className="font-normal text-gray-100">
            We'll help you take the next step toward an open, modern, structurally sound home. Serving <span className="font-semibold text-[#FFE241]">Fort Myers, Naples, Port Charlotte, Sarasota, Bradenton, Tampa, West Palm Beach, Port St. Lucie</span>, and nearby cities.
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

export default LoadBearingVsNonLoadBearing;
