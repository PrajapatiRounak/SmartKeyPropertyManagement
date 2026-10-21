import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  ShieldCheck,
  AlertTriangle,
  ClipboardCheck,
  Home,
  Phone,
} from "lucide-react";

const complianceItems = [
  {
    icon: <Scale size={22} />,
    title: "Legal Notices & File Support",
    text: "We help organize legal notices, tenant records, lease documents, and property files.",
  },
  {
    icon: <FileText size={22} />,
    title: "Lease & Documentation Review",
    text: "We support clean documentation workflows so owners have better visibility over important records.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Risk Management Support",
    text: "We help reduce avoidable risk through organized records, communication tracking, and compliance support.",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "Compliance Coordination",
    text: "We help coordinate compliance-related tasks, notices, and landlord responsibilities in a structured way.",
  },
];

const legalCards = [
  "Notice Management",
  "Lease Compliance",
  "Risk Coordination",
];

const processSteps = [
  {
    no: "01",
    title: "Legal File Review",
    text: "We review lease records, tenant details, notices, and existing property documentation.",
    side: "right",
  },
  {
    no: "02",
    title: "Identify Compliance Gaps",
    text: "We help identify missing documents, outdated records, and potential compliance concerns.",
    side: "left",
  },
  {
    no: "03",
    title: "Document Organization",
    text: "We organize notices, lease files, tenant records, and supporting documents for easier access.",
    side: "right",
  },
  {
    no: "04",
    title: "Risk Management Support",
    text: "We support owners with structured communication records, notices, and follow-up coordination.",
    side: "left",
  },
  {
    no: "05",
    title: "Ongoing Monitoring",
    text: "We help keep compliance workflows organized through regular updates and document tracking.",
    side: "right",
  },
];

const whyCards = [
  "Organized Legal Records",
  "Compliance Coordination",
  "Risk Control Support",
  "Clear Owner Updates",
];

const LegalCompliancePage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      <section className="relative h-[240px] md:h-[320px] overflow-hidden flex items-center">
        <img
          src="/services/legal-compliance-hero.jpg"
          alt="Legal Compliance and Risk Management"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07172a]/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <p className="text-white/75 text-xs mb-4">
            Home / Services / Legal Compliance
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Legal Compliance &
            <br />
            Risk Management
          </h1>
        </div>
      </section>

      <section className="px-5 pt-14 pb-10 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#2f79b7] font-semibold mb-3">
            Legal Compliance & Risk Management Help for Rental Properties
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Legal Compliance & Risk Management Help for
            <br className="hidden md:block" /> Rental Properties
          </h2>

          <p className="max-w-4xl mx-auto mt-5 text-sm text-gray-600 leading-relaxed">
            Smart Key Property Management helps landlords organize legal
            notices, lease records, tenant documentation, compliance workflows,
            and risk-related communication so rental properties stay better
            protected and easier to manage.
          </p>

          <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            Schedule Free Consultation
          </button>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Legal Compliance Matters
          </h2>

          <p className="max-w-3xl mx-auto mt-3 text-sm text-gray-600">
            Rental property compliance requires organized documentation,
            consistent tenant communication, clear records, and proper handling
            of notices and lease-related responsibilities.
          </p>

          <div className="mt-8 space-y-4">
            {complianceItems.map((card, index) => (
              <div
                key={index}
                className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col md:flex-row gap-4 items-start text-left"
              >
                <div className="w-12 h-12 rounded bg-white text-[#1f83c5] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Our Compliance & Risk Management Support
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            We help landlords reduce operational risk by keeping records,
            notices, tenant communication, and lease-related documentation
            organized and easy to review.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {legalCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#e9f8fb] border border-[#9ddff5] p-5 rounded-md"
              >
                <Scale className="mx-auto text-[#1f83c5]" size={26} />
                <h3 className="mt-4 font-semibold text-sm">{item}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Structured support helps owners stay organized and reduce
                  avoidable issues.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
            Our Structured Compliance Process
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto mt-14 md:mt-20">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] bg-[#0078d7] -translate-x-1/2">
            {processSteps.map((_, index) => (
              <span
                key={index}
                className="absolute left-1/2 w-3 h-3 bg-[#0078d7] rounded-full -translate-x-1/2"
                style={{
                  top: `${(index / (processSteps.length - 1)) * 100}%`,
                }}
              ></span>
            ))}
          </div>

          <div className="space-y-16 md:space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8"
              >
                <div
                  className={`text-5xl md:text-6xl font-light text-[#405b7b] ${
                    step.side === "right"
                      ? "md:text-right md:pr-20"
                      : "md:order-2 md:text-left md:pl-20"
                  }`}
                >
                  {step.no}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`bg-white border border-[#6ed3ff] rounded-md shadow-lg shadow-blue-100 p-6 max-w-[310px] mx-auto md:mx-0 ${
                    step.side === "right"
                      ? "md:ml-12"
                      : "md:order-1 md:ml-auto md:mr-12"
                  }`}
                >
                  <h3 className="text-sm md:text-base font-bold text-black mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs md:text-sm text-black leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Landlords Choose Smart Key Property Management
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {whyCards.map((item, index) => (
              <div
                key={index}
                className="border border-[#9ddff5] bg-white shadow-sm p-5 rounded-md"
              >
                <Home className="mx-auto text-[#1f83c5]" size={26} />
                <h3 className="mt-4 text-sm font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 bg-[#f7fbff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Risk Management for Rental Properties in
            <br className="hidden md:block" /> NYC and New Jersey
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Missed notices, incomplete records, unclear tenant communication,
            and poor documentation can create unnecessary risks for landlords.
            Smart Key Property Management helps keep compliance workflows
            organized and easier to manage.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Legal Requirements for Landlords in New York and New
            <br className="hidden md:block" /> Jersey
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Landlords need proper records, clear lease documentation, organized
            notices, and consistent communication. Our team supports property
            owners with administrative coordination and compliance-focused
            organization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {["Notices", "Lease Records", "Tenant Files"].map((item, index) => (
              <div
                key={index}
                className="bg-[#e9f8fb] border border-[#9ddff5] p-5 rounded-md"
              >
                <ClipboardCheck className="mx-auto text-[#1f83c5]" size={26} />
                <h3 className="mt-4 text-sm font-semibold">{item}</h3>
              </div>
            ))}
          </div>

          <button className="mt-8 inline-flex items-center gap-2 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            <Phone size={16} />
            Schedule Free Consultation
          </button>
        </div>
      </section>

      <section className="px-5 py-12 bg-[#f7fbff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Compliance Support & Professional Coordination Available
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Smart Key Property Management provides organized compliance support,
            risk coordination, legal file management, and communication tracking
            for rental property owners.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LegalCompliancePage;