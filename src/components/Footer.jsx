import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='contact' className='w-full h-[12rem] py-8 px-4 bg-[#23272a] scroll-m-8'>
        <div className='w-10/12 max-w-maxContent mx-auto flex flex-col items-center justify-center gap-4'>
            
            {/* Social Links */}
            <div className='flex items-center justify-center gap-4 mt-6'>
                <a href='https://www.linkedin.com/in/somya-gupta-060356186/' className='text-richblack-5 hover:scale-150' target='_blank'><FaLinkedin></FaLinkedin></a>
                <a href='https://github.com/somyagupta-2910' className='text-richblack-5 hover:scale-150'><FaGithub></FaGithub></a>
                <a href='' className='text-richblack-5 hover:scale-150'><SiGmail></SiGmail></a>
            </div>

            {/* Copyright */}
            <div className='flex items-center justify-center gap-1'>
                <FaCopyright className='text-richblack-5' />
                <p className='text-richblack-5 text-center'>Copyright 2024 Somya Gupta.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer