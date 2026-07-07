import React from "react";
import { motion } from "framer-motion";

import logo1 from "../assets/client1.jpeg";
import logo2 from "../assets/client2.png";
import logo3 from "../assets/client3.png";
import logo4 from "../assets/client4.png";
import logo5 from "../assets/client5.png";

export default function TrustedBrands() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  const pauseSlider = (e) => {
    const track = e.currentTarget.closest(".slide-track");
    if (track) {
      track.style.animationPlayState = "paused";
    }
  };

  const resumeSlider = (e) => {
    const track = e.currentTarget.closest(".slide-track");
    if (track) {
      track.style.animationPlayState = "running";
    }
  };

  const headingVariant = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const sliderVariant = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="py-10 sm:py-12 md:py-14 lg:pb-0 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-6 md:mb-8"
        >
          <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[4px] text-gray-500 font-semibold">
            TRUSTED BY BRANDS
          </p>
        </motion.div>

        {/* Logo Slider */}
        <motion.div
          variants={sliderVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden py-6 sm:py-8 md:py-10"
        >
          <div className="slider">
            <div className="slide-track">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo}
                  alt={`Client ${index + 1}`}
                  draggable={false}
                  className="brand-logo"
                  onMouseEnter={pauseSlider}
                  onMouseLeave={resumeSlider}
                  onTouchStart={pauseSlider}
                  onTouchEnd={resumeSlider}
                  initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slider {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .slide-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scroll 25s linear infinite;
          will-change: transform;
        }

        .brand-logo {
          height: 220px;
          width: auto;
          object-fit: contain;
          margin: 0 40px;
          flex-shrink: 0;
          cursor: pointer;
          user-select: none;
        }

        @media (max-width: 1024px) {
          .brand-logo {
            height: 170px;
            margin: 0 30px;
          }
        }

        @media (max-width: 768px) {
          .brand-logo {
            height: 110px;
            margin: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .brand-logo {
            height: 80px;
            margin: 0 15px;
          }
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </section>
  );
}