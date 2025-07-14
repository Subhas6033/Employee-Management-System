import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import useDarkMode from '../../Constant/Constant';





const Footer = () => {

  const date = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
  });

  const isDark = useDarkMode()


  return (
    <footer className={`flex flex-col gap-5 md:flex-row justify-evenly items-center transition-all duration-300 ease-in md:min-h-[108px]  h-auto py-3 md:py-0 ${isDark ? "bg-gray-900 text-white" : "bg-slate-400 text-black"}`}>
      {/* <div className='p-10'> */}
      <p className=''>copyright &copy; <span className='underline'>{date}</span> All rights Reserved.</p>
      <p>Designed and Developed by
        <span className={`underline font-bold text-lg px-2 ${isDark ? "text-amber-400" : "text-red-700"}`}>
          <i>
            <Link to={'https://www.linkedin.com/in/subhas-mondal-bubai6033/'}>Subhas</Link>
          </i>
        </span>
      </p>

      <p>Last Updated On : 09 July 2025</p>

      {/* Social Media account */}
      {/* Social Media section */}
      <div className="flex flex-col items-center gap-2">
        <p className="underline text-md">Follow me on</p>

        <ul className="flex gap-4 items-center">
          <li>
            <Link to={'https://www.facebook.com/subhas.mondal.110244'}>
              <FaFacebook className="size-6 hover:text-blue-500 transition" />
            </Link>
          </li>
          <li>
            <Link to={'https://instagram.com/goalkeepersubhas'}>
              <FaInstagram className="size-6 hover:text-pink-400 transition" />
            </Link>
          </li>
          <li>
            <Link to={'https://github.com/Subhas6033'}>
              <FaGithub className="size-6 hover:text-slate-400 transition" />
            </Link>
          </li>
          <li>
            <Link to={'https://www.linkedin.com/in/subhas-mondal-bubai6033/'}>
              <FaLinkedin className="size-6 hover:text-blue-400 transition" />
            </Link>
          </li>
        </ul>
      </div>
    {/* </div> */}
    </footer>
  )
}

export default Footer
