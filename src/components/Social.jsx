import React from 'react';
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from "framer-motion";
import { containerVar } from './Animations';

const Social = () => {
  return (
    <motion.div variants={containerVar} initial="hidden" animate="show" className='mx-8 sm:mx-0 md:mx-10 mt-20 lg:mx-36'>
      <div className='container mx-auto mt-[4rem]'>

        <div className="flex w-full justify-center flex-wrap mr-2 items-center bg-[#1c0230] rounded-[1.7rem] p-4 ">
          <h1 className="text-gray-400 mr-4">Say hello!</h1>
          <div className='flex flex-wrap items-center justify-center'>

            <h1 className="text-md text-white sm:text-[12px] md:text-[24px] lg:text-lg font-semibold">virajkoradia1313@gmail.com</h1>
            <HiArrowRight className=" ml-2 w-6 h-6 text-white" />
          </div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="p-8 bg-[#1c0230] rounded-lg">
            <FaTwitter className="text-blue-500 w-8 h-8" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="p-8 bg-[#1c0230] rounded-lg">
            <FaInstagram className="text-pink-500 w-8  h-8" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="p-8 bg-[#1c0230] rounded-lg">
            <FaDribbble className="text-pink-400 w-8   h-8" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="p-8 bg-[#1c0230] rounded-lg">
            <FaBehance className="text-blue-400 w-8  h-8" />
          </motion.div>
        </div>

      </div>
      <p className="text-sm text-center mb-8 text-zinc-400 mt-8 sm:mt-12">© Viraj. Built in React + Vite.</p>
    </motion.div>
  );
};

export default Social;
