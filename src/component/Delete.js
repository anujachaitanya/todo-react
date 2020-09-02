import deleteIcon from './delete.svg';
import React from 'react';

const Delete = function (props) {
  return (
    <img
      src={deleteIcon}
      alt="delete icon"
      className="icon"
      onClick={() => {
        props.delete(props.id);
      }}
    />
  );
};

export default Delete;
