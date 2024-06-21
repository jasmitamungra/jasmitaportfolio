import React from "react";
import Welcome from "./Welcome";
import { MdDownloadForOffline } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-4 md:flex-row ">
      <div>
     
        <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-semibold text-slate-100 my-4">I'm a Full Stack Web Developer (MERN) </h2>
        <p className="text-3xl font-medium Raleway text-slate-200 my-4" >
        <Welcome  text ="Welcome to Jasmita's portfolio" delay={100}/></p>
        <div >
          <a className="group text-white w-fit  my-2 px-4 py-3 mx-auto flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-125 duration-200"
           href={process.env.PUBLIC_URL + '/jasmita.pdf'} 
           target="_blank"
            rel="noopener noreferrer" > Resume
            <span className=" group-hover:scale-125 duration-200 ml-2 ">
            <MdDownloadForOffline size={20} />
            </span>
          </a>
        </div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Home;