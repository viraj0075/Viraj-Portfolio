import React from 'react';
import { FaTwitter, FaInstagram,  FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from "framer-motion";
import { containerVar } from './Animations';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <motion.div variants={containerVar} initial="hidden" animate="show" className='mx-8 sm:mx-0 md:mx-10 mt-20 lg:mx-36'>
      <div className='container mx-auto mt-[4rem]'>

        <div className="flex w-full justify-center flex-wrap mr-2 items-center bg-[#1c0230] rounded-[1.7rem] p-4 ">
          <h1 className="text-gray-400 mr-4">Say hello!</h1>
          <Link to="/contact">
          <div className='flex flex-wrap items-center justify-center'>

            <h1 className="text-md text-white sm:text-[12px] md:text-[24px] lg:text-lg font-semibold">virajkoradia1313@gmail.com</h1>
            <HiArrowRight className=" ml-2 w-6 h-6 text-white" />
          </div>
          </Link>

          <Link to="https://github.com/viraj0075">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="p-8 bg-[#1c0230] rounded-lg">
            <FaGithub className="text-blue-500 w-8 h-8" />
          </motion.div>
          </Link>
          <Link to="https://www.linkedin.com/in/viraj-koradia/">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="p-8 bg-[#1c0230] rounded-lg">
            <FaLinkedin className="text-purple-500 w-8 h-8" />
          </motion.div>
          </Link>
          <Link to="https://www.instagram.com/viraj.koradia/">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="p-8 bg-[#1c0230] rounded-lg">
            <FaInstagram className="text-pink-500 w-8 h-8" />
          </motion.div>
          </Link>
          <Link to="https://virajkoradia.medium.com/">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="p-8 bg-[#1c0230] rounded-lg">
            <FaMedium className="text-yellow-500 w-8 h-8" />
          </motion.div>
          </Link>
        
        </div>

      </div>
      <p className="text-sm text-center mb-8 text-zinc-400 mt-8 sm:mt-12">© Viraj. Built in React + Vite.</p>
    </motion.div>
  );
};

export default Social;
