import React from 'react';

const DeleteButton = (props) => {
  return (
    <span className={props.className} onClick={props.onClick}>
      X
    </span>
  );
};

export default DeleteButton;
