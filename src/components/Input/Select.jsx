import React,{useId} from 'react'


const Select = ({
    label,
    className,
    option,
    ...props
}, ref) => {

    const id = useId()
  return (
    <div className=''>
        {label && <label htmlFor={id} className=''>{label}</label>}
      <select
      id={id}
      {...props}
      ref={ref}
      className={`${className}`}
      >
        {
            option?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))
        }
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
