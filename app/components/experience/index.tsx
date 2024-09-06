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

            <Experience_card title="Lalema Inc." image="/logo_lalema.svg" className="" />

            </div>
        </div>
    );
  };
  export default Experience;