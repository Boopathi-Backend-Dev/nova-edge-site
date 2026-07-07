import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export default function Footer() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      id="contact"
      className="bg-[#07111D] text-white overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >

          {/* Logo */}
          <motion.div
            variants={item}
            className="text-center sm:text-left"
          >
            <motion.img
              src={logo}
              alt="Nova Edge"
              className="h-12 sm:h-14 mb-5 mx-auto sm:mx-0"
              whileHover={{
                scale: 1.08,
                rotate: -2,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
            />

            <p className="text-gray-400 text-sm leading-7 max-w-[230px] mx-auto sm:mx-0">
              We are a creative design studio passionate about building brands
              that inspire.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-5 mt-6">

              {[FaInstagram, FaWhatsapp, FaLinkedinIn, FaBehance].map(
                (Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                      scale: 1.25,
                      rotate: 10,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Icon
                      size={18}
                      className="cursor-pointer hover:text-[#D89A1D] transition"
                    />
                  </motion.div>
                )
              )}

            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={item}
            className="text-center sm:text-left"
          >
            <h3 className="font-semibold text-white mb-5 uppercase">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              {["Home", "About", "Services", "Contact"].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    x: 8,
                    color: "#D89A1D",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={item}
            className="text-center sm:text-left"
          >
            <h3 className="font-semibold text-white mb-5 uppercase">
              Our Services
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Web Design",
                "Graphic Design",
                "Print Design",
                "Branding Design",
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    x: 8,
                    color: "#D89A1D",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={item}
            className="text-center sm:text-left"
          >
            <h3 className="font-semibold text-white mb-5 uppercase">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center justify-center sm:justify-start gap-3"
              >
                <Phone
                  size={16}
                  className="text-[#D89A1D]"
                />
                <span>+91 73058 1882, +91 90039 00663</span>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center justify-center sm:justify-start gap-3"
              >
                <Mail
                  size={16}
                  className="text-[#D89A1D]"
                />
                <span className="break-all">
                  www.novaedgeofficial.in
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start justify-center sm:justify-start gap-3"
              >
                <MapPin
                  size={16}
                  className="mt-1 flex-shrink-0 text-[#D89A1D]"
                />
                <span>Bhavani, Erode</span>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="border-t border-[#1A2635] mt-8 pt-6"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-500 text-center lg:text-left">

            <p>© 2026 NOVA EDGE. All Rights Reserved.</p>

            <motion.p
              whileHover={{
                color: "#D89A1D",
              }}
              className="break-all cursor-pointer"
            >
              novaedgeofficial.in
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

              <motion.a
                href="#"
                whileHover={{
                  color: "#D89A1D",
                  y: -2,
                }}
              >
                Privacy Policy
              </motion.a>

              <motion.a
                href="#"
                whileHover={{
                  color: "#D89A1D",
                  y: -2,
                }}
              >
                Terms & Conditions
              </motion.a>

            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}