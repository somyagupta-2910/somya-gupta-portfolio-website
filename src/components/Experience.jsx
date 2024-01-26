import React from 'react'
import fordBg from '../assets/Images/experience/Ford-bg.jpg'
import fyiBg from '../assets/Images/experience/healthpost.png'

import { IoIosRadioButtonOn } from "react-icons/io";

const companies = [
    {
        id: 1,
        name: 'Ford Motor Company',
        role: 'Software Engineer',
        year: 'Sep 2021 - Jun 2023',
        imageUrl: fordBg,
        description: ['Led the GitHub Copilot POC, coordinating with 250 developers, focusing on improving developer productivity.', 'Managed critical CI/CD tools (GitHub and SonarQube), ensuring robust infrastructure and streamlining ticket management.', 'Developed an automated metrics dashboard using Python, reducing time spent on metrics analysis by 50%.', 'Automated ticket management with bash scripting, achieving a 68% reduction in ticket count, boosting operational efficiency.']
    },
    {
        id: 2,
        name: 'L&T Technology Services',
        role: 'Intern',
        year: 'May 2021 - Aug 2021',
        imageUrl: fyiBg,
        description: ['Built a day-scheduling application using Python', 'Learnt about C and Python languages']
    },
    {
        id: 3,
        name: 'FYI Health',
        role: 'Product Developer Intern',
        year: 'May 2020 - Jul 2020',
        imageUrl: fyiBg,
        description: ['Designed “FYI Health Post,” an automated temperature sensing, mask detection, and hand sanitizing system using Python and OpenCV to facilitate safety measures against COVID-19.', 'Deployed the system in 80+ schools and hotels across India, enhancing safety protocols against COVID-19.']
    }
]

const Experience = () => {
  return (
    <div className='w-full bg-[#f6f6f6] mt-[8rem] pt-10 pb-[8rem] px-4'>
        <div className='w-10/12 max-w-maxContent mx-auto flex flex-col gap-6'>
            {/* Heading */}
            <h1 className='text-4xl lg:text-8xl text-center text-[#e84949]'>Experience</h1>

            {/* Education Main Div */}
            <div className='flex flex-col mt-10'>
                {
                    companies.map((company, index) => (
                        <>
                            <div key={index} className='mx-auto flex flex-col w-full lg:w-[60%] h-[400px] border-2 rounded-xl relative z-100 transition-all duration-200 hover:scale-110'>
                                {/* Background College Image */}
                                <img className='w-full h-full -z-1 absolute object-cover' src={company.imageUrl}></img>

                                {/* Main College Content Div */}
                                <div className='flex flex-col items-start justify-center gap-3 py-8 px-4 relative text-white z-10 bg-opacity-50  bg-richblack-900 bg-custom-shadow h-full'>
                                    {/* Company name */}
                                    <h1 className='text-xl lg:text-3xl text-[#e84949] font-bold'>{company.name}</h1>
                                    {/* Div for Role and Year */}
                                    <div className='w-full -mt-2 flex flex-col lg:flex-row justify-between gap-1 font-tangerine text-richblack-5 font-medium'>
                                        <p className='text-md lg:text-lg'>{company.role}</p>
                                        <p className='text-md lg:text-lg'>{company.year}</p>
                                    </div>
                                    {/* Description */}
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-md lg:text-lg mt-8 font-tangerine font-medium'>Description:</p>
                                        <div className='flex flex-col'>
                                            {
                                                company.description.map((desc, index) => (
                                                    <p className='flex gap-2 items-center text-[10px] md:text-md lg:text-lg font-tangerine' key={index}><IoIosRadioButtonOn /> {desc}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                company.id !== companies.length ? ( <div
                                className={`flex items-center justify-center h-[100px] w-[50%] border-dashed border-r-[0.5rem]
                                border-[#e84949]`}
                                ></div>) : (<></>)
                            }
                        </>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience