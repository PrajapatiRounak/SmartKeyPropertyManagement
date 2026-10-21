import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import imageOne from '../../assets/about/First_Group_Img.avif'
import imageTwo from '../../assets/about/Second_Group_Img.avif'
import imageThree from '../../assets/about/Third_Group_img.avif'
const leaders = [
  {
    name: "KAMLESH PATEL",
    role: "Founder",
    image: "/team/kamlesh.png",
    desc: "Founder and CEO of Smart Key Property Management, leading with a focus on efficiency, trust, and landlord-first service.",
  },
  {
    name: "RIDY",
    role: "Head Of Department",
    image: "/team/ridy.png",
    desc: "Head of Department managing client support, property operations, and internal coordination.",
  },
  {
    name: "LEO",
    role: "Senior Project Manager",
    image: "/team/leo.png",
    desc: "Project Manager responsible for process planning, execution, and client service delivery.",
  },
  {
    name: "ALEX",
    role: "Operations Lead",
    image: "/team/alex.png",
    desc: "Operations Lead managing daily workflows, team coordination, and service execution.",
  },
  {
    name: "SCOTT",
    role: "Accounts Lead",
    image: "/team/scott.png",
    desc: "Accounts Lead handling reporting, rent tracking, reconciliation, and financial workflows.",
  },
  {
    name: "GARY K.",
    role: "Collection Lead",
    image: "/team/gary.png",
    desc: "Collection Lead managing tenant rent collections, reminders, and payment follow-ups.",
  },
  {
    name: "DARYL",
    role: "Legal Compliance and Risk Executive",
    image: "/team/daryl.png",
    desc: "Handles legal notices, compliance, risk management, and documentation support.",
  },
  {
    name: "DANNY",
    role: "Marketing Lead",
    image: "/team/danny.png",
    desc: "Marketing Lead supporting brand presence, campaigns, and property marketing.",
  },
  {
    name: "LINDA",
    role: "Sales Representative",
    image: "/team/linda.png",
    desc: "Sales Representative assisting clients with service questions, onboarding, and consultations.",
  },
];

const teamGroups = [
  {
    title: "Our Collections Team",
    image: imageOne,
  },
  {
    title: "Our Operations Team",
    image: imageTwo,
  },
  {
    title: "Our Accounts Team",
    image: imageThree,
  },
];

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("leaders");

  return (
    <main className="bg-white">
      <section className="bg-[#bfbfbf] pt-28 pb-14 px-5 text-center">
        <h1 className="text-white text-2xl md:text-4xl font-medium leading-tight">
          "Meet the Experts Behind Smart Key
          <br className="hidden md:block" />
          Property Management"
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10">
        <p className="text-sm text-gray-600 leading-relaxed max-w-5xl">
          Our team at Smart Key Property Management consists of seasoned experts
          with a range of specialties in lease notices, customer relations,
          administration, and property management. We are dedicated to providing
          outstanding service, open communication, and practical support that
          guarantees long-term growth for your investments.
        </p>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setActiveTab("leaders")}
            className={`px-6 py-2 rounded text-sm transition ${
              activeTab === "leaders"
                ? "bg-[#24486d] text-white"
                : "border border-[#24486d] text-[#24486d]"
            }`}
          >
            Our Experts
          </button>

          <button
            onClick={() => setActiveTab("groups")}
            className={`px-6 py-2 rounded text-sm transition ${
              activeTab === "groups"
                ? "bg-[#24486d] text-white"
                : "border border-[#24486d] text-[#24486d]"
            }`}
          >
            Our Teams
          </button>
        </div>

        {activeTab === "leaders" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 mt-10">
            {leaders.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        ) : (
          <section className="pt-12 space-y-16">
            {teamGroups.map((group, index) => (
              <div key={index}>
                <h2 className="text-xl md:text-2xl font-semibold text-[#17263d] mb-8 text-center underline">
                  {group.title}
                </h2>

                <div className="w-full rounded-md overflow-hidden bg-white">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full max-h-[480px] object-contain mx-auto"
                  />
                </div>
              </div>
            ))}
          </section>
        )}
      </section>
    </main>
  );
};

const TeamCard = ({ member }) => {
  return (
    <div>
      <h3 className="text-sm font-bold text-[#17263d] mb-3 uppercase">
        {member.name}
      </h3>

      <div className="bg-[#f3f3f3] rounded overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[300px] object-cover object-top"
        />
      </div>

      <div className="mt-4">
        <h4 className="text-base font-bold text-[#17263d]">
          {member.role}
        </h4>

        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          {member.desc}
        </p>

        <div className="mt-3 space-y-1 text-xs text-gray-600">
          <p className="flex items-center gap-2">
            <Phone size={13} /> Call Me
          </p>
          <p className="flex items-center gap-2">
            <Mail size={13} /> Mail Me
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;