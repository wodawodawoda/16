import React from 'react';
import '../app.sass';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


let lastId = 0;
function randomId() {
  return lastId += 1;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };

    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }
  handleNewTodo(changedText) {
    const val = [...this.state.data, { id: randomId(), text: changedText }];
    this.setState({ data: val });
  }
  handleRemoveTodo(id) {
    const idInt = parseInt(id, 10);
    this.setState({
      data: this.state.data.filter((value) => { if (value.id !== idInt) { return value; } }),
    });
  }
  render() {
    return (
            <div className="container">
                <TodoForm handleNewTodo={this.handleNewTodo}/>
                <TodoList data={this.state.data} handleRemoveTodo={this.handleRemoveTodo}/>
            </div>
    );
  }
}

export default App;
