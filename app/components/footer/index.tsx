import React from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "../elements/section";

const Footer = () => {
  return (
    <div
      className="h-full flex w-full text-white text-wrap bg-gray-800"
      id="footer"
    >
      <div className="justify-center gap-x-4 container w-full flex-row flex mx-auto px-4 m-4 h-full">
        <div className="flex justify-center mt-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
          <a
            href="https://github.com/VincentHuynh03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Image src="/github.svg" alt="GitHub Icon" width={50} height={50} />
          </a>
        </div>
        <div className="flex justify-center mt-3 transform transition-transform duration-300 ease-in-out hover:scale-110">
          <a
            href="https://www.linkedin.com/in/vincent-huynh-4b2b67243/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Image
              src="/LinkedIn.png"
              alt="GitHub Icon"
              width={55}
              height={50}
            />
          </a>
        </div>
        <div className="bottom-0 right-0 mt-6">
          <p>&copy; 2024 Vincent Huynh</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
