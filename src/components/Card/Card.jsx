import React from 'react'
import { useSelector } from 'react-redux'


const Card = ({
  taskCategory,
  date,
  taskNumber,
  taskTitle,
  taskDescription,
}) => {

  const isDark = useSelector((state) => state.theme.isDarkMode)

  return (
    <div className={`${isDark ? "bg-gray-950 text-slate-200" : "bg-indigo-300 text-gray-900"} min-h-56 h-auto max-w-[95%] md:w-72 m-2 border-2 rounded-md`}>


      {/* Task Category and Date area */}
      <div className='flex justify-between items-center gap-5 p-2'>
        <p className='text-md font-bold'> {taskCategory} </p>
        <p className='text-[12px]'> {date} </p>
      </div>

    {/* Task title area */}
      <div className='flex flex-col items-center justify-center mt-2'>
        <p> {taskNumber} </p>
        <h1> {taskTitle} </h1>
      </div>

    {/* Task Description area */}
      <div className='mt-4 bg-slate-500 rounded-b-md rounded-t-2xl min-h-28 h-auto'>
        <p className='p-2 h-full'> {taskDescription} </p>
      </div>
    </div>
  )
}

export default Card
