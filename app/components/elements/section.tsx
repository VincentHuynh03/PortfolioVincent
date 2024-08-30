import React from "react";
import Link from "next/link";
import Image from 'next/image';


export interface SectionTitle {
	title: string;
}


const Section = ({ title }: SectionTitle) => {
    return (
        <div className="text-5xl section-heading after:absolute after:h-[3px] after:w-[4rem] after:bg-white after:left-[10%] after:transform md:after:translate-x-[200%] md:after:translate-y-[10px] after:translate-x-[200%] after:translate-y-[5px] mb-8">
        <h1>{title}</h1>
    </div>
    );
  };
  export default Section;