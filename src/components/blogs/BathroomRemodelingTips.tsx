
import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

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
              Essential guide for Florida's unique climate challenges. <span className="font-trobus font-bold text-white/90">Expert guidance</span> from Ridgeback Builders.
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
            <span className="uppercase tracking-wider text-xs">FREE DESIGN CONSULTATION</span>
          </div>
          <a href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{fontFamily: "'Trobus Expanded', sans-serif"}}>
              Get Free Consultation
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
            Bathroom remodeling in Florida comes with a unique set of challenges — from high humidity to hurricane season prep and everything in between. Whether you're planning a full renovation or just upgrading fixtures, understanding the local climate, building codes, and material durability is key to a successful remodel.
          </p>

          <p className="font-normal text-gray-200">
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders, we've remodeled hundreds of bathrooms</span> in Fort Myers, Naples, Sarasota, Tampa, Bradenton, West Palm Beach, and beyond. Here's what every Florida homeowner should know before remodeling a bathroom.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 1. Plan for Humidity — Always
          </h3>

          <p className="font-normal text-gray-200">
            Florida's climate is humid nearly year-round. That means moisture management is a top priority when remodeling a bathroom.
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
                We've seen too many DIY jobs fall apart because standard drywall or cheap ventilation couldn't hold up. That's why <span className="font-semibold text-[#FFE241]">Ridgeback Builders only uses high-performance materials</span> tested for Florida's conditions.
              </p>
            </div>
            <img src={IMAGES[1].src} alt={IMAGES[1].alt} className="rounded-xl shadow-md w-full md:w-1/3 object-cover" />
          </div>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 2. Choose Smart, Water-Resistant Materials
          </h3>

          <p className="font-normal text-gray-200">
            In Florida, bathrooms must handle not only daily use but also extreme conditions — including heat, humidity, and occasionally storm-related moisture.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Best Materials for Florida Bathrooms:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Porcelain or ceramic tile (non-slip, easy to clean)</li>
            <li>Quartz countertops (resistant to moisture and heat)</li>
            <li>PVC or marine-grade vanities (no warping like traditional wood)</li>
            <li>Glass shower panels with treated anti-fog coating</li>
            <li>Luxury vinyl plank flooring (LVP) (an option for bathroom floors)</li>
          </ul>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 3. Keep It Light, Bright & Spacious
          </h3>

          <p className="font-normal text-gray-200">
            Florida homes thrive on brightness. Many older bathrooms feel cramped or dark — a problem we solve often during remodels.
          </p>

          {/* 3rd image */}
          <div className="w-full flex justify-center my-5">
            <img src={IMAGES[2].src} alt={IMAGES[2].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Ridgeback Builders design tips:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Add recessed ceiling lighting for a clean, modern glow</li>
            <li>Use floating vanities to open the floor visually</li>
            <li>Install larger mirrors to reflect light and space</li>
            <li>Consider clear glass shower doors over opaque curtains or frosted panels</li>
          </ul>

          <p className="font-normal text-gray-200">
            We recently remodeled a Bradenton master bathroom where simply switching from a bulky vanity to a wall-mounted one made the entire space feel twice as big.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 4. Upgrade Your Plumbing — It's Worth It
          </h3>

          <p className="font-normal text-gray-200">
            If your home was built before 2000, chances are your plumbing system is due for an upgrade — especially in bathrooms.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">What Ridgeback Builders checks:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Pipe material (older copper or polybutylene often needs replacing)</li>
            <li>Water pressure regulation</li>
            <li>Hot water delivery to showers/tubs</li>
            <li>Drain line slopes (often neglected in older homes)</li>
          </ul>

          <p className="font-normal text-gray-200">
            Don't wait for slow drains or leaky pipes to show up after the remodel. <span className="font-semibold text-[#FFE241]">Ridgeback Builders includes full project management</span> — including plumbing and electrical upgrades — so everything works beautifully behind the walls too.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 5. Make It Hurricane-Resilient Where It Counts
          </h3>

          <p className="font-normal text-gray-200">
            You may not associate bathrooms with hurricanes, but it's a growing trend in Florida to reinforce certain rooms as emergency safe spaces or use hurricane-rated windows and doors during major remodels.
          </p>

          {/* 4th image */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[3].src} alt={IMAGES[3].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Optional upgrades:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Impact-rated glass in windows</li>
            <li>Hurricane clips if you're replacing drywall or ceilings</li>
            <li>Water-sealed thresholds and frames</li>
          </ul>

          <p className="font-normal text-gray-200">
            At Ridgeback Builders, we help Fort Myers and Tampa clients make smart, storm-resilient design choices — even in spaces like bathrooms.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 6. Don't Forget Permits and Code Compliance
          </h3>

          <p className="font-normal text-gray-200">
            Every city in Florida has its remodeling regulations, and bathrooms often involve plumbing, electrical, and structural / framing updates. <span className="font-semibold text-[#FFE241]">Ridgeback Builders handles all permitting and code compliance</span> — whether you're in Sarasota, Port St. Lucie, or Naples.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">We ensure:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>ADA compliance (if needed)</li>
            <li>Proper fixture spacing</li>
            <li>Water heater upgrades (when applicable)</li>
            <li>Shower/toilet spacing per Florida building code</li>
          </ul>

          <p className="font-normal text-gray-200">
            Homeowners often underestimate how much of a bathroom remodel is "behind the scenes." That's where working with licensed pros like <span className="font-semibold text-[#FFE241]">Ridgeback Builders saves you time and future headaches</span>. We are fully licensed, insured, and experienced with local code enforcement across multiple Florida counties.
          </p>

          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">🛁 Want to Remodel Your Bathroom in Florida?</p>
            <p className="text-gray-100 font-medium">
              At <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span>, we blend smart design with technical excellence to build bathrooms that last — and impress.
            </p>
            <a href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90" style={{fontFamily: "'Oswald',sans-serif"}}>
                Book Free Consultation
              </Button>
            </a>
          </div>

          <p className="font-normal text-gray-100">
            Let's create your dream bathroom. Serving <span className="font-semibold text-[#FFE241]">Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, Port St. Lucie</span>, and nearby cities.
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

export default BathroomRemodelingTips;
