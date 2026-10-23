import React from "react";
import Hero from "@/components/hero";
import FAQ from "@/components/faq";
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
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69dd3740406f3667a52659b2_FinanceTransaction.png" alt="" ></img>,
    title: "Financial Transaction Management & Owner Updates",
    text: "Every transaction is recorded daily and properly categorized to maintain accurate and organized financial records. This structured property management accounting approach ensures that income and expenses are always clear and up to date. Property owners also get real-time access through AppFolio, allowing full visibility into reports and ongoing financial activity.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69dd38b72549797bfc5b694f_IncomeTracking.png" alt="" ></img>,
    title: "Rent & Income Tracking",
    text: "We track rent collection consistently, monitor payments and identify delays to maintain a steady income flow. With proper rental income tracking, landlords can clearly see how and when revenue is generated.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69dd366a835cbb54a42ceef2_CostControl.png" alt="" ></img>,
    title: "Expense Management & Cost Control",
    text: "All operational expenses are tracked and categorized, including vendor payments and recurring costs. This approach to expense management improves cost visibility and helps control spending. Monthly expense tracking for rental properties also allows comparison between actual and expected costs.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69dd35484594e615d1896a06_PerformanceInsights.png" alt="" ></img>,
    title: "Financial Reporting, Closing & Performance Insights",
    text: "We provide monthly financial reports, including income and expense statements, supported by a structured month-end closing process. With clear property management financial reporting and monthly financial reports, owners gain better insights to make informed decisions.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69dd37ac9ae00ddce3a47e2d_AuditReadiness.png" alt="" ></img>,
    title: "NY/NJ Compliance & Audit Readiness",
    text: "We maintain structured financial records aligned with local requirements to ensure compliance and audit readiness. This includes proper documentation and adherence to real estate accounting compliance standards.",
  },
];

const expenseCards = [
  {
    icon: <BarChart3 className="mx-auto text-[#1f83c5]" size={26} />,
    title: "Expense Analysis",
    text: "Expense analysis focuses on tracking and categorizing all operational costs related to property management. This includes property maintenance, utilities, vendor payments and other recurring expenses. With proper expense tracking, landlords gain clear visibility into spending patterns and can identify areas where costs can be controlled or optimized.",
  },
  {
    icon: <BarChart3 className="mx-auto text-[#1f83c5]" size={26} />,
    title: "Variance Analysis",
    text: "At Smart Key, variance analysis primarily means comparing the current bill to the previous bill, identifying any increase or decrease, and then determining whether the change is due to a price increase, higher service volume, timing differences or a one-time charge so property owners can quickly spot unusual costs and take corrective action.",
  },
];

const varianceCards = [
  {
    icon: '1',
    title: "Accurate Financial Records",
    text: "Every transaction is recorded with precision and properly categorized, reducing the risk of errors and ensuring financial data remains reliable for decision-making.",
  },
  {
    icon: '2',
    title: "Consistent Financial Tracking",
    text: "Regular tracking of income and expenses ensures that financial records stay up to date, helping property owners avoid gaps, delays or missing information.",
  },
  {
    icon: '3',
    title: "Clear Financial Visibility",
    text: "Structured reports provide a clear view of cash flow, income and expenses, allowing property owners to understand performance without relying on scattered data.",
  },
  {
    icon: '4',
    title: "Organized Financial Systems",
    text: "With the right accounting system in place, property owners gain the clarity, control, and confidence needed to manage financial performance effectively.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Setup and Onboarding",
    text: "We align your property details, financial structure and reporting requirements to set a clear foundation.",
    side: "right",
  },
  {
    no: "02",
    title: "Financial Data Organization",
    text: "All income and expense data is structured and categorized for accurate and consistent tracking.",
    side: "left",
  },
  {
    no: "03",
    title: "Daily Tracking and Updates",
    text: "Transactions are recorded regularly to maintain up-to-date financial records.",
    side: "right",
  },
  {
    no: "04",
    title: "Reconciliation and Verification",
    text: "Financial records are matched with bank statements to ensure accuracy and identify discrepancies.",
    side: "left",
  },
  {
    no: "05",
    title: "Monthly Reporting and Review",
    text: "Detailed reports are prepared and reviewed to give clear insights into financial performance.",
    side: "right",
  },
];

const faqData = [
  {
    question: "How does property management accounting help improve financial control for landlords?",
    answer:
      "Property management accounting provides clear tracking of income, expenses, and cash flow, helping landlords maintain financial control and make informed decisions based on accurate data.",
  },
  {
    question: "What type of financial data can I monitor through your reporting system?",
    answer:
      "You can monitor rent collections, expenses, vendor payments, and overall property performance through structured reports and real-time access via the owner portal.",
  },
   {
    question: "How do you ensure accuracy in financial records and reporting?",
    answer:
      "We follow a structured accounting process that includes daily tracking, proper categorization, and regular reconciliation to ensure all financial records are accurate and up to date.",
  },
   {
    question: "How are expenses tracked and managed across different properties?",
    answer:
      "Expenses are categorized, monitored and analyzed regularly to maintain cost visibility and identify areas where spending can be controlled or optimized.",
  },
  {
    question: "Can your accounting system handle multiple properties under one owner?",
    answer:
      "Yes, our system is designed to manage multiple properties efficiently, providing consolidated as well as property-level financial reporting for better oversight.",
  },
  {
    question: "How can I get started with your property management accounting services?",
    answer:
      "You can get started by contacting our team, after which we handle onboarding, system setup and financial data organization to ensure a smooth transition.",
  },
];

