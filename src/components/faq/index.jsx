import React, { useState } from "react";

const FAQ = ({
  title = "Frequently Asked Question",
  data = [],
  bgColor = "bg-white",
  titleColor = "text-[#2f4f73]",
  borderColor = "border-gray-200",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${bgColor} py-16 px-5`}>
      <div className="max-w-3xl mx-auto">
        <h2
          className={`text-center ${titleColor} text-3xl md:text-4xl font-medium leading-tight mb-10`}
        >
          {title}
        </h2>

        <div className={`border-t ${borderColor}`}>
          {data.map((item, index) => (
            <div key={index} className={`border-b ${borderColor}`}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-5 text-left text-sm md:text-base text-black"
              >
                <span>{item.question}</span>

                <span className="text-[#2f4f73] text-2xl leading-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
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