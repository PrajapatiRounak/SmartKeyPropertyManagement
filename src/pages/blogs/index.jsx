import React, { useState } from "react";

const blogs = [
  {
    title: "Best Property Management Company in Bronx NY — What to Look For",
    date: "March 20, 2025",
    image: "/blogs/blog-1.jpg",
    desc: "Choosing the right property management team is important for landlords who want better control and support.",
  },
  {
    title: "Property Management in Bronx, NY: Why Most Landlords Struggle to Stay Profitable",
    date: "March 20, 2025",
    image: "/blogs/blog-2.jpg",
    desc: "Many landlords face rent delays, high repair costs, and tenant issues without proper systems.",
  },
  {
    title: "7 Costly Mistakes Landlords Make When Choosing a Property Management Company",
    date: "March 20, 2025",
    image: "/blogs/blog-3.jpg",
    desc: "A wrong management company can damage rental income and tenant experience.",
  },
  {
    title: "Property Management in New Jersey — Costs, Services & What Landlords Must Know",
    date: "March 20, 2025",
    image: "/blogs/blog-4.jpg",
    desc: "Understand the basics of managing rental properties in New Jersey.",
  },
  {
    title: "Property Management in Hackensack NJ: What Landlords Should Know",
    date: "March 20, 2025",
    image: "/blogs/blog-5.jpg",
    desc: "Here is what landlords should know before hiring property management support.",
  },
  {
    title: "How Tenant Screening Works for Landlords in New York",
    date: "March 20, 2025",
    image: "/blogs/blog-6.jpg",
    desc: "Tenant screening protects rental owners from late payments and lease issues.",
  },
  {
    title: "Reliable Snow Cleaning Services for Property Owners in NYC",
    date: "March 20, 2025",
    image: "/blogs/blog-7.jpg",
    desc: "Snow removal is important for safety, access, and property compliance.",
  },
  {
    title: "Form Start to Finish: How to File with NYC HPD",
    date: "March 20, 2025",
    image: "/blogs/blog-8.jpg",
    desc: "A clear guide for landlords handling HPD paperwork and inspections.",
  },
];

const CARDS_PER_PAGE = 6;

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[250px] md:h-[320px] flex items-end overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6a6395ce80d2691903f841da_Smartkey%20Website%20Hero%20Images.avif"
          alt="Blogs"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#06172a]/75"></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 pb-10 md:pb-16">
          <p className="text-white/80 text-xs mb-3">Home / Blogs</p>
          <h1 className="text-white text-4xl md:text-6xl font-bold">Blogs</h1>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-12 md:py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9">
            {currentBlogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>

          {blogs.length > CARDS_PER_PAGE && (
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

const BlogCard = ({ blog }) => {
  return (
    <article className="bg-white shadow-md shadow-gray-200/70 border border-gray-100 overflow-hidden group">
      <div className="w-full h-[190px] overflow-hidden bg-gray-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-[11px] text-gray-400 mb-2">{blog.date}</p>

        <h3 className="text-[#17395f] text-base font-bold leading-snug">
          {blog.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mt-3">
          {blog.desc}
        </p>
      </div>
    </article>
  );
};

export default BlogPage;