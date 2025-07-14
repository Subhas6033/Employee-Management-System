import React from 'react'
import useDarkMode from '../../Hook/useDarkMode'

const Home = () => {
  const isDark = useDarkMode()


  return (
    <div className={`${isDark ? "bg-darkBackground" : "bg-lightBackground"} h-screen`}>
      <p className='text-dark'>Hello World!</p>
    </div>
  )
}

export default Home
