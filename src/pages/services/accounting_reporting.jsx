import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  BarChart3,
  ReceiptText,
  ShieldCheck,
  ClipboardCheck,
  Phone,
} from "lucide-react";

const includes = [
  {
    icon: <FileText size={22} />,
    title: "Financial Transaction Management & Owner Updates",
    text: "We help organize income, expenses, rent records, vendor payments, and owner-facing updates.",
  },
  {
    icon: <ReceiptText size={22} />,
    title: "Bookkeeping Support",
    text: "We support structured bookkeeping workflows for rental property operations.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Monthly Financial Reporting",
    text: "We prepare clear reporting support so owners can understand property performance.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Expense Tracking & Vendor Payment Support",
    text: "We help track recurring expenses, repair costs, service bills, and payment records.",
  },
];

const expenseCards = [
  "Income Tracking",
  "Expense Tracking",
  "Owner Reports",
];

const varianceCards = [
  "Accurate Records",
  "Clear Reports",
  "Reliable Financial Management",
];

const processSteps = [
  {
    no: "01",
    title: "Financial Record Setup",
    text: "We organize rent income, expenses, vendor details, and property financial records.",
    side: "right",
  },
  {
    no: "02",
    title: "Rent & Expense Tracking",
    text: "We track incoming rent, service bills, repair expenses, and vendor-related costs.",
    side: "left",
  },
  {
    no: "03",
    title: "Owner Statement Preparation",
    text: "We prepare structured owner-facing financial summaries for better visibility.",
    side: "right",
  },
  {
    no: "04",
    title: "Reconciliation and Review",
    text: "We help compare records, identify gaps, and keep reporting organized.",
    side: "left",
  },
  {
    no: "05",
    title: "Monthly Report Sharing",
    text: "We share monthly updates so owners can clearly understand property performance.",
    side: "right",
  },
];

const AccountingReportingPage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      {/* Top Hero */}
      <section className="relative h-[240px] md:h-[320px] overflow-hidden flex items-center">
        <img
          src="/services/accounting-hero.jpg"
          alt="Accounting and Financial Reporting"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07172a]/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <p className="text-white/75 text-xs mb-4">
            Home / Services / Accounting & Financial Reporting
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Accounting & Financial
            <br />
            Reporting
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 pt-14 pb-10 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#2f79b7] font-semibold mb-3">
            Accounting & Financial Reporting for Property Management
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Accounting & Financial Reporting for Property
            <br className="hidden md:block" /> Management
          </h2>

          <p className="max-w-4xl mx-auto mt-5 text-sm text-gray-600 leading-relaxed">
            Smart Key Property Management helps landlords organize rental
            income, track expenses, maintain owner statements, and manage
            property financial records through structured accounting and
            reporting support.
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
            What We Handle in Property Accounting
          </h2>

          <p className="max-w-3xl mx-auto mt-3 text-sm text-gray-600">
            Property accounting requires more than simple payment tracking. It
            includes rent records, expenses, vendor payments, owner statements,
            and clear financial visibility.
          </p>

          <div className="mt-8 space-y-4">
            {includes.map((card, index) => (
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

      {/* Professional Accounting */}
      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Professional Property Accounting Matters
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Without proper accounting systems, property owners may miss
            expenses, lose track of income, struggle with reporting, and lack a
            clear understanding of property performance.
          </p>
        </div>
      </section>

      {/* Visibility */}
      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Clear Financial Visibility for Your Properties
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Organized financial reporting gives property owners better control
            over cash flow, expenses, maintenance costs, and long-term rental
            performance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {expenseCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#e9f8fb] border border-[#9ddff5] p-5 rounded-md"
              >
                <BarChart3 className="mx-auto text-[#1f83c5]" size={26} />
                <h3 className="mt-4 font-semibold text-sm">{item}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Structured tracking helps owners stay informed and avoid
                  financial confusion.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variance Section */}
      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Expense & Variance Analysis in Property Management
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            We help owners understand differences between expected and actual
            costs, identify recurring expense patterns, and maintain better
            control over property finances.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {varianceCards.map((item, index) => (
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

      {/* Process */}
      <section className="w-full bg-white py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
            How Our Accounting Process Works
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

      {/* Final */}
      <section className="px-5 py-12 bg-[#f7fbff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Property Owners Choose Our Accounting Services
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Smart Key Property Management provides organized accounting support,
            owner reporting, expense tracking, and financial coordination so
            landlords can make better property decisions with confidence.
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

export default AccountingReportingPage;