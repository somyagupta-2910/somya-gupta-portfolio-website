import React from 'react'
import UserImage from '../assets/Images/userAsset/UserImage.png'
import Button from './common/Button'
import heroBg from '../assets/Images/userAsset/hero-bg.jpg'
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
    const texts = ['Full Stack Developer', 'ML Engineer', 'Data Scientist'];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        // Increment the current text index and wrap around when it reaches the end
        setCurrentTextIndex((prevIndex) =>
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
        );
        }, 2000); // Change text every 2 seconds

        return () => {
        // Clean up the interval when the component unmounts
        clearInterval(interval);
        };
    }, []);

  return (
    // Hero Section Background Div
    <div id='hero' className='w-full h-screen z-100 relative'>
        {/* Background Image for the hero section on top of which rest of the content will be placed */}
        <img className='w-full h-full absolute top-0 left-0 object-cover object-center z-[-1]' src={heroBg}></img>

        {/* Navbar */}
        <Navbar></Navbar>

        {/* Flex Container for Hero */}
        <div className='w-10/12 max-w-maxContent mx-auto mt-2 lg:mt-[10rem] flex flex-col-reverse lg:flex-row items-center justify-between gap-6 py-8 px-4 relative'>
        
            {/* Left Content Section */}
            <div className='flex flex-col w-full lg:w-[70%] gap-6 items-center lg:items-start justify-center'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl text-center lg:text-left font-semibold text-richblack-5'>Hello everyone</h1>
                <div className="text-2xl lg:text-4xl text-center lg:text-left w-[80%] text-richblack-5">
                            I am a <span className="text-[#4e45d5] font-semibold block lg:inline">{texts[currentTextIndex]}</span>
                        </div>
                <p className='text-md md:text-lg lg:text-xl text-center lg:text-left text-richblack-5'>I’m currently pursuing my Master's in Computer Science at New York University and here is my portfolio website. Here you’ll learn about my journey as a CS enthusiast.</p>
                <Button text={'Resume'} linkto={'https://drive.google.com/file/d/1PAkyPUeTM4L80Gr9ekfGPl6KEFxlP_SB/view?usp=drive_link'}></Button>
            </div>
            
            {/* Right Image Section */}
            <div className='flex flex-col items-end lg:w-[50%]'>
                <img 
                className='w-36 md:w-72 h-36 md:h-72 rounded-full transition-all duration-200 hover:scale-110' src={UserImage}>

                </img>
            </div>
        </div>
    </div>
    
  )
}

export default HeroSection