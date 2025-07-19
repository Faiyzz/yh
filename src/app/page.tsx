import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { GallerySection } from "@/components/GallerySection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { ThreeBackground } from "@/components/ThreeBackground";
import { CookieConsent } from "@/components/CookieConsent";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional construction and renovation services in Florida. Built Strong. Built Right. Expert residential construction, hurricane-resistant building, and quality craftsmanship.",
  openGraph: {
    title: "Ridgeback Builders - Built Strong. Built Right",
    description: "Professional construction and renovation services in Florida.",
    images: ['/lovable-uploads/logo.jpg'],
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global 3D Background - Layer 1: Black background is handled by bg-black */}

      {/* Layer 2: 3D Shapes */}
      <div className="fixed inset-0 z-0">
        <ThreeBackground />
      </div>

      {/* Layer 3: Overlay to reduce opacity */}
      <div className="fixed inset-0 z-10 bg-black/40 pointer-events-none"></div>

      {/* Layer 4: All sections scroll on top */}
      <div className="relative z-20">
        <Breadcrumbs items={breadcrumbItems} />
        <HeroSection />
        <GallerySection />
        <ServiceAreaSection />
        <BlogSection />
        <Footer />
      </div>

      {/* Layer 5: Cookie Consent (highest z-index) */}
      <CookieConsent />
    </div>
  );
}