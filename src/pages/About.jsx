import React from 'react'
import { Link } from "react-router-dom"
import { skills } from '../utils/skill/skillimages'
import Marquee from 'react-fast-marquee'

const About = () => {

    return (
        <div className='lg:mx-28 border-gray-200 mt-2 mb-3 p-4 px-6 sm:px-8 py-2.5 flex items-center justify-between flex-wrap  '>
            <div className='overflow-x-hidden container mx-auto'>
                <div>
                    <div className='flex items-center'>
                        <h1 className='text-white text-6xl mt-4  text-sora ml-3 font-bold'>
                            <Link to="/about">
                                About me
                            </Link>
                        </h1>
                        <span className='text-4xl'>
                            👋
                        </span>
                    </div>
                    <h1 className='text-white text-3xl text-sora mt-4  ml-3 font-mono'>
                        I’m a designer from Ireland <br />🇮🇪 with a passion for pixels.

                    </h1>
                    <h1 className='text-gray-400 text-3xl text-sora ml-3   mt-4 font-mono'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Nobis adipisci imp itaque excepturi beatae temporibus<br /> sequi velit quasi corrupti doloremque, nisi fugiat! </h1>
                </div>
                <div className='flex items-center mt-[2rem] flex-wrap'>
                    <img className="ml-2 mt-4 rounded-lg mr-[2rem] w-full md:w-[300px] h-[350px]  object-cover" src={"/city1.jpg"} alt="" />
                    <img className="ml-2 mt-4 rounded-lg mr-[2rem] w-full md:w-[300px] h-[350px]  object-cover" src={"/city2.jpg"} alt="" />
                    <img className="ml-2 mt-4 rounded-lg mr-[2rem] w-full md:w-[300px] h-[350px]  object-cover" src={"/city3.jpg"} alt="" />

                </div>
                <div className='flex items-center'>
                    <h1 className='text-white text-6xl mt-8  text-sora ml-3 font-bold'>
                        <Link to="/about">
                            My Approch
                        </Link>
                    </h1>
                    <span className='text-4xl mt-8'>
                        😎
                    </span>
                </div>
                <div className='flex flex-row flex-wrap w-full'>
                    <div className="p-8 mr-2 mt-[2rem] bg-[#1c0230] w-full md:w-[280px] rounded-[2rem] shadow-lg">
                        <img className='w-[150px] sm:w-full rounded h-[50px]' src="/city2.jpg" alt="" />
                        <h1 className='text-white text-2xl mt-8  text-sora font-small'>
                            Hello
                        </h1>
                        <span className="text-white text-xl font-small lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci impedit aperiam minus quae mollitia ad ab ratione accusamus itaque excepturi beatae temporibus sequi velit quasi corrupti doloremque, nisi fugiat!</span>
                    </div>
                    <div className="p-8 mr-2 w-full mt-[2rem] md:w-[280px] bg-[#1c0230] rounded-[2rem] shadow-lg">
                        <img className='w-[150px] sm:w-full rounded h-[50px]' src="/city2.jpg" alt="" />
                        <h1 className='text-white text-2xl mt-8  text-sora font-small'>
                            Hello
                        </h1>
                        <span className="text-white text-xl font-small lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci impedit aperiam minus quae mollitia ad ab ratione accusamus itaque excepturi beatae temporibus sequi velit quasi corrupti doloremque, nisi fugiat!</span>
                    </div>
                    <div className="p-8 mr-2 w-full mt-[2rem] md:w-[280px] bg-[#1c0230] rounded-[2rem] shadow-lg">
                        <img className='w-[150px] sm:w-full rounded h-[50px]' src="/city2.jpg" alt="" />
                        <h1 className='text-white text-2xl mt-8  text-sora font-small'>
                            Hello
                        </h1>
                        <span className="text-white text-xl font-small lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci impedit aperiam minus quae mollitia ad ab ratione accusamus itaque excepturi beatae temporibus sequi velit quasi corrupti doloremque, nisi fugiat!</span>
                    </div>
                    <div className="p-8 mr-2 w-full mt-[2rem] md:w-[280px] bg-[#1c0230] rounded-[2rem] shadow-lg">
                        <img className='w-[150px] sm:w-full rounded h-[50px]' src="/city2.jpg" alt="" />
                        <h1 className='text-white text-2xl mt-8  text-sora font-small'>
                            Hello
                        </h1>
                        <span className="text-white text-xl font-small lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci impedit aperiam minus quae mollitia ad ab ratione accusamus itaque excepturi beatae temporibus sequi velit quasi corrupti doloremque, nisi fugiat!</span>
                    </div>
                </div>
                <div className='mt-[4rem] m-8'>
                    <div className='flex items-center'>
                        <h1 className='text-white text-6xl mt-8  text-sora ml-3 font-bold'>
                            <Link to="/about">
                                <span>Skills</span>
                            </Link>
                        </h1>
                        <span className='text-4xl mt-8'>
                            😎
                        </span>
                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-center bg-[#0f0c29]  p-4 overflow-hidden'>
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
        </div>
    )
}

export default About;