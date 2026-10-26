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
    path: "/services//rent-collection-and-arrears-recovery",
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

const locations =[
  {
    name: "Queens",
    path: "/locations/queens"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAppFolioOpen, setMobileAppFolioOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 pt-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/"><img src={logo} alt="logo" className="w-40 h-40" /></a>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-white text-xl font-medium">
          {/* Home Nav Link */}
          <li>
            <Link 
            to="/"
            className="text-l font-medium hover:text-[#12a8ff] transition"
            >Home
            </Link>
          </li>
          {/* About Nav Link */}
          <li className="group relative">
            <Link 
            className="flex items-center gap-1 text-l font-medium hover:text-[#12a8ff] transition"
            >
              About
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </Link>

            <div className="absolute left-0 top-full h-5 w-full"></div>

            <div className="grid place-items-start min-h-11/12 absolute left-0 top-[145%] min-w-40 bg-[#f7f4ee] rounded-xl shadow-2xl p-4 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              {aboutLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-[#17263d] text-lg/relaxed font-medium hover:text-[#12a8ff] transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </li>
          {/* Services Nav Link */}
          <li className="group relative">
            <Link
              className="flex items-center gap-1 group-hover:text-[#12a8ff] transition"
            >
              Services
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </Link>

            <div className="absolute left-0 top-full h-5 w-full"></div>

            <div className="absolute left-0 top-[145%] w-90 bg-[#f7f4ee] rounded-xl shadow-2xl p-4 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              <div className="text-nowrap text-start flex flex-col gap-3">
                {servicesLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-[#17263d] text-lg/relaxed font-medium hover:text-[#12a8ff] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          {/* Pricing Nav Link */}
          <li className="group relative">
            <Link
            to="/pricing"
            className="text-l font-medium hover:text-[#12a8ff] transition"
            >Pricing</Link>
          </li>
          {/* Portfolio Nav Link */}
          <li className="group relative">
            <Link
            to="/portfolio"
            className="text-l font-medium hover:text-[#12a8ff] transition"
            >Portfolio</Link>
          </li>
          {/* AppFolio Nav Link */}
          <li className="group relative">
            <Link
              className="flex items-center gap-1 group-hover:text-[#12a8ff] transition"
            >
              AppFolio
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </Link>

            <div className="absolute left-0 top-full h-5 w-full"></div>

            <div className="absolute left-0 top-[145%] min-w-40 bg-[#f7f4ee] rounded-xl shadow-2xl p-4 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              {appFolioLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-[#17263d] text-lg/relaxed font-medium hover:text-[#12a8ff] transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </li>
          {/* Blogs Nav Link */}
          <li className="group relative">
            <Link
            to="/blogs"
            className="text-l font-medium hover:text-[#12a8ff] transition"
            >Blogs</Link>
          </li>
          {/* Location Nav Link */}
          <li className="group relative">
            <Link
              className="flex items-center gap-1 group-hover:text-[#12a8ff] transition"
            >
              Locations
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </Link>

            <div className="absolute left-0 top-full h-5 w-full"></div>

            <div className="absolute left-0 top-[145%] w-90 bg-[#f7f4ee] rounded-xl shadow-2xl p-4 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              <div className="text-nowrap text-start flex flex-col gap-3">
                {locations.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-[#17263d] text-lg/relaxed font-medium hover:text-[#12a8ff] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

        </ul>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm md:text-base font-medium"
          >
            Contact Us
          </Link>
        </div>

        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#07172a] text-white px-6 py-6 space-y-4">
          <Link to="/" className="block">
            Home
          </Link>
          
          <Link to="/about" className="block">
            About
          </Link>

          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex items-center justify-between"
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
            <div className="pl-4 space-y-3">
              {servicesLinks.map((item, index) => (
                <Link key={index} to={item.path} className="block text-sm">
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <Link to="/pricing" className="block">
            Pricing
          </Link>

          <Link to="/portfolio" className="block">
            Portfolio
          </Link>

          <button
            onClick={() => setMobileAppFolioOpen(!mobileAppFolioOpen)}
            className="w-full flex items-center justify-between"
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
            <div className="pl-4 space-y-3">
              {appFolioLinks.map((item, index) => (
                <Link key={index} to={item.path} className="block text-sm">
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <Link to="/blogs" className="block">
            Blogs
          </Link>

          <link to="/location" className="block">
            Locations
          </link>

          <Link
            to="/contact"
            className="block border border-white text-center py-2 rounded-full mt-3"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";
// import logo from "../../assets/logos/smartkey logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="absolute top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-2 pt-2 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img src={logo} alt="logo" className="w-20 h-auto" />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
//           <li><Link to="/">Home</Link></li>

//           <li className="flex items-center gap-1 cursor-pointer">
//             <Link to="/about">About</Link>
//             <ChevronDown size={16} />
//           </li>

//           <li className="flex items-center gap-1 cursor-pointer">
//             <Link to="/services">Services</Link>
//             <ChevronDown size={16} />
//           </li>

//           <li><Link to="/pricing">Pricing</Link></li>
//           <li><Link to="/portfolio">Portfolio</Link></li>

//           <li className="flex items-center gap-1 cursor-pointer">
//             <Link to="/appfolio">AppFolio</Link>
//             <ChevronDown size={16} />
//           </li>

//           <li><Link to="/blogs">Blogs</Link></li>
//         </ul>

//         {/* Contact Button */}
//         <div className="hidden md:block">
//           <Link
//             to="/contact"
//             className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
//           >
//             Contact Us
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden text-white">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-black bg-opacity-95 text-white px-6 pb-6 space-y-4">
//           <Link to="/" className="block">Home</Link>
//           <Link to="/about" className="block">About</Link>
//           <Link to="/services" className="block">Services</Link>
//           <Link to="/pricing" className="block">Pricing</Link>
//           <Link to="/portfolio" className="block">Portfolio</Link>
//           <Link to="/appfolio" className="block">AppFolio</Link>
//           <Link to="/blogs" className="block">Blogs</Link>
//           <Link
//             to="/contact"
//             className="block border border-white text-center py-2 rounded-full mt-3"
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;