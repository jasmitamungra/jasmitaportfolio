import React from "react";
import html from "../images/html.png";
import css from "../images/css.jpg";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.png";
import js from "../images/js.png";
import jquery from "../images/jquery.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import github from "../images/github.png"

const Skills = () => {
  const skill = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: js,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: jquery,
      title: "JQUERY",
      style: "shadow-blue-900",
    },
    {
      id: 7,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: redux,
      title: "REDUX",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
  ];
  return (
    <>
      <div
        name="Skills"
        className="w-full h-full bg-gradient-to-b from-black via-black to-gray-800 "
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl  font-bold  border-b-4 border-gray-500 p-2 inline my-4">
              Skills
            </p>
          </div>

          <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-8 py-12 sm:px-0  ">
            {skill.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={
                  "shadow-md hover:scale-125 duration-500 py-2 rounded-lg border-black" +
                  " " +
                  style
                }
              >
                <img
                  src={src}
                  alt={title}
                  className="w-40 mx-auto"
                  background-color="black"
                />
                <p className="mt-8">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;