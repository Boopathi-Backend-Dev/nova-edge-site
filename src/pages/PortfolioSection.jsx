import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

  return (
<section className="bg-[#0F1720] py-12 sm:py-16 lg:py-24">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 mb-8 lg:mb-12">

      <div className="text-center lg:text-left">
        <p className="text-[#D08A1A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
          Our Work
        </p>

        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
          DESIGNS THAT SPEAK SUCCESS
        </h2>

        <div className="w-16 h-[3px] bg-[#D08A1A] mt-4 mx-auto lg:mx-0"></div>
      </div>

      <button
        className="
          w-full
          sm:w-auto
          border
          border-[#D08A1A]
          text-[#D08A1A]
          px-6
          py-3
          rounded-lg
          font-medium
          hover:bg-[#D08A1A]
          hover:text-white
          transition-all
        "
      >
        VIEW ALL PROJECTS
      </button>

    </div>

    {/* Slider */}
    <Swiper
      modules={[Autoplay]}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
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
          <div className="group cursor-pointer">

            {/* Image */}
            <div className="overflow-hidden rounded-2xl border border-[#1E293B]">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-[220px]
                  sm:h-[250px]
                  md:h-[270px]
                  lg:h-[280px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="mt-4 lg:mt-5">
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-[#94A3B8] mt-2 text-sm sm:text-base lg:text-lg">
                {project.category}
              </p>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>
  );
}