import React, { useState } from 'react';

function AddTodo({shiftToParent}) {
    const [name,setName] = useState(" ");
    const [date,setDate] = useState(" ");
    function ChangeName(event)
    {
        setName(event.target.value);
    }
    

    function ChangeDate(event)
    {
        setDate(event.target.value);
    }
   
function ChangeButton()
{
    console.log(`task:${name} and date:${date}`);
    shiftToParent(name,date);
    setDate("");
    setName("");
}


  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo" 
            onChange={ChangeName}
            />
          </div>
          <div className="col-4">
            <input type="date" 
            onChange={ChangeDate}
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success"
            onClick={ChangeButton}
            >Add</button>
          </div> 
        </div>

     
      </div>
    </>
  );
}

export default AddTodo;
