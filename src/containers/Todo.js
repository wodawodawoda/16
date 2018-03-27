import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    render() {
        return(
            <div id={this.props.id} className="todos__todo">
                <p className="todos__text">{this.props.text}</p>
            </div>
        )
    }
}

Todo.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string
}
export default Todo;