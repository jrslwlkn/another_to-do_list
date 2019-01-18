import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddTodo from '../add-todo'

class App extends Component {

  state = {
    todos: [],
    currentText: '',
    search: '',
    filter: 'all'
  }

  id = 100;

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) this.setState({todos})
  }

  onTyping = (event, prop) => {
    this.setState({
      [prop]: event.target.value
    })
  }

  triggerTodo = (prop, id) => {
    const updatedTodos = this.state.todos.map(t => {
      if (t.key === id) {
        t[prop] = !t[prop];
      }
      return t;
    })

    this.setState({ todos: updatedTodos })

    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  addTodo = text => {
    this.id++;
    if (text.trim()) {
      const { todos } = this.state;
      const newTodo = {
        text,
        important: false,
        done: false,
        key: todos[todos.length - 1] ? todos[todos.length - 1].key + 1 : this.id
      }
    
      this.setState({
        todos: [...todos, newTodo],
        currentText: ''
      })

      const todoz = JSON.parse(localStorage.getItem('todos')) || []
      localStorage.setItem('todos', JSON.stringify([...todoz, newTodo]))
    }
  }

  deleteTodo = id => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(t => t.key !== id) })
    
    const todoz = JSON.parse(localStorage.getItem('todos')).filter(t => t.key !== id)
    localStorage.setItem('todos', JSON.stringify(todoz))
  }
  
  changeFilter = value => {
    this.setState({filter: value})
  }

  render() {
    const { todos, currentText, filter, search } = this.state;
    const doneCount = todos.filter(t => t.done).length;
    const remaining = todos.length - doneCount;

    let filteredTodos;
    switch (filter) {
      case 'all':
        filteredTodos = todos;
        break;
      case 'important':
        filteredTodos = todos.filter(t => t.important && !t.done);
        break;
      case 'done':
        filteredTodos = todos.filter(t => t.done);
        break;
      default:
        filteredTodos = todos;
    }

    if (search) {
      filteredTodos = filteredTodos.filter(t => t.text.toLowerCase().trim().indexOf(search.toLowerCase().trim()) > -1)
    }
    

    return (
      <div className="row justify-content-center m-0">
        <div className="col-sm-12 col-md-6">
          <div className="card-body">
            <div className="card-title">
              <AppHeader remaining={remaining} done={doneCount} />
            </div>
            {todos.length === 0 ? null : <SearchPanel filter={this.changeFilter} onchange={(e) => this.onTyping(e, 'search')} />}
            <TodoList todos={filteredTodos} trigger={this.triggerTodo} deleteItem={this.deleteTodo} />
            <AddTodo add={this.addTodo} text={currentText} onchange={(e) => this.onTyping(e, 'currentText')} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
