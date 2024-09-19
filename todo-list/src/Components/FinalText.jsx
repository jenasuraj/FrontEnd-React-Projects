import React, { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';

const FinalText = () => {//once u are passing data i.e finalText , dont pass props to this function from the compo where its called(app.js <final compo>)
  // Use correct context value (finalText, not FinalText)
  const { finalText } = useContext(TodoItemsContext);

  return (
    <div>
      <h2>{finalText}</h2>
    </div>
  );
}

export default FinalText;
