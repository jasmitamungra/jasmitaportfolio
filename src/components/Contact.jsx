import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white "
    >
      <div className="flex flex-col justify-center max-w-screen h-full mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mx-auto">
            Contact
          </p>
          <p className="py-6">Submit the below form to contact me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/zbxmklva" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
            />
            <textarea
              name="message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
              placeholder="Enter your message here"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-2 py-2 mx-auto my-auto rounded-md hover:scale-110 duration-100">
              Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;