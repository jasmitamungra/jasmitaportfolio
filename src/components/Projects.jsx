import React, { useState } from "react";
import ecommerce from "../images/ecommerce.png";
import Cryptodashboard from "../images/cryptodashboard.png";
import travel from "../images/travel.png";

const projectData = [
  {
    id: 1,
    src: ecommerce,
    l: "https://github.com/jasmitamungra/e-commerce-website",
    href: "https://e-commerce-prod.netlify.app",
    details: "This is a E-commerce-website.A E-commerce websitw is used to add product in a cart.This E-commerce website has been created using HTML,CSS,JavaScript",
  },
  {
    id: 2,
    src: Cryptodashboard,
    l: "https://github.com/jasmitamungra/crypto-dashboard",
    href: "https://cryptodashboardbyjasmita.netlify.app",
    details:
      "This is a Crypto currency dashboard project which shows price charts, calculates exchange rates and displays list of top cryptocurrencies according to their market cap. It is created with React and Redux Javascript libraries, styled component and utilize CoinGecko's API for information.it is designed using React js ,UI is managed using Tailwind CSS . ",
  },
  {
    id: 3,
    src: travel,
    l: "https://github.com/srishti-23/travel-website/blob/main/README.md",
    href: "https://exploretgotrip.netlify.app/",
    details: "A simple static travel website named as ExploreGo.his website has been created using HTML and CSS",
  },
];

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState(null);

  const handleProjectClick = (details) => {
    setProjectDetails(details);
  };

  return (
    <div
      name="projects"
      className="w-full h-full bg-gradient-to-b from-black via-black to-gray-800 text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center ">
        <div>
          <p className="text-4xl  font-bold  border-b-4 border-gray-500 p-2 inline my-8">
            Projects
          </p>
          <p className="py-6">Here are some of my major projects</p>
        </div>
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-8 py-12 sm:px-0">
          {projectData.map(({ id, src, href, details,l }) => (
            <div
              key={id}
              className="shadow-md hover:scale-125 duration-500 py-2 rounded-lg border-black "
            >
              {projectDetails === details ? (
                <div>
                  <p>{details}<br></br>
                 <a href={l}> Read more..</a></p>
                  <button onClick={() => setProjectDetails(null)}>Close</button>
                </div>
              ) : (
                <div>
                  <img src={src} alt="" className="w-60 mx-auto" />
                  <p className="flex items-center justify-center ">
                  <button className=" mx-auto px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                      <a
                        href={href}
                        className=" justify-between items-center w-full text-white space-x-2"
                      >
                        View
                      </a>
                    </button>
                    <button
                      className="mx-auto px-6 py-3 m-4 duration-200 hover:scale-105 text-center "
                      onClick={() => handleProjectClick(details)}
                    >
                      Details
                    </button>
                
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;