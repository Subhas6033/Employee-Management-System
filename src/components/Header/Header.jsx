import React, { useEffect, useState } from 'react'
import { Signup, Button } from '../index'
import { useNavigate } from 'react-router-dom'
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import useDarkMode from '../../Hook/useDarkMode'
import "../../index.css"
import { toggleTheme } from '../../Features/ThemeSlice';
import { IoNotifications } from "react-icons/io5"; 
import { IoMdSettings } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";


const Header = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDark = useDarkMode()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Admin',
      slug: '/admin-dashboard',
      active: !true,
    },
    {
      name: 'Employee',
      slug: '/employee-dashboard',
      active: !true
    },
    {
      name: 'Tasklist',
      slug: '/tasklist',
      active: !true
    },
  ]

  useEffect(() => { }, [])

  return (
    <header className={`flex justify-between items-center py-2 px-4 overflow-x-hidden transition-all duration-300 ease-in`}>
      <div className='py-3 px-5 border border-slate-400 rounded-2xl'>
        <h1>Track your Employee</h1>
      </div>


      {/* Nav items starts from here  */}
      <div className='flex'>
        <nav className='px-4'>
          <ul className='hidden lg:flex justify-end items-end ml-auto gap-4 bg-white px-4 rounded-2xl'>
            {navItems.map((nav) => (
              <li key={nav.name}>
                <button
                  className={`px-5 py-4 text-md font-semibold focus:outline-none transition-all duration-200 hover:underline hover:cursor-pointer 
            ${nav.active ? "bg-gray-700 text-white rounded-2xl" : "text-black"}`}
                  onClick={() => navigate(nav.slug)}
                >
                  {nav.name}
                </button>
              </li>
            ))}

          </ul>
        </nav>


          <div className='lg:flex justify-center items-center gap-3 hidden'>
            {/* Signup Button */}
          <Button children={<FaUserLarge />} className='hover:cursor-pointer p-3 rounded-full' bgColor='bg-white' />


            {/* Settings  */}
            <button className='rounded-4xl p-2 bg-white text-sm font-semibold hover:cursor-pointer hover:scale-95'>
            <IoMdSettings className='size-5' />
            </button>

            {/* Notification */}
            <button className='rounded-full bg-white p-2 hover:cursor-pointer hover:scale-95'>
            <IoNotifications className='size-5' />
            </button>


            {/* Theme Toggle Button */}
            <button
            className={`rounded-full size-9 bg-white hover:cursor-pointer hover:scale-95`}
              onClick={() => dispatch(toggleTheme())}
            >
            {isDark ? <MdOutlineDarkMode className='size-9 text-center' /> : <CiLight className='size-9 text-center' />}
            </button>
          </div>
      </div>



            
      {/* Hamberg icons and notification icons in small screen */}
      <div className='flex justify-end items-center gap-5 lg:hidden'>
        {/* Notification */}
        <button className='rounded-full bg-white p-2 hover:cursor-pointer hover:scale-95'>
          <IoNotifications className='size-5' />
        </button>

      <button
        className='lg:hidden z-50 flex justify-end items-center'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        {isMenuOpen ? <RxCross2 className='text-white size-10 font-semibold' /> : <IoReorderThree className='text-white font-light size-10' />}
      </button>
      </div>

      {/* Navitems in small screen */}
      {isMenuOpen && (
        <nav
          className={`absolute top-0 right-0 w-64 h-screen flex flex-col items-center pt-28 px-4 shadow-lg overflow-x-hidden ${isDark ? "bg-gray-900 text-white" : "bg-slate-400 text-black"}`}
        >
          <ul className="space-y-10 text-lg w-full">
            {navItems.map((nav, index) => (
              <li
                key={nav.name}
                className={`w-full text-center transform transition duration-700 translate-x-0 opacity-100 overflow-hidden`}
                style={{
                  animation: `slide-in 0.8s ease-in-out`,
                  animationDelay: `${index * 600} ms`
                }}
              >
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(nav.slug);
                  }}
                  className="z-50 w-full py-2 px-4 rounded-md hover:bg-slate-700 text-white hover:text-yellow-300 transition duration-200"
                >
                  {nav.name}
                </button>
              </li>
            ))}

            {/* Conditionally Render the login / signup component */}
            <li className='text-center animate-slide-in'>
              <Signup />
            </li>


            {/* Theme button */}
            <li className='text-center animate-slide-in'>
              <button
                className='bg-slate-300 px-4 py-2 text-gray-900 rounded-sm hover:scale-105 transition-all duration-200'
                onClick={() => {
                  dispatch(toggleTheme())
                  setIsMenuOpen(false)
                }}
              >
                {isDark ? <MdOutlineDarkMode className='size-9 text-center' /> : <CiLight className='size-9 text-center' />}
              </button>
            </li>

            {/* Settings  */}
            <li className='text-center animate-slide-in'>
            <button className='rounded-md px-2 py-3 bg-white text-sm font-semibold hover:cursor-pointer hover:scale-95'>
            <p>Settings</p>
            </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
