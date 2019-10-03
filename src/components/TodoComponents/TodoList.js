import React from 'react';
import Todo from './Todo'


const TodoList = (props) => {

    return ( 
    <div>
        {console.log("from TodoList", props)}
        <h2>Things I need to do</h2>
        {props.todo.map(todo => 
            <Todo
            key={todo.id} 
            todo={todo} 
            toggleTodo={props.toggleTodo}/>)}
        <button onClick={props.clearDone}>Clear Done</button>
        
    </div> );
}
 
export default TodoList;