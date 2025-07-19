import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ThreeBackground } from "@/components/ThreeBackground";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Ridgeback Builders - Learn about our service terms and conditions.",
  robots: {
    index: false,
    follow: true,
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Terms of Service", href: "/terms-of-service" }
];

export default function TermsOfService() {
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
        <Breadcrumbs items={breadcrumbItems} />
        
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

        {/* Terms of Service Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1
              className="text-4xl md:text-6xl font-bold mb-12 text-center"
              style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
            >
              <span className="text-white metallic-text">TERMS OF</span>{" "}
              <span className="text-[#FFE241] metallic-text">SERVICE</span>
            </h1>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of Ridgeback Construction&apos;s services
                and website. By using our services, you agree to these terms.
              </p>

              <h2 className="text-2xl font-bold text-[#FFE241] mt-8">Services</h2>
              <p>
                Ridgeback Construction provides construction and renovation services. All services are
                subject to separate written agreements and contracts.
              </p>

              <h2 className="text-2xl font-bold text-[#FFE241] mt-8">Estimates and Quotes</h2>
              <p>
                All estimates and quotes provided are subject to change based on project scope,
                material costs, and other factors. Final pricing will be detailed in your service contract.
              </p>

              <h2 className="text-2xl font-bold text-[#FFE241] mt-8">Liability</h2>
              <p>
                Ridgeback Construction is fully licensed and insured. Our liability is limited as
                specified in individual service contracts.
              </p>

              <h2 className="text-2xl font-bold text-[#FFE241] mt-8">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-[#FFE241]">
                Email: info@ridgebackbuilt.com
                <br />
                Phone: (813) 921-1717
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}