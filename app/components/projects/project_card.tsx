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
}

const Project_card = ({ title, description, librairies, technologies, className, link , demo}: ProjectTitle) => {
  return (
    <div className={`m-auto min-h-[45rem] md:w-[30rem] flex flex-col mb-4 px-4 py-4 drop-shadow-lg border-2 rounded-xl experience-card ${className || ''}`}>
      <div className="flex flex-col flex-grow">
        <div>
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
        <div className="flex justify-center mt-4 transform transition-transform duration-300 ease-in-out hover:scale-110"> 
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
        <div className="flex justify-center mt-4 transform transition-transform duration-300 ease-in-out hover:scale-110"> 
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
