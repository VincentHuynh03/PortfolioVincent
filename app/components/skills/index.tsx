import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Section from "../elements/section";
import Skills_Card from "./skills_card";

const Skills = () => {
    return (
        <div className="flex w-full text-white text-wrap" id="skills">

            <div className="items-center sm:items-start container w-full flex-col flex mx-auto px-4  m-4">

            <Section title="Skills" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:p-20 flex">

            <Skills_Card title="JavaScript" image="/js.png" className="shadow-yellow-400/40 gradient-box-js" />
            <Skills_Card title="Java" image="/javas.png" className="shadow-red-400/40 gradient-box-java"/>
            <Skills_Card title="JavaScript" image="/js.png" />
            <Skills_Card title="JavaScript" image="/js.png" />
            <Skills_Card title="JavaScript" image="/js.png" />
            <Skills_Card title="JavaScript" image="/js.png" />

            </div>


            </div>
        </div>
    );
  };
  export default Skills;