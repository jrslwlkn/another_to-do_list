import React from 'react'

const AddTodo = ({text, onchange, add}) => (
  <div className="input-group mt-2">
    <input type="text" className="form-control" placeholder="add a to-do" onChange={onchange} value={text} />
    <div className="input-group-append">
      <button className="btn btn-info" type="button" onClick={() => add(text)}>
        Add
      </button>
    </div>
  </div>
);

export default AddTodo;
