import React from 'react'

const Button = ({
    children,
    type = 'button',
    className = '',
    bgColor = 'bg-slate-300',
    ...props
}) => {
  return (
    <div>
      <button 
      type={type}
              className={`${className} ${bgColor} rounded-md px-3 py-2 text-black font-semibold hover:scale-105 transition-all duration-200 ease-in-out`} {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
