import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Users,
  Award,
  MapPin,
} from "lucide-react";

import heroImg from "../assets/img.png";

export default function HeroSection() {
  const generateStats = () => ({
    projects: Math.floor(Math.random() * 50) + 20,
    clients: Math.floor(Math.random() * 50) + 50,
    awards: Math.floor(Math.random() * 20) + 10,
    countries: Math.floor(Math.random() * 20) + 20,
  });

  const [stats, setStats] = useState(generateStats());

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(generateStats());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-[#FAF7F3] overflow-hidden min-h-[850px] sm:min-h-[900px] md:min-h-[650px] lg:h-[600px]"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 items-center min-h-[850px] md:min-h-[650px] lg:min-h-[760px] gap-6 lg:gap-10">
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[560px] mx-auto lg:mx-0 text-center lg:text-left mb-8 lg:mb-20 pt-10 lg:pt-0"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#334155] mb-4 sm:mb-6"
            >
              We Don't Just Design.
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-bold leading-tight"
            >
              <span className="block text-[#0F172A] text-[32px] sm:text-[52px] md:text-[64px] lg:text-[64px]">
                WE DESIGN
              </span>

              <span className="block text-[#D08A1A] text-[32px] sm:text-[52px] md:text-[64px] lg:text-[64px]">
                YOUR SUCCESS.
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="w-14 h-[3px] bg-[#D08A1A] mt-6 mb-6 mx-auto lg:mx-0"
            />

            <motion.p
              variants={fadeUp}
              className="text-[#475569] text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-[500px] mx-auto lg:mx-0"
            >
              NOVA EDGE is a creative design studio helping brands stand out,
              connect, and grow with powerful visual solutions.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10 justify-center lg:justify-start"
            >
              <button className="bg-[#D08A1A] hover:bg-[#BB6805] text-white font-semibold text-sm px-6 lg:px-8 py-3 lg:py-4 rounded transition flex items-center justify-center gap-2">
                EXPLORE SERVICES
                <ArrowRight size={16} />
              </button>

              <button className="border border-[#9CA3AF] text-[#0F172A] font-semibold text-sm px-6 lg:px-8 py-3 lg:py-4 rounded hover:bg-white transition">
                VIEW PORTFOLIO
              </button>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 mt-10 mb-5 max-w-[650px]"
            >
              <div className="flex flex-col items-center lg:items-start px-3 border-r border-[#E5E5E5]">
                <Briefcase size={18} className="text-[#D6C29A] mb-2" />
                <h3 className="text-[22px] font-bold text-[#111827]">
                  {stats.projects}+
                </h3>
                <p className="mt-1 text-[9px] uppercase text-[#6B7280]">
                  Projects
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start px-3 border-r border-[#E5E5E5]">
                <Users size={18} className="text-[#D6C29A] mb-2" />
                <h3 className="text-[22px] font-bold text-[#111827]">
                  {stats.clients}+
                </h3>
                <p className="mt-1 text-[9px] uppercase text-[#6B7280]">
                  Happy Clients
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start px-3 border-r border-[#E5E5E5]">
                <Award size={18} className="text-[#D6C29A] mb-2" />
                <h3 className="text-[22px] font-bold text-[#111827]">
                  {stats.awards}+
                </h3>
                <p className="mt-1 text-[9px] uppercase text-[#6B7280]">
                  Years Experience
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start px-3">
                <MapPin size={18} className="text-[#D6C29A] mb-2" />
                <h3 className="text-[22px] font-bold text-[#111827]">
                  {stats.countries}+
                </h3>
                <p className="mt-1 text-[9px] uppercase text-[#6B7280]">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center lg:justify-end items-center mt-4 lg:mt-0"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#D89A1D]/20 blur-[120px]"
            />

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <motion.img
                src={heroImg}
                alt="Hero"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  max-w-[320px]
                  lg:mb-5
                  -translate-x-10
                  -translate-y-6
                  sm:max-w-[500px]
                  sm:translate-x-0
                  sm:translate-y-0
                  lg:max-w-[1000px]
                  lg:-translate-x-20
                  lg:-translate-y-4
                  xl:-translate-x-20
                  xl:-translate-y-8
                  h-auto
                  object-contain
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}