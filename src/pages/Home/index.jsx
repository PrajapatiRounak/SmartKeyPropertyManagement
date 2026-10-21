import React from "react";
import Hero from "../../components/hero";
import ScrollingSec from "../../components/scrollingSec/index.jsx";
import FAQ from "../../components/faq/index.jsx";
import { MyMap } from "@/components/ui";
import HeroVdo from "../../../public/SmartkeyHeroVdo.mp4";

const steps = [
  {
    no: "01",
    title: "Strategic Property Review",
    text: "We look at your rental property, current leases, relationships with vendors and operational problems to create a structured property management plan that meets local compliance standards.",
    side: "right",
  },
  {
    no: "02",
    title: "Structured Onboarding & System Setup",
    text: "We set up systems for collecting rent, coordinating maintenance and keeping track of communication while also organizing lease documents, tenant records, vendor lists, access credentials and inspection details.",
    side: "left",
  },
  {
    no: "03",
    title: "Full-Service Management Execution",
    text: "We handle all of the daily tasks, such as communicating with tenants, collecting rent, overseeing repairs with documentation and making sure that all rules are followed. We also provide regular reports and updates on performance",
    side: "right",
  },
];

const faqData = [
  {
    question: "How much does property management cost?",
    answer:
      "Our property management fees start at 5% of monthly rent, with flexible packages tailored to each property. Pricing depends on unit count, service level including leasing, maintenance coordination, inspections, and compliance and overall operational complexity, so owners pay only for the services they truly need.",
  },
  {
    question: "What does a property management company do?",
    answer:
      "A property management company handles tenant screening, lease preparation, rent collection, maintenance coordination, compliance oversight, and financial reporting. Their role is to protect rental income, reduce vacancy risk, and manage daily operational responsibilities for property owners.",
  },
   {
    question: "How do property management screen tenants?",
    answer:
      "Property managers screen tenants through background checks, credit evaluation, income verification, rental history review, and lease compliance assessment. This structured tenant screening process helps reduce payment risk, prevent disputes, and secure financially responsible renters.",
  },
   {
    question: "Can a property manager help reduce vacancy?",
    answer:
      "Property managers screen tenants through background checks, credit evaluation, income verification, rental history review, and lease compliance assessment. This structured tenant screening process helps reduce payment risk, prevent disputes, and secure financially responsible renters.",
  },
  {
    question: "Do property managers handle maintenance and repairs?",
    answer:
      "Yes. Property managers coordinate routine and emergency repairs through vetted vendors. They track maintenance requests, manage costs, verify completion, and document work to protect property value and maintain tenant satisfaction.",
  },
   {
    question: "Do property managers handle legal compliance?",
    answer:
      "Yes. Property managers oversee lease enforcement, regulatory documentation, notice procedures, and compliance requirements. Structured compliance management helps landlords reduce legal exposure and maintain proper documentation standards.",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero 
      backgroundType="video"
      backgroundSrc={HeroVdo}
      title={"The Key to Hassle-Free Property Management"}
      buttonText="Schedule Free Consultation"
      buttonLink="/contact"
      />
      {/* <MyMap /> */}
      <main className="bg-white text-[#0f2742]">
        <section className="max-w-6xl mx-auto px-5 py-10 text-center">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Full-Service Property Management in NYC for Landlords
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-gray-600">
            Providing tenant screening, rent collection, maintenance coordination and full-service property management for small and mid-size residential properties across New York City. 
            <br /><br />
            Smart Key Property Management delivers structured, process-driven oversight designed to protect rental income and reduce operational risk. From disciplined tenant placement to proactive maintenance and organized financial tracking, we manage each stage of the rental lifecycle with consistency, accountability and clear communication.
          </p>
          <button className="mt-6 bg-[#0f2742] text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#12a8ff] transition">
            Request a Free Property Consultation
          </button>
        </section>
        <section className="max-w-6xl mx-auto px-5 py-8 text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Complete Property Management Solutions For NYC Landlords
          </h2>
          <div className="mt-10 space-y-10">
            <ServiceBlock
              title="Find Reliable Tenants Without Long Vacancies"
              text="Smart Key Property Management helps landlords secure reliable tenants through structured background, credit, income and rental history screening. We reduce vacancy by leveraging NYC housing programs like CityFHEPS and managing unit approvals efficiently, with rent payments processed through DSS/HRA for added stability. Our strong network of brokers and real estate agents keeps a steady flow of prospects, so properties stay occupied and cash flow remains consistent."
              // image="/images/property-1.jpg"
            />
            <ServiceBlock
              reverse
              title="Proactive Maintenance That Protects Property Value"
              text="We provide property maintenance services designed to protect asset value and maintain tenant satisfaction. Our team manages the full maintenance lifecycle, including repair coordination, emergency response, vendor oversight, and documented tracking. Every service request is handled through a structured process that supports accountability, cost control, and compliance standards."
              // image="/images/property-2.jpg"
            />
            <ServiceBlock
              title="Stay Legally Protected in Rental Market"
              text="Navigating landlord-tenant regulations in NYC requires precision and experience. We assist with lease enforcement, proper documentation, housing court coordination, and structured communication aligned with New York rental laws. Our compliance-focused approach helps property owners reduce legal exposure, avoid procedural mistakes, and maintain organized records throughout the tenancy lifecycle."
              // image="/images/property-3.jpg"
            />
            <ServiceBlock
              reverse
              title="Reliable Rent Collection & Arrears Recovery"
              text="Smart Key Property Management ensures timely rent collection through structured tracking systems, automated reminders and consistent follow-ups. When payments become overdue, we initiate a clear arrears recovery process that includes documented notices, payment coordination, and escalation procedures when necessary. Our transparent financial reporting keeps owners fully informed while protecting steady cash flow and reducing prolonged delinquencies."
              image="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a60301f89490be5b43c7aa_c553504a0c70df311082df157b98da10_WhatsApp%20Image%202026-02-27%20at%203.25.06%20AM.avif"
            />
          </div>
        </section>
        {/* Feature Section */}
        <section className="bg-[#e9f8fb] py-12 mt-8">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h2 className="text-xl md:text-3xl font-bold">
               Why NYC Landlords Trust Smart Key Property Management
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
              <Feature title="AppFolio-Powered" discription="Operates through AppFolio, providing real-time tracking for maintenance, rent collection, documentation and clear communication between owners and tenants." />
              <Feature title="24/7 Tenant & Owner Support" discription="Our round-the-clock support ensures urgent issues are resolved quickly, protecting rental income and preventing small problems from escalating." />
              <Feature title="Fast, Cost-Controlled Maintenance" discription="Our trusted vendor network delivers prompt repairs, helping control expenses while maintaining property condition and tenant satisfaction." />
              <Feature title="NYC Compliance Expertise (DOB & HPD)" discription="We handle DOB and HPD compliance requirements, inspections and violations to keep NYC rental properties legally protected." />
              <Feature title="Strategic Vacancy & Housing Partnerships" discription="We reduce vacancy through structured tenant placement, including housing voucher coordination and compliance management across New York City." />
              <Feature title="Reliable Rent Tracking & Collection" discription="We monitor rent status, communicate with tenants and maintain accurate records to support smooth monthly collections." />
            </div>
          </div>
        </section>
      </main>
      <ScrollingSec
        title="Our Property Management Process"
        description="Our property management process follows a defined, step-by-step structure designed to protect rental income and maintain operational control. From initial property review to system setup and daily execution, each stage is documented and coordinated. This structured approach ensures consistency, accountability and long-term stability for every property we manage."
        steps={steps}
      />
      <FAQ
        title="Frequently Asked Question"
        data={faqData}
        bgColor="bg-white"
        titleColor="text-[#2f4f73]"
      />
    </>
  );
};

const ServiceBlock = ({ title, text, image, reverse }) => {
  return (
    <div
      className={`relative rounded-xl border-2 transition-transform duration-300 ease-out [transform-style:preserve-3d] hover:-translate-x-2 hover:-translate-y-2 before:absolute before:inset-0 before:rounded-xl before:[transform:translate3d(8px,8px,-1px)]
        grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-[#e9f8fb] rounded-xl overflow-hidden ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="p-6 md:p-10 text-left">
        <h3 className="text-lg md:text-2xl font-bold mb-3">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {text}
        </p>
        <button className="mt-5 text-sm font-semibold text-[#0f2742] underline ">
          Learn More
        </button>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-[230px] md:h-[300px] object-cover"
      />
    </div>
  );
};

const Feature = ({ title , discription }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm relative border-2 transition-transform duration-300 ease-out [transform-style:preserve-3d] hover:-translate-x-2 hover:-translate-y-2 before:absolute before:inset-0 before:rounded-xl before:[transform:translate3d(8px,8px,-1px)]">
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#0f2742] text-white flex items-center justify-center">
        ✓
      </div>
      <h3 className="font-bold text-base">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">
       {discription}
      </p>
    </div>
  );
};

export default HomePage;
