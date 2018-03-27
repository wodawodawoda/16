import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
    get todos() {
        return this.props.data.map(todo => <Todo key={todo.id} id={todo.id} text={todo.text}/>)
    }
    remove(event) {
        if(event.target.className === 'todos') {return}
        let target;
        event.target.className === 'todos__text' ? target = event.target.parentElement : target = event.target
        this.props.handleRemoveTodo(target.id);
    }
    render() {
        return(
            <div className="todos" onClick={event => this.remove(event)}>
                {this.todos}
            </div>
        )
    }
}

TodoList.propTypes = {
    data: PropTypes.array,
    handleRemoveTodo: PropTypes.func
}


export default TodoList;