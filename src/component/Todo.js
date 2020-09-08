import React, { useState, useEffect } from 'react';
import TextInput from './Input';
import TaskList from './TodoItems';
import TodoTitle from './Heading';
import requestApi from './TodoApi';

const Todo = (props) => {
  const [todo, setTodo] = useState({ title: '', tasks: [], lastTaskId: 0 });

  const updateTodo = () => requestApi.getTodo().then(setTodo);

  const toggleTaskStatus = (taskId) => {
    requestApi.toggleTaskStatus(taskId).then(updateTodo);
  };

  useEffect(updateTodo, []);

  const addTask = (content) => {
    requestApi.addTask(content).then(updateTodo);
  };

  const deleteTask = (taskId) => {
    requestApi.deleteTask(taskId).then(updateTodo);
  };

  const setTitle = (title) => {
    requestApi.setTitle(title).then(updateTodo);
  };

  const deleteTodo = () => {
    requestApi.resetTodo().then(updateTodo);
  };

  return (
    <div style={{ margin: '10em', width: '20%' }}>
      <div>
        <TodoTitle
          value={todo.title}
          onChange={setTitle}
          deleteTodo={deleteTodo}
        />
      </div>
      <TaskList
        tasks={todo.tasks}
        onClick={toggleTaskStatus}
        onDelete={deleteTask}
      />
      <br />
      <TextInput onEnterPress={addTask} className="taskInput" />
    </div>
  );
};
export default Todo;
