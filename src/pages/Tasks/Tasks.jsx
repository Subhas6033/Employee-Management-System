import React from 'react'
import { Card } from '../../components/index'
const Tasks = ({
  taskCategory = 'Accepted Task List',
  date = 'dd-mm-yyyy',
  taskNumber = 105,
  taskTitle = 'Responsive issue found in page',
  taskDescription = 'Make the page responsive.'
}) => {
  return (
    <div className={`overflow-x-hidden md:overflow-x-auto scroll-smooth md:h-[75vh] md:flex justify-evenly items-center custom-scrollbar transition-all duration-300 ease-in-out`}>
      
      {/* New Tasklist  */}
      <div className='hover:scale-105 hover:cursor-pointer'>
        <Card taskCategory='New Task List' date={date} taskNumber={taskNumber - taskNumber + 1} taskTitle={taskTitle} taskDescription={taskDescription} />
      </div>

      {/* Accepted Tasklst */}
      <div className='hover:scale-105 hover:cursor-pointer'>
        <Card taskCategory={taskCategory} date={date} taskNumber={taskNumber} taskTitle={taskTitle} taskDescription={taskDescription} />
      </div>

      {/* Rejected Tasklist */}
      <div className='hover:scale-105 hover:cursor-pointer'>
        <Card taskCategory='Rejected Task List' date={date} taskNumber={taskNumber - 10} taskTitle={taskTitle} taskDescription={taskDescription} />
      </div>

      {/* Failed Tasklist */}
      <div 
      className='hover:scale-105 hover:cursor-pointer'
      >
        <Card taskCategory='Failed Task List' date={date} taskNumber={taskNumber + 1} taskTitle={taskTitle} taskDescription={taskDescription} />
      </div>
    </div>
  )
}

export default Tasks
