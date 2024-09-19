import React from 'react'

const Output = ({color}) => {
  return (
   <>
    <h1>{color}</h1>
      <div 
        className='ColorPage' 
        style={{ width: '200px', height: '200px', backgroundColor: color }}>
      </div>
   </>
  )
}

export default Output;
