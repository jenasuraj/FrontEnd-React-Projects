import React from 'react'
import { assets } from '../../assets/assets';
import './Main.css';
import { useState } from 'react';

const Pages = ({input,setInput}) => {
  return (
 <>
 <div className="cards">
    
                           <div className="card" onClick={()=>setInput('Suggest beautiful places to see on the upcoming road trip')}>
                               <p>Suggest beautiful places to see on the upcoming road trip</p>
                               <img src={assets.compass_icon} alt="" />
                           </div>
                           <div className="card"
                           onClick={()=>setInput('Briefly summarize this concept: urban planning')}
                           >
                               <p>Briefly summarize this concept: urban planning</p>
                               <img src={assets.bulb_icon} alt="" />
                           </div>
                           <div className="card"
                           onClick={()=>setInput('Brainstorm team bonding activities for our work retreat')}
                           >
                               <p>Brainstorm team bonding activities for our work retreat</p>
                               <img src={assets.message_icon} alt="" />
                           </div>
                           <div className="card"
                           onClick={()=>setInput('Improve the readability of the following code')}
                           >
                               <p>Improve the readability of the following code</p>
                               <img src={assets.code_icon} alt="" />
                           </div>
                       </div>
 </>
  )
}

export default Pages
