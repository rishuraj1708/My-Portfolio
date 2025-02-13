import React from 'react'
import HeroImage from '../assets/my-img.png'

function Hero() {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' src= {HeroImage} alt="" />
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-600'>Rishu Raj</span>
        , Full-stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <button className="bg-gradient-to-r from-orange-500 to-indigo-800 text-white md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact with me</button>
        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full">Resume</button>
      </div>
    </div>
  )
}

export default Hero