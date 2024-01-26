import React from 'react'
import Button from './common/Button'
import drishyaImage from '../assets/Images/projects/Drishya.png'
import rakshakImage from '../assets/Images/projects/Rakshak.png'
import healthpostImage from '../assets/Images/projects/healthpost.png'
import nycCrimeImage from '../assets/Images/projects/nycCrimeAnalysis.jpg'
import tailorFitImage from '../assets/Images/projects/tailorFitApp.jpg'

const projects = [
    {
      number: '01',
      name: 'Safeguarding NYC: Analyzing Crime Patterns using Big Data',
      description: 'Conducted an analysis of 218k NYC crime records, identifying key trends and enhancing proactive crime prevention strategies.Implemented end-to-end data pipelines using Snowflake and Airbyte, following an ELT architecture. This ensured seamless data integration and facilitated efficient data processing for accurate crime analysis and reporting.',
      link: 'https://github.com/arsalananwar11/Safeguarding-NYC-Analyzing-Crime-Patterns-using-Big-Data',
      imageUrl: nycCrimeImage,
    },
    {
      number: '02',
      name: 'TailorFit — Personalized Fitness Recommendations',
      description: 'Developed ”TailorFit,” an AI personalized fitness app integrating OpenAI’s API, delivering customized diet and exercise plans based on user metrics like weight, height, and fitness goals, surpassing generic app recommendations.',
      link: 'https://github.com/somyagupta-2910/TailorFit/tree/main',
      imageUrl: tailorFitImage,
    },
    {
      number: '03',
      name: 'Rakshak - Women Safety Jacket',
      description: 'Designed a state-of-the-art safety jacket that detects if a woman is in danger by incorporating sensors which registers the frequency of unusual physical contact and heart rate anomalies. If the system detects a threat, an SMS along with the location, is sent to a nearby police station thereby reducing the search time by 76%.',
      link: 'https://link.springer.com/chapter/10.1007/978-981-33-4698-7_15',
      imageUrl: rakshakImage,
    },
    {
        number: '04',
        name: 'Pandemic Drone with Thermal Imaging and Crowd Monitoring System (DRISHYA)',
        description: 'Developed a drone consisting of a thermal camera that can identify people with a fever-like temperature as a safety measure against COVID-19.',
        link: 'https://link.springer.com/chapter/10.1007/978-981-15-7504-4_19',
        imageUrl: drishyaImage,
    },
    {
      number: '05',
      name: 'FYI Healthpost',
      description: 'Designed “FYI Health Post,” an automated temperature sensing, mask detection, and hand sanitizing system using Python and OpenCV to facilitate safety measures against COVID-19.',
      link: 'https://www.instagram.com/fyi_health/?hl=en',
      imageUrl: healthpostImage,
    },
]

const Projects = () => {
  return (
    <div id='projects' className='w-10/12 mx-auto max-w-maxContent my-10 scroll-m-12'>
        {/* Heading */}
        <h1 className='text-4xl lg:text-8xl text-center text-[#e84949] mb-10'>Projects</h1>

        {/* Projects Container */}
        <div className='flex flex-col gap-10 mt-10'>
            {
                projects.map((project, index) => (
                    <div key={index} className='mx-auto flex flex-col w-[90%] h-[500px] border-2 rounded-xl relative z-100 transition-all duration-200 '>
                        {/* Background College Image */}
                        <img className='w-full h-full -z-1 absolute object-cover object-center' src={project.imageUrl}></img>

                        <div className='flex flex-col items-start justify-center gap-3 px-[1rem] lg:px-[6rem] relative text-white z-10 bg-custom-gradient bg-custom-shadow h-full'>
                                <h1 className='absolute top-[-2rem] lg:top-[-3rem] right-[-2rem] lg:right-[-3rem] text-6xl lg:text-8xl text-[#e84949]'>{project.number}</h1>
                                <h1 className='text-xl lg:text-4xl text-[#e84949] font-bold'>{project.name}</h1>
                                <p className='text-md lg:text-lg font-tangerine font-medium mt-5'>{project.description}</p>
                                <Button text={'Project Link'} linkto={`${project.link}`}></Button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects