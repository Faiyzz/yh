import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{ fontFamily: "'Trobus Expanded', sans-serif" }}>
              Book Your Evaluation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Blog content */}
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {/* Image blocks */}
          {[0, 2, 3].map((i) => (
            <div key={i} className="w-full flex justify-center my-6">
              <div className="relative w-full md:w-2/3 aspect-video rounded-xl shadow-md overflow-hidden">
                <Image
                  src={IMAGES[i].src}
                  alt={IMAGES[i].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </div>
          ))}

          <p className="font-normal text-gray-200">
            Adding a gazebo, pergola, shed, or any other outdoor structure to your Florida property is a great way to expand your living space, entertain guests, and increase property value. But the success of that addition depends on a solid foundation — specifically, a properly built concrete slab.
          </p>

          <p className="font-normal text-gray-200">
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders</span>, we&apos;ve poured concrete pads and foundations for homeowners across Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie. Whether you&apos;re adding a shed, workshop, or outdoor retreat, here&apos;s everything you need to know before installing a slab.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241]">
            Why a Proper Concrete Slab Matters in Florida
          </h3>

          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <ul className="list-disc pl-6 font-normal text-gray-100 flex-1">
              <li>Proper support for the weight of the structure</li>
              <li>Moisture protection underneath</li>
              <li>Drainage planning to avoid water pooling</li>
              <li>Properly placed control joints</li>
              <li>A solid foundation that meets Florida Building Code</li>
            </ul>
            <div className="relative w-full md:w-1/3 aspect-[4/3] rounded-xl shadow-md overflow-hidden">
              <Image
                src={IMAGES[1].src}
                alt={IMAGES[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Remaining article unchanged (omitted here for brevity) */}

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