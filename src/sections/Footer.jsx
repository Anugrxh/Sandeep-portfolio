import React from "react";
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-gray-300 text-sm">
      {/* Thin white line at the top of the footer */}
      <div className="w-full h-px bg-white opacity-20 mb-8"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Section: Logo Placeholder and Contact Info */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          {/* Logo Placeholder */}
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4">
            <img src="/logo.jpg" alt="Company Logo" className="w-full h-full object-contain rounded-full" />
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <p className="mb-1">
              <span className="font-semibold">Dubai:</span>{" "}
              <a href="tel:+971501234567" className="hover:text-lime-400 transition-colors duration-200">
                +971 50 123 4567
              </a>
            </p>
            <p className="mb-1">
              <span className="font-semibold">India:</span>{" "}
              <a href="tel:+919876543210" className="hover:text-lime-400 transition-colors duration-200">
                +91 98765 43210
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@sandeepfitness.com" className="hover:text-lime-400 transition-colors duration-200">
                sandeepmv283@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Dev info */}
        <div className="mt-8 pt-4 text-center text-gray-500 md:mt-0">
          <p className="mb-1">
            © {new Date().getFullYear()} Sandeep Balakrishnan Fitness. All rights reserved.
          </p>
          <p><a href="https://anugrah-m-v.netlify.app/">Developed By Anugrah M V</a></p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex flex-col items-center md:items-end md:mr-16 mt-8 md:mt-0">
          <p className="text-lg font-semibold mb-4">Connect With Me</p>
          
          {/* This container handles the responsive layout for the icons */}
          <div className="flex flex-row space-x-4 md:flex-col md:space-y-4 md:space-x-0">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/sandeep_balakrishnan/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Instagram"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-red to-yellow-500 text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9061855859"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="WhatsApp"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:sandeepmv283@gmail.com"
              className="group"
              aria-label="Email"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;