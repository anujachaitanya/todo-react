import React from 'react';
import Delete from './Delete';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDeleteIconVisible: false };
    this.handleClick = this.handleClick.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleClick(event) {
    this.props.updateStatus(event.target.id);
  }

  delete(id) {
    this.props.delete(id);
  }

  render() {
    const { id, text, status } = this.props.todo;
    const classes = `task ${status}`;
    return (
      <div className={classes}>
        <div className="indicator"></div>
        <span className="todoText" id={id} onClick={this.handleClick}>
          {text}
        </span>
        <Delete delete={this.delete} id={id} />
      </div>
    );
  }
}
export default TodoItem;
