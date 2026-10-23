import React from "react";
import { motion } from "framer-motion";
import { Home, Wrench, FileText, ShieldCheck, DollarSign, Phone } from "lucide-react";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";


const costCards = [
    {
        icon: <Home size={22} />,
        title: "Rent-Regulated Properties & Legal Requirements",
        text: "In NYC, rent-regulated properties require specialized handling. These properties, governed by rent control and stabilization laws, come with additional compliance requirements that landlords must meet. Smart Key Property Management ensures all rent collection processes align with local regulations, helping you avoid potential legal pitfalls.",
    },
    {
        icon: <Wrench size={22} />,
        title: "Timely Rent Collection & Tenant Relations",
        text: ["Smart Key's rent collection services for landlords streamline the payment process, ensuring landlords receive payments on time. By prioritizing ",<a href="https://www.smartkeypropertymanagement.com/services/tenant-screening-and-placement" target="_blank" rel="noreferrer">tenant communication </a>,"and consistent follow-ups, we help mitigate the risk of late payments and disruptions in cash flow. "],
    },
    {
        icon: <FileText size={22} />,
        title: "Stay Compliant with Landlord Legal Responsibilities",
        text: "Landlords are subject to strict rental property compliance laws. Smart Key works alongside legal professionals to keep your rent collection practices compliant with landlord legal responsibilities. Whether you're managing rent-regulated properties or market-rate properties, our comprehensive approach covers all necessary documentation and ensures timely execution.",
    },
];

const benefits = [
    {
        icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69c5751ebec9d2b60d3f7089_program.png"></img>,
        title: "Efficient Rent Collection with Housing Programs",
        text: "At Smart Key Property Management, we understand that rent collection isn't always straightforward, especially when it involves tenants receiving assistance through housing programs. That's why we specialize in rental assistance coordination to ensure that all tenants eligible for government housing support, such as CityFHEPS/HRA and Section-8, pay on time and meet their financial obligations.",
    },
    {
        icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69c575270609f329458e6385_handshake.png"></img>,
        title: "Partnership with Housing Programs for Timely Payments",
        text: "Our collaboration with housing programs NYC ensures smooth rent collection by streamlining the process and handling the paperwork required for rent collection housing programs. We make it easy for landlords by working directly with housing authorities to facilitate timely rent payments and avoid unnecessary delays in rent disbursement.",
    },
    {
        icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69c5759e26f4212d8a478096_secure-shield.png"></img>,
        title: "Clearing Arrears and Protecting Your Revenue",
        text: "Arrears recovery can be complicated, but with Smart Key's streamlined rent collection process, we help clear outstanding payments efficiently. Through our coordination with government-assisted programs, we protect landlords from revenue loss while adhering to regulatory standards. Our approach eliminates the risk of eviction delays, ensuring a stable cash flow and continued compliance.",
    },
];

const processSteps = [
    {
        no: "01",
        title: "Rent Tracking & Monitoring",
        text: "We consistently monitor rent payments, tracking due dates and identifying late payments early. This allows us to address issues before they escalate into larger arrears.",
        side: "right",
    },
    {
        no: "02",
        title: "Tenant Communication & Early Intervention",
        text: "We maintain proactive communication with tenants, sending reminders and addressing payment issues promptly. Early intervention reduces the risk of prolonged payment delays.",
        side: "left",
    },
    {
        no: "03",
        title: "Arrears Identification & Prioritization",
        text: "We identify overdue payments and prioritize arrears based on urgency, ensuring that high-risk tenants are addressed first. This targeted approach ensures faster resolution.",
        side: "right",
    },
    {
        no: "04",
        title: "Legal Coordination",
        text: "In cases of non-payment, we work with experienced legal professionals to manage eviction proceedings and ensure that all documentation is compliant with local laws. This minimizes the risk of legal complications.",
        side: "left",
    },
    {
        no: "05",
        title: "Payment Confirmation & Documentation",
        text: "Once payments are received, we confirm and document them promptly. Clear records are maintained for transparency, ensuring both landlords and tenants are kept informed.",
        side: "right",
    },
];

