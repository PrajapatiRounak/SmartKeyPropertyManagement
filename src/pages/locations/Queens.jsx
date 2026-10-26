import React from 'react';
import TextLoop from '@/components/Loop/TextLoop';
import { motion } from 'framer-motion';
import FAQ from '@/components/faq';
import Hero from '@/components/hero';


function Queens() {

        const names = [
            { "name": "Astoria" },
            { "name": "Long Island City" },
            { "name": "Sunnyside" },
            { "name": "Woodside" },
            { "name": "Jackson Heights" },
            { "name": "Elmhurst" },
            { "name": "Flushing" },
            { "name": "Forest Hills" },
            { "name": "Rego Park" },
            { "name": "Jamaica" },
            { "name": "Kew Gardens" },
            { "name": "Ridgewood" },
            { "name": "Bayside" },
            { "name": "Fresh Meadows" },
            { "name": "Astoria" },
            { "name": "Sunnyside" },
            { "name": "Woodside" },
            { "name": "Elmhurst" },
            { "name": "Flushing" },
            { "name": "Jamaica" },
            { "name": "Forest Hills" },
            { "name": "Bayside" }
            ]
         

    const services = [
    {
        title: "Rent Collection & Arrears Support",
        description:
        "Organized payment tracking, tenant follow-ups and reporting help owners maintain better visibility into rental income.",
    },
    {
        title: "Property Maintenance Coordination",
        description:
        "Maintenance requests, vendor communication, repair tracking and updates are coordinated to keep properties running smoothly.",
    },
    {
        title: "Tenant Screening & Placement",
        description:
        "A structured screening process helps owners review applicants, verify information and coordinate smoother tenant placement.",
    },
    {
        title: "Lease Administration & Renewals",
        description:
        "Lease documentation, renewal timelines and tenant communication are managed through an organized process.",
    },
    {
        title: "Property Accounting & Financial Reporting",
        description:
        "Clear income tracking, expense records and reporting provide owners better visibility into property performance.",
    },
    ];


  return (
    <main className='bg-white text-[#17395f]'>
        <section className='relative h-[240px] md:h-[620px] overflow-hidden flex items-center'>
            <img 
            src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ac7a8c506a4f7be62e43421_Hero%20Image%20(1).avif" 
            alt="Queens Hero" 
            className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-[#07172a]/75'></div>
            <div className='relative z-10 max-w-6xl mx-auto px-5 w-full'>
                <p className='text-white/70 text-xs'>
                Home / Queens 
                </p>
                <h1 className='text-white text-7xl md:text-6xl font-bold leading-tight'>
                    Queens
                </h1>
            </div>
        </section>
        {/* Queens Hero */}
        <section className='px-5 pt-16 pb-10 text-center'>
            <div className='max-w-5xl mx-auto'>
                <h1 className='text-5xl font-bold leading-tight'>
                    Queens Property Management for Rental Property Owners
                </h1>
                <p className='w-auto mt-[23px] ml-[20px] mr-[20px]'>
                    <a className='text-blue-500 hover:underline' href="/">Smart Key Property Management</a> provides reliable Queens property management support for residential landlords who need organized operations, responsive communication and consistent property oversight. From tenant coordination and rent collection to maintenance, lease administration and reporting, we help keep rental properties running smoothly.Our approach to property management in Queens NY focuses on transparency, proactive coordination and dependable support tailored to each property's needs.
                </p>
                <button className='mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition'>
                    <a href="/contact">Request a Property Consultation</a>
                </button>
            </div>
        </section>
        {/* Horizontal animation */}
        <TextLoop 
        text={names}
        shape="wave"
        speed={90}
        direction="forward"
        curviness={0}
        tilt={0}
        fontSize={12}
        fontWeight={800}
        letterSpacing={10}
        uppercase
        ribbon
        ribbonColor="#fffff"
        ribbonWidth={16}
        edgeFade={0}
        cross={false}
        crossAngle={16}
        draggable={false}
        scrollBoost={0}
        outline={false}
        pauseOnHover
        outlineWidth={1.5}
        />

        <section className="bg-white px-5 py-12 md:py-16 lg:py-20">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
                {/* Property Management Image */}
                <div className="w-full overflow-hidden">
                <img
                    src="/images/queens-property-management.jpg"
                    alt="Property manager assisting a residential property owner"
                    loading="lazy"
                    className="h-[320px] w-full object-cover sm:h-[420px] md:h-[500px] lg:h-[600px]"
                />
                </div>

                {/* Property Management Content */}
                <div className="min-w-0">
                <h2 className="text-3xl font-semibold leading-tight text-[#416184] sm:text-4xl">
                    Full-Service Property Management in Queens
                </h2>

                <p className="mt-6 text-sm leading-relaxed text-[#416184] sm:text-base">
                    Smart Key brings the essential responsibilities of rental
                    management together through one organized process. From tenant
                    coordination and financial tracking to maintenance and compliance
                    support, we help residential owners maintain smoother property
                    operations with clear communication.
                </p>

                {/* Services List */}
                <div className="mt-7 space-y-3">
                    {services.map((service) => (
                    <div key={service.title}>
                        <h3 className="text-base font-semibold leading-snug text-[#59249a] sm:text-lg">
                        {service.title}
                        </h3>

                        <p className="mt-0.5 text-sm leading-relaxed text-[#416184]">
                        {service.description}
                        </p>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Queens
