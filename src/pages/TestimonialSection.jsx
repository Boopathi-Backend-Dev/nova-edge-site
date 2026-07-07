import React, { useState, useEffect } from "react";
import { Quote, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialCTASection() {
  const testimonials = [
    {
      text: "Nova Edge truly understood our vision and delivered a brand identity that exceeded our expectations. Their creativity and professionalism made the entire process seamless.",
      name: "Punitha",
      role: "CEO, Nova Edge.",
      image: "https://i.pravatar.cc/100?img=32",
    },
    {
      text: "The team transformed our digital presence with a stunning website and branding package. The results exceeded our expectations.",
      name: "Sujith",
      role: "Head of Design & Innovation",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      text: "Working with Nova Edge was an absolute pleasure. Their strategic thinking and creative execution helped us stand out in a crowded market.",
      name: "Boopathi",
      role: "Web Developer, Nova Edge.",
      image: "https://i.pravatar.cc/100?img=11",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#FAF7F3] py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-5 lg:gap-6">

          {/* ================= Testimonial ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
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
            hover:border-[#D08A1A]
            hover:shadow-[0_15px_40px_rgba(208,138,26,0.15)]
            cursor-pointer
          "
          >
            <div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Quote
                  size={24}
                  className="text-[#64748B] mb-3 lg:mb-4"
                />
              </motion.div>

              <AnimatePresence mode="wait">

                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45 }}
                  className="text-[#334155] text-sm sm:text-[15px] lg:text-[16px] leading-7 lg:leading-8"
                >
                  {testimonials[active].text}
                </motion.p>

              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5">

              <AnimatePresence mode="wait">

                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.45 }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
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
                </motion.div>

              </AnimatePresence>

              {/* Dots */}

              <div className="flex gap-2 sm:gap-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.3 }}
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
          </motion.div>

          {/* ================= CTA ================= */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="
            relative
            overflow-hidden
            rounded-xl
            min-h-[260px]
            sm:min-h-[250px]
            lg:h-[250px]
            bg-[#0F172A]
            border border-[#1E293B]
          "
          >
            {/* Animated Background */}

            <motion.div
              animate={{
                x: ["-30%", "30%", "-30%"],
                y: ["0%", "-10%", "0%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-72 h-72 rounded-full bg-[#D08A1A]/20 blur-3xl -top-20 -left-20"
            />

            <div className="relative z-10 p-5 sm:p-6 lg:p-8 h-full flex flex-col justify-center">

              <motion.h3
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="text-white text-lg sm:text-xl lg:text-[20px] font-bold leading-tight uppercase"
              >
                READY TO ELEVATE
                <br />
                YOUR BRAND?
              </motion.h3>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="h-[2px] bg-white my-4"
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.4,
                }}
                viewport={{ once: true }}
                className="text-white text-sm lg:text-[14px] leading-6 lg:leading-7 mb-5 lg:mb-6 max-w-[220px]"
              >
                Let's create something extraordinary together.
              </motion.p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  x: 5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                w-fit
                px-5
                lg:px-6
                py-2.5
                lg:py-3
                rounded
                font-semibold
                text-sm
                flex
                items-center
                gap-2
                bg-[#D08A1A]
                text-white
                hover:bg-white
                hover:text-[#D08A1A]
                transition-all
                duration-300
              "
              >
                LET'S TALK

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}