import React from 'react'
import {Input, Select, Button} from '../../components/index'
import useDarkMode from '../../Constant/Constant'


const Employee = () => {

  const isDark = useDarkMode()


  return (
    <>
      {/* Search field of the employee */}
    <div className={`${isDark ? "bg-gray-900 text-white" : "bg-slate-400 text-black"} py-20 border`}>
      <div className='flex flex-col justify-between items-center h-auto md:flex-row md:mx-5'>
        {/* Name field */}
        <Input type='search' label= 'Enter the Employee Name : ' placeholder='' className="border-b p-2 focus:outline-none min-w-36 w-auto" />

        {/* Role Field */}
        
        <Select label={'Select the Role'} option={["Frontend Engineer", "Backend Engineer", "DevOps Engineer", "Designer", "AI-ML Engineer"]} className="border rounded-md p-2 focus:outline-none" />

        {/* Department */}
        <Select label={'Select Employee Department'} option={["IT", "Sales", "CA", "Social Media"]} className="border rounded-md p-2 focus:outline-none"/>

        {/* Buttons */}
      <div className='flex justify-center items-center gap-5'>
      <Button children={'Search'} type='submit' className={`text-black`} bgColor='bg-amber-300' />
      <Button children={'Reset'} type='submit' className={`text-black`} bgColor='bg-amber-300' />
      </div>
      </div>
    </div>

    {/* Search List for employee  */}
    <div className={``}>
      <div>
        <ul>
          {
            // TODO: Employee list will go here with paginations 
            <li></li>
          }
        </ul>
      </div>
    </div>

    </>
  )
}

export default Employee
