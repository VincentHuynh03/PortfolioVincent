import React from "react";
import Image from "next/image";

export interface ProjectTitle {
  title: string;
  libraries?: string;
  description: string[];
  technologies: string;
  className?: string;
  link?: string;
  demo?: string;
  logo?: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  logo,
  image,
  libraries,
  technologies,
  className,
  link,
  demo,
}: ProjectTitle) => {
  return (
    <div
      className={`m-auto max-w-lg w-full flex flex-col mb-4 drop-shadow-lg border rounded-lg experience-card ${
        className || ""
      }`}
      style={{ height: "600px" }}
    >
      {image && (
        <div
          className="relative w-full h-60 rounded-t-lg overflow-hidden border-b border-gray-300"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        ></div>
      )}

      <div className="flex flex-col p-4">
        {logo && (
          <div className="flex justify-center mb-4">
            <Image
              src={logo}
              height={50}
              width={50}
              quality={100}
              alt="Project Logo"
              className="object-cover"
            />
          </div>
        )}

        <h1 className="font-semibold text-center text-lg">{title}</h1>

        <div className="mt-2 mb-4">
          <h3 className="text-sm font-medium">
            Technologies: <span className="font-normal">{technologies}</span>
          </h3>
          {libraries && (
            <h3 className="text-sm font-medium">
              Libraries: <span className="font-normal">{libraries}</span>
            </h3>
          )}
        </div>

        <ul className="list-disc pl-5">
          {description.map((desc, index) => (
            <li key={index} className="text-sm mb-2">
              {desc}
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-10 mt-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Image
                src="/github.svg"
                alt="GitHub Icon"
                width={35}
                height={35}
              />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo Profile"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg text-center text-sm"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
