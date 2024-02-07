import React from 'react'
import Experience from './Experience'
import Education from './Education'
import cv from '../assets/Resume-Anant.pdf';

const Resume = () => {
  return (
    <div id='resume' className='flex flex-col bg-black min-h-screen py-10 md:py-20'>
        <div className='flex flex-col items-center justify-center mb-10 md:mb-16 mx-8'>
            <h1 className='text-white font-Poppins font-extrabold text-8xl md:text-8xl underline mt-6 mb-6 md:mb-10'>Resume</h1>
            <p className='font-Poppins text-gray-400 text-base md:text-lg text-center max-w-lg'>Seasoned Frontend Developer with 1.6 years of experience driving business requirements into reality.</p>
            <p className='font-Poppins text-gray-400 text-base md:text-lg text-center max-w-lg mb-6 md:mb-10'>Proven expertise in JavaScript, React, Java and SQL.</p>
        </div>
        <div>
            <Experience />
            <Education />
        </div>
        <div className='flex justify-center items-center mb-20 md:mb-16'>
            <a href={cv} download className='text-black bg-yellow-400 px-6 py-3 rounded-full font-Poppins font-bold cursor-pointer hover:bg-yellow-300'>Download CV</a>
        </div>
    </div>
  )
}

export default Resume