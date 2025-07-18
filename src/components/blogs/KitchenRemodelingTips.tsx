import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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
            <h1 className="text-4xl md:text-5xl font-trobus font-extrabold tracking-tight text-[#FFE241] metallic-text">
              Kitchen Remodeling Tips and Tricks for Florida Homeowners
            </h1>
            <p className="text-lg text-gray-200 mt-4 max-w-xl font-rush font-medium">
              Essential guide for creating your dream kitchen in Florida&apos;s unique climate.{" "}
              <span className="font-trobus font-bold text-white/90">Expert guidance</span> from Ridgeback Builders.
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
            <span className="uppercase tracking-wider text-xs">FREE DESIGN CONSULTATION</span>
          </div>
          <Link href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight font-oswald">
          {/* Image 1 */}
          <div className="w-full flex justify-center my-6">
            <Image
              src={IMAGES[0].src}
              alt={IMAGES[0].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          <p className="text-gray-200">
            Remodeling your kitchen in Florida isn&apos;t just about creating a beautiful space — it&apos;s about building one that performs well in a hot, humid, and storm-prone environment...
          </p>

          <p className="text-gray-200">
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span>, we specialize in kitchen remodeling projects...
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 1. Choose Materials Built for Heat and Humidity
          </h3>

          <p className="text-gray-200">
            Florida&apos;s environment demands durable, moisture-resistant materials...
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Ridgeback Builders Recommends:</h4>
          <ul className="list-disc pl-6 text-gray-100">
            <li><strong>Quartz countertops:</strong> more durable than granite and resistant to mold and stains</li>
            <li><strong>Porcelain tile flooring:</strong> water-resistant and cool underfoot</li>
            <li><strong>PVC cabinets or marine-grade plywood:</strong> warping-resistant even in coastal zones</li>
            <li><strong>Glass or metal backsplash:</strong> easier to clean and more heat resistant</li>
          </ul>

          <p className="text-gray-200">
            We helped one Tampa homeowner switch from MDF cabinets to waterproof PVC...
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 2. Maximize Ventilation & Airflow
          </h3>

          <p className="text-gray-200">
            A Florida kitchen without proper ventilation can feel like a sauna...
          </p>

          {/* Image 2 */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <div className="flex-1">
              <h4 className="text-lg font-medium mt-6 text-[#FFE241]">What Ridgeback Builders Does:</h4>
              <ul className="list-disc pl-6 text-gray-100">
                <li>Install high-efficiency range hoods vented directly outside</li>
                <li>Use ceiling fans or ductless fans to move air</li>
                <li>Include operable windows for natural ventilation</li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src={IMAGES[1].src}
                alt={IMAGES[1].alt}
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover h-auto"
              />
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 3. Go for an Open Layout — But Be Smart About It
          </h3>

          <p className="text-gray-200">
            Florida homeowners love open-concept kitchens...
          </p>

          {/* Image 3 */}
          <div className="w-full flex justify-center my-6">
            <Image
              src={IMAGES[2].src}
              alt={IMAGES[2].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241]">Ridgeback Builders Tip:</h4>
          <ul className="list-disc pl-6 text-gray-100">
            <li>If the wall is load-bearing</li>
            <li>If it contains plumbing or ductwork</li>
            <li>If reinforcements (like beams or columns) are needed</li>
          </ul>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 4. Add Smart Storage Without Cluttering the Design
          </h3>

          <ul className="list-disc pl-6 text-gray-100">
            <li>Deep drawers instead of lower cabinets</li>
            <li>Pull-out pantries</li>
            <li>Corner lazy Susans</li>
            <li>Built-in microwave drawers</li>
          </ul>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 5. Focus on Natural Light + Cool Colors
          </h3>

          <ul className="list-disc pl-6 text-gray-100">
            <li>White or soft gray cabinets + brushed nickel hardware</li>
            <li>Light-colored quartz counters</li>
            <li>Under-cabinet LED lighting</li>
            <li>Sea glass backsplash, open shelving</li>
          </ul>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 6. Always Plan for Power and Plumbing Needs
          </h3>

          {/* Image 4 */}
          <div className="w-full flex justify-center my-6">
            <Image
              src={IMAGES[3].src}
              alt={IMAGES[3].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          <ul className="list-disc pl-6 text-gray-100">
            <li>Upgrading electrical for modern appliances</li>
            <li>Rerouting plumbing for islands</li>
            <li>Code-compliant outlets and lighting</li>
            <li>Surge protection during storms</li>
          </ul>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            ✅ 7. Don&apos;t Skip Permits or Licensing — Florida Codes Are Strict
          </h3>

          <ul className="list-disc pl-6 text-gray-100">
            <li>Lee County</li>
            <li>Collier County</li>
            <li>Charlotte County</li>
            <li>Sarasota County</li>
            <li>Palm Beach County</li>
          </ul>

          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">🛠️ Need a Kitchen Built for Florida Life?</p>
            <p className="text-gray-100 font-medium">
              Whether you want a hurricane-ready chef&apos;s kitchen or a cozy hosting space, <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span> delivers full kitchen remodels with durability and beauty.
            </p>
            <p className="text-gray-100 font-medium mt-3">
              Full design • Custom cabinetry • Utility upgrades • Permits • Project management
            </p>
            <Link href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90 font-oswald">
                Book Free Consultation
              </Button>
            </Link>
          </div>

          <p className="text-gray-100">
            Let&apos;s create your dream kitchen. Serving <span className="font-semibold text-[#FFE241]">Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, Port St. Lucie</span>.
          </p>
        </article>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button className="bg-zinc-900 border border-[#FFE241] text-[#FFE241] hover:bg-black/90 px-8 py-3 text-lg uppercase font-trobus font-bold">
              ← Back to All Articles
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KitchenRemodelingTips;
