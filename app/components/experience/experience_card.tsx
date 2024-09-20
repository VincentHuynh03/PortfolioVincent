import React from "react";
import Link from "next/link";
import Image from 'next/image';


export interface ExperienceTitle {
	title: string;
    position: string;
    year: string;
  image: string;
  className?: string;
}


const Experience_card = ({ title, year, position, image, className }: ExperienceTitle) => {
  return (
    <div className={`m-auto min-h-[14rem] md:w-[25rem] flex-1 mb-4 px-4 py-4 drop-shadow-lg border-2 border-[#005DAA] rounded-xl experience-card ${className || ''}`}>
                
    <div className="flex flex-wrap flex-col gap-4 mb-4 md:mb-0">

        <div className="m-auto">
    <Image
        src={image} 
        height={100}
        width={200}
        quality={100}
        alt="rosemont"
        className="object-cover"
    />
</div>

    <div className="">
        <h1 className="font-bold text-center text-xl ">{title}</h1>
        <h2 className="text-center text-lg">{position}</h2>
        <h2 className="text-center text-lg">{year}</h2>
        <div className="py-5">
        <p><span className="font-bold">Technologies:</span> Python(Flask), HTML, CSS, JS</p>
        <p><span className="font-bold">Librairies:</span> Bootstrap, ApexCharts , GridJS</p>
        </div>

        <ul className="list-disc p-4">
  <li><span className="font-bold">Developed a web application independently</span> to efficiently read, process, and display financial public reports from hospitals in Quebec.</li>
  <li><span className="font-bold">Designed and implemented</span> interactive data visualization features, enabling users to explore hospital financial data through dynamic tables and visual graphics, with advanced filtering options for a customized experience.</li>

  <li><span className="font-bold">Converted large and complex CSV files</span> from public hospital reports into JSON format, improving data management and application performance.</li>


</ul>

  <span className="font-bold">Website:<br></br></span>
  <a target="_blank" href="https://visionhs.ca/" rel="noopener noreferrer" className="underline cursor-pointer text-blue-400 text-xl">VisionHS
 </a>

    </div>


    </div>
    </div>

    );
  };
  export default Experience_card;