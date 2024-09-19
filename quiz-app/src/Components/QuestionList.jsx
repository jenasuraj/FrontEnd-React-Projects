import React from 'react'
import Quiz from './Quiz';
const QuestionList = ({question,options,handleClick,currentAnswer}) => {
    console.log(question);
  return (
   <>
   <h1>{question}</h1>
   <ul>
    {options.map((i,index)=>( <li  key={index} onClick={()=>handleClick(i)}
     className={currentAnswer === i ? 'selected' : ''}>{i}</li>) )}
   </ul> 
   </>
  )
}

export default QuestionList
//try to pass function with arrow when lifting state up comes like how handleclick is passed