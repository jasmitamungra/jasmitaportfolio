import React from "react";

const About = () => {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full gap-0">
          <div className="pb-8">
            <p className="text-4xl  font-bold inline border-b-4 border-gray-500 mx-auto">
              About
            </p>
          </div>
          <p className="text-xl mt-10 justify-center sm:text-center   ">
            Enthusiastic and highly motivated graduate with a Bachelor's
            degree in Computer Application. Eager to kickstart a rewarding
            career in IT, I bring a solid foundation in key technologies along
            with a passion for problem-solving and innovation I have
            successfully completed my Bachelor of Computer Application
            from ROFEL BCA College-VNSGU. I am excited to apply the
            knowledge and skills acquired during my academic journey to
            real-world IT challenges. I have a good problem-solving skills and
            adept at working collaboratively in a team. I am now seeking an entry-level
            position where I can contribute my skills, learn from experienced
            professionals, and grow within a dynamic and innovative IT
            environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;