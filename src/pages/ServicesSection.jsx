import React from "react";
import {
  Monitor,
  Palette,
  Printer,
  BadgePercent,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import webDesign from "../assets/laptop.jpeg";
import graphicDesign from "../assets/last.jpeg";
import printDesign from "../assets/building.jpeg";
import brandingDesign from "../assets/two.jpeg";

export default function ServicesSection() {
  const services = [
    {
      title: "WEB DESIGN",
      image: webDesign,
      icon: Monitor,
      description:
        "Modern, responsive websites that are fast, functional, and built to impress.",
    },
    {
      title: "GRAPHIC DESIGN",
      image: graphicDesign,
      icon: Palette,
      description:
        "Creative visuals that tell your story and make your brand unforgettable.",
    },
    {
      title: "PRINT DESIGN",
      image: printDesign,
      icon: Printer,
      description:
        "High-quality print materials that leave a lasting impression.",
    },
    {
      title: "BRANDING DESIGN",
      image: brandingDesign,
      icon: BadgePercent,
      description:
        "Strong brand identities that build trust and create recognition.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="service"
      className="bg-[#FAF7F3] py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
          <p className="text-[#D08A1A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            Our Services
          </p>

          <h2
            className="
              mt-3
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-[56px]
              font-bold
              text-[#0F172A]
              leading-tight
            "
          >
            SOLUTIONS THAT ELEVATE BRANDS
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[3px] bg-[#D08A1A] mx-auto my-4 sm:my-5"
          />

          <p
            className="
              max-w-2xl
              mx-auto
              px-2
              text-[#64748B]
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              sm:leading-8
            "
          >
            From digital to print, and everything in between — we create
            designs that communicate, captivate and convert.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
            md:gap-6
            lg:gap-8
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.3 },
                }}
                className="
                  relative
                  group
                  bg-white
                  rounded-xl
                  border
                  border-[#ECECEC]
                  overflow-hidden
                  flex
                  flex-col
                  h-full
                  hover:border-[#D08A1A]
                  hover:shadow-[0_25px_60px_rgba(208,138,26,0.18)]
                  cursor-pointer
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#D08A1A]/5
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    pointer-events-none
                  "
                />

                {/* Image */}
                <div className="p-3 sm:p-4">
                  <div className="overflow-hidden rounded-xl">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                      className="
                        w-full
                        h-[180px]
                        sm:h-[200px]
                        md:h-[220px]
                        lg:h-[240px]
                        object-cover
                      "
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 sm:px-6 pb-6 flex flex-col flex-1 relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.15,
                    }}
                    transition={{ duration: 0.6 }}
                    className="
                      w-11
                      h-11
                      sm:w-12
                      sm:h-12
                      rounded-full
                      bg-[#FFF7EB]
                      flex
                      items-center
                      justify-center
                      text-[#D08A1A]
                      group-hover:bg-[#D08A1A]
                      group-hover:text-white
                      transition-all
                      duration-500
                    "
                  >
                    <Icon size={20} />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="
                      mt-4
                      sm:mt-5
                      text-xl
                      sm:text-[22px]
                      font-bold
                      text-[#0F172A]
                      group-hover:text-[#D08A1A]
                      transition-all
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      sm:mt-4
                      text-[#64748B]
                      text-sm
                      sm:text-base
                      leading-7
                      flex-1
                    "
                  >
                    {service.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ x: 6 }}
                    className="
                      mt-auto
                      pt-5
                      flex
                      items-center
                      gap-2
                      font-semibold
                      text-sm
                      sm:text-base
                      text-[#0F172A]
                      group-hover:text-[#D08A1A]
                    "
                  >
                    EXPLORE

                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                      }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}