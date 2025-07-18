"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    caption: "Looking up at our latest residential highrise project. #Construction #Architecture",
    timestamp: "2 days ago",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    caption: "Structural details that make all the difference. #DesignDetails #Engineering",
    timestamp: "4 days ago",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    caption: "Materials matter. Quality from foundation to finish. #Materials #Quality",
    timestamp: "1 week ago",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    caption: "Site progress on our downtown commercial project. #Progress #Commercial",
    timestamp: "1 week ago",
  },
];

export const InstagramFeed = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById("instagram-section");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="instagram-section" className="py-24">
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between mb-12 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="flex items-center gap-4">
            <Instagram className="h-8 w-8 md:h-8 md:w-8 lg:h-12 lg:w-12 text-[#FFE241]" />
            <h2 className="text-4xl font-bold text-white font-trobus">
              LATEST <span className="text-[#FFE241]">UPDATES</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/ridgebackbuilders/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[#FFE241] text-black rounded-lg hover:bg-[#FFE241]/80 transition-colors"
          >
            Follow us <Instagram className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instagramPosts.map((post, index) => {
            const isEven = index % 2 === 0;
            const isTop = index < 2;
            const translateX = isEven ? "20px" : "-20px";
            const translateY = isTop ? "20px" : "-20px";

            return (
              <Card
                key={post.id}
                className="bg-zinc-800 border-0 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FFE241]/10"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView
                    ? "scale(1) translate(0, 0)"
                    : `scale(0.9) translate(${translateX}, ${translateY})`,
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: `${0.3 + index * 0.15}s`,
                }}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={post.image}
                      alt="Instagram post"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300 mb-2">{post.caption}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div
          className="flex justify-center mt-8"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            transitionDelay: "0.8s",
          }}
        >
          <a
            href="https://www.instagram.com/ridgebackbuilders/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFE241] text-black rounded-lg hover:bg-[#FFE241]/80 transition-colors"
          >
            View More on Instagram <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
