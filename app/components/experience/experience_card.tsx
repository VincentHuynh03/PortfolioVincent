import React from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export interface ExperienceTitle {
  title: string;
  position: string;
  year: string;
  image: string;
  description: string;
  technologies: string[];
  achievements: string[];
  website?: string;
  className?: string;
}

const Experience_card = ({
  title,
  position,
  year,
  image,
  description,
  technologies,
  achievements,
  website,
  className,
}: ExperienceTitle) => {
  return (
    <div
      className={`m-auto min-h-[12rem] max-w-[24rem] flex-1 mb-4 px-3 py-4 drop-shadow-lg border-2 border-[#005DAA] rounded-xl experience-card ${
        className || ""
      }`}
    >
      <div className="flex flex-col items-center gap-3 mb-3">
        <div className="flex items-center mb-3">
          <Image
            src={image}
            height={120}
            width={120}
            quality={100}
            alt="company-logo"
            className="object-contain mr-2"
          />
        </div>
        <div>
          <h1 className="font-bold text-center text-lg text-white">{title}</h1>
          <h2 className="text-center text-md text-blue-400">{position}</h2>
          <h3 className="text-center text-md text-gray-400">{year}</h3>
        </div>
        <p className="text-gray-300 mb-3 text-center text-sm">{description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-blue-600 text-white px-1 py-0.5 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-3 text-base">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
          >
            Visit Website
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Experience_card;
