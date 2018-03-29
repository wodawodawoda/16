import React from 'react';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  handleForm(event) {
    event.preventDefault();
    if (!this.state.text) { return; } // stop if input is empty
    this.props.handleNewTodo(this.state.text);
    this.setState({ text: '' }); // clear text (and iput value) after submit
  }
  handleInput(event) {
    this.setState({ text: event.target.value });
  }
  render() {
    console.log(this.state.text);
    return (
            <form onSubmit={event => this.handleForm(event)} className={'form'}>
                <label htmlFor="inputTodo">Add new TODO:</label>
                <input type="text" onChange={event => this.handleInput(event)} value={this.state.text} id={'inputTodo'} className={'form__input'}/>
            </form>
    );
  }
}

TodoForm.propTypes = {
  handleNewTodo: PropTypes.func,
};
export default TodoForm;
