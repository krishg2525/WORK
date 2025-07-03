"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* Leaf SVG Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-green-600"
          >
            <path d="M12 2C7 6 4 10 4 14c0 3.866 3.582 6 8 6s8-2.134 8-6c0-4-3-8-8-12z" />
          </svg>
          <span className="text-xl font-bold text-gray-800">
            Dr. Serena Blake
          </span>
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`md:flex space-x-6 text-gray-600 font-medium ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none px-4 py-2 md:py-0`}
        >
          <a href="#about" className="block py-2 md:py-0 hover:text-black">
            About
          </a>
          <a href="#services" className="block py-2 md:py-0 hover:text-black">
            Services
          </a>
          <a href="#faq" className="block py-2 md:py-0 hover:text-black">
            FAQ
          </a>
          <a href="#contact" className="block py-2 md:py-0 hover:text-black">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
