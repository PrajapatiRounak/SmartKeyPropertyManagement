import React from "react";
import Hero from "@/components/hero";
import FAQ from "@/components/faq";
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
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a9c291376335d033a6ea5a_economic.png"></img>,
    title: "Late Payments & Cash Flow Disruption",
    text: "Inconsistent or delayed rent payments affect predictable cash flow and can quickly create financial strain. Proper income verification and credit evaluation help identify applicants with a reliable payment history before a lease is signed.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a9c1f2f3f97b2def12c3de_legal-system.png"></img>,
    title: "Evictions & Legal Exposure",
    text: "Evictions are costly, time-consuming and legally sensitive. Reviewing eviction history, rental conduct and compliance factors reduces the risk of future disputes and unnecessary legal proceedings.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a9c20dbf28e2a261ffad64_earning.png"></img>,
    title: "High Turnover & Hidden Costs",
    text: "Frequent tenant turnover increases vacancy loss, marketing expenses and unit preparation costs. Placing qualified, stable tenants from the start reduces avoidable turnover and protects overall property performance.",
  },
];

const vacancyCards = [
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a9bef88106091ad6469a16_multi-agent-system.png"></img>,
    title: "Active Broker & Agent Network",
    text: "We maintain relationships with real estate professionals who generate consistent rental inquiries, helping reduce downtime between tenancies. This active referral pipeline supports steady applicant flow and limits prolonged vacancy exposure.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a9bf42a1b5a6cab2fdf692_workflow.png"></img>,
    title: "Housing Voucher Workflow Familiarity",
    text: "We understand documentation, inspection coordination and approval steps associated with programs such as CityFHEPS, helping minimize preventable delays. Familiarity with required paperwork and agency timelines allows us to move applications forward efficiently.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a9bf6184a8a895e0d1ae4e_payment.png"></img>,
    title: "Coordinated Approval & Payment Processes",
    text: "For eligible placements, we navigate agency workflows such as DSS/HRA to support smoother lease execution and more predictable rent flow. Clear coordination reduces administrative bottlenecks and supports timely onboarding.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Application Review & Pre-Qualification",
    text: "At Smart Key, we begin by reviewing each rental application for completeness, accuracy and eligibility before moving into full screening. Our pre-qualification process helps filter incomplete or unqualified submissions early, ensuring only serious, properly documented applicants advance through evaluation.",
    side: "right",
  },
  {
    no: "02",
    title: "Credit & Financial Verification",
    text: "We carefully assess credit history, payment behavior and outstanding obligations to evaluate financial reliability. By reviewing credit data in detail, we identify consistent repayment patterns and assess overall financial responsibility before recommending ",
    side: "left",
  },
  {
    no: "03",
    title: "Income & Employment Confirmation",
    text: "Our team verifies documented income sources and employment status to confirm the applicant’s ability to meet monthly rent obligations. Stable, verifiable income is a critical part of reducing potential payment disruption during the lease term.",
    side: "right",
  },
  {
    no: "04",
    title: "Rental & Eviction History Review",
    text: "We examine prior rental performance, landlord references and eviction records to better understand tenancy behavior. Reviewing past occupancy patterns allows us to identify potential risk indicators before placement decisions are finalized.",
    side: "left",
  },
  {
    no: "05",
    title: "Background Screening",
    text: "Where permitted by law, we conduct background screening in alignment with regulatory standards. Our process supports compliance-focused evaluation while maintaining consistent, objective screening criteria across applicants.",
    side: "right",
  },
];

const whyCards = [
  "Clear applicant summary with verification notes",
  "Owner retains final approval",
  "Organized documentation",
  "Professional applicant communication",
  "Structured workflow",
  "Compliance awareness",
];

const faqData = [
  {
    question: "How does the Smart Key screen potential tenants?",
    answer:
      "Smart Key uses a structured tenant screening checklist that includes credit review, income verification, rental history, eviction history, and background screening as permitted. Owners receive a clear applicant summary with verification details to support the final approval decision.",
  },
  {
    question: "How does Smart Key help fill vacant rental units quickly?",
    answer:
      "Our tenant placement process reduces rental vacancy through fast lead response, pre-screening, efficient showings, and quick turnaround once applications are complete, helping qualified tenants move in faster.",
  },
   {
    question: "Does Smart Key follow Fair Housing rules during tenant screening?",
    answer:
      "Yes. Our tenant screening process follows fair housing requirements and applies consistent criteria, avoiding discrimination based on protected classes while aligning with applicable federal, state, and local regulations.",
  },
   {
    question: "What happens if an applicant is denied after a background or credit report?",
    answer:
      "If a decision involves consumer report information, appropriate adverse-action communication is provided along with steps for the applicant to review or dispute the report, based on applicable regulations.",
  },
  {
    question: "How does Smart Key handle multiple rental applications at once?",
    answer:
      "We follow a structured workflow to review completed applications, verify documentation, and present qualified candidates clearly to the owner for a transparent approval decision.",
  },
  {
    question: "Who makes the final approval decision on a rental application at Smart Key?",
    answer:
      "The property owner makes the final approval decision. Smart Key provides an organized screening summary with verification details to support that choice.",
  },
];

