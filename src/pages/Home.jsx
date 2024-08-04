import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { skills } from '../utils/skill/skillimages';
import { WorkData } from '../utils/work/WorkData';
import Experience from '../components/Experience';
import Social from '../components/Social';
const Home = () => {
    return (
        <>
            <div className=' mx-4 sm:mx-2 md:mx-10 mt-20 lg:mx-32 mb-3 flex items-center justify-between flex-wrap'>
                <div className='container mx-auto flex justify-between flex-wrap'>

                    <div>
                        <div className='w-[212px]'>
                            <div className="flex items-center p-4 bg-zinc-800 rounded-full shadow-lg">
                                <span className=" blinking w-3 h-3 bg-green-500 rounded-full mx-2"></span>
                                <span className="text-white">Available for hire</span>
                            </div>
                        </div>
                        <div className='mt-3 ml-2'>
                            <div className='text-white' >
                                <span className='text-3xl  sm:text-3xl md:text-4xl lg:text-6xl font-sora font-bold pt-2'>Hi, I’m VIRAJ,</span><br />
                                <span className='text-3xl  sm:text-3xl md:text-4xl lg:text-6xl font-sora font-bold pt-2'>a Software
                                    Developer</span><br />
                                <span className='text-3xl  sm:text-3xl md:text-4xl lg:text-6xl font-sora font-bold pt-2'>from India.</span>
                            </div>
                            <div className='text-gray-400 pt-8' >
                                <span className='text-xl  sm:text-2xl md:text-2xl lg:text-2xl font-sans font-sm mt-2'>With a background in industrial design and a keen eye </span><br />
                                <span className='text-xl  sm:text-2xl md:text-2xl lg:text-2xl font-sans font-sm mt-2'>a Softwarefor detail, I excel at transforming concepts into </span><br />
                                <span className='text-xl  sm:text-2xl md:text-2xl lg:text-2xl font-sans font-sm mt-2'>tangible realities by seamlessly integrating aesthetics  </span><br />
                                <span className='text-xl  sm:text-2xl md:text-2xl lg:text-2xl font-sans font-sm mt-2'>with practical functionality.</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <img className='w-[350px] h-[300px] sm:w-[400px] sm:h-[350px] lg:w-[450px] lg:h-[400px] border-b-orange-500 rounded-[4rem] object-cover bg-center' src={"/Viraj (1).jpg"} alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-[8rem]">
                <Marquee direction="left" pauseOnHover className="text-white text-9xl text-sora font-bold overflow-hidden">
                    <div className='flex items-center'>
                        <span className="w-3 h-3 bg-green-500 rounded-full mx-2"></span>

                        <span>SOFTWARE DEVELOPER</span>
                        <span className="w-3 h-3 bg-green-500 rounded-full mx-2"></span>
                        <span>SOFTWARE DEVELOPER</span>
                        <span className="w-3 h-3 bg-green-500 rounded-full mx-2"></span>
                        <span>SOFTWARE DEVELOPER</span>
                        <span className="w-3 h-3 bg-green-500 rounded-full mx-2"></span >
                        <span>SOFTWARE DEVELOPER</span>
                    </div>

                </Marquee>
                <Marquee direction="right" pauseOnHover className="text-white text-9xl text-sora font-bold mt-8 overflow-hidden"  >
                    <div className='flex items-center'>
                        <span className="w-3 h-3 bg-green-500 rounded-full mx-2"></span>

                        <span>FULL STACK DEVELOPER</span>
                        <div className="w-3 h-3 bg-green-500 rounded-full mx-2"></div>
                        <span>FULL STACK DEVELOPER</span>
                        <div className="w-3 h-3 bg-green-500 rounded-full mx-2"></div>
                        <span>FULL STACK DEVELOPER</span>
                        <div className="w-3 h-3 bg-green-500 rounded-full mx-2"></div>
                        <span>FULL STACK DEVELOPER</span>
                    </div>

                </Marquee>
            </div>
            <div className='mx-8 sm:mx-2 md:mx-10 mt-20 lg:mx-32 flex items-center justify-between flex-wrap'>
                <div className='container mx-auto'>
                    <div className='flex items-center flex-wrap'>
                        <div>

                        <h1 className='text-white text-4xl mt-8 lg:text-6xl sm:text-3xl md:text-4xl text-sora ml-3 font-bold'>
                            <Link to="/about">
                                About me
                            </Link>
                        </h1>
                        </div>
                        <div>
                        <span className='text-4xl'>
                            👋
                            
                        </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center p-8 mt-[2rem] bg-zinc-800 rounded-[2rem] shadow-lg">
                            <span className="text-white text-2xl lg:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci impedit aperiam minus quae mollitia ad ab ratione accusamus itaque excepturi beatae temporibus sequi velit quasi corrupti doloremque, nisi fugiat!
                                <Link to="/about">
                                    <h1 className='text-green-500 blinking text-2xl'>
                                        Know More....
                                    </h1>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-8 sm:mx-2 md:mx-10 mt-20 lg:mx-32 '>
                <div className='mt-[4rem] m-8 container mx-auto mb-[4rem]'>
                    <div className='flex items-center flex-wrap'>
                        <h1 className='text-white text-4xl mt-8 lg:text-6xl sm:text-3xl md:text-4xl text-sora ml-3 font-bold'>
                                Skills
                        </h1>
                        <span className='text-4xl'>
                            😎
                        </span>
                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-center bg-black  p-4 overflow-hidden'>
                        <Marquee autoFill velocity={25} minScale={0.7} resetAfterTries={200} scatterRandomly>
                            {skills.map((items) => (
                                <div className='w-[300px] flex-col items-center justify-center flex overflow-hidden m-2' key={items.id}>
                                    <img src={items.imageUrl} className="w-[300px] h-[300px]   pl-[2rem]" alt={items.name} />
                                    <h1 className='text-white text-center font-sora text-2xl font-bold mt-[2rem]'>
                                        {items.skillname}
                                    </h1>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
            <div className='mx-8 sm:mx-2 md:mx-10 mt-20 lg:mx-32 '>
            <div className='mt-[4rem] container mx-auto'>
                <div className='flex items-center flex-wrap mx-2'>
                    <h1 className='text-white text-4xl mt-8 lg:text-6xl sm:text-3xl md:text-4xl text-sora ml-3 font-bold'>
                            Recent Projects
                    </h1>
                    <span className='text-4xl mt-8 '>
                        😎
                    </span>
                </div>
                <div className='bg-black mt-[2rem]  p-4 overflow-hidden'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {WorkData.map((work) => (work.id <= 4 && (
                            <div
                                key={work.id}
                                className="relative bg-zinc-800 p-4 rounded-lg overflow-hidden"
                            >
                                <img
                                    src={work.imageUrl}
                                    alt={work.title}
                                    className="w-full h-[25rem] object-cover rounded-lg"
                                />
                                <h3 className="text-3xl text-white font-sora font-bold mt-4">{work.title}</h3>
                                <p className="text-gray-300 text-2xl font-mono">{work.category}</p>
                                <div className="absolute top-4 right-4 blinking-2 text-green-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-12 h-12 text-green-500 bg-zinc-800 transition-transform duration-300 transform hover:scale-125"
                                    >
                                        <path
                                            className="transition-all duration-300"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 7c1.5 1.5 3 3 5 5m0 0c-1.5-1.5-3-3-5-5m5 5H6"
                                        />
                                    </svg>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </div>

            
            <div className='mt-[4rem] container mx-auto'>
                <div className='flex items-center flex-wrap mx-2'>
                    <h1 className='text-white text-4xl mt-8 lg:text-6xl sm:text-3xl md:text-4xl text-sora ml-3 font-bold'>
                    Experience  
                    </h1>
                    <span className='text-4xl mt-8 '>
                        😎
                    </span>
                </div>
                <div className='bg-black mt-[2rem]  p-4 overflow-hidden'>
                    <Experience/>
                </div>
            </div>
            <div className='mt-[4rem] container mx-auto'>
                <div className='flex items-center flex-wrap mx-2'>
                    <h1 className='text-white text-4xl mt-8 lg:text-6xl sm:text-3xl md:text-4xl text-sora ml-3 font-bold'>
                    Socials  
                    </h1>
                    <span className='text-4xl mt-8 '>
                        😎
                    </span>
                </div>
            </div>
            </div>

        </>
    )
}

export default Home