import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-[#0f0c29] flex items-center justify-center p-5">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-center font-sora">Contact.</h1>
        <p className="text-gray-400 text-center font-sora mb-4 text-xl lg:text-2xl">Get in touch if you would like to work together.</p>
        <p className="text-gray-400 text-center font-sora mb-8 text-xl lg:text-2xl">Thanks for stopping by. 🤘</p>
        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full sm:w-1/2 p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full sm:w-1/2 p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <textarea 
            placeholder="Message" 
            className="w-full p-3 bg-gray-800 text-white rounded h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button 
            type="submit" 
            className="w-full bg-white text-black py-3 rounded hover:bg-gray-200 transition duration-200">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
