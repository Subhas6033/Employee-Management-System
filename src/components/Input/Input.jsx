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
            label && <label htmlFor={id}>
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
