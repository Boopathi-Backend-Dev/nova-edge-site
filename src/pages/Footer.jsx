import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export default function Footer() {
  return (
<footer id="contact" className="bg-[#07111D] text-white">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

      {/* Logo */}
      <div className="text-center sm:text-left">
        <img
          src={logo}
          alt="Nova Edge"
          className="h-12 sm:h-14 mb-5 mx-auto sm:mx-0"
        />

        <p className="text-gray-400 text-sm leading-7 max-w-[230px] mx-auto sm:mx-0">
          We are a creative design studio passionate about building brands
          that inspire.
        </p>

        <div className="flex items-center justify-center sm:justify-start gap-5 mt-6">
          <FaInstagram
            size={18}
            className="cursor-pointer hover:text-[#D89A1D] transition"
          />

          <FaBehance
            size={18}
            className="cursor-pointer hover:text-[#D89A1D] transition"
          />

          <FaLinkedinIn
            size={18}
            className="cursor-pointer hover:text-[#D89A1D] transition"
          />

          <FaWhatsapp
            size={18}
            className="cursor-pointer hover:text-[#D89A1D] transition"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="text-center sm:text-left">
        <h3 className="font-semibold text-white mb-5 uppercase">
          Quick Links
        </h3>

        <ul className="space-y-2 text-sm text-gray-400">
          <li className="hover:text-[#D89A1D] cursor-pointer">Home</li>
          <li className="hover:text-[#D89A1D] cursor-pointer">About Us</li>
          <li className="hover:text-[#D89A1D] cursor-pointer">Services</li>
          <li className="hover:text-[#D89A1D] cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Services */}
      <div className="text-center sm:text-left">
        <h3 className="font-semibold text-white mb-5 uppercase">
          Our Services
        </h3>

        <ul className="space-y-2 text-sm text-gray-400">
          <li>Web Design</li>
          <li>Graphic Design</li>
          <li>Print Design</li>
          <li>Branding Design</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="text-center sm:text-left">
        <h3 className="font-semibold text-white mb-5 uppercase">
          Contact Us
        </h3>

        <div className="space-y-4 text-sm text-gray-400">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Phone size={16} />
            <span>+91 73058 1882 , +91 90039 00663</span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Mail size={16} />
            <span className="break-all">
              www.novaedgeofficial.in
            </span>
          </div>

          <div className="flex items-start justify-center sm:justify-start gap-3">
            <MapPin size={16} className="mt-1 flex-shrink-0" />
            <span>Bhavani,Erode</span>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-[#1A2635] mt-5 pt-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-500 text-center lg:text-left">

        <p>© 2026 NOVA EDGE. All Rights Reserved.</p>

        <p className="break-all">novaedgeofficial.in</p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a href="#" className="hover:text-[#D89A1D] transition">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-[#D89A1D] transition">
            Terms & Conditions
          </a>
        </div>

      </div>
    </div>

  </div>
</footer>
  );
}
