import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { containerVar } from '../components/Animations';
import { sendEmail } from '../components/Email';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await sendEmail(formData);
      toast.success('Message sent successfully!', { position: 'top-right' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', { position: 'top-right' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      variants={containerVar}
      initial="hidden"
      animate="show"
      className="mt-20 min-h-screen bg-[#0f0c29] flex items-center justify-center p-5"
    >
     <Toaster/>
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-center font-sora">Contact.</h1>
          <img className="w-[60px] h-[60px]" src="/gifs/yo.gif" alt="Contact Gif" />
        </div>
        <p className="text-gray-400 text-center font-sora mb-4 text-xl lg:text-2xl">Get in touch if you would like to work together.</p>
        <p className="text-gray-400 text-center font-sora mb-8 text-xl lg:text-2xl">Thanks for stopping by.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full sm:w-1/2 p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              placeholder="Enter your Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full sm:w-1/2 p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 text-white rounded h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-white text-black py-3 rounded hover:bg-gray-200 transition duration-200"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
