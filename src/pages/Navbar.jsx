import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import nav from "../assets/navbar.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const menuItem = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const mobileItem = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 bg-[#FAF7F3] border-b border-transparent hover:border-[#E5E7EB] transition-all duration-300"
    >
      <div className="w-full px-8 lg:px-10 xl:px-6">
        <div className="h-[90px] flex items-center">

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="flex-shrink-0"
          >
            <img
              src={nav}
              alt="NovaEdge"
              className="h-[65px] lg:h-[85px] w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center ml-auto gap-16">

            <motion.nav
              variants={menuContainer}
              initial="hidden"
              animate="show"
              className="flex items-center gap-14"
            >
              {[
                "HOME",
                "SERVICE",
                "ABOUT",
                "CONTACT",
              ].map((item) => (
                <motion.a
                  key={item}
                  variants={menuItem}
                  whileHover={{
                    scale: 1.08,
                    color: "#C88A2D",
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="text-[13px] font-semibold tracking-wide text-[#0F172A]"
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>

            <motion.a
              href="https://wa.me/919003900663?text=Hello%20I%20would%20like%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(200,138,45,.35)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center justify-center bg-[#C88A2D] text-white text-[13px] font-semibold px-8 h-[50px] rounded-md"
            >
              LET'S TALK
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 10 }}
            className="lg:hidden ml-auto text-[#0F172A]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </motion.button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="lg:hidden overflow-hidden"
          >
            <motion.div
              variants={menuContainer}
              initial="hidden"
              animate="show"
              className="bg-white border-t border-gray-200 px-6 py-5 flex flex-col gap-5"
            >
              {[
                "HOME",
                "SERVICE",
                "ABOUT",
                "CONTACT",
              ].map((item) => (
                <motion.a
                  key={item}
                  variants={mobileItem}
                  whileHover={{
                    x: 10,
                    color: "#C88A2D",
                  }}
                  href="#"
                  className="text-sm font-semibold text-[#0F172A]"
                >
                  {item}
                </motion.a>
              ))}

              <motion.a
                href="https://wa.me/919003900663?text=Hello%20I%20would%20like%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="block w-full bg-[#C88A2D] text-white py-3 rounded-md font-semibold text-center"
              >
                LET'S TALK
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}