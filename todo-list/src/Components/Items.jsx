/*import React from 'react';
import TodoItem from './TodoItem';
import { TodoItemsContext } from '../store/todo-items-store';
import { useContext } from 'react';

const Items = ({ deleteItem }) => {
  const [todoItems] = useContext(TodoItemsContext); // Get todo items from context i.todo-items-store.jsx

  return (
    <div className="items-container">
      {todoItems.map((todo, index) => (
        <TodoItem
          key={index}
          task1={todo.name}
          date1={todo.date}
          onDelete={() => deleteItem(index)} // Pass the delete function with the index
        />
      ))}
    </div>
  );
};

export default Items;*/


import React from 'react';
import TodoItem from './TodoItem';
import { TodoItemsContext } from '../store/todo-items-store';
import { useContext } from 'react';

const Items = () => { //in above code without context, the function was passwd from app to this i.e deleteitem , but it got passed from app i context and called here
  const { todoItems, deleteTodo } = useContext(TodoItemsContext); // Accessing todoItems from the context

  return (
    <div className="items-container">
      {todoItems.map((todo, index) => (
        <TodoItem
          key={index}
          task1={todo.name}
          date1={todo.date}
          onDelete={() => deleteTodo(index)} // Using the deleteTodo function from context
        />
      ))}
    </div>
  );
};

export default Items;
