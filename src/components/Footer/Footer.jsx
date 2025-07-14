import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import useDarkMode from '../../Hook/useDarkMode';
import { Button, Input } from '../index'

const Footer = () => {
  const date = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
  });

  const isDark = useDarkMode();

  return (
    <footer className={`${isDark ? "bg-gray-950" : "bg-slate-400"} h-auto relative pt-28 pb-24`}>
      {/* Curved background */}
      <div className="absolute top-0 left-0 w-full h-[168px] md:h-[88px] bg-indigo-600 rounded-b-[100%] z-0"></div>

      {/* Newsletter section */}
      <div className="absolute top-20 md:top-[50px] left-1/2 transform -translate-x-1/2 z-10 h-auto w-72 md:w-[650px] lg:w-[850px]">
        <div className={`bg-amber-300 text-black px-8 py-4 rounded-md shadow-2xl flex flex-col md:flex-row justify-between items-center gap-5 ${isDark ? "shadow-slate-500" : "shadow-black"}`}>
          <div className="flex-col">
            <h1 className="font-bold font-serif text-lg">Subscribe Newsletters</h1>
            <p className="hidden md:block text-sm font-light">Please subscribe to our newsletters so that you can get updates instantly.</p>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <Input
              type="email"
              placeholder="Enter your email..."
              className="outline-none placeholder:text-black focus:outline-none h-12 w-64 md:w-[450px] p-3 bg-amber-200 rounded-md"
            />
            <Button
              children="Subscribe"
              bgColor="bg-gray-950 text-white px-5 py-3 md:-ml-20 mt-3 md:mt-0"
              className='hover:cursor-pointer'
            />
          </div>
        </div>
      </div>

      {/* Footer links and social media */}
      <div className={`mt-42 lg:mt-12 px-5 ${isDark ? "text-white" : "text-black"}`}>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-6">
          {/* Links */}
          <ul className="flex flex-wrap justify-center md:justify-start items-center gap-5 text-[10px] font-normal font-serif">
            <li><Link to="#">Terms & Conditions</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Contact Us</Link></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link to="https://www.facebook.com/subhas.mondal.110244" target="_blank" aria-label="Facebook">
              <FaFacebook className="size-7 hover:scale-110 transition" />
            </Link>
            <Link to="https://instagram.com/goalkeepersubhas" target="_blank" aria-label="Instagram">
              <FaInstagram className="size-7 hover:scale-110 transition" />
            </Link>
            <Link to="https://github.com/Subhas6033" target="_blank" aria-label="GitHub">
              <FaGithub className="size-7 hover:scale-110 transition" />
            </Link>
            <Link to="https://www.linkedin.com/in/subhas-mondal-bubai6033/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="size-7 hover:scale-110 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={`absolute bottom-2 w-full px-5 text-sm ${isDark ? "text-white" : "text-black"}`}>
        <hr className="border-t border-white w-full mb-3" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className='text-[10px]'>copyright &copy; {date} All rights reserved.</p>
          <p className='text-[10px]'>
            <Link to={''}>
            Privacy and Policy
            </Link>
          </p>
          <p>Designed and Developed by <span className={`${isDark ? "text-amber-300" : "text-amber-700"}`}>
          <strong><em>
              <Link to={''}>Subhas</Link>  
            </em></strong>
          </span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
