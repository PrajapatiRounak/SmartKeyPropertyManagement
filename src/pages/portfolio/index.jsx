import React, { useState } from "react";

const properties = [
  {
    title: "750 Oceanview Ave",
    address: "750 Oceanview Ave, Brooklyn, NY 11235",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/f_svg/q_auto:good/cs_srgb/dpr_auto/dimitrisvetsikas1969-residence-2219972.jpg",
  },
  {
    title: "281 Elm Ave",
    address: "281 Elm Ave, Bogota, NJ 07603",
    image: "/portfolio/property-2.jpg",
  },
  {
    title: "187 Beach 27th St",
    address: "187 Beach 27th St, Far Rockaway, NY 11691",
    image: "/portfolio/property-3.jpg",
  },
  {
    title: "611 Summer St",
    address: "611 Summer St, Paterson, NJ 07501",
    image: "/portfolio/property-4.jpg",
  },
  {
    title: "625 Summer St",
    address: "625 Summer St, Paterson, NJ 07501",
    image: "/portfolio/property-5.jpg",
  },
  {
    title: "1400 67th St",
    address: "1400 67th St, North Bergen, NJ 07047",
    image: "/portfolio/property-6.jpg",
  },
 
];

const CARDS_PER_PAGE = 6;

const PortfolioPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(properties.length / CARDS_PER_PAGE);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentCards = properties.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white">
      <section className="relative h-[240px] md:h-[300px] flex items-end overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/696e742f164325788fc86baa_Our%20Portfolio1.webp"
          alt="Portfolio Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#10213a]/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 pb-10 md:pb-14">
          <p className="text-white/80 text-xs mb-3">Home / Portfolio</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Our Portfolio
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {currentCards.map((property, index) => (
              <PortfolioCard key={index} property={property} />
            ))}
          </div>

          {properties.length > CARDS_PER_PAGE && (
            <div className="flex justify-center items-center gap-4 mt-14">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`border text-xs px-6 py-2 rounded-full transition ${
                  currentPage === 1
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-[#2f4f73]/30 text-[#2f4f73] hover:bg-[#2f4f73] hover:text-white"
                }`}
              >
                ← Previous
              </button>

              <span className="text-xs text-[#2f4f73]">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`border text-xs px-6 py-2 rounded-full transition ${
                  currentPage === totalPages
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-[#2f4f73]/30 text-[#2f4f73] hover:bg-[#2f4f73] hover:text-white"
                }`}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const PortfolioCard = ({ property }) => {
  return (
    <div className="group">
      <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-gray-100">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-[#2f4f73] text-sm md:text-base font-semibold">
          {property.title}
        </h3>

        <p className="text-gray-500 text-xs mt-1 leading-relaxed">
          {property.address}
        </p>
      </div>
    </div>
  );
};

export default PortfolioPage;