import React from 'react';
import Input from './Input';
import TodoItems from './TodoItems';
import Heading from './Heading';
import { getDefault, toggleStatus } from './toggleStatus';
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: [], heading: 'Todo', lastId: 0 };
    this.addTodo = this.addTodo.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addTodo(todoText) {
    const todo = this.state.todo.slice();
    todo.push({
      text: todoText,
      status: getDefault(),
      id: this.state.lastId++,
    });
    this.setState({ todo });
  }

  updateStatus(todoId) {
    const todoList = [...this.state.todo];
    todoList.forEach((todo) => {
      if (todo.id === +todoId) {
        todo.status = toggleStatus(todo.status);
      }
    });
    this.setState({ todo: todoList });
  }

  updateHeading(heading) {
    this.setState({ heading });
  }

  deleteItem(todoId) {
    const todoList = this.state.todo.filter((todo) => todo.id !== +todoId);
    this.setState({ todo: todoList });
  }

  render() {
    return (
      <div className="todo-box">
        <Heading
          heading={this.state.heading}
          updateHeading={this.updateHeading}
        />
        <TodoItems
          todoList={this.state.todo}
          updateStatus={this.updateStatus}
          deleteItem={this.deleteItem}
        />
        <Input onKeyPress={this.addTodo} />
      </div>
    );
  }
}
export default Todo;
