"use client";
import React from "react";
import Link from "next/link";
import Button from "./button";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-20 bg-gray-800 top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between gap-x-6 items-center h-full">
          <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex gap-x-2 text-white">
          {[t('education'), "Skills", "Experience", "Projects", "Contacts"].map((item, index) => {
            const colors = ["bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-blue-700","bg-blue-800", ];
            return (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`hover:underline px-6 py-3 font-semibold text-sm ${colors[index]} rounded-full shadow-xl border-blue-400`}
              >
                <Link href={`#${item.toLowerCase()}`}>
                  <p>{item}</p>
                </Link>
              </motion.li>
            );
          })}
        </ul>
            
            <div className="block md:hidden text-white text-lg">      
              <p>Vincent Huynh</p>
            </div>
          </div>
          <div className="hidden md:flex gap-x-6 text-white text-lg">      
            <p>Vincent Huynh</p>
          </div>
          <button
            type="button"
            className="inline-flex items-center md:hidden"
            onClick={toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
