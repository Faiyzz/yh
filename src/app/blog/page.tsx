'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, ArrowRight, Home } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/components/BlogSection";

const BlogPage = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-zinc-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-[#FFE241] hover:text-[#FFE241]/80">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <FileText className="h-12 w-12 text-[#FFE241]" />
            <div>
              <h1
                className="text-5xl font-bold text-white"
                style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
              >
                EXPERT <span className="text-[#FFE241]">INSIGHTS</span>
              </h1>
              <p className="text-gray-300 mt-2">
                Professional construction and renovation advice for Florida homeowners
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(blogPosts) && blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="bg-zinc-800 border-0 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FFE241]/10 cursor-pointer group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView
                    ? "scale(1) translateY(0)"
                    : "scale(0.95) translateY(20px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: `${0.1 + index * 0.05}s`,
                }}
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
                    <h3
                      className="text-xl font-bold text-white mb-3 group-hover:text-[#FFE241] transition-colors"
                      style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
                    >
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
                      <div className="flex items-center gap-1 text-[#FFE241] text-sm font-medium group-hover:gap-2 transition-all cursor-not-allowed opacity-70">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
