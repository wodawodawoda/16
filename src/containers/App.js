import React from 'react';
import '../app.sass';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


let lastId = 0;
function randomId() {
    return lastId++
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };

        this.handleNewTodo = this.handleNewTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }
    handleNewTodo(changedText) {
        const val = [...this.state.data, {id: randomId(), text: changedText}];
        this.setState({data: val});
    }
    handleRemoveTodo(id) {
        this.setState({
            data: this.state.data.filter((v) => {if(v.id != id){return v}}) // Using not strict inequality because of incoming argument id is number in string // Can't figure out how to get React key from click event
        });
    }
    render() {
        return(
            <div className="container">
                {/*<Title />*/}
                <TodoForm handleNewTodo={this.handleNewTodo}/>
                <TodoList data={this.state.data} handleRemoveTodo={this.handleRemoveTodo}/>
            </div>
        )
    }
}

export default App