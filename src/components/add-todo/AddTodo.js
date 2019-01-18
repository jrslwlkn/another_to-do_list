import React from 'react'

const AddTodo = ({text, onchange, add}) => (
  <form className="input-group mt-2" onSubmit={() => add(text)}>
    <input type="text" className="form-control" placeholder="add a to-do" onChange={onchange} value={text} />
    <div className="input-group-append">
      <button className="btn btn-info" type="button">
        Add
      </button>
    </div>
  </form>
);

export default AddTodo;
