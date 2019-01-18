import React from 'react'

import './todo-list-item.css'

const TodoListItem = ({ text, important, done, triggerImportant, triggerDone, deleteItem }) => {
  let style = 'btn p-0 m-0 ml-2 text-justify ';
  if (done) style += ' done text-muted ';
  if (important) style += ' important ';

  return (
    <li className="list-group-item p-1">
      {done && <i className="fas fa-check mx-1" style={{color: 'green'}} />}
      <span className={style} onClick={triggerDone}>{text}</span>
      
      <div className="float-right">
      <button className="btn btn-sm btn-danger mx-1" onClick={triggerImportant}>
        <i className="fas fa-exclamation"></i>
      </button>
      <button className="btn btn-sm btn-secondary" onClick={deleteItem}>
        <i className="fas fa-trash-alt"></i>
        </button>
        </div>
    </li>
  )
}

export default TodoListItem;
