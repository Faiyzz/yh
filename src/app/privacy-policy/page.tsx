

"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const Footer = dynamic(() => import("@/components/Footer"))
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), { ssr: false })

const PrivacyPolicy = () => {
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

        {/* Privacy Policy Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1
              className="text-6xl font-bold mb-12 text-center"
              style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
            >
              <span className="text-white metallic-text">PRIVACY</span>{" "}
              <span className="text-[#FFE241] metallic-text">POLICY</span>
            </h1>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <p>
                Ridgeback Construction ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, and safeguard your
                information when you visit our website.
              </p>

              <h2 className="text-2xl font-bold text-[#FFE241] mt-8">Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you
                contact us, request a quote, or use our services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information</li>
                <li>Project details and requirements</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#FFE241] mt-8">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you project updates and communications</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#FFE241] mt-8">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
  )
}

export default PrivacyPolicy
