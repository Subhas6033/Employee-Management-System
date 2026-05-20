import React from 'react'
import "../../index.css"

const Card = ({
  taskCategory = 'Task Category',
  date = 'Dec 20, 2024',
  taskNumber = '01',
  taskTitle = 'Task Title',
  taskDescription = 'Task description goes here...',
  className = '',
  children
}) => {

  return (
    <div className={`bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[#e2e8f0] overflow-hidden hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300 ${className}`}>
      <div className="p-4 border-b border-[#e2e8f0] bg-[#f8fafc]">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#1e293b]">{taskCategory}</h3>
          <span className="text-xs text-[#94a3b8]">{date}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="text-center mb-4">
          <p className="text-4xl font-bold text-[#0ea5e9]">{taskNumber}</p>
          <h4 className="text-lg font-medium text-[#1e293b] mt-2">{taskTitle}</h4>
        </div>
        {children ? (
          children
        ) : (
          <p className="text-sm text-[#475569] text-center">
            {taskDescription}
          </p>
        )}
      </div>
    </div>
  )
}

export default Card