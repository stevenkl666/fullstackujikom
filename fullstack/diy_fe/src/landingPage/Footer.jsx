import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white rounded-t-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Bagian Atas Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Logo dan Nama */}
          <div>
            <h2 className="text-2xl font-bold">Jakarta Fair Kemayoran</h2>
            <p className="text-gray-300 mt-2">The Biggest and Most Complete Fair in Southeast Asia</p>
          </div>

          {/* Navigasi */}
          {/* <ul className="flex flex-wrap justify-center md:justify-start gap-5 mt-4 md:mt-0 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Tickets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Contact
              </a>
            </li>
          </ul> */}

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-lg">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="my-6 border-gray-700" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Jakarta Fair Kemayoran. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
