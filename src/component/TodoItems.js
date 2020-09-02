import React from 'react';
import TodoItem from './TodoItem';
import './todo.css';

const TodoItems = function (props) {
  const todoList = props.todoList.map((todo) => {
    return (
      <TodoItem
        delete={props.deleteItem}
        todo={todo}
        updateStatus={props.updateStatus}
        key={todo.id}
      />
    );
  });
  return <div>{todoList}</div>;
};
export default TodoItems;
