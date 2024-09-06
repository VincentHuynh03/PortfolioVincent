import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Section from "../elements/section";
import Experience_card from "./experience_card";

const Experience = () => {
    return (
        <div className="h-full flex w-full text-white text-wrap bg-gray-800" id="experience">

            <div className="items-center sm:items-start container w-full flex-col flex mx-auto px-4  m-4 h-full">

            <Section title="Experience" />

            <div className="flex flex-row m-auto space-x-4">
                    <Experience_card title="Web developer Intern"  position="Lalema Inc." image="/logo_lalema.svg" year="April 2024 - June 2024" />
                </div>
            </div>
        </div>
    );
  };
  export default Experience;