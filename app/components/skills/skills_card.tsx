import React from "react";
import Link from "next/link";
import Image from 'next/image';


export interface CardTitle {
	title: string;
    image: string;
}


const Skills_Card = ({ title, image }: CardTitle) => {
    return (
        <div className="min-h-[14rem] flex-row md:w-[15rem] flex-1 border-2 flex-wrap order-white mb-4 rounded-xl px-4 py-4 drop-shadow-lg">
                
        <div className="flex flex-wrap md:justify-start gap-5 mb-4 md:mb-0">
        <Image
            src={image} 
            height={100}
            width={150}
            quality={100}
            alt="rosemont"
            className="object-cover custom-translate-skills"
        />

      <div className="flex items-center justify-center w-full">
        <h1 className="text-center text-white z-10">{title}</h1>
      </div>


        </div>
        </div>

    );
  };
  export default Skills_Card;