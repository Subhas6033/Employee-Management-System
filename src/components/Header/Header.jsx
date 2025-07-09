import React, { useEffect, useState } from 'react'
import { Signup,Button } from '../index'
import { useNavigate } from 'react-router-dom'
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux';
import "../../index.css"
import { toggleTheme } from '../../Features/ThemeSlice';

const Header = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isDark = useSelector((state)=> state.theme.isDarkMode)
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Admin Panel',
      slug: '/admin-dashboard',
      active: false,
    },
    {
      name: 'Employee Dashboard',
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
    <header className={`flex justify-between items-center py-2 px-4 overflow-x-hidden ${isDark ? "bg-gray-900 text-white" : "bg-slate-400 text-black"}`}>
      <div className='flex flex-col justify-between items-start px-3'>
        <h3 className='text-md'>Hello</h3>
        <h1 className='text-lg font-bold'>Subhas <span className='text-2xl'>👋</span></h1>
      </div>


      {/* Nav items starts from here  */}
      <nav className='px-4'>
        <ul className='hidden md:flex justify-start items-center gap-8'>
          {
            navItems.map((nav) => (
              <li
                key={nav.name}
              >
                <button
                  className={`hover:underline transition-all duration-200 hover:cursor-pointer text-md font-semibold focus:outline-none ${isDark ? "hover:text-amber-400"  : "hover:text-gray-950"} ${nav.active ? "text-black" : "text-white"}`}
                  onClick={() => navigate(nav.slug)}
                >
                  {nav.name}
                </button>
              </li>
            ))
          }

          {/* TODO: Conditionally Render the login and Signup button */}
          <Signup />


          {/* Theme Change Button */}
          <button
          className={`${isDark ? "bg-slate-300 text-gray-950" : "bg-gray-950 text-white"} px-5 py-2 rounded-md hover:scale-105 transition-all duration-200`}
          onClick={() => dispatch(toggleTheme())}
          >
            {isDark ? "Dark" : "Light"}
          </button>
        </ul>
      </nav>

      {/* Hamberg icons in small screen */}
      <button
        className='md:hidden z-50 flex justify-end items-center'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <RxCross2 className='text-white size-10 font-semibold' /> : <IoReorderThree className='text-white font-light size-10' />}
      </button>

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
              onClick={()=>{ 
                dispatch(toggleTheme())
                setIsMenuOpen(false)
              }}
              >
                {isDark ? "Dark" : "Light"}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
