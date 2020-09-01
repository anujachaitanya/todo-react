import React from 'react';
import Input from './Input';
import TodoItems from './TodoItems';
import Heading from './Heading';
import './todo.css';
import { getDefault, toggleStatus } from './toggleStatus';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: [], lastId: 0, heading: 'TODO' };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
  }

  updateHeading(heading) {
    console.log(heading);
    this.setState({ heading });
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
        <Heading
          updateHeading={this.updateHeading}
          heading={this.state.heading}
        />
        <TodoItems todoList={this.state.todo} onClick={this.handleClick} />
        <Input onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default Todo;
