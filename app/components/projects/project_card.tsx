
import React from "react";
import Image from 'next/image';

export interface ProjectTitle {
  title: string;
  librairies?: string;
  description: string[];
  technologies: string;
  className?: string;
  link?: string;  
  demo?: string;
  logo?: string;
  image?: string;
}

const Project_card = ({ title, description, logo, image, librairies, technologies, className, link , demo}: ProjectTitle) => {
  return (
    <div className={`m-auto min-h-[49rem] md:w-[30rem] flex flex-col mb-4 drop-shadow-lg border-2 rounded-xl experience-card ${className || ''}`}>
      
      {image && (
        <div className="relative w-full min-h-[16rem] rounded-lg overflow-hidden">
          <Image
            src={image} 
            alt="Project image"
            layout="fill" 
            quality={100}
            className="object-cover absolute"
          />
        </div>
      )}
      
      <div className="flex flex-col flex-grow">
      {logo && (
        <div className="flex justify-center mt-4">
          <Image
            src={logo} 
            height={100}
            width={100}
            quality={100}
            alt="Project Logo"
            className="object-cover custom-translate-logo"
          />
        </div>
      )}
      


        <div className="px-4">
          <h1 className="font-bold text-center text-xl">{title}</h1>
          <div className="py-5">
            <h3>Technologies : {technologies}</h3>
            {librairies && (
              <h3>Librairies : {librairies}</h3>
              )}
          </div>

          <ul className="list-disc p-4">
            {description.map((desc, index) => (
              <li key={index} className="mb-4">{desc}</li>
            ))}
          </ul>
        </div>
        </div>
        

      {link && (
        <div className="flex justify-center mt-4 mb-2 transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
          >
            <Image 
              src="/github.svg"  
              alt="GitHub Icon"
              width={50}   
              height={50}  
            />
          </a>
        </div>
      )}
      {demo && (
        <div className="flex justify-center mt-4 mb-2 transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Demo Profile"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg text-center"
          >
           Demo
          </a>
        </div>
      )}


    </div>
  );
};

export default Project_card;
