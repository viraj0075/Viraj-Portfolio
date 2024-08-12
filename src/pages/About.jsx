import React from 'react'
import { Link } from "react-router-dom"
import { skills } from '../utils/skill/skillimages'
import Marquee from 'react-fast-marquee'
import { motion } from "framer-motion";
import { containerVar } from '../components/Animations';

const About = () => {

    return (
        <motion.div variants={containerVar} initial="hidden" animate="show" className='lg:mx-24 border-gray-200 mt-20 mb-3 p-4 px-6 sm:px-8 py-2.5 flex items-center justify-between flex-wrap  '>
            <div className='overflow-x-hidden container mx-auto'>
                <div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.2, ease: "easeOut" }} className='flex items-center'>
                        <h1 className='text-white text-2xl mt-8 lg:text-6xl sm:text-[1rem] md:text-[2rem] text-sora ml-3 font-bold'>
                            <Link to="/about">
                                About me
                            </Link>
                        </h1>
                        <span className='text-4xl'>
                            <img className="w-[60px]" src="/gifs/wave.gif" alt="" />
                        </span>
                    </motion.div>
                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.2, ease: "easeOut" }} className='text-xl mx-3 text-gray-400 sm:text-2xl md:text-2xl lg:text-2xl font-mono font-sm mt-2'>
                        I’m a Software Developer from India <br />🇮🇪 with a passion for Code and Building Software.
                    </motion.h1>
                    <img className="w-[60px]" src="/gifs/snow.gif" alt="" />
                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className='text-xl mx-3 text-gray-400 sm:text-2xl md:text-2xl lg:text-2xl font-sans font-sm mt-2'>


                        ⚡I have a strong background in building dynamic web applications, <br />with a focus on performance optimization and responsive design. <br />My passion for coding drives me to continuously explore new <br />technologies and improve my skill set. Whether it's developing <br /> an intuitive front-end interface or crafting a robust back-end <br /> infrastructure, I strive to deliver high-quality, maintainable <br />code.<br />

                    </motion.h1>
                    <img className="w-[60px]" src="/gifs/snow.gif" alt="" />

                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className='text-xl mx-3 text-gray-400 sm:text-2xl md:text-2xl lg:text-2xl font-sans font-sm mt-2'>


                        ⚡ In addition to my technical skills, I place a high value on <br />clear communication and teamwork. I believe that the best <br />solutions come from understanding user needs and working together<br /> to meet those needs effectively. My goal is to contribute to <br />projects that make a positive impact, and I'm always eager to take<br /> on new challenges and collaborate with like-minded professionals.

                    </motion.h1>
                </div>
                <div className='flex items-center mt-[2rem] flex-wrap'>
                    <motion.img
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 80 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="mr-4 mt-4 rounded-lg w-full md:w-[350px] h-[350px]  object-cover" src={"/city1.jpg"}
                        alt="" />
                    <motion.img
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 90 }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                        className="mr-4 mt-4 rounded-lg w-full md:w-[350px] h-[350px]  object-cover" src={"/city2.jpg"} alt="" />
                    <motion.img
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="mr-4 mt-4 rounded-lg w-full md:w-[350px] h-[350px]  object-cover" src={"/city3.jpg"} alt="" />

                </div>
                <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className='flex items-center'>
                    <h1 className='text-white text-2xl mt-8 lg:text-6xl sm:text-[1rem] md:text-[2rem] text-sora ml-3 font-bold'>
                        <Link to="/about">
                            My Approch
                        </Link>
                    </h1>
                    <span className='text-4xl mt-8'>
                        <img className="w-[60px]" src="/gifs/cool.gif" alt="" />
                    </span>
                </motion.div>
                <div className='flex flex-row flex-wrap w-full'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.2, ease: "easeOut" }} className="lg:p-8 p-4 mr-2 mt-[2rem] bg-[#1c0230] w-full md:w-[280px] rounded-[2rem] shadow-lg">
                        <img className='object-cover w-[150px] sm:w-full rounded h-[50px]' src="/city2.jpg" alt="" />
                        <h1 className='text-white text-3xl  mt-8 mb-8  text-sora font-small'>
                            Requirements
                        </h1>
                        <span className="text-gray-400 text-xl font-small lg:text-xl"> I begin by thoroughly understanding the project requirements and objectives. This involves close communication with stakeholders to gather detailed insights into their needs and expectations.</span>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.2, ease: "easeOut" }} className="lg:p-8 p-4 mr-2 mt-[2rem] bg-[#1c0230] w-full md:w-[280px] rounded-[2rem] shadow-lg">
                        <img className='object-cover w-[150px] sm:w-full rounded h-[50px]' src="/city2.jpg" alt="" />
                        <h1 className='text-white text-3xl  mt-8 mb-8  text-sora font-small'>
                            Design
                        </h1>
                        <span className="text-gray-400 text-xl font-small lg:text-xl"> Next, I create a comprehensive plan and design for the project. This includes outlining the project architecture, selecting appropriate technologies, and designing user interfaces that are intuitive and engaging.</span>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.2, ease: "easeOut" }} className="lg:p-8 p-4 mr-2 mt-[2rem] bg-[#1c0230] w-full md:w-[280px] rounded-[2rem] shadow-lg">
                        <img className='object-cover w-[150px] sm:w-full rounded h-[50px]' src="/city2.jpg" alt="" />
                        <h1 className='text-white text-3xl  mt-8 mb-8  text-sora font-small'>
                            Development
                        </h1>
                        <span className="text-gray-400 text-xl font-small lg:text-xl"> With a solid plan in place, I proceed to the development phase. I write clean, efficient, and scalable code, ensuring that each component is well-structured and maintainable. I leverage my expertise in frameworks like React, Express.js, and Node.js to build robust applications.</span>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.2, ease: "easeOut" }} className="lg:p-8 p-4 mr-2 mt-[2rem] bg-[#1c0230] w-full md:w-[280px] rounded-[2rem] shadow-lg">
                        <img className='object-cover w-[150px] sm:w-full rounded h-[50px]' src="/city2.jpg" alt="" />
                        <h1 className='text-white text-3xl  mt-8 mb-8  text-sora font-small'>
                            Deployment
                        </h1>
                        <span className="text-gray-400 text-xl font-small lg:text-xl">  Once the software is tested and approved, I manage the deployment process, ensuring a smooth transition to production. I also provide ongoing maintenance and support to address any issues that arise and to implement improvements based on user feedback.</span>
                    </motion.div>
                </div>
                <div className='mt-[4rem] m-8'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.2, ease: "easeOut" }} className='flex items-center'>
                        <h1 className='text-white text-2xl mt-8 lg:text-6xl sm:text-[1rem] md:text-[2rem] text-sora ml-3 font-bold'>
                            <Link to="/about">
                                <span>Skills</span>
                            </Link>
                        </h1>
                        <span className='text-4xl mt-8'>
                            <img className="w-[60px]" src="/gifs/shock.gif" alt="" />

                        </span>
                    </motion.div>
                    <div className='flex flex-row flex-wrap items-center justify-center bg-[#0f0c29] p-1 lg:p-4 overflow-hidden'>
                        <Marquee autoFill velocity={25} minScale={0.7} resetAfterTries={200} scatterRandomly>
                            {skills.map((items) => (
                                <div className='w-[300px] flex-col items-center justify-center flex overflow-hidden m-2' key={items.id}>
                                    <img src={items.imageUrl} className="w-[300px] h-[300px]  pl-[2rem]" alt={items.name} />
                                    <h1 className='text-white text-center font-sora text-2xl font-bold mt-[2rem]'>
                                        {items.skillname}
                                    </h1>
                                </div>
                            ))}
                        </Marquee>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default About;