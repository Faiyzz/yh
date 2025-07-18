
import { Footer } from "@/components/Footer";
import { ArrowLeft, Home, Wrench, PaintBucket, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  // Reorder categories: Residential, Project Management, then others
  const projectCategories = [
    {
      title: "Residential Projects",
      icon: Home,
      images: [
        { src: "/project/rp/1.jpg", alt: "Custom Home Construction" },
        { src: "/project/rp/2.jpg", alt: "Modern Residential Building" },
        { src: "/project/rp/3.jpg", alt: "Luxury Home Development" }
      ]
    },
    {
      title: "Project Management",
      icon: Wrench,
      images: [
        { src: "/project/pm/1.jpg", alt: "Construction Site Management" },
        { src: "/project/pm/2.jpg", alt: "Project Planning" },
        { src: "/project/pm/3.jpg", alt: "Quality Control" }
      ]
    },
    {
      title: "Renovation Services",
      icon: PaintBucket,
      images: [
        { src: "/project/ren/1.jpg", alt: "Kitchen Renovation" },
        { src: "/project/ren/2.jpg", alt: "Bathroom Remodel" },
        { src: "/project/ren/3.jpg", alt: "Complete Home Makeover" }
      ]
    },
    {
      title: "Design Consulting",
      icon: Lightbulb,
      images: [
        { src: "/project/des/1.jpg", alt: "Architectural Design" },
        { src: "/project/des/2.jpg", alt: "Interior Design Consultation" },
        { src: "/project/des/3.jpg", alt: "Space Planning" }
      ]
    }
  ];

  const renderColoredTitle = (title: string) => {
    return title.split(" ").map((word, idx) =>
      idx % 2 === 1 ? (
        <span key={idx} className="text-[#FFE241]">{word} </span>
      ) : (
        <span key={idx} className="text-white">{word} </span>
      )
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <nav className="p-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#FFE241] hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </nav>

        {/* Projects Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center" style={{ fontFamily: "'Trobus Expanded', sans-serif" }}>
              <span className="text-white metallic-text">OUR</span> <span className="text-[#FFE241]">PROJECTS</span>
            </h1>
            
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Explore our portfolio of completed projects showcasing our expertise 
              across residential construction, renovations, and design consulting.
            </p>

            {/* Project Categories */}
            <div className="space-y-16">
              {projectCategories.map((category) => {
                const IconComponent = category.icon;
                const isVerticalGallery =
                  category.title === "Residential Projects" ||
                  category.title === "Project Management";

                return (
                  <div key={category.title} className="mb-16">
                    {/* Category heading with icon */}
                    <div className="flex items-center justify-start md:justify-center gap-4 mb-8 text-left md:text-center">
                      <IconComponent className="h-6 md:h-8 w-6 md:w-8 text-[#FFE241]" />
                      <h2
                        className="text-2xl md:text-3xl font-bold"
                        style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
                      >
                        {renderColoredTitle(category.title)}
                      </h2>
                    </div>
                    
                    {/* Desktop Grid Layout */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                      {category.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className={`group relative overflow-hidden rounded-lg ${
                            isVerticalGallery ? "aspect-[3/4]" : "aspect-[4/3]"
                          } bg-zinc-900`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Mobile Carousel Layout */}
                    <div className="md:hidden">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {category.images.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex}>
                              <div
                                className={`relative overflow-hidden rounded-lg ${
                                  isVerticalGallery ? "aspect-[3/4]" : "aspect-[4/3]"
                                } bg-zinc-900`}
                              >
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 border-black bg-black text-white hover:bg-[#FFE241] hover:text-black hover:border-[#FFE241]" />
                        <CarouselNext className="right-2 border-black bg-black text-white hover:bg-[#FFE241] hover:text-black hover:border-[#FFE241]" />
                      </Carousel>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: "'Trobus Expanded', sans-serif" }}>
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Contact us today for a free consultation and estimate.
              </p>
              <Link 
                href="/contact"
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="inline-block bg-[#FFE241] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#FFE241]/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
