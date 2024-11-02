import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-[#2a384b] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
        className || ""
      }`}
      style={{ height: "650px" }}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={`${title}`}
            fill
            priority
            unoptimized={true}
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
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
        <h3 className="text-2xl font-bold text-white text-center mb-2">
          {title}
        </h3>

        <div className="mt-2 mb-4">
          <h3 className="text-sm font-medium text-gray-300">
            Technologies:{" "}
            <span className="font-normal text-white">{technologies}</span>
          </h3>
          {libraries && (
            <h3 className="text-sm font-medium text-gray-300">
              Libraries:{" "}
              <span className="font-normal text-white">{libraries}</span>
            </h3>
          )}
        </div>

        <ul className="text-gray-300 space-y-2 mb-4 list-disc text-sm list-inside">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 mt-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="transform transition-transform duration-300 ease-in-out hover:scale-110 text-gray-400 hover:text-white"
            >
              <Image
                src="/github.svg"
                alt="GitHub Icon"
                width={30}
                height={30}
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
              <Globe className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
