import React, { useState } from "react";

const FAQ = ({
  title = "Frequently Asked Questions",
  data = [],
  bgColor = "bg-white",
  titleColor = "text-[#2f4f73]",
  borderColor = "border-gray-300",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${bgColor} py-16 px-5 sm:px-8 lg:px-10`}>
      <div className="w-full max-w-5xl mx-auto">

        {/* FAQ Title */}
        <h2
          className={`text-center ${titleColor} text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight mb-10`}
        >
          {title}
        </h2>

        {/* FAQ List */}
        <div className={`border-t ${borderColor}`}>
          {data.map((item, index) => (
            <div
              key={index}
              className={`border-b ${borderColor}`}
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left text-base sm:text-lg md:text-xl font-medium text-[#2f4f73] cursor-pointer"
              >
                <span className="flex-1">
                  {item.question}
                </span>

                <span className="flex-shrink-0 text-[#2f4f73] text-2xl leading-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="max-w-4xl pb-6 pr-8 text-sm sm:text-base leading-7 text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;