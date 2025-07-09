import React from 'react'
import { useSelector } from 'react-redux'


const Card = () => {

  const isDark = useSelector((state) => state.theme.isDarkMode)



  return (
    <div className={`${isDark ? "" : ""}`}>
      
    </div>
  )
}

export default Card
