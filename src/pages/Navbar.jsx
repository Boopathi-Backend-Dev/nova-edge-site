import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import nav from "../assets/navbar.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#FAF7F3] sticky top-0 z-50 border-b border-transparent hover:border-[#E5E7EB] transition-all duration-300">
      <div className="w-full px-8 lg:px-10 xl:px-6">
        <div className="h-[90px] flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={nav}
              alt="NovaEdge"
              className="h-[65px] lg:h-[85px] w-auto object-contain "
            />
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center ml-auto gap-16">
            {/* Menu */}
            <nav className="flex items-center gap-14">
              <a
                href="#"
                className="text-[13px] font-semibold tracking-wide text-[#0F172A] hover:text-[#C88A2D] transition"
              >
                HOME
              </a>

              <a
                href="#"
                className="text-[13px] font-semibold tracking-wide text-[#0F172A] hover:text-[#C88A2D] transition"
              >
                SERVICE
              </a>

              <a
                href="#"
                className="text-[13px] font-semibold tracking-wide text-[#0F172A] hover:text-[#C88A2D] transition"
              >
                ABOUT
              </a>

              <a
                href="#"
                className="text-[13px] font-semibold tracking-wide text-[#0F172A] hover:text-[#C88A2D] transition"
              >
                CONTACT
              </a>
            </nav>

            {/* Button */}
            <a
              href="https://wa.me/919003900663?text=Hello%20I%20would%20like%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                bg-[#C88A2D]
                text-white
                text-[13px]
                font-semibold
                px-8
                h-[50px]
                rounded-md
                hover:bg-[#B97C21]
                transition
              "
            >
              LET'S TALK
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-auto text-[#0F172A]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-6 py-5 flex flex-col gap-5">
          <a
            href="#home"
            className="text-sm font-semibold text-[#0F172A] hover:text-[#C88A2D]"
          >
            HOME
          </a>

          <a
            href="#about"
            className="text-sm font-semibold text-[#0F172A] hover:text-[#C88A2D]"
          >
            SERVICES
          </a>

          <a
            href="#service"
            className="text-sm font-semibold text-[#0F172A] hover:text-[#C88A2D]"
          >
            ABOUT
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold text-[#0F172A] hover:text-[#C88A2D]"
          >
            CONTACT
          </a>

          <a
            href="https://wa.me/919003900663?text=Hello%20I%20would%20like%20to%20know%20more"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              w-full
              bg-[#C88A2D]
              text-white
              py-3
              rounded-md
              font-semibold
              hover:bg-[#B97C21]
              transition
              text-center
            "
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </header>
  );
}
