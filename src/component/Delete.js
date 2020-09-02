import deleteIcon from './delete.svg';
import React from 'react';

const Delete = function (props) {
  return <img src={deleteIcon} alt="delete icon" onClick={props.delete} />;
};

export default Delete;
