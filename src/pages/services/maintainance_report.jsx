import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  ClipboardCheck,
  PhoneCall,
  ShieldCheck,
  Hammer,
  Home,
  CalendarCheck,
  Phone,
} from "lucide-react";

const maintenanceItems = [
  {
    icon: <Wrench size={22} />,
    title: "Repair Request & Work Order Handling",
    text: "We help receive, organize, and coordinate maintenance requests so repairs are tracked properly.",
  },
  {
    icon: <PhoneCall size={22} />,
    title: "Vendor Coordination",
    text: "We coordinate with vendors, contractors, and service providers for property maintenance needs.",
  },
  {
    icon: <ClipboardCheck size={22} />,
    title: "Tenant Maintenance Request Management",
    text: "We help manage tenant repair requests, updates, and follow-ups in a structured process.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Property Repair Tracking & Operational Records",
    text: "We keep repair history, vendor updates, and maintenance records organized for owner visibility.",
  },
];

const coordinationCards = [
  "Maintenance Request Tracking",
  "Property Repair Scheduling",
  "Vendor Coordination",
];

const processSteps = [
  {
    no: "01",
    title: "Maintenance Request Intake",
    text: "We receive and organize tenant maintenance requests, repair details, urgency level, and property information.",
    side: "right",
  },
  {
    no: "02",
    title: "Assessment & Vendor Coordination",
    text: "We review the request, coordinate with suitable vendors, and help plan the repair workflow.",
    side: "left",
  },
  {
    no: "03",
    title: "Repair Scheduling",
    text: "We help coordinate repair timelines between tenants, vendors, and property owners.",
    side: "right",
  },
  {
    no: "04",
    title: "Repair Completion Tracking",
    text: "We track repair progress, follow up on completion, and maintain records for owner review.",
    side: "left",
  },
  {
    no: "05",
    title: "Owner Updates & Reporting",
    text: "We provide updates so property owners stay informed about repairs, costs, and pending maintenance.",
    side: "right",
  },
];

const whyCards = [
  "Organized Maintenance Workflow",
  "Vendor Coordination Support",
  "Clear Repair Updates",
  "Tenant Communication Support",
];

const MaintenanceServicesPage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      <section className="relative h-[240px] md:h-[320px] overflow-hidden flex items-center">
        <img
          src="/services/maintenance-hero.jpg"
          alt="Property Maintenance"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07172a]/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <p className="text-white/75 text-xs mb-4">
            Home / Services / Property Maintenance
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Property Maintenance &
            <br />
            Resident Services
          </h1>
        </div>
      </section>

      <section className="px-5 pt-14 pb-10 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#2f79b7] font-semibold mb-3">
            Property Maintenance & Resident Services for Rental Properties
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Property Maintenance & Resident Services for Rental
            <br className="hidden md:block" /> Properties
          </h2>

          <p className="max-w-4xl mx-auto mt-5 text-sm text-gray-600 leading-relaxed">
            Smart Key Property Management helps landlords handle maintenance
            requests, coordinate vendors, support residents, track repairs, and
            keep rental properties operating smoothly through an organized
            maintenance workflow.
          </p>

          <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            Schedule Free Consultation
          </button>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Maintenance Management Matters for Rental
            <br className="hidden md:block" /> Properties
          </h2>

          <p className="max-w-3xl mx-auto mt-3 text-sm text-gray-600">
            Maintenance issues can quickly affect tenant satisfaction, property
            condition, and owner costs. A structured system keeps repair requests
            organized and helps prevent delays.
          </p>

          <div className="mt-8 space-y-4">
            {maintenanceItems.map((card, index) => (
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
            Our Property Maintenance Coordination System
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            We help owners stay updated by coordinating requests, repair
            schedules, vendor communication, and maintenance records in a clear
            workflow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {coordinationCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#e9f8fb] border border-[#9ddff5] p-5 rounded-md"
              >
                <Hammer className="mx-auto text-[#1f83c5]" size={26} />
                <h3 className="mt-4 font-semibold text-sm">{item}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  A structured process helps improve repair visibility and
                  tenant support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
            Our Maintenance Process
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

          <button className="mt-8 inline-flex items-center gap-2 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            <Phone size={16} />
            Schedule Free Consultation
          </button>

          <p className="max-w-4xl mx-auto mt-8 text-sm text-gray-600 leading-relaxed">
            Smart Key Property Management provides organized maintenance
            coordination, tenant communication support, vendor follow-up, and
            repair tracking so landlords can protect their properties and reduce
            daily operational stress.
          </p>
        </div>
      </section>
    </main>
  );
};

export default MaintenanceServicesPage;