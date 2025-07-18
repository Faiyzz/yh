
import { Footer } from "@/components/Footer";
import { ThreeBackground } from "@/components/ThreeBackground";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      image: "/project/rp/1.jpg",
      title: "Residential Projects",
      description: "Complete home construction from foundation to finish. We handle everything from custom homes to multi-family developments with precision and care."
    },
    {
      image: "/project/ren/1.jpg",
      title: "Renovation Services", 
      description: "Transform your existing space with our comprehensive renovation services. From kitchen and bathroom remodels to complete home makeovers."
    },
    {
      image: "/project/pm/1.jpg",
      title: "Project Management",
      description: "Expert project management ensuring your construction project stays on time, on budget, and meets the highest quality standards."
    },
    {
      image: "/project/des/1.jpg",
      title: "Design Consulting",
      description: "Professional design consultation to help bring your vision to life. We work with you to create functional and beautiful spaces."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <ThreeBackground />
      </div>
      
      {/* Overlay */}
      <div className="fixed inset-0 z-10 bg-black/40 pointer-events-none"></div>
      
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

        {/* Services Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-6xl font-bold mb-12 text-center" style={{ fontFamily: "'Trobus Expanded', sans-serif" }}>
              <span className="text-white metallic-text">OUR</span> <span className="text-[#FFE241] metallic-text">SERVICES</span>
            </h1>
            
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              From ground-breaking to final inspection, Ridgeback Builders provides comprehensive 
              construction services to meet all your building needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, ) => (
                <div 
                  key={service.title}
                  className="bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800 hover:border-[#FFE241]/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Trobus Expanded', sans-serif" }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
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

export default Services;
