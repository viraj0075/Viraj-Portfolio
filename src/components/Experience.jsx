import React, { useState } from 'react';
import { ExpData } from '../utils/Experience/ExpData';
import { motion } from 'framer-motion';
import { containerVar } from './Animations';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" bg-[#0f0c29] text-white">
      <div className="space-y-2 sm:space-y-4">
        {ExpData.map((item, index) => (
          <motion.div variants={containerVar} initial="hidden" animate="show" key={item.id}>
            <motion.div

              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex ml-2 flex-col md:flex-row items-start md:items-start justify-start p-4 flex-wrap bg-[#1c0230] rounded-lg cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-start space-x-2 sm:space-x-4 w-full flex-wrap">
                <div className="text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 transform transition-transform ${activeIndex === index ? 'rotate-90' : ''}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="text-base sm:text-lg">
                  <span>{item.period}</span>
                </div>
                <div className="text-base sm:text-lg font-semibold flex-grow">
                  <span>{item.company}</span>
                </div>
              </div>
              <div className="text-base ml-3 sm:text-lg text-gray-400 mt-2 md:mt-0 md:text-right">
                {item.title}
              </div>
            </motion.div>
            {activeIndex === index && (
              <div className="p-4 bg-[#17033b] rounded-lg mt-2">
                <p>{item.details}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
