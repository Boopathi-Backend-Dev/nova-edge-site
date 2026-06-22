import React, { useState, useEffect } from "react";
import { Quote, ArrowRight } from "lucide-react";

export default function TestimonialCTASection() {
  const testimonials = [
    {
      text: "Nova Edge truly understood our vision and delivered a brand identity that exceeded our expectations. Their creativity and professionalism made the entire process seamless.",
      name: "Rohan Mehta",
      role: "CEO, Mehta & Co.",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      text: "The team transformed our digital presence with a stunning website and branding package. The results exceeded our expectations.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://i.pravatar.cc/100?img=32",
    },
    {
      text: "Working with Nova Edge was an absolute pleasure. Their strategic thinking and creative execution helped us stand out in a crowded market.",
      name: "David Wilson",
      role: "Founder, TechNova",
      image: "https://i.pravatar.cc/100?img=15",
    },
  ];

  const [active, setActive] = useState(0);
  const [ctaHover, setCtaHover] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
<section className="bg-[#FAF7F3] py-10 sm:py-12 lg:py-16">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-5 lg:gap-6">
      
      {/* Testimonial Card */}
      <div
        className="
          bg-white
          border border-[#ECECEC]
          rounded-xl
          p-5 sm:p-6 lg:p-8
          min-h-[280px]
          sm:min-h-[260px]
          lg:h-[250px]
          flex flex-col justify-between
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-[#D08A1A]
          hover:shadow-[0_15px_40px_rgba(208,138,26,0.15)]
          cursor-pointer
        "
      >
        <div>
          <Quote
            size={24}
            className="text-[#64748B] mb-3 lg:mb-4"
            strokeWidth={2}
          />

          <p className="text-[#334155] text-sm sm:text-[15px] lg:text-[16px] leading-7 lg:leading-8">
            {testimonials[active].text}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5">
          
          {/* Profile */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={testimonials[active].image}
              alt={testimonials[active].name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />

            <div>
              <h4 className="font-semibold text-[#0F172A] text-sm sm:text-base">
                {testimonials[active].name}
              </h4>

              <p className="text-xs sm:text-sm text-[#64748B]">
                {testimonials[active].role}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === index
                    ? "bg-[#D08A1A] scale-125"
                    : "bg-[#D1D5DB]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Card */}
      <div
        className={`
          relative overflow-hidden rounded-xl
          min-h-[260px]
          sm:min-h-[250px]
          lg:h-[250px]
          border transition-all duration-300
          ${
            ctaHover
              ? "bg-[#D08A1A] border-[#D08A1A]"
              : "bg-[#0F172A] border-[#1E293B]"
          }
        `}
      >
        <div className="relative z-10 p-5 sm:p-6 lg:p-8 h-full flex flex-col justify-center">
          
          <h3 className="text-white text-lg sm:text-xl lg:text-[20px] font-bold leading-tight uppercase">
            READY TO ELEVATE
            <br />
            YOUR BRAND?
          </h3>

          <div className="w-10 h-[2px] bg-white my-4"></div>

          <p className="text-white text-sm lg:text-[14px] leading-6 lg:leading-7 mb-5 lg:mb-6 max-w-[220px]">
            Let's create something extraordinary together.
          </p>

          <button
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            className={`
              w-fit px-5 lg:px-6 py-2.5 lg:py-3
              rounded font-semibold text-sm
              flex items-center gap-2
              transition-all duration-300
              ${
                ctaHover
                  ? "bg-[#0F172A] text-white"
                  : "bg-[#D08A1A] text-white"
              }
            `}
          >
            LET'S TALK
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
