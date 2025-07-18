"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Florida Hurricane / Flood Remediation & Mold Removal",
    excerpt:
      "Essential guide to protecting your home from hurricane damage and preventing mold growth in Florida's humid climate.",
    readTime: "8 min read",
    category: "Storm Recovery",
    image: "/lovable-uploads/b1n1.jpg",
    route: "/blog/florida-hurricane-flood-remediation-mold-removal",
  },
  {
    id: 2,
    title: "Florida Hurricane Roof Replacement vs Repair",
    excerpt:
      "When to repair and when to replace your roof after hurricane damage - a comprehensive guide for Florida homeowners.",
    readTime: "6 min read",
    category: "Roofing",
    image: "/lovable-uploads/0558b537-c818-4b1b-b263-278aa10d4c7a.png",
    route: "/blog/florida-hurricane-roof-replacement-vs-repair",
  },
  {
    id: 3,
    title: "Bathroom Remodeling Tips and Tricks for Florida Homeowners",
    excerpt:
      "Transform your bathroom with Florida-specific considerations for humidity, materials, and design trends.",
    readTime: "10 min read",
    category: "Remodeling",
    image: "/lovable-uploads/f285936d-a7b6-40fd-b669-9bde63ff0c06.png",
    route: "/blog/bathroom-remodeling-tips-florida",
  },
  {
    id: 4,
    title: "Kitchen Remodeling Tips and Tricks for Florida Homeowners",
    excerpt:
      "Create your dream kitchen while navigating Florida's unique building codes and climate considerations.",
    readTime: "12 min read",
    category: "Remodeling",
    image: "/lovable-uploads/24ddca78-b823-40fc-9122-89a82c5975b0.png",
    route: "/blog/kitchen-remodeling-tips-florida",
  },
  {
    id: 5,
    title: "How to Build an Outdoor Kitchen in Your Florida Lanai",
    excerpt:
      "Maximize your outdoor living space with a custom kitchen addition designed for Florida's year-round outdoor lifestyle.",
    readTime: "9 min read",
    category: "Outdoor Living",
    image: "/lovable-uploads/403cae62-d6da-49cf-830c-f9546cc4c987.png",
    route: "/blog/outdoor-kitchen-lanai-florida",
  },
  {
    id: 6,
    title: "How to Distinguish Load-Bearing vs. Non-Load-Bearing Walls",
    excerpt:
      "Learn to identify structural walls and understand the differences between metal studs vs wood studs in construction.",
    readTime: "7 min read",
    category: "Construction",
    image: "/lovable-uploads/ad619d3b-6c34-4eec-ac27-c99115e40002.png",
    route: "/blog/load-bearing-vs-non-load-bearing-walls",
  },
  {
    id: 7,
    title: "New Concrete Driveway Installation Guide",
    excerpt:
      "Everything you need to know about installing a durable concrete driveway that withstands Florida weather.",
    readTime: "11 min read",
    category: "Concrete Work",
    image: "/lovable-uploads/b7n1.jpeg",
    route: "/blog/concrete-foundation",
  },
  {
    id: 8,
    title: "New Concrete Slabs for Florida Gazebos and Sheds",
    excerpt:
      "Proper foundation techniques for outdoor structures in Florida's sandy soil and hurricane-prone environment.",
    readTime: "8 min read",
    category: "Concrete Work",
    image: "/lovable-uploads/b8n1.jpeg",
    route: "/blog/blog8",
  },
  {
    id: 9,
    title: "How to Create New Exterior/Entry Door in Garage",
    excerpt:
      "Step-by-step guide to adding convenient access doors to your garage while maintaining structural integrity.",
    readTime: "6 min read",
    category: "Construction",
    image: "/lovable-uploads/b9n1.jpeg",
    route: "/blog/blog9",
  },
  {
    id: 10,
    title: "How to Create an Efficiency in Your Home to Rent Out",
    excerpt:
      "Convert unused space into rental income with this comprehensive guide to creating legal rental units.",
    readTime: "15 min read",
    category: "Home Addition",
    image: "/lovable-uploads/b10n1.jpeg",
    route: "/blog/blog10",
  },
];

export const BlogSection = () => {
  const [inView, setInView] = useState(false);
  const displayedPosts = blogPosts.slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("blog-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="blog-section" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`flex items-center justify-between mb-12 transition-opacity duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          } delay-[200ms]`}
        >
          <div className="flex items-center gap-4">
            <FileText className="h-10 w-10 text-[#FFE241]" />
            <h2 className="text-4xl font-trobus font-bold text-white">
              EXPERT <span className="text-[#FFE241]">INSIGHTS</span>
            </h2>
          </div>
        </div>

        {/* Grid of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`bg-zinc-800 border-0 overflow-hidden transform transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"
              } delay-[${300 + index * 100}ms] group`}
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-trobus font-bold text-white mb-3 group-hover:text-[#FFE241] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  {post.route ? (
                    <Link href={post.route}>
                      <div className="flex items-center gap-1 text-[#FFE241] text-sm font-medium group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-1 text-[#FFE241] text-sm font-medium opacity-70 cursor-not-allowed">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div
          className={`text-center mt-12 transition-opacity duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          } delay-[800ms]`}
        >
          <Link href="/blog">
            <Button className="bg-[#FFE241] text-black hover:bg-[#FFE241]/90 font-trobus font-bold px-8 py-3 text-lg uppercase">
              SEE ALL ARTICLES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { blogPosts };
