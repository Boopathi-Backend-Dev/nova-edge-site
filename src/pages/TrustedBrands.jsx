import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TrustedBrands() {
  const [paused, setPaused] = useState(false);

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  ];

  return (
<section className="bg-[#F7F5F2] py-10 sm:py-12 md:py-14 lg:pb-0">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6">

    {/* Heading */}
    <div className="text-center mb-6 md:mb-8">
      <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[4px] text-gray-500 font-semibold">
        Trusted By Brands
      </p>
    </div>

    {/* Logo Slider Container */}
    <div className="bg-[#FAF7F3] overflow-hidden py-6 sm:py-8 md:py-10">

      <div className="slider">

        <div className="slide-track">

          {/* Set 1 */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
            alt="LinkedIn"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM"
            className="brand-logo"
          />

          {/* Set 2 */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
            alt="LinkedIn"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM"
            className="brand-logo"
          />

          {/* Set 3 */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
            alt="LinkedIn"
            className="brand-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM"
            className="brand-logo"
          />

        </div>

      </div>

    </div>

  </div>
</section>
  );
}