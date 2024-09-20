"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../elements/section";
import Skills_Card from "./skills_card";

const skillsData = [
  { title: "JavaScript", image: "/javascript.png", className: "text-2xl shadow-yellow-400/40 gradient-box gradient-box-js" },
  { title: "Java", image: "/javas.png", className: "text-2xl shadow-red-400/40 gradient-box gradient-box-java" },
  { title: "Python", image: "/python.png", className: "text-2xl shadow-blue-500/40 gradient-box gradient-box-python" },
  { title: "Kotlin", image: "/kotlin.png", className: "text-2xl shadow-purple-400/40 gradient-box gradient-box-kotlin" },
  { title: "C#", image: "/csharp.png", className: "text-2xl shadow-purple-400/40 gradient-box gradient-box-csharp" },
  { title: "SQL", image: "/SQLLL.png", className: "text-2xl shadow-sky-400/40 gradient-box gradient-box-SQL" },
  { title: "Angular", image: "/angular.png", className: "text-2xl shadow-red-800/40 gradient-box gradient-box-angular" },
  { title: "Nextjs", image: "/nextjs.png", className: "text-2xl gradient-box gradient-box-nextjs" },
  { title: "Tailwind CSS", image: "/tailwind.png", className: "text-2xl shadow-cyan-400/40 gradient-box gradient-box-tailwind" },
  { title: "TypeScript", image: "/typescript.png", className: "text-2xl shadow-blue-400/40 gradient-box gradient-box-typescript" },
  { title: "Bootstrap", image: "/bootstrap.png", className: "text-2xl shadow-indigo-500/40 gradient-box gradient-box-bootstrap" },
  { title: "Git", image: "/git.png", className: "text-2xl shadow-orange-500/40 gradient-box gradient-box-git" },
];

const randomDirection = () => {
    const directions = [
      { x: -100, y: 0 }, // from left
      { x: 100, y: 0 },  // from right
      { x: 0, y: -100 },  //from top
      { x: 0, y: 100 },  //from bottom
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };


  
const Skills = () => {
  const [skills] = useState(skillsData);

  return (
    <div className="flex w-full text-white text-wrap" id="skills">
      <div className="items-center sm:items-start container w-full flex-col flex mx-auto px-4 m-4">
        <Section title="Skills" className="section-heading-skills" />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 md:gap-y-14 md:px-30 md:gap-x-40 md:py-5 flex items-center">
          {skills.map((skill, index) => (
        <motion.div key={index} initial={{ opacity: 0, ...randomDirection() }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ type: "spring", stiffness: 50, duration: 0.5 }} viewport={{ once: true, amount: 0.3 }}>              
        <Skills_Card title={skill.title} image={skill.image} className={skill.className} />
        </motion.div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;
