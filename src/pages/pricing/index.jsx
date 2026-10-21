import React from "react";
import { Crown, Flame, Sparkles, CheckCircle } from "lucide-react";
import Navbar from "../../components/navbar/navbar";

const packages = [
  {
    name: "Essential",
    icon: <Sparkles size={34} />,
    price: "5% of Monthly Rent",
    text: "Perfect for property owners who want the basics covered at an affordable rate.",
    btn: "Talk to an Expert",
    features: [
      "Rent Collection",
      "Maintenance Coordination",
      "Utility Bill Management",
      "Bookkeeping & Financial Reports",
      "Property Inspection: 1x Month",
      "24/7 Admin Assistance",
    ],
  },
  {
    name: "Prime",
    icon: <Crown size={36} />,
    price: "7.5% of Monthly Rent",
    text: "Ideal for landlords who want full support and faster response.",
    btn: "Talk to an Expert",
    recommended: true,
    features: [
      "All Essential Services",
      "Tenant Screening",
      "New Tenant Onboarding",
      "Vacancy Management",
      "Property Inspection: 2x Month",
      "24/7 Care Assistance",
    ],
  },
  {
    name: "Pinnacle",
    icon: <Flame size={34} />,
    price: "10% of Monthly Rent",
    text: "For owners who want complete property management with premium support.",
    btn: "Talk to an Expert",
    features: [
      "All Prime Features",
      "Rent & Legal Assistance",
      "Vendor Profit Rate Control",
      "Tax Leasing & Lease Renewals",
      "Property Inspection: 3x Month",
    ],
  },
];

const PricingPage = () => {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-[#111f34] min-h-[310px] md:min-h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#111f34] via-[#13243d]/95 to-[#0d1a2b]" />

        <div className="absolute right-[10%] top-10 hidden md:flex gap-4 opacity-80">
          <div className="w-28 h-44 bg-[#253349] shadow-2xl translate-y-12"></div>
          <div className="w-28 h-56 bg-[#3b4c66] shadow-2xl"></div>
          <div className="w-28 h-72 bg-[#00a8c8] shadow-2xl"></div>
          <div className="w-28 h-72 bg-[#69c7c9] shadow-2xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-5">
          <div className="mt-20 md:mt-24 text-white">
            <p className="text-xs mb-4 opacity-80">Home / Pricing and Packages</p>
            <h1 className="text-4xl md:text-6xl font-bold">
              Pricing & Packages
            </h1>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 md:py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white text-center px-8 py-10 shadow-xl shadow-gray-200/70 border border-gray-100 transition-all duration-300 hover:-translate-y-2 ${
                item.recommended ? "md:scale-105" : ""
              }`}
            >
              {item.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 px-5 py-1 rounded-full text-xs text-gray-500 shadow-sm">
                  Recommended
                </span>
              )}

              <div className="text-[#ffb000] flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#2f4f73]">
                {item.name}
              </h3>

              <p className="text-xs text-gray-400 mt-1">Plan A</p>

              <h4 className="text-lg font-bold text-[#1d3557] mt-5">
                {item.price}
              </h4>

              <p className="text-sm text-gray-500 mt-3 leading-relaxed min-h-[70px]">
                {item.text}
              </p>

              <a
                href="/contact"
                className={`inline-block mt-6 px-6 py-3 text-xs uppercase tracking-wide border transition ${
                  item.recommended
                    ? "bg-[#111f34] text-white border-[#111f34]"
                    : "text-[#111f34] border-[#111f34] hover:bg-[#111f34] hover:text-white"
                }`}
              >
                {item.btn}
              </a>

              <div className="mt-8 space-y-4 text-left">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2f4f73] mt-0.5" />
                    <p className="text-sm text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PricingPage;