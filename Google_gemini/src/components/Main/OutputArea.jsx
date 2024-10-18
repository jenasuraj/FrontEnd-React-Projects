import React from 'react'
import './Main.css';
const Output = ({output,display}) => {
  
  return (
    <div className={!display ? 'bottom-info' : null}>
    {output}
  </div>
  )
}

export default Output
