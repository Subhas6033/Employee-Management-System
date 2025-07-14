import React from 'react'

const Button = ({
    children,
    type = 'button',
    className = '',
    bgColor = '',
    ...props
}) => {
  return (
    <div>
      <button 
      type={type}
        className={`${className} ${bgColor} text-black font-semibold hover:scale-105 transition-all duration-200 ease-in-out`} {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
