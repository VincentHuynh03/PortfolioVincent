import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Section from "../elements/section";


const Education = () => {
    return (
        <div className="h-full flex w-full text-white text-wrap bg-gray-800">

            <div className="items-center sm:items-start container w-full flex-col flex mx-auto px-4  m-4 h-full">

            <Section title="Education" />

        
            <div className="flex-row w-full flex-1 border-2 flex-wrap order-white mb-5 rounded-xl px-2 py-6 drop-shadow-lg">
                
                <div className="flex flex-wrap text-center items-center gap-4">
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
                <p>Collège de Rosemont</p>
                <p>Collège de Rosemont</p>
            </div>


            </div>
            </div>
            </div>
        </div>
    );
  };
  export default Education;