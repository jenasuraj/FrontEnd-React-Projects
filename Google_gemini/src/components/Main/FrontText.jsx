import React from 'react'
import './Main.css';
const FrontText = ({dynamicName}) => {
  return (
   <>
    <div className="greet">
                        <p><span>Hello, {dynamicName}</span></p>
                        <p>How can I assist you?</p>
                    </div>
   </>
  )
}

export default FrontText
