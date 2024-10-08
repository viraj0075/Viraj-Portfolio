import React, { useState } from 'react';
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
  <nav className="fixed w-full z-10 top-0   border-gray-200 left-0 right-0 mb-3 p-4 px-6 sm:px-8 py-2.5  backdrop-blur-xl bg-[#0f0c29]/60">
      <div className="container flex flex-wrap justify-between items-center mx-auto  lg:px-24">
        <a href="/" className="flex items-center">
          <span className="self-center  font-extrabold whitespace-nowrap text-2xl text-purple-200 ml-4 ">VIRAJ</span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
        <div className={`${isOpen ? 'hidden' : ''} w-full md:block md:w-auto mx-2`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>  
              <Link to="about" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-lg font-semibold">About</Link>
            </li>
           
            <li>
              <Link to="/projectlist" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-lg font-semibold">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg font-semibold">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
