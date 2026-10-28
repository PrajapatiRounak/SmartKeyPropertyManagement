import React from 'react';
import TextLoop from '@/components/Loop/TextLoop';
import { Link } from 'react-router';
import FAQ from '@/components/faq';
import FooterCTA from '@/components/footerCTA/FooterCTA';

function Manhattan() {

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
            path: "/services/rent-collection-and-arrears-recovery",
            description: "Organized payment tracking, tenant follow-ups and reporting help owners maintain better visibility into rental income.",
        },
        {
            title: "Property Maintenance Coordination",
            path: "/services/property-maintenance-and-resident-services",
            description: "Maintenance requests, vendor communication, repair tracking and updates are coordinated to keep properties running smoothly.",
        },
        {
            title: "Tenant Screening & Placement",
            path: "/services/tenant-screening-and-placement",
            description: "A structured screening process helps owners review applicants, verify information and coordinate smoother tenant placement.",
        },
        {
            title: "Lease Administration & Renewals",
            path:"/services/lease-administration-and-renewals",
            description: "Lease documentation, renewal timelines and tenant communication are managed through an organized process.",
        },
        {
            title: "Property Accounting & Financial Reporting",
            path: "/services/accounting-financial-reporting",
            description: "Clear income tracking, expense records and reporting provide owners better visibility into property performance.",
        },
    ];

    const numbers = [
        {
            title: "16 Total → 0 Open",
            description: "DOB Violations",
        },
        {
            title: "122 Total → 0 Open",
            description: "OATH/ECB Violations",
        },
        {
            title: "33 Total → 0 Open",
            description: "Complaints",
        },
        {
            title: "8 Total → 0 Open",
            description: "Jobs / Filings",
        },
    ];

    const properties = [
        {
            title: "179-15 144th Ave",
            address: "179-15 144th Ave, Queens, NY 11434",
            image: 'https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ab54b9faa40b5b2b09ca8ea_prop_three.avif',
            link: "/portfolio",
            alt: "Residential property at 179-15 144th Avenue, Queens",
        },
        {
            title: "186-11 122nd Ave",
            address: "186-11 122nd Ave, Queens, NY 11413",
            image: 'https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ab54ba2519406c2520d5223_prop_two.avif',
            link: "/portfolio",
            alt: "Residential property at 186-11 122nd Avenue, Queens",
        },
        {
            title: "114-33 194th St",
            address: "114-33 194th St, Queens, NY 11412",
            image: 'https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ab54ba3402dff61b3346cc0_prop_one.avif',
            link: "/portfolio",
            alt: "Residential property at 114-33 194th Street, Queens",
        },
    ];

    const whyCards = [
        "Management Starting at 5%",
        "Custom Pricing Options",
        "24/7 Owner & Tenant Support",
        "Professional applicant communication",
        "AppFolio-Powered Management",
        "Pre-Vetted Maintenance Network",
        "NYC Compliance Coordination",
    ];

    const faqData = [
        {
            question: "How much does property management cost in Queens?",
            answer: "Property management costs depend on the property type, services required and level of support needed. Smart Key's property management plans start at 5%, with different options available based on each property's operational requirements.",
        },
        {
            question: "What services does a Queens property management company provide?",
            answer: "A professional property management company can support landlords with rent collection, tenant communication, maintenance coordination, tenant screening, lease administration, financial reporting, property inspections and compliance-related coordination.",
        },
        {
            question: "Can Smart Key manage a single rental unit in Queens?",
            answer: "Yes. Smart Key supports residential property owners with individual rental units as well as larger residential properties. The management approach is adapted based on the property's needs, tenant requirements and level of support required.",
        },
        {
            question: "Can you manage a Queens property if I live outside New York?",
            answer: "Yes. Remote owners can benefit from local property coordination, tenant communication, maintenance tracking, financial reporting and regular updates. Smart Key provides the systems and support needed to maintain visibility without requiring the owner to be physically present.",
        },
        {
            question: "Does Smart Key handle property maintenance in Queens?",
            answer: "Yes. Smart Key coordinates maintenance requests, vendor communication, repair tracking and property oversight to help owners address issues efficiently while keeping them informed throughout the process.",
        },
    ];

  return (
    <main className='bg-white text-[#17395f]'>
      {/* Manhattan Hero */}
      <section className="relative aspect-[16/6] overflow-hidden flex items-center pt-20 sm:pt-24 md:pt-28">
          <img
              src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ac7a8c506a4f7be62e43421_Hero%20Image%20(1).avif"
              alt="Manhattan Hero"
              className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#07172a]/75"></div>

          <div className="relative z-10 w-full max-w-6xl mx-auto px-5 flex flex-col">
              <p className="text-white/70 text-sm sm:text-base">
                  Home / Manhattan
              </p>

              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Manhattan
              </h1>
          </div>
      </section>

      {/* Manhattan Property Management */}
      <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">

              <h1 className="w-full max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Full-Service Manhattan Property Management for Rental Property Owners
              </h1>

              <p className="w-full max-w-5xl mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
                  A Manhattan property requires more than basic oversight. From tenant communication and maintenance requests to rent tracking and property coordination, every detail needs consistent attention. Smart Key Property Management provides structured <a
                    href="/blog/top-challenges-manhattan-landlords-face-and-how-property-managers-can-solve-them"
                    className="text-blue-500 hover:underline"
                  >
                      Manhattan property management support
                  </a> With organized communication, transparent reporting, proactive maintenance coordination and dependable follow-through, we help property owners maintain better visibility and smoother operations through trusted property management in Manhattan.
              </p>

              <div className="mt-8 flex justify-center">
                  <a
                      href="/contact"
                      className="inline-block bg-[#1f83c5] text-white font-semibold text-sm sm:text-base px-7 sm:px-10 py-4 rounded-3xl hover:bg-[#176da6] transition"
                  >
                      Request a Property Consultation
                  </a>
              </div>
          </div>
      </section>

      {/* Text Loop */}
      <section className="w-full overflow-hidden bg-white py-10 sm:py-14">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
              <h3 className="mb-6 text-center text-2xl font-bold leading-tight text-[#202b40] sm:mb-8 sm:text-3xl lg:text-4xl">
                  Neighborhoods We Serve Across Manhattan
              </h3>

              <TextLoop
                  text={names.map((item) => item.name).join("  •  ")}
                  shape="line"
                  speed={50}
                  direction="forward"
                  fontSize={18}
                  fontWeight={400}
                  letterSpacing={0.5}
                  uppercase={false}
                  ribbon={false}
                  edgeFade={0}
                  pauseOnHover={false}
                  color="#202b40"
              />
          </div>
      </section>

      {/* New Service Section */}
      <section className="bg-white py-2">
          <div className="mx-auto mt-1 max-w-[1550px] px-5">
              <div className="flex flex-col items-stretch gap-6 rounded-[28px] border border-[#e7edf3] bg-[#f8fafc] p-5 shadow-[0_12px_40px_rgba(23,57,95,0.08)] md:gap-8 md:p-7 lg:flex-row lg:gap-10">

                  {/* Image */}
                  <div className="w-full overflow-hidden rounded-[28px] lg:w-1/2">
                      <img
                          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208129/6a8491c8d0a730a800373848_Section_04-p-1080.avif"
                          alt=""
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
                      />
                  </div>

                  {/* Content */}
                  <div className="flex w-full flex-col p-2 sm:p-5 md:p-7 lg:w-1/2 lg:p-8">
                      <h2 className="text-3xl font-semibold leading-tight text-[#416184] sm:text-4xl lg:text-[42px]">
                          Full-Service Property Management in Queens
                      </h2>

                      <p className="mt-6 text-sm leading-7 text-[#416184] sm:text-base">
                          Smart Key brings the essential responsibilities of rental
                          management together through one organized process. From tenant
                          coordination and financial tracking to maintenance and compliance
                          support, we help residential owners maintain smoother property
                          operations with clear communication.
                      </p>

                      {/* Services */}
                      <div className="mt-8 divide-y divide-[#dfe7ee]">
                          {services.map((service) => (
                              <div
                                  key={service.title}
                                  className="py-5 first:pt-0 last:pb-0"
                              >
                                  <Link
                                      to={service.path}
                                      className="group inline-flex text-base font-semibold leading-snug text-[#59249a] transition sm:text-lg"
                                  >
                                      <span className="group-hover:underline">
                                          {service.title}
                                      </span>
                                  </Link>

                                  <p className="mt-2 text-sm leading-6 text-[#416184]">
                                      {service.description}
                                  </p>
                              </div>
                          ))}
                      </div>
                  </div>

              </div>
          </div>
      </section>

    </main>
  )
}

export default Manhattan
