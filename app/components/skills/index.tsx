"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Skills_Card from "./skills_card";
import { Code } from "lucide-react";

const skillsData = [
  {
    title: "JavaScript",
    image: "/javascript.png",
    className: "text-2xl shadow-yellow-400/40 gradient-box gradient-box-js",
  },
  {
    title: "React",
    image: "/react.png",
    className: "text-2xl shadow-orange-500/40 gradient-box gradient-box-react",
  },
  {
    title: "Java",
    image: "/javas.png",
    className: "text-2xl shadow-red-400/40 gradient-box gradient-box-java",
  },
  {
    title: "Python",
    image: "/python.png",
    className: "text-2xl shadow-blue-500/40 gradient-box gradient-box-python",
  },
  {
    title: "Kotlin",
    image: "/kotlin.png",
    className: "text-2xl shadow-purple-400/40 gradient-box gradient-box-kotlin",
  },
  {
    title: "C#",
    image: "/csharp.png",
    className: "text-2xl shadow-purple-400/40 gradient-box gradient-box-csharp",
  },
  {
    title: "SQL",
    image: "/SQLLL.png",
    className: "text-2xl shadow-sky-400/40 gradient-box gradient-box-SQL",
  },
  {
    title: "Angular",
    image: "/angular.png",
    className: "text-2xl shadow-red-800/40 gradient-box gradient-box-angular",
  },
  {
    title: "Nextjs",
    image: "/nextjs.png",
    className: "text-2xl gradient-box gradient-box-nextjs",
  },
  {
    title: "Tailwind CSS",
    image: "/tailwind.png",
    className: "text-2xl shadow-cyan-400/40 gradient-box gradient-box-tailwind",
  },
  {
    title: "TypeScript",
    image: "/typescript.png",
    className:
      "text-2xl shadow-blue-400/40 gradient-box gradient-box-typescript",
  },
  {
    title: "Bootstrap",
    image: "/bootstrap.png",
    className:
      "text-2xl shadow-indigo-500/40 gradient-box gradient-box-bootstrap",
  },
  {
    title: "Git",
    image: "/git.png",
    className: "text-2xl shadow-orange-500/40 gradient-box gradient-box-git",
  },
];

const randomDirection = () => {
  const directions = [
    { x: -100, y: 0 }, // from left
    { x: 100, y: 0 }, // from right
    { x: 0, y: -100 }, //from top
    { x: 0, y: 100 }, //from bottom
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};

const Skills = () => {
  const [skills] = useState(skillsData);

  return (
    <div className="py-16" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center justify-center sm:justify-start">
          <Code className="mr-4 h-10 w-10" />
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, ...randomDirection() }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center"
            >
              <Skills_Card {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
