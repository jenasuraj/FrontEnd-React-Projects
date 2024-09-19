import React, { useState } from 'react';
import QuestionList from './QuestionList';
import FinalPage from './FinalPage';
const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score,setScore] = useState(0);
    const questions = [
        {
            question: "What is your name",
            options: ["suraj jena", "sujit maharana", "balram pal", "subha mallik"],
            answer: "suraj jena",
        },
        {
            question: "What is your hobby",
            options: ["Singing", "Dancing", "Sleeping", "Coding"],
            answer: "Singing",
        },
        {
            question: "What is your last name",
            options: ["jena", "maharana", "pal", "mallik"],
            answer: "jena",
        },
        {
            question: "What is your middle name",
            options: ["kumar", "maharana", "pal", "suma"],
            answer: "kumar",
        }
    ];
    function handleClick(i)
    {
setCurrentAnswer(i);
if(i === questions[currentQuestionIndex].answer)
{
    setScore(score+1);
}
    }
    function NextQuestion()
    {
        setCurrentQuestionIndex( currentQuestionIndex + 1)
        setCurrentAnswer(null);
    }

    return (
        <>  
{currentQuestionIndex < questions.length ? 
  <div> 
 <QuestionList 
 question={questions[currentQuestionIndex].question} 
 options={questions[currentQuestionIndex].options} 
 handleClick={handleClick}  currentAnswer = {currentAnswer}
 
/>
<button  disabled= {currentAnswer == null} onClick={NextQuestion}>Next Question</button>
</div> : <FinalPage score={score}/>}
   
       
           
        </>
    );
}

export default Quiz;
