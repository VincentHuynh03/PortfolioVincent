"use client";

import React from "react";
import { motion } from "framer-motion";
import Avatar from "./avatar";
import { Github, Linkedin } from "lucide-react";

const Profile = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <Avatar></Avatar>
        <div className="text-center md:text-left text-white">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Web Developer
          </motion.h2>
          <motion.p
            className="text-md text-gray-300 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Computer science graduate with expertise in React, Next JS, Tailwind
            CSS, Java, JavaScript, Python, C#. Skilled in a range of projects,
            including a Pokemon information website, a financial analysis
            platform for hospital reports and a hotel reservation system. A
            collaborative team player recognized for problem-solving abilities
            and clear, effective communication.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="https://github.com/VincentHuynh03"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/vincent-huynh-4b2b67243/"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
