import React, { useState } from 'react';
import TextInput from './Input';
import DeleteButton from './Delete';

const TodoTitle = (props) => {
  const [isEditable, setEditable] = useState(false);

  const { value, onChange, deleteTodo } = props;

  const handleClick = () => {
    setEditable(true);
  };

  const handleTitleChange = (value) => {
    setEditable(false);
    onChange(value);
  };

  return isEditable ? (
    <TextInput
      className="todoTitle"
      value={value}
      onEnterPress={handleTitleChange}
    />
  ) : (
    <div className="todoTitle" style={{ cursor: 'pointer' }}>
      <p onClick={handleClick}>{value}</p>
      <DeleteButton className="deleteTodoBtn" onClick={() => deleteTodo()} />
    </div>
  );
};

export default TodoTitle;
