import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import project1 from "../assets/laptop.jpeg";
import project2 from "../assets/last.jpeg";
import project3 from "../assets/two.jpeg";
import project4 from "../assets/building.jpeg";

export default function PortfolioSection() {
  const projects = [
    {
      image: project1,
      title: "TechNova Website",
      category: "Web Design",
    },
    {
      image: project2,
      title: "Aurelia Brand Identity",
      category: "Branding Design",
    },
    {
      image: project3,
      title: "Urban Spaces Brochure",
      category: "Print Design",
    },
    {
      image: project4,
      title: "Leafy Greens Packaging",
      category: "Packaging Design",
    },
    {
      image: project1,
      title: "TechNova Website",
      category: "Web Design",
    },
    {
      image: project2,
      title: "Aurelia Brand Identity",
      category: "Branding Design",
    },
    {
      image: project3,
      title: "Urban Spaces Brochure",
      category: "Print Design",
    },
    {
      image: project4,
      title: "Leafy Greens Packaging",
      category: "Packaging Design",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#0F1720] py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 mb-10 lg:mb-14"
        >
          <div className="text-center lg:text-left">
            <p className="text-[#D08A1A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Our Work
            </p>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              DESIGNS THAT SPEAK SUCCESS
            </h2>

            <div className="w-16 h-[3px] bg-[#D08A1A] mt-4 mx-auto lg:mx-0"></div>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#D08A1A",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-auto border border-[#D08A1A] text-[#D08A1A] px-6 py-3 rounded-lg font-medium transition-all"
          >
            VIEW ALL PROJECTS
          </motion.button>
        </motion.div>

        {/* Portfolio Slider */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -12,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  className="group cursor-pointer"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl border border-[#1E293B] bg-[#101827]">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      className="w-full h-[220px] sm:h-[250px] md:h-[270px] lg:h-[280px] object-cover"
                    />
                  </div>

                  {/* Content */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="mt-5"
                  >
                    <h3 className="text-white text-xl lg:text-2xl font-semibold transition-colors duration-300 group-hover:text-[#D08A1A]">
                      {project.title}
                    </h3>

                    <p className="text-[#94A3B8] mt-2 text-base">
                      {project.category}
                    </p>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}