const whyCards = [
    "Structured Compliance Systems",
    "Legal Coordination",
    "Timely Rent Collection",
    "Transparent Reporting",
    "Efficient Arrears Management",
    "Experienced Legal Support",
];

const faqData = [
  {
    question: "What is the rent collection process for landlords in NYC?",
    answer:
      "Rent collection for landlords in NYC involves setting clear payment terms, tracking tenant payments and ensuring timely collection through structured systems. Compliance with NYC rental laws is crucial to avoid disputes.",
  },
  {
    question: "How does Smart Key help landlords recover overdue rent in New York and New Jersey?",
    answer:
      "Smart Key efficiently manages overdue rent through structured communication, legal coordination and consistent follow-ups. We ensure landlords stay informed and reduce the risk of revenue loss through proactive arrears recovery strategies.",
  },
   {
    question: "What are the common legal requirements for landlords in New York and New Jersey regarding rent collection?",
    answer:
      "Landlords in New York and New Jersey must adhere to specific rent collection regulations, including proper notice periods, eviction laws, and rent receipt requirements. Compliance ensures smooth operations and avoids legal complications.",
  },
   {
    question: "How do housing programs like CityFHEPS impact rent collection for landlords in NYC?",
    answer:
      "Housing programs like CityFHEPS provide rental assistance and ensure consistent payment through direct government funding. Smart Key manages the process, ensuring landlords receive timely rent payments while staying compliant with housing program guidelines.",
  },
  {
    question: "Why is risk management important for landlords when collecting rent in NYC and New Jersey?",
    answer:
      "Effective risk management minimizes the chances of late payments, legal disputes, and tenant evictions. It protects landlords' financial interests and ensures a steady cash flow by proactively addressing potential risks in rent collection.",
  },
   {
    question: "How does Smart Key ensure compliance with rent-regulated properties in NYC?",
    answer:
      "Smart Key ensures compliance with rent-regulated properties by coordinating with legal professionals, staying updated on rent stabilization laws, and ensuring all documentation is accurate, reducing legal risks for landlords in NYC.",
  },
];

