import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Education = () => {
    return (
        <div className="h-full flex w-full text-white text-wrap bg-gray-800">

            <div className="container w-full flex-col flex mx-auto px-4 h-full" id="container">

            <div className="text-5xl section-heading flex-wrap pt-5 after:absolute after:h-[3px] after:w-[4rem] after:bg-white after:left-[10%] after:transform md:after:translate-x-[-75%] md:after:translate-y-[10px] after:translate-x-[90%] after:translate-y-[5px] mb-8">
                <h1>Education</h1>
            </div>
        
            <div className="flex-row w-full flex-1 border-2 border-white mb-5 rounded-xl px-2 py-6  drop-shadow-lg ignore-padding">
                
                <div className="flex items-center gap-4">
            <Image
                src="/rosemont.jpg"
                height={100}
                width={200}
                quality={100}
                alt="rosemont"
                className="object-cover"
            />

            <div className="">
                <p>helloaaaaaaaaaaaaaaa</p>
            </div>


            </div>
            </div>
            </div>
        </div>
    );
  };
  export default Education;