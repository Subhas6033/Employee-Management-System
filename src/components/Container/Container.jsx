import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-auto h-auto bg-[radial-gradient(ellipse_at_top_left,_#e1ecf0_0%,_#cbd5e1_10%,_#eddd53_100%)]'>
      {children}
    </div>
  )
}

export default Container
