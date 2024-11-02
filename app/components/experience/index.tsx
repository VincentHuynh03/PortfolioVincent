"use client";

import React from "react";
import Experience_card from "./experience_card";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.5 },
  },
};

const Experience = () => {
  const experiences = [
    {
      title: "Lalema Inc.",
      position: "Web Developer Intern",
      image: "/logo_lalema.svg",
      year: "April 2024 - June 2024",
      description:
        "Developed and maintained web applications for financial public reports from hospitals in Quebec.",
      technologies: [
        "Python(Flask)",
        "HTML",
        "CSS",
        "JS",
        "Bootstrap",
        "ApexCharts",
        "GridJS",
      ],
      achievements: [
        "Developed a web application to efficiently read, process, and display financial public reports.",
        "Implemented interactive data visualization features with dynamic tables and visual graphics.",
        "Converted large CSV files into JSON format, improving data management and application performance.",
      ],
      website: "https://visionhs.ca",
    },
  ];

  return (
    <section className="py-16" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
          <BriefcaseBusiness className="mr-4 h-10 w-10" />
          Experience
        </h2>
        <div className="relative">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Experience_card {...experience} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
