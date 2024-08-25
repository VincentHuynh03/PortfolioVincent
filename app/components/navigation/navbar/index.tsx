import React from "react";
import Link from "next/link";
import Button from "./button";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-gray-800 top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between gap-x-6 items-center h-full">
        <Button></Button>
        <div className="flex-1 flex justify-center">
            <ul className="hidden md:flex gap-x-2 text-white">
              <li className="hover:underline px-6 py-3 font-semibold text-sm  bg-blue-400  rounded-full shadow-xl hover:border-2 border-blue-400 ">
              <Link href="/services">
                  <p>Education</p>
                </Link>
              </li>
              <li className="hover:underline px-6 py-3 font-semibold text-sm  bg-blue-500 rounded-full shadow-xl hover:border-2 border-blue-400 ">
              <Link href="/contacts">
                  <p>Skills</p>
                </Link>
              </li>
              <li className="hover:underline px-6 py-3 font-semibold text-sm  bg-blue-600 rounded-full shadow-xl hover:border-2 border-blue-400 ">
              <Link href="/contacts">
                  <p>Projects</p>
                </Link>
              </li>
              <li className="hover:underline px-6 py-3 font-semibold text-sm  bg-blue-700  rounded-full shadow-xl hover:border-2 border-blue-400 ">
              <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
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
    </>
  );
};

export default Navbar;