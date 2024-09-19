import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import Heading from './Components/Heading';
import AddTodo from './Components/AddTodo';
import Items from './Components/Items';
import FinalText from './Components/FinalText';
import { useState, useEffect } from 'react';
import { TodoItemsContext } from './store/todo-items-store';

function App() {
  const initialItems = [
    {
      name: "Buy milk",
      date: "04/10/2024",
    },
    {
      name: "Buy pen",
      date: "08/20/2024",
    },
    {
      name: "Go to market",
      date: "01/30/2025",
    },
  ];

  const [Toitems, setToitems] = useState(initialItems);
  const [finalText, setFinalText] = useState(''); // State to store final text message

  // Add new todo
  function change(itemName, dueDate) {
    const newTodoItems = [...Toitems, { name: itemName, date: dueDate }];
    setToitems(newTodoItems);
    setFinalText(''); // Clear the final message when a new item is added
  }

  // Delete a todo by index
  function deleteTodo(index) {
    const newTodoItems = Toitems.filter((_, i) => i !== index);
    setToitems(newTodoItems);
  }

  // Check if all tasks are completed using useEffect
  useEffect(() => {
    if (Toitems.length === 0) {
      setFinalText('All tasks completed!');
    } else {
      setFinalText(''); // Clear the message if there are items
    }
  }, [Toitems]); // Dependency on the todo items list

  return (
    <TodoItemsContext.Provider value={{ todoItems: Toitems, deleteTodo, finalText}}>
      <div>
        <center className="todo-container">
          <Heading />
          <AddTodo shiftToParent={change} />   
          <Items todoItems={Toitems} deleteItem={deleteTodo} /> {/**like how final is not passing any props , <Items /> should cause in provider and passing details which is gonaa be fetch by items compo but still  but for props explaination i have kept this thing as it is */}

        {/* Display final text if all tasks are completed     <FinalText message={finalText} />     */}
        <FinalText  />  {/** the abode code is passing messge so dodnt do this when u are using context */}
        </center>
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;






