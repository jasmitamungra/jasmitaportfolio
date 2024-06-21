import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "education",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "Skills",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black">
      
        <ScrollLink to="home" smooth duration={200}>
          <div className="text-4xl font-bold font-signature ml-2 cursor-pointer">
            Jasmita
          </div>
        </ScrollLink>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-slate-200 bg-black hover:scale-105 duration-200"
            >
              <ScrollLink to={link} smooth duration={200}>
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul
            className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 text-gray-500 hover:scale-105 duration-200"
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <ScrollLink
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to={link}
                  smooth
                  duration={200}
                >
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Nav;