import React from 'react'
import { useSelector } from 'react-redux'

const useDarkMode = () => {
  return useSelector((state) => state.theme.isDarkMode)
}

export default useDarkMode
