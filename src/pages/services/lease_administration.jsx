import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  CalendarDays,
  RefreshCw,
  ShieldCheck,
  AlertTriangle,
  ClipboardCheck,
  Phone,
} from "lucide-react";

const includeItems = [
  {
    icon: <FileText size={22} />,
    title: "Lease Preparation & Documentation",
    text: "We organize lease documents, tenant details, and property information in a structured way.",
  },
  {
    icon: <CalendarDays size={22} />,
    title: "Lease Renewal Coordination",
    text: "We track renewal timelines and help coordinate the renewal process before lease expiration.",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Rent Term Updates",
    text: "We support updates related to rent terms, renewal conditions, and tenant communication.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Compliance & Record Keeping",
    text: "We help maintain clean lease records, notices, renewal history, and supporting documents.",
  },
];

const riskCards = [
  "Missed Renewal Dates",
  "Incomplete Lease Records",
  "Tenant Communication Gaps",
  "Unclear Rent Terms",
];

const processSteps = [
  {
    no: "01",
    title: "Lease Document Review",
    text: "We review lease records, tenant details, expiration dates, and current lease terms.",
    side: "right",
  },
  {
    no: "02",
    title: "Renewal Timeline Setup",
    text: "We create a clear renewal schedule so important dates are not missed.",
    side: "left",
  },
  {
    no: "03",
    title: "Owner Approval & Updates",
    text: "We coordinate with the property owner for updated rent terms and renewal instructions.",
    side: "right",
  },
  {
    no: "04",
    title: "Tenant Communication",
    text: "We help communicate renewal terms, deadlines, and required documentation with tenants.",
    side: "left",
  },
  {
    no: "05",
    title: "Record Management",
    text: "We organize renewed lease records, signed documents, and important notices for future reference.",
    side: "right",
  },
];

const smartKeyCards = [
  "Organized Lease Records",
  "Renewal Date Tracking",
  "Clear Tenant Communication",
  "Owner Coordination",
];

const LeaseAdministrationPage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      {/* Top Hero */}
      <section className="relative h-[240px] md:h-[320px] overflow-hidden flex items-center">
        <img
          src="/services/lease-hero.jpg"
          alt="Lease Administration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07172a]/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <p className="text-white/75 text-xs mb-4">
            Home / Services / Lease Administration
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Lease Administration &
            <br />
            Renewals
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 pt-14 pb-10 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-5xl text-[#2f79b7] mb-3 font-bold leading-tight">
            Lease Administration & Renewal Services for Rental Properties in NYC
          </p>

          <p className="mx-auto mt-6 text-sm text-left text-gray-600 leading-relaxed w-auto ml-[20px] mr-[20px]">
            Managing a lease for your NYC rental property goes beyond just getting it signed. It requires you to stay on top of the timelines for renewals, all tenant communications, ensuring compliance by the tenant, documentation tracking and follow-up to fit within the established timelines. You should be doing all of these things consistently to minimize the chance of delays, disputes, loss of rent, loss of rental income and tenant-related payment issues, etc. You should also set up an organizational system for these activities to help you minimize (even small) problems relating to coordination becoming bigger problems over time.<br/><br/>
            Smart Key is a premier provider of organised lease administration services. NYC property owners can rely on. Property owners can rely on Smart Key for the effective management of their leasing business by using <a href="/" className="text-blue-500 underline">Smart Key Property Management</a> services created for all NYC leased properties. Smart Key's software for lease administration will assist owners with the creation of a lease, coordinating renewals, tracking upcoming lease expirations, communicating with existing tenants and maintaining lease documentation with a systematic workflow to ensure compliance. The result will yield an organized, compliant, predictable method of managing your rental business with significantly less daily administrative burden on you (as the property owner).
          </p>

          <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            Schedule Free Consultation
          </button>
        </div>
      </section>

      {/* What Includes */}
      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            What Lease Administration Actually Includes
          </h2>

          <div className="mt-8 space-y-4">
            {includeItems.map((card, index) => (
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

      {/* Missed Lease Renewals */}
      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Managing Lease Renewals and Tenant Agreements
            <br className="hidden md:block" /> Requires More Than Just Paperwork
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Lease administration requires organized tracking, timely reminders,
            proper documentation, and clear communication between landlords and
            tenants. Without a system, important dates and lease updates can be
            missed.
          </p>
        </div>
      </section>

      {/* Difficult Cards */}
      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            When Lease Management Becomes Difficult for
            <br className="hidden md:block" /> Property Owners
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {riskCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#e9f8fb] border border-[#9ddff5] p-5 rounded-md"
              >
                <AlertTriangle className="mx-auto text-[#1f83c5]" size={26} />
                <h3 className="mt-4 font-semibold text-sm">{item}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  A structured lease system helps prevent confusion and protects
                  owner visibility.
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
            How the Lease Administration Process Should
            <br /> Work
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

      {/* Smart Key Handles */}
      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            How Smart Key Handles Lease Administration &
            <br className="hidden md:block" /> Renewals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {smartKeyCards.map((item, index) => (
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

      {/* Final Info */}
      <section className="px-5 py-12 bg-[#f7fbff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            What This Means for Property Owners
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Property owners get a cleaner lease workflow, fewer missed renewal
            dates, better tenant communication, and improved visibility over
            important documents and lease-related responsibilities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-14 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold">
            Need Help Managing Lease Renewals?
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Smart Key Property Management provides structured lease
            administration support for landlords who want better organization,
            clear records, and professional tenant coordination.
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

export default LeaseAdministrationPage;