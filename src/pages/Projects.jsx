import React from 'react'
import { useParams } from 'react-router-dom'
import { projectData } from '../utils/Projects/ProjectjsData';



const Projects = () => {
    const { id } = useParams();
    const project = projectData.find(items => items.id === parseInt(id));
    const data = [{...project}]
    console.log(project)
    return (
        <div className="lg:mx-32 border-gray-200 mt-2 mb-3 p-4 px-6 sm:px-8 py-2.5 flex items-center justify-between flex-wrap  ">
            {data.map((items) => (

                    <div className='mt-[4rem] container mx-auto'>
                        <div className='flex flex-col items-center justify-center'>
                            <div>
                                <h1 className='text-white text-center text-2xl mt-8 lg:text-6xl sm:text-2xl md:text-3xl text-sora ml-3 font-bold'>{items.heading}</h1>
                            </div>
                            <div className='flex flex-wrap items-center justify-center mt-5'>
                                <div className="mt-4 p-4 bg-[#2a0147] rounded-full shadow-lg">
                                    <span className="text-white">{items.tags?.tag1}</span>
                                </div>
                                <div className="mt-4  ml-0 md:ml-3  lg:ml-3  p-4 bg-[#2d034d] rounded-full shadow-lg">
                                    <span className="text-white">{items.tags?.date}</span>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <img className="rounded-[2rem] h-[450px] sm:[200px] md:h-[500px] lg:h-[600px] object-cover " src={items?.photo?.image1} />
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-white text-2xl mt-8 lg:text-4xl sm:text-2xl md:text-3xl text-sora ml-2 lg:mx-[5rem] font-bold font-sora'>About Project</h1>
                                </div>
                                <div>
                                    <div className="flex items-center mx-2 lg:mx-[5rem]  mt-[2rem]  rounded-[2rem] shadow-lg">
                                        <span className="text-gray-400 text-xl lg:text-2xl">{items?.description}
                                        </span>
                                    </div>
                                </div>


                            </div>
                            <div className='mt-8'>
                                <img className="rounded-[2rem] h-[500px] sm:[200px] md:h-[500px] lg:h-[600px] object-cover " src={items?.photo?.image2} />
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-white text-2xl mt-8 lg:text-4xl sm:text-2xl md:text-3xl text-sora ml-2 lg:mx-[5rem] font-bold font-sora'>Conclusion</h1>
                                </div>
                                <div>
                                    <div className="flex items-center mx-2 lg:mx-[5rem]  mt-[2rem]  rounded-[2rem] shadow-lg">
                                        <span className="text-gray-400 text-xl lg:text-2xl">{items?.conclusion}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))

            }
        </div>
    )
}

export default Projects