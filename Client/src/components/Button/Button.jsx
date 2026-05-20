import React from 'react'

const Button = ({
  children,
  type = 'button',
  className = '',
  bgColor = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-[var(--radius-md)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-[#0ea5e9] text-white hover:bg-[#0284c7] focus:ring-[#0ea5e9] shadow-[var(--shadow-accent)] hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-[#f1f5f9] text-[#1e293b] hover:bg-[#e2e8f0] focus:ring-[#e2e8f0]',
    outline: 'border-2 border-[#e2e8f0] text-[#1e293b] hover:border-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-[#e0f2fe] focus:ring-[#0ea5e9]',
    ghost: 'text-[#475569] hover:text-[#1e293b] hover:bg-[#f1f5f9] focus:ring-[#e2e8f0]',
    danger: 'bg-[#ef4444] text-white hover:bg-[#dc2626] focus:ring-[#ef4444]',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${bgColor}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button