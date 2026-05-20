import React, { useId, forwardRef } from 'react'

const Input = forwardRef(({
  label,
  type = 'text',
  placeholder = 'Enter text...',
  className = '',
  error,
  disabled = false,
  ...props
}, ref) => {
  const id = useId()

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-[#475569] mb-1.5"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 rounded-[var(--radius-md)] border border-[#e2e8f0] bg-white text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#e0f2fe] transition-all duration-200 disabled:bg-[#f1f5f9] disabled:cursor-not-allowed hover:border-[#cbd5e1] ${error ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#fee2e2]' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-[#ef4444]">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input