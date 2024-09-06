import React from "react";
import Link from "next/link";
import Image from 'next/image';


export interface ExperienceTitle {
	title: string;
  image: string;
  className?: string;
}


const Experience_card = ({ title, image, className }: ExperienceTitle) => {
  return (
    <div className={`min-h-[14rem] md:w-[25rem] custom-translate flex-1 mb-4 px-4 py-4 drop-shadow-lg border-2 rounded-xl education-card ${className || ''}`}>
                
    <div className="flex flex-wrap flex-col items-center gap-4 mb-4 md:mb-0">

        <div></div>
    <Image
        src={image} 
        height={100}
        width={200}
        quality={100}
        alt="rosemont"
        className="object-cover"
    />

    <div className="">
        <h1 className="font-bold text-center">{title}</h1>
        <p>Technologies:</p>
    </div>


    </div>
    </div>

    );
  };
  export default Experience_card;