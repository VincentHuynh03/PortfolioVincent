"use client";

import React from "react";
import Section from "../elements/section";
import Project_card from "./project_card";
import { motion } from "framer-motion";
import { Presentation } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.5 },
  },
};

const Projects = () => {
  return (
    <div className="h-full flex w-full text-white text-wrap" id="projects">
      <div className="items-center sm:items-start container w-full flex-col flex mx-auto px-4  m-4 h-full">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
          <Presentation className="mr-4 h-10 w-10" />
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 md:gap-y-10 md:px-30 md:gap-x-20 md:py-5 m-auto flex items-center">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Project_card
              title="PokeInfo"
              description={[
                "Independently built PokeInfo, an interactive Pokemon information app.",
                "Utilized PokeAPI  to dynamically fetch and display comprehensive Pokemon data, including details, types, and stats.",
                "Designed a user-friendly interface with Material-UI for an engaging experience.",
              ]}
              technologies="React"
              libraries="Material-UI"
              link="https://github.com/VincentHuynh03/PokeInfo"
              image="/pokeinfo.png"
              demo="https://pokeinfodex.vercel.app"
            />
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Project_card
              title="FreeRooms"
              description={[
                "Led a team of 3 to develop a Hotel reservation project in C#",
                "Optimized C# model classes for data consistency and performance.",
                "Collaborated on front-end design with Figma, implementing it using HTML, CSS, and JavaScript.",
                " Integrated front-end with back-end for responsiveness and dynamic interactions.",
                "Implemented secure authentication using ASP.NET Identity.",
              ]}
              technologies="C#, ASP.NET Core ASP.NET identity"
              libraries=""
              link="https://github.com/VincentHuynh03/HotelReservation"
              image="/FreeRoomsImage.png"
            />
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Project_card
              title="AllezHop"
              description={[
                " Collaborated in a team of 4 to develop an Android Carpool app with its own API, handling both front-end and back-end tasks.",
                "Led the implementation of OAuth-based authentication and token management, securing user data and ensuring API access control.",
                "Designed and implemented the Reservation system, optimizing database interactions and building features for booking, updating, and canceling reservations.",
              ]}
              technologies="Kotlin, Spring Boot"
              libraries=""
              link="https://github.com/VincentHuynh03/Android-Carpool-App"
              image="/carpool.jpg"
            />
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Project_card
              title="Bunny Hop Adventure"
              description={[
                "Developed the first level of both 2D and 3D game environments, from conception to implementation.",
                " Designed the layout, integrating assets, and implemented core gameplay mechanics.",
              ]}
              technologies="Unity, C#"
              libraries=""
              link=""
              demo="https://v34l.itch.io/bunny-adventure"
              image="/BunnyHopImage.png"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
