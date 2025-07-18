import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const IMAGES = [
  {
    src: "/lovable-uploads/403cae62-d6da-49cf-830c-f9546cc4c987.png",
    alt: "Florida lanai with outdoor kitchen setup",
  },
  {
    src: "/lovable-uploads/76443640-15e8-4615-9e33-822db27e1522.png",
    alt: "Outdoor kitchen with bar seating and stone construction",
  },
  {
    src: "/lovable-uploads/87a0198f-a57f-4948-8a82-f145bf1a027e.png",
    alt: "Modern covered outdoor kitchen with entertainment area",
  },
  {
    src: "/lovable-uploads/01dbfcbf-1bb4-433b-b0ff-39888c6b63bf.png",
    alt: "Luxury outdoor kitchen with poolside bar and seating",
  },
];

const OutdoorKitchenLanai = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pb-24 font-body">
      {/* Banner */}
      <div className="relative bg-zinc-900">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
          <FileText className="h-14 w-14 text-[#FFE241]" />
          <div>
            <h1 className="text-4xl md:text-5xl font-trobus font-extrabold tracking-tight text-[#FFE241] metallic-text">
              How to Build an Outdoor Kitchen in Your Florida Lanai
            </h1>
            <p className="text-lg text-gray-200 mt-4 max-w-xl font-rush font-medium">
              Creating the perfect outdoor living space.{" "}
              <span className="font-trobus font-bold text-white/90">
                Expert guidance
              </span>{" "}
              from Ridgeback Builders.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="container mx-auto px-4 max-w-3xl font-oswald">
        {/* Sticky CTA */}
        <div className="sticky top-0 z-20 py-4 bg-black/95 flex flex-col md:flex-row items-center justify-between border-b border-zinc-800 mb-8">
          <div className="flex items-center gap-4 text-yellow-300 font-trobus font-bold">
            <Clock className="h-4 w-4" />
            <span className="uppercase tracking-wider text-xs">
              FREE OUTDOOR KITCHEN CONSULTATION
            </span>
          </div>
          <Link href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight">
          <div className="w-full flex justify-center my-6">
            <Image
              src={IMAGES[0].src}
              alt={IMAGES[0].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          {/* 2nd image and content */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <div className="flex-1">
              <h4 className="text-lg font-medium mt-4 text-[#FFE241] metallic-text">
                What Ridgeback Builders checks:
              </h4>
              <ul className="list-disc pl-6 font-normal text-gray-100">
                <li>Concrete slab strength &amp; slope</li>
                <li>Drainage and water runoff</li>
                <li>Leveling and load support</li>
              </ul>
              <p className="font-normal text-gray-200 mt-4">
                If your lanai isn&#39;t reinforced or properly graded, we&#39;ll pour a
                new concrete base...
              </p>
            </div>
            <Image
              src={IMAGES[1].src}
              alt={IMAGES[1].alt}
              width={500}
              height={300}
              className="rounded-xl shadow-md w-full md:w-1/3 object-cover h-auto"
            />
          </div>

          {/* 3rd image */}
          <div className="w-full flex justify-center my-5">
            <Image
              src={IMAGES[2].src}
              alt={IMAGES[2].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          {/* 4th image */}
          <div className="w-full flex justify-center my-6">
            <Image
              src={IMAGES[3].src}
              alt={IMAGES[3].alt}
              width={1000}
              height={600}
              className="rounded-xl shadow-md w-full md:w-2/3 object-cover h-auto"
            />
          </div>

          {/* CTA Card */}
          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">
              🔧 Why Florida Homeowners Trust Ridgeback Builders
            </p>
            <p className="text-gray-100 font-medium mb-4">
              We don&#39;t just install countertops — we build outdoor living spaces
              that become your favorite part of the home.
            </p>
            <ul className="list-none text-gray-100 text-left space-y-1 mb-4">
              <li>✔ Custom outdoor kitchen design &amp; layout</li>
              <li>✔ Full permitting, electrical, gas, and plumbing work</li>
              <li>✔ Durable materials chosen for Florida&#39;s climate</li>
              <li>✔ Built-in appliances, lighting, and audio upgrades</li>
              <li>✔ Expert craftsmanship backed by warranty</li>
            </ul>
            <Link href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90">
                Book Outdoor Kitchen Consult
              </Button>
            </Link>
          </div>
        </article>

        {/* Back Button */}
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

export default OutdoorKitchenLanai;
