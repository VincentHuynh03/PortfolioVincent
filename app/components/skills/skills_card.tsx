import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface CardTitle {
  title: string;
  image: string;
  className?: string;
}

const Skills_Card = ({ title, image, className }: CardTitle) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className={`flex-shrink-0 ${className}`}
    >
      <div
        className={`w-40 h-40 aspect-square rounded-lg flex flex-col items-center justify-center p-4`}
      >
        <div className="text-white mb-4">
          <Image
            src={image}
            height={100}
            width={100}
            quality={100}
            alt="skills_icon"
            className="object-cover rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-white text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default Skills_Card;
