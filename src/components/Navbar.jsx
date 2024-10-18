import React from "react";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 ">
      <div className="container py-2 flex justify-center md:justify-between items:center">
        <div className=" text-2xl font-bold hidden md:inline">Rishu Raj</div>
        <div className="space-x-6 py-1.5">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#home" className="hover:text-gray-400">About Me</a>
          <a href="#home" className="hover:text-gray-400">Services</a>
          <a href="#home" className="hover:text-gray-400">Projects</a>
          <a href="#home" className="hover:text-gray-400">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect Me</button>
      </div>
    </nav>
  );
}

export default Navbar;
