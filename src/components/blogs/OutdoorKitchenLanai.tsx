
import { ArrowRight, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const IMAGES = [
  {
    src: "/lovable-uploads/403cae62-d6da-49cf-830c-f9546cc4c987.png",
    alt: "Florida lanai with outdoor kitchen setup",
  },
  {
    src: "/lovable-uploads/76443640-15e8-4615-9e33-822db27e1522.png",
    alt: "Outdoor kitchen with bar seating and stone construction",
  },
  {
    src: "/lovable-uploads/87a0198f-a57f-4948-8a82-f145bf1a027e.png",
    alt: "Modern covered outdoor kitchen with entertainment area",
  },
  {
    src: "/lovable-uploads/01dbfcbf-1bb4-433b-b0ff-39888c6b63bf.png",
    alt: "Luxury outdoor kitchen with poolside bar and seating",
  },
];

const OutdoorKitchenLanai = () => {
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
              How to Build an Outdoor Kitchen in Your Florida Lanai
            </h1>
            <p
              className="text-lg text-gray-200 mt-4 max-w-xl font-medium"
              style={{ fontFamily: "'Rush Driver Italic', 'Oswald', sans-serif" }}
            >
              Creating the perfect outdoor living space. <span className="font-trobus font-bold text-white/90">Expert guidance</span> from Ridgeback Builders.
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
            <span className="uppercase tracking-wider text-xs">FREE OUTDOOR KITCHEN CONSULTATION</span>
          </div>
          <a href="/contact" className="mt-2 md:mt-0">
            <Button className="bg-[#FFE241] text-black hover:bg-[#ffd500] px-7 py-2 font-trobus font-bold shadow-lg uppercase tracking-wide text-base" style={{fontFamily: "'Trobus Expanded', sans-serif"}}>
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-100 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {/* 1st image */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[0].src} alt={IMAGES[0].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <p className="font-normal text-gray-200">
            In Florida, outdoor living isn't a luxury — it's a way of life. From weekend grilling to poolside dinners with friends, outdoor kitchens are becoming one of the most requested upgrades among Florida homeowners. But building a functional, weatherproof kitchen in your lanai takes more than just a grill and a countertop.
          </p>

          <p className="font-normal text-gray-200">
            At <span className="font-semibold text-[#FFE241]">Ridgeback Builders, we've built outdoor kitchens</span> in Fort Myers, Naples, Port Charlotte, Sarasota, Bradenton, Tampa, West Palm Beach, and Port St. Lucie — and we've learned exactly what it takes to make them beautiful, functional, and Florida-proof.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241] metallic-text">
            1. Start with the Right Foundation — Literally
          </h3>

          <p className="font-normal text-gray-200">
            Your lanai floor may not be ready for the weight and heat of an outdoor kitchen.
          </p>

          {/* 2nd image */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            <div className="flex-1">
              <h4 className="text-lg font-medium mt-4 text-[#FFE241] metallic-text">What Ridgeback Builders checks:</h4>
              <ul className="list-disc pl-6 font-normal text-gray-100">
                <li>Concrete slab strength & slope</li>
                <li>Drainage and water runoff</li>
                <li>Leveling and load support</li>
              </ul>
              <p className="font-normal text-gray-200 mt-4">
                If your lanai isn't reinforced or properly graded, we'll pour a new concrete base to support cabinetry, countertops, and appliances — especially if you're adding a heavy built-in grill or brick oven.
              </p>
            </div>
            <img src={IMAGES[1].src} alt={IMAGES[1].alt} className="rounded-xl shadow-md w-full md:w-1/3 object-cover" />
          </div>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241] metallic-text">
            2. Choose Hurricane-Resistant, Florida-Safe Materials
          </h3>

          <p className="font-normal text-gray-200">
            Outdoor kitchens must withstand intense UV, coastal air, heavy rain, and — at times — tropical storms. We recommend:
          </p>

          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Stainless steel cabinets (marine-grade 304/316)</li>
            <li>Quartzite or sealed granite countertops</li>
            <li>Tile, stone, or sealed concrete finishes</li>
            <li>Non-slip flooring materials</li>
          </ul>

          <p className="font-normal text-gray-200">
            <span className="font-semibold text-[#FFE241]">Ridgeback Builders sources weather-rated appliances</span> and uses hurricane-rated anchoring methods to keep everything secure and safe, even in wind-prone areas like Fort Myers, Tampa or West Palm Beach.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241] metallic-text">
            3. Add the Essentials — But Plan Smart
          </h3>

          <p className="font-normal text-gray-200">
            Every Florida outdoor kitchen should be designed for comfort, convenience, and energy efficiency. Here's what most homeowners request:
          </p>

          {/* 3rd image */}
          <div className="w-full flex justify-center my-5">
            <img src={IMAGES[2].src} alt={IMAGES[2].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241] metallic-text">Core features we install:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Built-in gas or propane grill (or smoker)</li>
            <li>Mini fridge and/or ice maker</li>
            <li>Stainless steel sink with drainage line</li>
            <li>Pull-out trash and storage cabinets</li>
            <li>A weather-rated ceiling fan or hood vent</li>
          </ul>

          <p className="font-normal text-gray-200">
            <span className="font-medium text-[#FFE241]">Pro tip:</span> Always run dedicated GFCI outlets and proper gas or water lines. <span className="font-semibold text-[#FFE241]">Ridgeback Builders handles all utility work</span> with licensed contractors where available.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241] metallic-text">
            4. Keep It Cool and Covered
          </h3>

          <p className="font-normal text-gray-200">
            Your lanai may already be screened or partially covered, but most homeowners still need a custom roof extension, pergola, or insulated cover to shield the kitchen from sun and rain.
          </p>

          <p className="font-normal text-gray-200">
            We recently helped a family in Sarasota build a pavilion-style cover with recessed lighting, dual ceiling fans, and LED task lights. It made the space usable even in July and added serious resale value.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241] metallic-text">We can also add:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Misters or fans for airflow</li>
            <li>Insect protection</li>
            <li>Overhead lighting for evening entertaining</li>
          </ul>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241] metallic-text">
            5. Blend the Design with the Home
          </h3>

          <p className="font-normal text-gray-200">
            Your outdoor kitchen should feel like an extension of your interior, not an afterthought.
          </p>

          <h4 className="text-lg font-medium mt-6 text-[#FFE241] metallic-text">At Ridgeback Builders, we help you:</h4>
          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Match stone, paver, or tile materials to your patio and landscaping</li>
            <li>Coordinate cabinet and counter colors with your home's exterior</li>
            <li>Listen to your hosting style to create design recommendations</li>
          </ul>

          <p className="font-normal text-gray-200">
            In Bradenton, we recently built a coastal-style lanai kitchen with light blue cabinetry and brushed stainless hardware to match the home's coastal interior. Seamless. Stylish. Functional.
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241] metallic-text">
            6. Think Beyond Cooking — Make It a Destination
          </h3>

          <p className="font-normal text-gray-200">
            Want your lanai to be more than just a grill station? Add features like:
          </p>

          {/* 4th image */}
          <div className="w-full flex justify-center my-6">
            <img src={IMAGES[3].src} alt={IMAGES[3].alt} className="rounded-xl shadow-md w-full md:w-2/3 object-cover" />
          </div>

          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Outdoor bar with stools</li>
            <li>TV wall with weather-rated screen</li>
            <li>Pizza oven or smoker station</li>
            <li>A fire pit or lounge area nearby</li>
            <li>Built-in Bluetooth speakers or sound system</li>
          </ul>

          <p className="font-normal text-gray-200">
            <span className="font-semibold text-[#FFE241]">Ridgeback Builders helps turn your backyard into a true entertainment zone.</span>
          </p>

          <h3 className="text-lg md:text-xl font-medium mt-8 text-[#FFE241] metallic-text">
            What Permits and Codes Apply in Florida?
          </h3>

          <p className="font-normal text-gray-200">
            Adding an outdoor kitchen — even in a lanai — often requires:
          </p>

          <ul className="list-disc pl-6 font-normal text-gray-100">
            <li>Building permits (for structure or electrical/gas work)</li>
            <li>Plumbing permits (for sink installation)</li>
            <li>Zoning compliance (for propane storage or structure proximity)</li>
          </ul>

          <p className="font-normal text-gray-200">
            We handle it all, from application to final inspection, with code-compliant designs for multiple Florida counties that we serve.
          </p>

          <div className="bg-[#ffe241]/10 border border-[#ffe241]/30 rounded-xl px-8 py-6 my-8 text-center shadow-xl">
            <p className="text-xl font-bold metallic-text text-[#FFE241] mb-1">🔧 Why Florida Homeowners Trust Ridgeback Builders</p>
            <p className="text-gray-100 font-medium mb-4">
              We don't just install countertops — we build outdoor living spaces that become your favorite part of the home.
            </p>
            <ul className="list-none text-gray-100 text-left space-y-1 mb-4">
              <li>✔ Custom outdoor kitchen design & layout</li>
              <li>✔ Full permitting, electrical, gas, and plumbing work</li>
              <li>✔ Durable materials chosen for Florida's climate</li>
              <li>✔ Built-in appliances, lighting, and audio upgrades available</li>
              <li>✔ Expert craftsmanship backed by warranty</li>
            </ul>
            <a href="/contact">
              <Button className="mt-4 bg-[#FFE241] text-black font-bold px-8 py-3 text-lg uppercase shadow-lg hover:bg-[#ffe241]/90" style={{fontFamily: "'Oswald',sans-serif"}}>
                Book Outdoor Kitchen Consult
              </Button>
            </a>
          </div>

          <p className="font-normal text-gray-100">
            We'll help guide you with creating your beautiful outdoor living space. Serving <span className="font-semibold text-[#FFE241]">Fort Myers, Naples, Port Charlotte, Sarasota, Bradenton, Tampa, West Palm Beach, Port St. Lucie</span>, and nearby cities.
          </p>
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

export default OutdoorKitchenLanai;
