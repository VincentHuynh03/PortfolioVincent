"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "../elements/section";
import Experience_card from "./experience_card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.5 },
  },
};

const Experience = () => {
  return (
    <div
      className="h-full flex w-full text-white text-wrap bg-gray-800"
      id="experience"
    >
      <div className="items-center sm:items-start container w-full flex-col flex mx-auto px-4  m-4 h-full">
        <Section title="Experience" className="section-heading-experience" />

        <div className="flex flex-row m-auto space-x-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Experience_card
              title="Web developer Intern"
              position="Lalema Inc."
              image="/logo_lalema.svg"
              year="April 2024 - June 2024"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
