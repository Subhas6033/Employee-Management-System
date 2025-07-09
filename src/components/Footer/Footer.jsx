import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useSelector } from 'react-redux';





const Footer = () => {

  const date = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const isDark = useSelector((state) => state.theme.isDarkMode)


  return (
    <footer className={`text-center py-4 flex flex-col gap-3 md:flex-row justify-evenly items-center px-5 ${isDark ? "bg-gray-900 text-white" : "bg-slate-400 text-black"}`}>
      <p>copyright &copy; <span className='underline'>{date}</span> All rights Reserved.</p>
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

    </footer>
  )
}

export default Footer
