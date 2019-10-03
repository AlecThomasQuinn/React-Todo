import React, { useReducer } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './styles.css'

const todoData = [ //this is the shape that my data needs to take, from readme
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = { //this is my state object. In class components this is how state is stored
      todos: todoData
      // assigning this.state.todos to the value of the todoData array, defined outside of the class
    }; 
  }

  toggleTodo= id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  addTodo = todo => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearDone = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() { 
    return (
      // everything gets placed in here just like the functional components, with JSX etc.
      <div>
        <h1>Welcome to your Todo App!</h1>
        {console.log(this.state.todos)}
        <TodoList 
          todo={this.state.todos} 
          toggleTodo={this.toggleTodo}
          clearDone={this.clearDone}
        />
        <TodoForm addTodo={this.addTodo}/>
      </div>
      
    );
  }
}

export default App;
