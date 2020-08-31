import React from 'react';
import Input from './Input';
import TodoItems from './TodoItems';
import './todo.css';
import { getDefault, toggleStatus } from './statusIterator';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: [], lastId: 0 };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleKeyPress(todoText) {
    const todo = this.state.todo.slice();
    todo.push({
      text: todoText,
      status: getDefault(),
      id: this.state.lastId,
    });
    this.state.lastId++;
    this.setState({ todo });
  }

  handleClick(todoId) {
    const todoList = this.state.todo.slice();
    todoList.forEach((todo) => {
      if (todo.id === +todoId) {
        todo.status = toggleStatus(todo.status);
      }
    });
    this.setState({ todo: todoList });
  }

  render() {
    return (
      <div className="todo-box">
        <h2 contentEditable="true">TODO</h2>
        <TodoItems todoList={this.state.todo} onClick={this.handleClick} />
        <Input value={this.state.input} onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default Todo;
