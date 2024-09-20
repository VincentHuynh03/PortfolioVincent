"use client";

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Section from "../elements/section";
import { motion } from "framer-motion";


const cardVariants = {
    hidden: { opacity: 0, y: -100 },  
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, duration: 0.5 } }
  };

const Education = () => {
    return (
        <div className="h-full flex w-full text-white text-wrap bg-gray-800" id="education">

            <div className="sm:items-start container w-full flex-col flex mx-auto px-4 m-4 h-full">

            <Section title="Education" className="section-heading-education" />


            <motion.div variants={cardVariants} className="md:w-5/12 flex m-auto "initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>

            <div className="bg-[rgb(51,67,89)] m-auto flex-row md:w-5/12 flex-1 border-2 border-red-500 flex-wrap mb-4 rounded-xl px-4 py-4 drop-shadow-lg">

            <div className="flex items-center justify-center flex-wrap md:items-start md:justify-start gap-4 mb-4 md:mb-0">
            <Image
                src="/rosemont.jpg"
                height={100}
                width={200}
                quality={100}
                alt="rosemont"
                className="object-cover"
            />

            <div className="text-center">
                <p>Collège de Rosemont</p>
                <p>DEC:</p>
                <p>
                Application development: Web and mobile</p>
                <p>2020-2024</p>
            </div>


            </div>
            </div>
            </motion.div>

            </div>
        </div>
    );
  };
  export default Education;