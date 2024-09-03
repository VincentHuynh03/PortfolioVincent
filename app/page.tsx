import Image from "next/image";
import Navbar from "./components/navigation/navbar";
import Profile from "./components/profile";
import Education from "./components/education";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
        <Profile></Profile>
        <Education></Education>
        <Skills></Skills>
                {/* 

        <h1>Hello word</h1>
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300"></div>
        <p>
          Lorem Ipsum is simply dummy text ...
        </p>
        */}

    </>
  );
}

