import React,{useId} from 'react'

const Input = ({
    label,
    type = 'text',
    placeholder = 'Enter the Text...',
    className = '',
    ...props
}, ref) => {

    const id = useId()

  return (
    <div>
        {
              label && <label htmlFor={id} className='absolute left-3 top-12 text-gray-500 text-sm transition-all duration-200 transform
                     peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                     peer-placeholder-shown:text-gray-400
                     peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:scale-105'>
                {label}
            </label>
        }

        <input
        type={type}
        className={`${className}`}
        ref={ref}
        id={id}
        placeholder={placeholder}
        {...props}
        />
    </div>
  )
}

export default React.forwardRef(Input)
