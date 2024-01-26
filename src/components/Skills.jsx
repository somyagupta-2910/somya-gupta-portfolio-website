import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import 'swiper/css/navigation';
import { Autoplay}  from 'swiper/modules'

import ReactIcon from '../assets/Images/stack/React.png'
import TailwindIcon from '../assets/Images/stack/Tailwind.png'
import BashIcon from '../assets/Images/stack/Bash.svg'
import cIcon from '../assets/Images/stack/c.svg'
import cssIcon from '../assets/Images/stack/CSS.png'
import HTMLIcon from '../assets/Images/stack/HTML.png'
import JSIcon from '../assets/Images/stack/Javascript.svg'
import expressIcon from '../assets/Images/stack/Express.png'
import gitIcon from '../assets/Images/stack/Git.svg'
import GitHubIcon from '../assets/Images/stack/Github.svg'
import iotIcon from '../assets/Images/stack/iot.png'
import MLIcon from '../assets/Images/stack/ML.png'
import MongoIcon from '../assets/Images/stack/MongoDB.svg'
import NodeIcon from '../assets/Images/stack/NodeJs.svg'
import PythonIcon from '../assets/Images/stack/python-4.svg'
import sonarqubeIcon from '../assets/Images/stack/sonarqube.svg'
import typescriptIcon from '../assets/Images/stack/Typescript.svg'
import tensorflowIcon from '../assets/Images/stack/tensorflow-2.svg'

const skills = [
    {
        skillIcon: MLIcon,
        skillName: 'Machine Learning'
    },
    {
        skillIcon: PythonIcon,
        skillName: 'Python'
    },
    {
        skillIcon: cIcon,
        skillName: 'C++'
    },
    {
        skillIcon: BashIcon,
        skillName: 'Bash'
    },
    {
        skillIcon: JSIcon,
        skillName: 'Javascript'
    },
    {
        skillIcon: HTMLIcon,
        skillName: 'HTML'
    },
    {
        skillIcon: cssIcon,
        skillName: 'CSS'
    },
    {
        skillIcon: TailwindIcon,
        skillName: 'Tailwind'
    },
    {
        skillIcon: ReactIcon,
        skillName: 'React'
    },
    {
        skillIcon: NodeIcon,
        skillName: 'NodeJS'
    },
    {
        skillIcon: expressIcon,
        skillName: 'Express'
    },
    {
        skillIcon: MongoIcon,
        skillName: 'MongoDB'
    },
    {
        skillIcon: gitIcon,
        skillName: 'Git'
    },
    {
        skillIcon: GitHubIcon,
        skillName: 'Github'
    },
    {
        skillIcon: iotIcon,
        skillName: 'IoT'
    },
    {
        skillIcon: sonarqubeIcon,
        skillName: 'SonarQube'
    },
    {
        skillIcon: typescriptIcon,
        skillName: 'Typescript'
    },
    {
        skillIcon: tensorflowIcon,
        skillName: 'Tensorflow'
    }
]

const Skills = () => {
  return (
    <div id='skills' className='w-full bg-[#f6f6f6] mt-10 pt-[4rem] pb-[8rem] px-4 scroll-m-64'>
        {/* Heading */}
        <h1 className='text-8xl text-center text-[#e84949] mb-10'>Skills</h1>

        {/* Skills Container */}
        <div className='w-10/12 max-w-maxContent mx-auto'>
            <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            cssMode={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
                1024: {
                slidesPerView: 5,
                },
            }}
            className="max-h-[40rem]"
            >
                {
                    skills.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col items-center justify-center gap-1 w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem] '>
                                <img key={index} className='w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] object-contain' src={skill.skillIcon} alt='skillIcon'></img>
                                <p className='text-center text-sm lg:text-lg'>{skill.skillName}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Skills