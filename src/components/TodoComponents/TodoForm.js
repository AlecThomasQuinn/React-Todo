import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = { 
            task: ''
        };
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitItem = event => {
    event.preventDefault();
    this.props.addTodo(this.state.task);
    };


    render() { 
        return ( 
            <form onSubmit={this.submitItem}>
                <input 
                    type='text'
                    value={this.task}
                    name='task'
                    onChange={this.handleChanges}
                /> 
                <button>Submit</button>
            </form>
            
         );
    }
}
 
export default TodoForm;