import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#162238] text-white font-sans">
      <div className="max-w-[1780px] mx-auto px-5 sm:px-8 lg:px-10 pt-14 lg:pt-20 pb-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 lg:gap-24 pb-12 border-b border-white/15">
          <div>
            {/* <img
              src="/logo.png"
              alt="Smart Key Property Management"
              className="w-[135px] mb-4"
            /> */}

            <p className="text-[12px] leading-[1.7] text-[#8fb4d4] max-w-[260px]">
              ©Smart Key Property Management manages small to mid-size rental
              properties with dedicated local support for peace of mind and
              long-term value.
            </p>

            <div className="flex gap-5 mt-5 text-[13px]">
              <span>◎</span>
              <span>f</span>
              <span>𝕏</span>
              <span>in</span>
            </div>
          </div>

          <div>
            <h4 className="text-[14px] font-bold mb-4">Pages</h4>

            <div className="flex flex-col gap-2">
              <a href="/" className="text-[12px] font-semibold hover:opacity-70">
                Home
              </a>
              <a href="/pricing" className="text-[12px] font-semibold hover:opacity-70">
                Pricing
              </a>
              <a href="/contact" className="text-[12px] font-semibold hover:opacity-70">
                Contact Us
              </a>
              <a href="/legal" className="text-[12px] font-semibold hover:opacity-70">
                Legal & Policies
              </a>
              <a href="/blog" className="text-[12px] font-semibold hover:opacity-70">
                Blogs
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[14px] font-bold mb-4">Contact</h4>

            <div className="space-y-3 text-[12px] leading-[1.6] font-semibold">
              <p>+1 (646) 432-5559</p>
              <p>info@smartkeypropertymanagement.com</p>

              <p>
                New Jersey - 64 Van Buren St Little Ferry, NJ
                <br />
                07643, USA
              </p>

              <p>
                New york - 20 west 47th street suite 607
                <br />
                New York 10036
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-9 border-b border-white/15">
          <div>
            <h3 className="text-[17px] md:text-[18px] font-bold mb-2">
              Do You Own a Property? Let us handle it for you.
            </h3>

            <p className="text-[12px] leading-[1.6]">
              Find out how Smart Key can simplify your property management by
              setting up a free consultation.
            </p>
          </div>

          <a
            href="/contact"
            className="w-fit bg-white text-[#162238] text-[12px] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Get in touch <span className="ml-2">→</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-3 pt-5 text-[11px] font-semibold">
          <p>Copyright © 2025 Smart Key Property management. All Rights Reserved.</p>
          <p>Design and Developed by @MindHives.</p>
        </div>

        <p className="text-center text-[10px] mt-6">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;