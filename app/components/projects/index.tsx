import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Section from "../elements/section";
import Project_card from "./project_card";

const Projects = () => {
    return (
        <div className="h-full flex w-full text-white text-wrap bg-gray-800" id="projects">

            <div className="items-center sm:items-start container w-full flex-col flex mx-auto px-4  m-4 h-full">

            <Section title="Projects" className="section-heading-projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 md:gap-y-14 md:px-30 md:gap-x-40 md:py-5 m-auto flex items-center">
                    <Project_card title="FreeRooms" description={["Led a team of 3 to develop a Hotel reservation project in C#","Optimized C# model classes for data consistency and performance.","Collaborated on front-end design with Figma, implementing it using HTML, CSS, and JavaScript."," Integrated front-end with back-end for responsiveness and dynamic interactions.","Implemented secure authentication using ASP.NET Identity."]} technologies="C#, ASP.NET Core ASP.NET identity" librairies="" link="https://github.com/VincentHuynh03/HotelReservation" image="/FreeRoomsImage.png"/>
                    <Project_card title="AllezHop" description={[" Collaborated in a team of 4 to develop an Android Carpool app with its own API, handling both front-end and back-end tasks.","Led the implementation of OAuth-based authentication and token management, securing user data and ensuring API access control.","Designed and implemented the Reservation system, optimizing database interactions and building features for booking, updating, and canceling reservations.","Used Miro to plan the project’s architecture and worked on improving code performance, integrating new features, and enhancing the user experience."]} technologies="Kotlin, Spring Boot" librairies="" link="https://github.com/VincentHuynh03/Android-Carpool-App" logo="/AllezHop.png"/>
                    <Project_card title="Bunny Hop Adventure" description={["Developed the first level of both 2D and 3D game environments, from conception to implementation."," Designed the layout, integrating assets, and implemented core gameplay mechanics."]} technologies="Unity, C#" librairies="" link="" demo="https://v34l.itch.io/bunny-adventure" image="/BunnyHopImage.png"/>
                </div>
            </div>
        </div>
    );
  };
  export default Projects;