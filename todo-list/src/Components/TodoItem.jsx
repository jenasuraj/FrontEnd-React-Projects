import React from 'react';

function TodoItem({ task1, date1, onDelete }) {
  return (
    <>
      <div className="row">
        <div className="col-6">{task1}</div>
        <div className="col-4">{date1}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
