
import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const IMAGES = [
  {
    src: "/lovable-uploads/cd34e88a-ed09-49ac-b344-d254670d23b7.png",
    alt: "Luxury kitchen with white cabinets, blue island, and gold fixtures",
  },
  {
    src: "/lovable-uploads/de0364e6-8599-4d7e-8914-6965e7b30f4a.png",
    alt: "Modern kitchen with white cabinets and marble waterfall island",
  },
  {
    src: "/lovable-uploads/24ddca78-b823-40fc-9122-89a82c5975b0.png",
    alt: "Contemporary kitchen with gray cabinets and pendant lighting",
  },
  {
    src: "/lovable-uploads/d4f41a5d-7c97-485a-9c2c-ef02895046bd.png",
    alt: "Kitchen renovation in progress showing construction phase",
  },
];

const KitchenRemodelingTips = () => {
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
              Kitchen Remodeling Tips and Tricks for Florida Homeowners
            </h1>
            <p
              className="text-lg text-gray-200 mt-4 max-w-xl font-medium"
              style={{ fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif" }}
            >
              Essential guide for creating your dream kitchen in Florida's unique climate. <span className="font-trobus font-bold text-white/90">Expert guidance</span> from Ridgeback Builders.
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
          {/* Cover image */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[0].src} alt={IMAGES[0].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <p className="font-normal text-gray-200">
            Remodeling your kitchen in Florida isn't just about creating a beautiful space — it's about building one that performs well in a hot, humid, and storm-prone environment. Whether you're upgrading an outdated kitchen in Fort Myers or designing a modern culinary hub in Sarasota, the right approach can save you time, money, and future repairs.
          </p>

          <p className="font-normal text-gray-200">
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span>, we specialize in kitchen remodeling projects across Fort Myers, Naples, Port Charlotte, Tampa, Bradenton, Sarasota, West Palm Beach, and Port St. Lucie. Here's what you should know before starting your kitchen renovation:
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 1. Choose Materials Built for Heat and Humidity
          </h3>

          <p className="font-normal text-gray-200">
            Florida's environment demands durable, moisture-resistant materials. Many generic products simply aren't designed for constant heat, coastal air, or storm-related humidity.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Ridgeback Builders Recommends:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li><strong>Quartz countertops:</strong> more durable than granite and resistant to mold and stains</li>
            <li><strong>Porcelain tile flooring:</strong> water-resistant and cool underfoot</li>
            <li><strong>PVC cabinets or marine-grade plywood:</strong> warping-resistant even in coastal zones</li>
            <li><strong>Glass or metal backsplash:</strong> easier to clean and more heat resistant than natural stone</li>
          </ul>

          <p className="font-normal text-gray-200">
            We helped one Tampa homeowner switch from MDF cabinets to waterproof PVC, saving her thousands in long-term repair costs.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 2. Maximize Ventilation & Airflow
          </h3>

          <p className="font-normal text-gray-200">
            A Florida kitchen without proper ventilation can feel like a sauna, especially during cooking. Smart airflow design isn't a luxury; it's a necessity.
          </p>

          {/* Second image */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <div className="flex-1">
              <h4 className="text-lg font-medium mt-6 text-[#FFE241]">What Ridgeback Builders Does:</h4>
              <ul className="list-disc pl-6 font-normal text-gray-100">
                <li>Install high-efficiency range hoods vented directly outside</li>
                <li>Use ceiling fans or overhead ductless fans to move air</li>
                <li>Include transom windows or operable windows to allow natural ventilation</li>
              </ul>
            </div>
            <img src={IMAGES[1].src} alt={IMAGES[1].alt} className="rounded-xl shadow-md w-full md:w-1/3 object-cover" />
          </div>

          <p className="font-normal text-gray-200">
            In Sarasota, we recently added a low-profile ceiling fan and larger pass-through window to improve airflow, keeping the kitchen several degrees cooler.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 3. Go for an Open Layout — But Be Smart About It
          </h3>

          <p className="font-normal text-gray-200">
            Florida homeowners love open-concept kitchens, but removing walls isn't as simple as it sounds, especially when you're dealing with load-bearing structures, HVAC reroutes, or homes built with metal studs (common in South Florida).
          </p>

          {/* Third image */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[2].src} alt={IMAGES[2].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Ridgeback Builders Tip:</h4>
          <p className="font-normal text-gray-200">
            Before removing any wall, we perform a structural analysis to determine:
          </p>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>If the wall is load-bearing</li>
            <li>If it contains plumbing or ductwork</li>
            <li>If reinforcements (like beams or columns) are needed</li>
          </ul>

          <p className="font-normal text-gray-200">
            A Bradenton family wanted to open their kitchen to the dining room, but their interior wall had HVAC ducts and weight-bearing framing. We redesigned the layout to use a support beam and kitchen island, achieving an open look while maintaining safety and structure.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 4. Add Smart Storage Without Cluttering the Design
          </h3>

          <p className="font-normal text-gray-200">
            Storage is key, especially in homes where the kitchen serves as the main family hub. However, bulky cabinets or cluttered walls can make the space feel small.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Design Tricks We Use:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Deep drawers instead of lower cabinets for easier access</li>
            <li>Pull-out pantries hidden behind tall cabinet doors</li>
            <li>Corner lazy Susans or swing-out shelves to use the dead space</li>
            <li>Built-in microwave drawers to save counter space</li>
          </ul>

          <p className="font-normal text-gray-200">
            When <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span> remodeled a Fort Myers beach home, we added full-height cabinetry and toe-kick drawers, doubling their storage without changing the footprint.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 5. Focus on Natural Light + Cool Colors
          </h3>

          <p className="font-normal text-gray-200">
            Bright, airy kitchens not only look great — they feel cooler in Florida's climate. We recommend using light tones and materials that reflect, not absorb, heat.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Best combinations:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>White or soft gray cabinets + brushed nickel hardware</li>
            <li>Light-colored quartz or granite counters</li>
            <li>Under-cabinet LED lighting for better visibility and ambiance</li>
            <li>Coastal accents like sea glass backsplash or open shelving with decor</li>
          </ul>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 6. Always Plan for Power and Plumbing Needs
          </h3>

          <p className="font-normal text-gray-200">
            Behind every beautiful kitchen is smart utility planning. Especially in older Florida homes, we often discover outdated wiring, corroded plumbing, or inefficient layouts.
          </p>

          {/* Fourth image */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[3].src} alt={IMAGES[3].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">We Help With:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Upgrading the electrical to support modern appliances</li>
            <li>Rerouting plumbing for better sink/island placement</li>
            <li>Code compliance for GFCI outlets and lighting circuits</li>
            <li>Surge protection — especially important during Florida storms</li>
          </ul>

          <p className="font-normal text-gray-200">
            We recently renovated an older Naples home where the wiring couldn't support a double oven and induction cooktop. <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span> handled the upgrade seamlessly, avoiding future outages or fire risks.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 7. Don't Skip Permits or Licensing — Florida Codes Are Strict
          </h3>

          <p className="font-normal text-gray-200">
            All kitchen remodels in Florida involving structural, electrical, or plumbing changes require permits, and different counties have specific codes. <span className="font-semibold text-[#FFE241]">Ridgeback Builders is fully licensed, insured, and experienced</span> with local code enforcement across:
          </p>

          <ul className="list-disc pl-6 font-normal text-gray-100">
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

          <p className="font-normal text-gray-200">
            We handle the permit applications, schedule inspections, and make sure your remodel is safe, legal, and long-lasting.
          </p>

          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">🛠️ Need a Kitchen Built for Florida Life?</p>
            <p className="text-gray-100 font-medium">
              Whether you want a modern, hurricane-ready chef's kitchen or a cozy space to host family dinners, <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span> delivers complete kitchen renovations that are functional, durable, and beautiful.
            </p>
            <p className="text-gray-100 font-medium mt-3">
              Our services include: Full design and planning • Custom or economic cabinetry and countertop installation • Structural and utility upgrades • Permits and project management from start to finish
            </p>
            <a href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90" style={{fontFamily: "'Oswald',sans-serif"}}>
                Book Free Consultation
              </Button>
            </a>
          </div>

          <p className="font-normal text-gray-100">
            Let's create your dream kitchen. Serving <span className="font-semibold text-[#FFE241]">Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, Port St. Lucie</span>, and nearby cities.
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

export default KitchenRemodelingTips;
