import React from "react";
import { ArrowRight } from "lucide-react";

const complianceData = [
  {
    title: "Routine Inspections & Owner Reporting",
    text: "We perform detailed inspections to identify issues early and provide owners with clear, transparent reports on property status and requirements.",
  },
  {
    title: "Safety & Code Compliance",
    text: "Our team ensures adherence to housing, fire safety, and sanitation regulations, preventing costly violations and disruptions.",
  },
  {
    title: "Contractor Supervision & Quality Assurance",
    text: "We oversee repairs and vendor-managed projects, verifying work quality and compliance with city codes before confirming completion.",
  },
];

const PropertyComplianceSection = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[240px] md:h-[320px] overflow-hidden flex items-center">
        <img
          src="/services/compliance-hero.jpg"
          alt="Property Compliance"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07172a]/65"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <p className="text-white/80 text-xs mb-4">
            Home / Property Compliance & Strategic Oversight
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[#2f4f73] text-3xl md:text-5xl font-semibold mb-8">
            Property Compliance & Strategic Oversight
          </h1>

          <div className="space-y-5">
            {complianceData.map((item, index) => (
              <div key={index} className="flex gap-3 text-sm md:text-base">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2f4f73] shrink-0"></span>

                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-[#17395f]">{item.title}</strong> —{" "}
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 inline-flex items-center gap-3 border border-[#17395f] text-[#17395f] px-6 py-3 rounded-full text-sm hover:bg-[#17395f] hover:text-white transition">
            Get In Touch
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default PropertyComplianceSection;