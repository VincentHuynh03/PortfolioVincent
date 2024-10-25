import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface CardTitle {
  title: string;
  image: string;
  className?: string;
}

const Skills_Card = ({ title, image, className }: CardTitle) => {
  return (
    <div
      className={`min-h-[14rem] md:w-[15rem] border-2 rounded-xl px-4 py-4 drop-shadow-lg shadow-2xl relative ${className || ""}`}
    >
      <div className="flex flex-wrap md:justify-start gap-5 mb-4 md:mb-0 ">
        <Image
          src={image}
          height={100}
          width={150}
          quality={100}
          alt="skills_icon"
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
