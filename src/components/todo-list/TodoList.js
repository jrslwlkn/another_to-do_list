import React from 'react'
import TodoListItem from './todo-list-item'

const TodoList = ({ todos, trigger, deleteItem }) => {
  const items = todos.map(t => (
    <TodoListItem {...t}
      deleteItem={() => deleteItem(t.key)}
      triggerImportant={() => trigger('important', t.key)}
      triggerDone={() => trigger('done', t.key)} />
  )) 

  return (
    <ul className="list-group">
      {items}
    </ul>
  )
}
export default TodoList;
