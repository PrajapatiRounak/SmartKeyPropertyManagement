import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logos/smartkey logo.avif";

const aboutLinks = [
  {
    name: "Our Company",
    path: "https://passport.appf.io/sign_in?idp_type=property&vhostless=true",
  },
  {
    name: "Our Team",
    path: "/about",
  },
];

const servicesLinks = [
  {
    name: "Rent Collection & Arrears Recovery",
    path: "/services/rent-collection-and-arrears-recovery",
  },
  {
    name: "Lease Administration & Renewals",
    path: "/services/lease-administration-and-renewals",
  },
  {
    name: "Tenant Screening & Placements",
    path: "/services/tenant-screening-and-placement",
  },
  {
    name: "Accounting & Financial Reporting",
    path: "/services/accounting-financial-reporting",
  },
  {
    name: "Maintenance & Resident Services",
    path: "/services/property-maintenance-and-resident-services",
  },
  {
    name: "Compliance & Strategic Oversight",
    path: "/services/property-compliance-and-strategic-oversight",
  },
  {
    name: "Legal Compliances & Risk Management",
    path: "/services/legal-compliances-and-risk-management",
  },
];

const appFolioLinks = [
  {
    name: "Login AppFolio",
    path: "https://passport.appf.io/sign_in?idp_type=property&vhostless=true",
  },
];

const locations = [
  {
    name: "Queens",
    path: "/locations/queens",
  },
  {
    name: "Bronx",
    path: "/locations/bronx",
  },
  {
    name: "Manhattan",
    path: "/locations/manhattan",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAppFolioOpen, setMobileAppFolioOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Smart Key Property Management"
              className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-lg font-medium text-white lg:flex xl:gap-8">

          {/* Home */}
          <li>
            <Link
              to="/"
              className="font-medium transition hover:text-[#12a8ff]"
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li className="group relative">
            <Link
              to="/about"
              className="flex items-center gap-1 font-medium transition hover:text-[#12a8ff]"
            >
              About
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </Link>

            <div className="absolute left-0 top-full h-5 w-full"></div>

            <div className="invisible absolute left-0 top-[145%] min-w-40 translate-y-4 rounded-xl bg-[#f7f4ee] p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-col gap-2">
                {aboutLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-lg font-medium leading-relaxed text-[#17263d] transition hover:text-[#12a8ff]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Services */}
          <li className="group relative">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1 font-medium transition group-hover:text-[#12a8ff]"
            >
              Services
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="absolute left-0 top-full h-5 w-full"></div>

            <div className="invisible absolute left-0 top-[145%] w-80 translate-y-4 rounded-xl bg-[#f7f4ee] p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-col gap-3 text-left">
                {servicesLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-lg font-medium leading-relaxed text-[#17263d] transition hover:text-[#12a8ff]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Pricing */}
          <li>
            <Link
              to="/pricing"
              className="font-medium transition hover:text-[#12a8ff]"
            >
              Pricing
            </Link>
          </li>

          {/* Portfolio */}
          <li>
            <Link
              to="/portfolio"
              className="font-medium transition hover:text-[#12a8ff]"
            >
              Portfolio
            </Link>
          </li>

          {/* AppFolio */}
          <li className="group relative">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1 font-medium transition group-hover:text-[#12a8ff]"
            >
              AppFolio
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="absolute left-0 top-full h-5 w-full"></div>

            <div className="invisible absolute left-0 top-[145%] min-w-40 translate-y-4 rounded-xl bg-[#f7f4ee] p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-col gap-2">
                {appFolioLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-lg font-medium leading-relaxed text-[#17263d] transition hover:text-[#12a8ff]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Blogs */}
          <li>
            <Link
              to="/blogs"
              className="font-medium transition hover:text-[#12a8ff]"
            >
              Blogs
            </Link>
          </li>

          {/* Locations */}
          <li className="group relative">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1 font-medium transition group-hover:text-[#12a8ff]"
            >
              Locations
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="absolute left-0 top-full h-5 w-full"></div>

            <div className="invisible absolute left-0 top-[145%] w-40 translate-y-4 rounded-xl bg-[#f7f4ee] p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-col gap-2 text-left">
                {locations.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-lg font-medium leading-relaxed text-[#17263d] transition hover:text-[#12a8ff]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>
        </ul>

        {/* Desktop Contact */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full border border-white px-6 py-2 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-black xl:text-base"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="text-white lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="flex flex-col gap-4 bg-[#07172a] px-6 py-6 text-white lg:hidden">

          <Link
            to="/"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {/* Mobile Services */}
          <button
            type="button"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex w-full cursor-pointer items-center justify-between"
          >
            Services
            <ChevronDown
              size={16}
              className={`transition-transform ${
                mobileServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileServicesOpen && (
            <div className="flex flex-col gap-3 pl-4">
              {servicesLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/pricing"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>

          <Link
            to="/portfolio"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>

          {/* Mobile AppFolio */}
          <button
            type="button"
            onClick={() => setMobileAppFolioOpen(!mobileAppFolioOpen)}
            className="flex w-full cursor-pointer items-center justify-between"
          >
            AppFolio
            <ChevronDown
              size={16}
              className={`transition-transform ${
                mobileAppFolioOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileAppFolioOpen && (
            <div className="flex flex-col gap-3 pl-4">
              {appFolioLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/blogs"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>

          {/* Mobile Locations */}
          <button
            type="button"
            onClick={() => {}}
            className="flex w-full cursor-pointer items-center justify-between"
          >
            Locations
            <ChevronDown size={16} />
          </button>

          <div className="flex flex-col gap-3 pl-4">
            {locations.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-2 block rounded-full border border-white py-2 text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;