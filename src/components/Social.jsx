import React from 'react';
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const Social = () => {
  return (
      <div className='mx-8 sm:mx-2 md:mx-10 mt-20 lg:mx-36 '>
    <div className='container mx-auto mt-[4rem]'>
        <div className="flex flex-col items-center  bg-black text-white flex-wrap">
          <div className="flex flex-col  sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full ">
            <div className="flex w-full items-center bg-zinc-800 rounded-full p-4">
              <span className="text-gray-400 mr-4">Say hello!</span>
              <span className="text-lg sm:text-xl font-semibold">virajkoradia1313@gmail.com</span>
              <HiArrowRight className="ml-4 w-6 h-6 text-white" />
            </div>
            <div className="flex space-x-4">
              <div className="p-4 bg-zinc-800 rounded-lg">
                <FaTwitter className="text-blue-500 w-6 h-6" />
              </div>
              <div className="p-4 bg-zinc-800 rounded-lg">
                <FaInstagram className="text-pink-500 w-6 h-6" />
              </div>
              <div className="p-4 bg-zinc-800 rounded-lg">
                <FaDribbble className="text-pink-400 w-6 h-6" />
              </div>
              <div className="p-4 bg-zinc-800 rounded-lg">
                <FaBehance className="text-blue-400 w-6 h-6" />
              </div>
            </div>
          </div>
          <p className="text-sm text-zinc-400 mt-8 sm:mt-12">© Viraj. Built in React + Vite.</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
