import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image"; // ✅ added

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
            <h1 className="text-4xl md:text-5xl font-trobus font-extrabold tracking-tight text-[#FFE241] metallic-text" style={{ fontFamily: "'Trobus Expanded', sans-serif" }}>
              New Concrete Installation Guide for Florida Homes: What Every Homeowner Should Know
            </h1>
            <p className="text-lg text-gray-200 mt-4 max-w-xl font-medium" style={{ fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif" }}>
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
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{ fontFamily: "'Trobus Expanded', sans-serif" }}>
              Book Your Evaluation
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

          {/* (rest of content stays the same) */}

          {/* 2nd image */}
          <div className="w-full flex justify-center my-5">
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

          {/* 3rd image */}
          <div className="w-full flex justify-center my-5">
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

          {/* 4th image */}
          <div className="w-full flex justify-center my-5">
            <div className="relative w-full md:w-2/3 aspect-video rounded-xl shadow-md overflow-hidden">
              <Image
                src={IMAGES[3].src}
                alt={IMAGES[3].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>

          {/* (rest of blog content remains unchanged) */}
        </article>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button className="bg-zinc-900 border border-[#FFE241] text-[#FFE241] hover:bg-black/90 px-8 py-3 text-lg uppercase font-trobus font-bold" style={{ fontFamily: "'Trobus Expanded',sans-serif" }}>
              ← Back to All Articles
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog8;