const RentCollectionPage = () => {
    return (
        <main className="bg-white text-[#17395f]">

            {/* TOP HERO SECTION */}
            <section className="relative h-[240px] md:h-[620px] overflow-hidden flex items-center">
                <img
                    src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6a6395ce80d2691903f841da_Smartkey%20Website%20Hero%20Images.avif"
                    alt="Rent Collection Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#07172a]/75"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">

                    <p className="text-white/70 text-xs mb-4">
                        Home / Services / Rent Collection
                    </p>
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                        Rent Collection &
                        <br />
                        Arrears Recovery
                    </h1>
                </div>
            </section>

            {/* Hero */}
            <section className="px-5 pt-16 pb-10 text-center">
                <div className="max-w-5xl mx-auto">
                    <p className="text-xs text-[#2f79b7] font-semibold mb-3">
                        Rent Collection & Arrears Recovery
                    </p>
                    <h1 className="text-5xl  font-bold leading-tight">
                        Rent Collection & Arrears Recovery for Landlords in NYC and New Jersey
                    </h1>
                    <p className="w-auto mt-[23px] ml-[20px] mr-[20px]">
                        Rent collection is a fundamental aspect of property management that directly influences rental income and long-term business stability. In highly-regulated markets like New York City and New Jersey, managing rent payments requires much more than a basic tracking system it demands a robust, compliance-driven approach to ensure timely payments and avoid costly legal disputes.
                    </p>
                    <p className="">
                        At <a href="/" className="">Smart Key Property Management</a>, we assist landlords in navigating the complexities of rental property compliance. With ever-evolving landlord legal responsibilities in both NYC and NJ, it's essential to have a structured system that not only tracks rent but also addresses overdue payments in a compliant and efficient manner. We work closely with legal professionals to ensure that all arrears recovery actions adhere to local regulations, are well-organized and are fully documented. This process helps minimize financial risks, maintains consistent cash flow and ensures transparency for both landlords and tenants, so everyone stays informed and aligned throughout the lease cycle.
                    </p>
                    <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
                        <a href="/contact">Request a Free Property Consultation</a>
                    </button>
                </div>
            </section>
            {/* Cost Section */}
            <section className="px-5 py-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl md:text-3xl font-bold">
                        NYC Rent Collection Basics
                    </h2>
                    <p className="max-w-3xl mx-auto mt-3 text-sm text-gray-600">
                        Managing rent collection in NYC and New Jersey is crucial for maintaining a profitable and legally compliant property portfolio.
                    </p>
                    <div className="mt-8 space-y-4">
                        {costCards.map((card, index) => (
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

            {/* Benefits */}
            <section className="px-5 py-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl md:text-3xl font-bold">
                        How Smart Key Efficiently Works with Housing Programs to Collect Rent and Clear Arrears
                    </h2>
                    <p>Smart Key Property Management partners with housing programs like CityFHEPS/HRA and Section-8 to streamline rent collection and clear arrears. We ensure timely payments and protect landlords from potential revenue loss.</p>
                    <div className="flex flex-cols-1 sm:flex-cols-2 lg:flex-cols-4 gap-4 mt-8">
                        {benefits.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col md:flex-row gap-4 items-start text-left"
                        >
                            <div className="w-12 h-12 rounded bg-white text-[#1f83c5] grid-cols-2 items-center justify-center shrink-0">
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
                        Our Rent Collection & Arrears Recovery Process
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
                                    className={`text-5xl md:text-6xl font-light text-[#405b7b] ${step.side === "right"
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
                                    className={`bg-white border border-[#6ed3ff] rounded-md shadow-lg shadow-blue-100 p-6 max-w-[310px] mx-auto md:mx-0 ${step.side === "right"
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
                        Why Landlords Choose Smart Key Property Management
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        {whyCards.map((item, index) => (
                            <div
                                key={index}
                                className="border border-[#9ddff5] bg-white shadow-sm p-5 rounded-md"
                            >
                                <ShieldCheck className="mx-auto text-[#1f83c5]" size={26} />
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

            {/* Risk Management */}
            <section className="px-5 py-12">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl md:text-3xl font-bold">
                        Risk Management for Rental Properties in NYC and New Jersey
                    </h2>
                    <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
                        Risk management is crucial for landlords to protect their rental income and prevent <a href="https://www.smartkeypropertymanagement.com/services/legal-compliances-and-risk-management">legal complications</a>. By identifying and addressing risks early, landlords can reduce financial losses and avoid costly disputes. Smart Key's structured approach to risk management ensures a proactive strategy, from early detection to efficient resolution of issues related to rent collection and arrears recovery.
                    </p>
                    <ul>
                        <li><strong>Legal Risk Mitigation - </strong>We help identify potential legal issues early, minimizing the risk of costly litigation and disputes.</li>
                        <li><strong>Early Issue Detection - </strong>Our proactive approach allows us to spot and address risks before they escalate into significant problems.</li>
                        <li><strong>Tenant Payment Risk - </strong>We monitor tenant payment behaviors to reduce the risk of late payments and non-payment.</li>
                        <li><strong>Eviction Prevention- </strong>By identifying problematic tenants early, we help avoid evictions and the associated costs and delays.</li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="px-5 py-14 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl md:text-3xl font-bold">
                        Compliance Support & Professional Coordination for Landlords
                    </h2>
                    <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
                        Smart Key provides landlords with comprehensive compliance support and professional coordination, ensuring full alignment with legal requirements and operational best practices. Our team works closely with legal professionals to tackle any compliance challenges, helping landlords navigate the complexities of rental property management without risk. From ensuring all documentation is complete and accurate to coordinating with legal experts for dispute resolution, we offer peace of mind by handling the intricate details of property management. With Smart Key, landlords can trust that their property operations will remain compliant, organized, and legally secure throughout the rental lifecycle.
                    </p>
                    <a href="/contact">
                        <button className="mt-7 inline-flex items-center gap-2 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
                            <Phone size={16} />
                            <a href="/contact">Start Lease Process</a>
                        </button>
                    </a>
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

export default RentCollectionPage;