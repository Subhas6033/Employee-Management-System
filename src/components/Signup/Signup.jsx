import React from 'react'
import {Button} from '../index'



const Signup = ({className}) => {
  return <Button children={'Sign up'} className = {`rounded-4xl  px-3 py-3 text-black ${className}`} bgColor='bg-white' />
}

export default Signup
