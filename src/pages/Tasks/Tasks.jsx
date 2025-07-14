import React from 'react'
import { Card } from '../../components/index'
import useDarkMode from '../../Hook/useDarkMode'
const Tasks = ({
  taskCategory = 'Accepted Task List',
  date = '',
  taskNumber = '',
  taskTitle = '',
  taskDescription = '',
}) => {

  const isDark = useDarkMode()
  const currentDate = new Date().toLocaleDateString()

  return (
    <div className={`overflow-x-hidden md:overflow-x-auto scroll-smooth md:h-[75vh] md:flex justify-evenly items-center custom-scrollbar transition-all duration-300 ease-in-out ${isDark ? "bg-darkBackground"  : "bg-lightBackground"}`}>
      
      {/* New Tasklist  */}
      <div className='md:hover:scale-105 hover:cursor-pointer'>
        <Card taskCategory='New Task List' date={date || currentDate} taskNumber={taskNumber || 'Your new task nummber goes here'} taskTitle={taskTitle || 'Your task title goes here'} taskDescription={taskDescription || 'New assign task description goes here'} />
      </div>

      {/* Accepted Tasklst */}
      <div className='md:hover:scale-105 hover:cursor-pointer'>
        <Card taskCategory={taskCategory} date={date || currentDate} taskNumber={ taskNumber || 'Your accepted task number goes here'} taskTitle={taskTitle || 'Your accepted task title'} taskDescription={taskDescription || 'Accepted task description goes here'} />
      </div>

      {/* Rejected Tasklist */}
      <div className='md:hover:scale-105 hover:cursor-pointer'>
        <Card taskCategory='Rejected Task List' date={date || currentDate} taskNumber={ taskNumber || 'Your rejected task number goes here'} taskTitle={taskTitle || 'Rajected Task Title'} taskDescription={taskDescription || 'Rejected task description'} />
      </div>

      {/* Failed Tasklist */}
      <div 
      className='md:hover:scale-105 hover:cursor-pointer'
      >
        <Card taskCategory='Failed Task List' date={date || currentDate} taskNumber={taskNumber || 'total failed task'} taskTitle={taskTitle || 'Failed Task Title'} taskDescription={taskDescription || 'Your Failed Task Description goes here'} />
      </div>
    </div>
  )
}

export default Tasks
