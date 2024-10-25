import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="block md:hidden sidebar-container absolute w-full h-50 overflow-hidden justify-center bg-gray-800 grid pt-[30px] left-0 z-10 "
        id="profile"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: `${isOpen ? "65px" : "-100%"}`, // Adjust the value as needed
        }}
      >
        <ul className="sidebar-nav text-center leading-relaxed text-white text-xl">
          <li>
            <Link href="#education">
              <p>Education</p>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <p>Skills</p>
            </Link>
          </li>
          <li>
            <Link href="#experience">
              <p>Experience</p>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link href="#contacts">
              <p>Contacts</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
