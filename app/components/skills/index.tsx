import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Section from "../elements/section";
import Skills_Card from "./skills_card";

const Skills = () => {
    return (
        <div className="flex w-full text-white text-wrap" id="skills">

            <div className="items-center sm:items-start container w-full flex-col flex mx-auto px-4  m-4">

            <Section title="Skills" className="section-heading-skills" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-y-14 md:px-30 md:gap-x-40 md:py-5 flex items-center">

            <Skills_Card title="JavaScript" image="/js.png" className="text-2xl shadow-yellow-400/40 gradient-box gradient-box-js" />
            <Skills_Card title="Java" image="/javas.png" className="text-2xl shadow-red-400/40 gradient-box gradient-box-java"/>
            <Skills_Card title="Python" image="/python.png" className="text-2xl shadow-blue-500/40 gradient-box gradient-box-python"/>
            <Skills_Card title="Kotlin" image="/kotlin.png" className="text-2xl shadow-purple-400/40 gradient-box gradient-box-kotlin"/>
            <Skills_Card title="C#" image="/csharp.png" className="text-2xl shadow-purple-400/40 gradient-box gradient-box-csharp"/>
            <Skills_Card title="SQL" image="/SQLLL.png" className="text-2xl shadow-sky-400/40 gradient-box gradient-box-SQL"/>
            <Skills_Card title="Angular" image="/angular.png" className="text-2xl shadow-red-800/40 gradient-box gradient-box-angular"/>
            <Skills_Card title="Nextjs" image="/nextjs.png" className="text-2xl gradient-box gradient-box-nextjs"/>
            <Skills_Card title="Tailwind CSS" image="/tailwind.png" className="text-2xl shadow-cyan-400/40 gradient-box gradient-box-tailwind"/>
            <Skills_Card title="TypeScript" image="/typescript.png" className="text-2xl shadow-blue-400/40 gradient-box gradient-box-typescript"/>
            <Skills_Card title="Bootstrap" image="/bootstrap.png" className="text-2xl shadow-indigo-500/40 gradient-box gradient-box-bootstrap"/>

            </div>


            </div>
        </div>
    );
  };
  export default Skills;