const TenantScreeningPage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      {/* Top Hero */}
      <section className="relative md:h-[520px] overflow-hidden flex items-center">
        <img
          src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/68dc3825017bc8c3bdf8fb3b_teanant%20screnning.avif"
          alt="Tenant Screening"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07172a]/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <p className="text-white/75 text-xs mb-4">
            Home / Services / Tenant Screening
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Tenant Screening &<br /> Placements
          </h1>
        </div>
      </section>
      {/* Intro */}
      <section className="px-5 pt-14 pb-10 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#2f79b7] font-semibold mb-3">
            Tenant Screening & Placement Services for Residential Landlords
          </p>
          <h2 className="text-xl md:text-4xl  font-bold leading-tight">
            Tenant Screening & Placement Services <br /> for Residential
            Landlords
          </h2>
          <p className="max-w-4xl mx-auto mt-5 text-md text-gray-600 leading-relaxed">
            Placing the wrong tenant can lead to missed rent, costly turnover and avoidable legal complications. <a className="text-blue-500 hover:underline" href="https://www.smartkeypropertymanagement.com/">Smart Key Property Management</a> approaches tenant screening services and placement with a structured, disciplined process designed to protect rental income and reduce unnecessary vacancy.
            <br />
            <br />
            To ensure the highest quality of residents, we utilize AppFolio's advanced tenant screening services, which provide instant, data-driven insights including credit, criminal, and eviction history to help us make secure, informed leasing decisions; please note that these screenings incur an additional per-applicant fee, which is processed directly through the platform.
          </p>
          <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            <a href="/contact">Schedule Free Consultation</a>
          </button>
        </div>
      </section>
      {/* Professional Screening */}
      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Professional Tenant Screening Matters
          </h2>
          <p className="mx-auto text-md max-w-4xl mt-5 text-md text-gray-600 leading-relaxed">
            Tenant screening is not a routine administrative step; it directly impacts rental income stability, legal exposure and long-term property performance. A weak screening process increases the likelihood of financial disruption and operational stress for property owners.
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
             Vacancy reduces <a href="https://www.smartkeypropertymanagement.com/services/rent-collection-and-arrears-recovery">rental collection</a> and increases operating pressure. Sapproaches tenant placement with a system designed to keep units occupied while maintaining strict screening standards. Our placement workflow prioritizes consistent lead flow, timely communication and structured coordination to minimize unnecessary downtime between tenancies.
          </p>
          <div className="flex grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {vacancyCards.map((card, index) => (
              <div 
              key={index} 
              className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col gap-4 items-start text-left"
              >
                <div className="w-32 h-32 flex text-[#1f83c5] items-center justify-center shrink-0">
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
          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Smart Key Property Management delivers structured tenant screening with documented verification, organized reporting, professional applicant communication and <a className="text-blue-500 hover:underline" href="https://www.smartkeypropertymanagement.com/services/property-compliance-and-strategic-oversight">compliance-focused workflows</a>. Property owners retain final approval while we manage the evaluation process with consistency and transparency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
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
          <div className="max-w-5xl mx-auto text-center">
              <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
                  <a href="/contact">Get Started Today</a>
              </button>
          </div>
        </div>
      </section>
      {/* Compliance */}
      <section className="px-5 py-12 bg-[#f7fbff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Compliance & Fair Housing Alignment
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-md text-gray-600 leading-relaxed">
            Tenant screening must follow defined regulatory standards and fair housing compliance requirements. Smart Key applies consistent evaluation criteria to every applicant and documents each step of the screening process to support transparency and defensibility. Our tenant screening compliance procedures are structured to reduce risk exposure while maintaining objective, non-discriminatory review practices aligned with applicable housing regulations. <br /><br />
            <ul className="font-bold text-md text-left list-disc ml-39">
              <li>Consistent screening criteria applied uniformly</li>
              <li>Documented verification and evaluation workflow</li>
              <li>Structured communication aligned with compliance standards</li>
            </ul>
          </p>
        </div>
      </section>
      {/* CTA */}
      <section className="px-5 py-14 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold">
            Move-In Coordination & Lease Execution
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-md text-gray-600 leading-relaxed">
            Approval is only part of the process. Smart Key ensures the transition from screening to tenancy is organized and documented. Lease preparation and execution are finalized with clear terms and proper documentation. Move-in funds are confirmed before possession is granted. Tenant onboarding communication sets expectations early, reducing misunderstandings and operational friction from day one. This structured move-in process supports smoother lease commencement and long-term tenancy stability.
          </p>
          <button className="mt-7 inline-flex items-center gap-2 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            <Phone size={16} />
            <a href="/contact">Start Lease Process</a>
          </button>          
        </div>
      </section>
      <section>
          <div>
              <FAQ 
              title="Frequently Asked Question"
              data={faqData}
              />
          </div>
      </section>
      <section>
          <Hero 
          title={"Own Property? We Make Managing It Effortless."}
          buttonText="Schedule Free Consultation"
          backgroundType="image"
          backgroundSrc={"https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/68dc4ab5f573a246b9215237_Footer%20main.avif"}
          buttonLink="/contact"
          />
      </section>
    </main>
  );
};

export default TenantScreeningPage;