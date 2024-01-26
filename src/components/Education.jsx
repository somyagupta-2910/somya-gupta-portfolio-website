import React from 'react'
import nyuBg from '../assets/Images/education/nyu-bg.jpeg'
import srmBg from '../assets/Images/education/srm-bg.jpeg'
import Button from './common/Button'

const colleges = [
    {
        id: 1,
        name: 'New York University',
        degree: 'Master of Science in Computer Science',
        year: 'Sep 2023 - May 2025',
        imageUrl: nyuBg,
        relevantCourseWork: 'Machine Learning, Analysis of Algorithms, Deep Learning, Big Data',
        transcriptLink: 'https://drive.google.com/file/d/1BR0BzF4PypScNdHrmHrjOVoMqI_b5IiK/view?usp=drive_link'
    },
    {
        id: 2,
        name: 'SRM Institute of Science and Technology',
        degree: 'Bachelor of Technology in Electronics and Communication Engineering',
        year: 'Jul 2017 - Jun 2021',
        imageUrl: srmBg,
        relevantCourseWork: 'Machine Learning, Analysis of Algorithms, Deep Learning, Big Data',
        transcriptLink: 'https://drive.google.com/file/d/1DZ_GfoNYBW5G7N0P3Uvbzi-GUaC-p2bB/view?usp=drive_link'
    }
]

const Education = () => {
  return (
    <div id='education' className='w-10/12 max-w-maxContent mx-auto flex flex-col gap-6 mt-11'>
        {/* Heading */}
        <h1 className='text-4xl lg:text-8xl text-center text-[#e84949]'>Education</h1>

        {/* Education Main Div */}
        <div className='flex flex-col mt-10'>
            {
                colleges.map((college, index) => (
                    <>
                        <div 
                        key={index} 
                        className={`mx-auto flex flex-col w-full lg:w-[60%] h-[400px] border-2 rounded-xl relative z-100 transition-all duration-200 hover:scale-110`}>
                            {/* Background College Image */}
                            <img className='w-full h-full -z-1 absolute object-cover' src={college.imageUrl}></img>

                            {/* Main College Content Div */}
                            <div className='flex flex-col items-start justify-center gap-3 py-8 px-4 relative text-white z-10 bg-opacity-50  bg-richblack-900 bg-custom-shadow h-full'>
                                <h1 className='text-xl lg:text-3xl text-[#e84949] font-bold'>{college.name}</h1>
                                <div className='w-full -mt-2 flex flex-col lg:flex-row justify-between gap-1 font-tangerine text-richblack-5 font-medium'>
                                    <p className='text-md lg:text-lg'>{college.degree}</p>
                                    <p className='text-md lg:text-lg'>{college.year}</p>
                                </div>
                                <p className='text-md lg:text-lg mt-8 font-tangerine font-medium'>Relevant Coursework: {college.relevantCourseWork}</p>
                                <Button text={'Transcript'} linkto={college.transcriptLink}></Button>
                            </div>
                        </div>
                        {
                            college.id !== colleges.length ? ( <div
                                className={`flex items-center justify-center h-[100px] w-[50%] border-dashed border-r-[0.5rem]
                                border-[#e84949]`}
                                ></div>) : (<></>)
                        }
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default Education