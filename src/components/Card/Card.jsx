import React from 'react'
import useDarkMode from '../../Hook/useDarkMode'
import "../../index.css"

const Card = ({
  taskCategory,
  date,
  taskNumber,
  taskTitle,
  taskDescription,
  className =''
}) => {

  const isDark = useDarkMode()

  return (
    <div className={`${isDark ? "bg-darkCard text-darkPrimaryTxt" : "bg-cardBackground text-primaryColor"} min-h-56 h-auto max-w-[95%] md:w-80 md:h-80 m-2 border-3 rounded-md ${className}`}>


      {/* Task Category and Date area */}
      <div className='flex justify-between items-center gap-5 p-2'>
        <p className='text-md font-bold'> {taskCategory} </p>
        <p className='text-[12px]'> {date} </p>
      </div>

    {/* Task title area */}
      <div className='flex flex-col items-center justify-center mt-5 h-fit md:relative top-2'>
        <p> {taskNumber} </p>
        <h1 className='text-center'> {taskTitle} </h1>
      </div>

    {/* Task Description area */}
      <div className='mt-4 rounded-b-md bg-slate-500 rounded-t-2xl min-h-42 h-auto md:relative top-6'>
        <p className='p-2 h-auto'> {taskDescription} </p>
      </div>
    </div>
  )
}

export default Card
