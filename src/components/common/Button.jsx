import React from 'react'

const Button = ({text, linkto}) => {
  return (
    <button className='bg-[#e84949] transition-all duration-200 ease-in-out transform cursor-pointer hover:scale-105 text-white py-4 px-4 h-[4rem] w-[10rem] rounded-md text-lg font-semibold border-10'>
        <a href={linkto} target='_blank'>{text}</a>
    </button>
  )
}

export default Button