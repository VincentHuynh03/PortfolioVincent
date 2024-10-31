import Image from "next/image";
import Navbar from "./components/navigation/navbar";
import Profile from "./components/profile";
import Education from "./components/education";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import ContactForm from "./components/contacts";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <title>Vincent Huynh - Portfolio</title>
      <div className="bg-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 overflow-hidden">
          <Profile></Profile>
          <Education></Education>
          <Skills></Skills>
          <Experience></Experience>
          <Projects></Projects>
          <ContactForm></ContactForm>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
