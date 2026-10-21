import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  FileSearch,
  ShieldCheck,
  Home,
  ClipboardCheck,
  Phone,
} from "lucide-react";

const professionalItems = [
  {
    icon: <UserCheck size={22} />,
    title: "Comprehensive Credit Checks",
    text: "We review applicant details, credit history, rental background, and income information to support better tenant decisions.",
  },
  {
    icon: <FileSearch size={22} />,
    title: "Rental History Verification",
    text: "We help verify prior rental history, landlord references, and important details before placement.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Legal Review & Risk Control",
    text: "We support fair housing aligned screening practices and organized documentation for landlord protection.",
  },
];

const vacancyCards = [
  "Tenant Placement",
  "Pre-Screening Support",
  "Coordinated Approach",
];

const processSteps = [
  {
    no: "01",
    title: "Application Review",
    text: "We review applicant details, income information, rental history, and required documents.",
    side: "right",
  },
  {
    no: "02",
    title: "Credit & Background Checks",
    text: "We coordinate screening checks to help landlords understand applicant reliability and risk.",
    side: "left",
  },
  {
    no: "03",
    title: "Owner Coordination",
    text: "We share organized applicant information so owners can make informed placement decisions.",
    side: "right",
  },
  {
    no: "04",
    title: "Fair Housing Compliance",
    text: "We help keep the screening process consistent, documented, and aligned with fair housing expectations.",
    side: "left",
  },
  {
    no: "05",
    title: "Tenant Placement",
    text: "Once approved, we support placement coordination, move-in steps, and initial tenant communication.",
    side: "right",
  },
];

const whyCards = [
  "Organized Screening Process",
  "Tenant Risk Reduction",
  "Clear Owner Updates",
  "Professional Tenant Placement",
];

const TenantScreeningPage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      {/* Top Hero */}
      <section className="relative h-[240px] md:h-[320px] overflow-hidden flex items-center">
        <img
          src="/services/tenant-screening-hero.jpg"
          alt="Tenant Screening"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07172a]/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <p className="text-white/75 text-xs mb-4">
            Home / Services / Tenant Screening
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Tenant Screening &
            <br />
            Placements
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 pt-14 pb-10 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#2f79b7] font-semibold mb-3">
            Tenant Screening & Placement Services for Residential Landlords
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Tenant Screening & Placement Services for Residential
            <br className="hidden md:block" /> Landlords
          </h2>

          <p className="max-w-4xl mx-auto mt-5 text-sm text-gray-600 leading-relaxed">
            Smart Key Property Management helps landlords screen tenants,
            review applications, coordinate checks, reduce vacancy risk, and
            place reliable tenants through a structured and professional
            screening process.
          </p>

          <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            Schedule Free Consultation
          </button>
        </div>
      </section>

      {/* Professional Screening */}
      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Professional Tenant Screening Matters
          </h2>

          <p className="max-w-3xl mx-auto mt-3 text-sm text-gray-600">
            A proper tenant screening process helps landlords reduce risk,
            avoid unnecessary delays, and make better placement decisions before
            a lease begins.
          </p>

          <div className="mt-8 space-y-4">
            {professionalItems.map((card, index) => (
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

      {/* Vacancy Section */}
      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Reduce Vacancy With Structured Tenant Placement
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Tenant placement requires more than showing a unit. It involves
            applicant communication, screening, documentation, approval steps,
            and move-in coordination.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {vacancyCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#e9f8fb] border border-[#9ddff5] p-5 rounded-md"
              >
                <Home className="mx-auto text-[#1f83c5]" size={26} />
                <h3 className="mt-4 font-semibold text-sm">{item}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Clear steps help owners move from vacancy to placement with
                  better control.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full bg-white py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
            Our Tenant Screening Process
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

      {/* Why Choose */}
      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Choose Smart Key Property Management for
            <br className="hidden md:block" /> Tenant Screening?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {whyCards.map((item, index) => (
              <div
                key={index}
                className="border border-[#9ddff5] bg-white shadow-sm p-5 rounded-md"
              >
                <ClipboardCheck className="mx-auto text-[#1f83c5]" size={26} />
                <h3 className="mt-4 text-sm font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="px-5 py-12 bg-[#f7fbff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Compliance & Fair Housing Alignment
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Tenant screening must be consistent, fair, and properly documented.
            Smart Key Property Management helps landlords follow a structured
            process that supports better decision-making and reduces avoidable
            risk.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-14 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold">
            Move-In Coordination & Lease Execution
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            After approval, our team helps coordinate move-in communication,
            lease execution steps, and tenant onboarding so the transition is
            clear and organized.
          </p>

          <button className="mt-7 inline-flex items-center gap-2 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            <Phone size={16} />
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
};

export default TenantScreeningPage;