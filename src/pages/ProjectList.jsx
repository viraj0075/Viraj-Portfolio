import React from 'react'
import { projectData } from '../utils/Projects/ProjectjsData';
import { Link } from 'react-router-dom';
import { projVar, containerVar } from '../components/Animations';
import { motion } from 'framer-motion';

const ProjectList = () => {
    return (
        <div className='mx-8 sm:mx-2 md:mx-10 mt-20 lg:mx-36 '>
            <motion.div initial="hidden"
                animate="show" variants={projVar} className='mt-[4rem] container mx-auto'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    variants={containerVar} className='flex items-center justify-center flex-wrap mx-2'>
                    <h1 className='text-white text-center text-2xl mt-8 lg:text-6xl sm:text-[1rem] md:text-[2rem] text-sora ml-3 font-bold'>
                        All Projects
                    </h1>
                    <span className='text-4xl mt-8 '>
                        😎
                    </span>
                </motion.div>
                <div className='bg-[#0f0c29] mt-[2rem] overflow-hidden'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projectData.map((items) => (items.id <= 4 && (
                            <motion.div 
                                variants={containerVar}
                                key={items.id}
                                className="relative bg-[#1c0230] p-4 rounded-lg overflow-hidden"
                            >
                                <Link to={`/project/${items.id}`}>
                                    <img
                                        src={items.photo?.image1}
                                        alt={items.heading}
                                        className="w-full h-[25rem] object-cover rounded-lg"
                                    />
                                    <h3 className="text-3xl text-white font-sora font-bold mt-4">{items.heading}</h3>
                                </Link>
                                <p className="text-gray-300 text-2xl font-mono">{items.tags.tag1}</p>
                                <div className="absolute top-4 right-4 blinking-2 text-green-400">
                                    <Link to={`/project/${items.id}`}>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-12 h-12 text-green-500 bg-[#1c0230] transition-transform duration-300 transform hover:scale-125"
                                        >
                                            <path
                                                className="transition-all duration-300"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 7c1.5 1.5 3 3 5 5m0 0c-1.5-1.5-3-3-5-5m5 5H6"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        )))}
                    </div>
                </div>
            </motion.div>


        </div>
    )
}

export default ProjectList;