const AccountingReportingPage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      {/* Top Hero */}
      <section className="relative h-[540px]  overflow-hidden flex items-center">
        <img
          src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/68dc29ff5409fc8ea535bf66_accounting.avif"
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

          <h2 className="text-5xl font-extrabold md:text-4xl leading-tight">
            Accounting & Financial Reporting for Property
            <br /> Management
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-md text-gray-600 leading-relaxed">
            Managing property finances requires accuracy, consistency and a clear system. Without proper <strong className="text-black">property accounting services</strong>, it becomes difficult to track income, monitor expenses and understand the actual performance of your rental property. <br /><br />
            Many landlords struggle with scattered records, delayed updates and lack of visibility into their finances. Over time, this creates confusion and makes it harder to make informed decisions. Organized financial reporting brings clarity by tracking income, expenses and overall property performance in a way that is easy to understand. This level of visibility is essential for maintaining control, improving profitability and ensuring long-term stability in property management.
          </p>
            <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
              <a href="/contact">Request a Free Property Consultation</a>
            </button>
        </div>
      </section>
      {/* What Includes */}
      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-extrabold">
            What We Handle in Property Accounting
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-md text-gray-600 leading-relaxed">
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
                <div className="w-32 h-32 rounded bg-white text-[#1f83c5] flex items-center justify-center shrink-0">
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
          <p className="max-w-4xl mx-auto mt-4 text-md text-gray-600 leading-relaxed">
            Handling property finances without a proper system often leads to confusion, errors and inconsistent performance. With proper property accounting services, landlords gain better control over cash flow, reduce financial mistakes and improve overall property performance. Real estate accounting services reduce manual work by organizing financial data efficiently, making it easier to track income, manage expenses and maintain accurate records over time.
          </p>
          <br /><br />
          <ul className="text-md text-left list-disc ml-39">
            <li><strong>Cash Flow Confusion & Income Gaps - </strong>Unclear tracking of rent and delayed payments can lead to inconsistent income and financial uncertainty.</li>
            <li><strong>Financial Errors & Reconciliation Issues - </strong>Manual accounting often leads to mismatched records, missed entries and reporting inaccuracies.</li>
            <li><strong>Uncontrolled Expenses & Cost Leakage - </strong>Lack of structured expense tracking can result in overspending and reduced profitability.</li>
          </ul>
        </div>
      </section>

      {/* Visibility */}
      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Clear Financial Visibility for Your Properties
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            A rental property becomes much easier when your finances are organized and easy to understand. With proper rental property accounting, every transaction from <a className="text-blue-500 hover:underline" href="https://www.smartkeypropertymanagement.com/services/rent-collection-and-arrears-recovery">rent collection</a> to expense tracking is recorded clearly, giving you a complete view of your property’s financial activity. <br /><br />
            A centralized reporting system brings all financial data into one place. It helps you track income, monitor expenses and understand cash flow without relying on scattered data or manual calculations. With structured reports, property owners can quickly see how their property is performing, identify patterns and make better financial decisions with confidence.
          </p>
          <div className="max-w-5xl mx-auto text-center">
              <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
                  <a href="/contact">Get Started Today</a>
              </button>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
              Expense & Variance Analysis in Property Management
            </h2>
            <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
              Tracking financial performance is essential for maintaining control over property operations and ensuring long-term profitability. A structured approach to expense and variance analysis helps property owners understand where money is being spent and how it compares to expected performance.
            </p>
            {expenseCards.map((card, index) => (
              <div 
              key={index} 
              className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col gap-4 items-start text-left"
              >
                <div className="flex text-5xl text-[#1f83c5] items-center justify-center shrink-0">
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

      {/* Variance Section */}
      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
             Accurate, Transparent, and Reliable Financial Management
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Maintaining control over property finances requires accuracy, consistency and structured systems. With a disciplined accounting approach, every financial activity is recorded and reported clearly, giving property owners full confidence in their data.
          </p>
          <div className="flex gap-4 mt-8">
            {/* {varianceCards.map((item, index) => (
              <div
                key={index}
                className="border border-[#9ddff5] bg-white shadow-sm p-5 rounded-md"
              >
                <ClipboardCheck className="mx-auto text-[#1f83c5]" size={26} />
                <h3 className="mt-4 text-sm font-semibold">{item}</h3>
                <p className="grid grid-cols-1 gap-4 text-xs text-gray-600 mt-2 leading-relaxed">Structured reports provide a clear view of cash flow, income and expenses, allowing property owners to understand performance without relying on scattered data.</p>
              </div>
            ))} */}
            {varianceCards.map((card, index) => (
              <div 
              key={index} 
              className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col gap-4 items-start text-left"
              >
                <div className="flex text-5xl text-[#1f83c5] items-center justify-center shrink-0">
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
          <h2 className="text-xl md:text-3xl font-extrabold text-[#243c5a]">
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
            Property owners choose <a href="https://www.smartkeypropertymanagement.com/">Smart Key Property Management</a> because of a consistent and reliable approach to managing property finances. Instead of fragmented systems and manual tracking, we follow a well-defined process that ensures every financial activity is recorded, monitored and reported accurately. At Smart Key Property Management, we use platforms like AppFolio to provide real-time access to financial data. This allows property owners to stay informed without delays or dependency on manual updates, giving them full visibility into their property's financial performance. <br /><br />
            Our focus is on maintaining accuracy, consistency, and transparency across all financial records. From daily transaction tracking to monthly reporting, every step is handled with precision to reduce errors and improve reliability. With a disciplined workflow and clear reporting systems in place, Smart Key Property Management helps property owners gain better control over cash flow, reduce financial uncertainty and make confident financial decisions.
          </p>
          <button className="mt-7 inline-flex items-center gap-2 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            <a href="/contact">Check Pricing Plan</a>
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

export default AccountingReportingPage;