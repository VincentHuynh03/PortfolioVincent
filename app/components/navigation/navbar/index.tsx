"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const [activeSection, setActiveSection] = useState("");
  const navSections = [
    "Education",
    "Skills",
    "Experience",
    "Projects",
    "Contacts",
  ];

  return (
    <div className="w-full h-20 bg-gray-800 top-0 text-white relative">
      <header className="p-6 flex justify-center items-center">
        <div className="absolute left-4 lg:left-12 top-6">
          <h1 className="text-2xl font-bold">Vincent Huynh</h1>
        </div>
        <nav className="flex-1 flex justify-center">
          <ul className="hidden md:flex gap-x-2 text-white">
            {navSections.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection.toLowerCase() === item.toLowerCase()
                    ? "bg-blue-600"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                <Link href={`#${item.toLowerCase()}`}>
                  <p>{item}</p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
      <button
        type="button"
        className="absolute top-4 right-4 md:hidden"
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
