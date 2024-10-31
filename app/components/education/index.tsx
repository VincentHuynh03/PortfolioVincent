"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    logo: "/rosemont.jpg",
    institution: "Collège de Rosemont",
    degree: "Diploma of College Studies:",
    field: "Application Development: Web and Mobile",
    duration: "2020-2024",
  },
];

const Education = () => {
  return (
    <div className="py-16" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center justify-center sm:justify-start">
          <GraduationCap className="mr-4 h-10 w-10" />
          Education
        </h2>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#2A384B] border-2 border-red-500 rounded-lg overflow-hidden shadow-lg max-w-full md:max-w-lg mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="p-6 flex flex-col sm:flex-row items-center sm:items-start">
                <Image
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  height={180}
                  width={180}
                  quality={100}
                  className="object-contain mb-4 sm:mb-0 sm:mr-6"
                />

                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {item.institution}
                  </h3>
                  <p className="text-blue-400">{item.degree}</p>
                  <p className="text-blue-400">{item.field}</p>
                  <p className="text-gray-300">{item.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
