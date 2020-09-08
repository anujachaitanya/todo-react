import React from 'react';
import Task from './TodoItem';

const TaskList = function (props) {
  const { tasks, onClick, onDelete } = props;
  const taskList = tasks.map((task) => {
    return (
      <Task task={task} key={task.id} onClick={onClick} onDelete={onDelete} />
    );
  });
  return <div>{taskList}</div>;
};

export default TaskList;
