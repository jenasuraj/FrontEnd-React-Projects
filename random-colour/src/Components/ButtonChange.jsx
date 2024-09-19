import React from 'react'
import { useState } from 'react';
import Output from './Output';
const ButtonChange = ({arr}) => {
    
    const [color, setColor] = useState('');
    function ChangeBackground() {
        let RandomValue = Math.floor(Math.random() * arr.length);
          setColor(arr[RandomValue]); // Update the color state
        }
      
  return (
   <>
    <button onClick={ChangeBackground}>Change color</button>
    <Output color = {color}/>
   </>
  )
}

export default ButtonChange
