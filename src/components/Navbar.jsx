import React from 'react'

const Navbar = () => {
  return (
    // Navbar Background Div
    <div className='w-full fixed z-[1000] bg-richblack-900'>
      <div className='w-10/12 max-w-maxContent mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 py-8 px-4'>
        {/* Name Logo */}
        <p className='text-2xl lg:text-4xl text-[#e84949] font-tangerine font-cursive leading-10 cursor-pointer'><a href='/'>Somya Gupta</a></p>

        {/* Nav Links */}
        <div className='flex items-center justify-between gap-6 font-medium text-richblack-5 transition-all duration-200'>
            <a href='/' className='text-lg lg:text-2xl cursor-pointer hover:text-[#e84949]'>Home</a>
            <a href='#education' className='text-lg lg:text-2xl cursor-pointer hover:text-[#e84949]'>About</a>
            <a href='#projects' className='text-lg lg:text-2xl cursor-pointer hover:text-[#e84949]'>Projects</a>
            <a href='#skills' className='text-lg lg:text-2xl cursor-pointer hover:text-[#e84949]'>Skills</a>
            <a href='#contact' className='text-lg lg:text-2xl cursor-pointer hover:text-[#e84949]'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar