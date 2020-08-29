import React from 'react';
import '../todo.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const todoId = event.target.id;
    this.props.onClick(todoId);
  }

  render() {
    const todoList = this.props.todoList.map((todo) => (
      <div key={todo.id} className={todo.done ? 'todo done' : 'todo undone'}>
        <div className="indicator"></div>
        <span className="todoText" id={todo.id} onClick={this.handleClick}>
          {todo.text}
        </span>
      </div>
    ));
    return <div>{todoList}</div>;
  }
}

export default TodoList;
