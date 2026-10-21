import React from "react";
import { Send, User, Phone, MessageSquare } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="bg-white">
      <section className="relative h-[280px] md:h-[360px] flex items-end overflow-hidden">
        <img
          src="/contact/contact-hero.jpg"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07172a]/65"></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 pb-10 md:pb-16">
          <p className="text-white/80 text-xs mb-3">Home / Contact Us</p>
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <h2 className="text-[#1d2d44] text-4xl md:text-5xl font-semibold leading-tight">
              Question not answered yet?
              <br />
              We are here to help!
            </h2>

            <p className="mt-5 text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
              Send us your details and our team will get back to you shortly.
            </p>
          </div>

          <form className="bg-white rounded-3xl shadow-2xl shadow-gray-200/80 border border-gray-100 p-6 md:p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#1d2d44] mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#1d2d44] focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1d2d44] mb-2">
                Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#1d2d44] focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1d2d44] mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm outline-none resize-none focus:border-[#1d2d44] focus:bg-white transition"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d2d44] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2f4f73] transition"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;