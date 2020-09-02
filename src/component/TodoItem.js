import React from 'react';
import Delete from './Delete';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDeleteIconVisible: false };
    this.handleClick = this.handleClick.bind(this);
    this.delete = this.delete.bind(this);
    this.showDeleteIcon = this.showDeleteIcon.bind(this);
    this.hideDeleteIcon = this.hideDeleteIcon.bind(this);
  }

  handleClick(event) {
    this.props.updateStatus(event.target.id);
  }

  delete(id) {
    this.props.delete(id);
  }

  showDeleteIcon() {
    this.setState({ isDeleteIconVisible: true });
  }

  hideDeleteIcon() {
    this.setState({ isDeleteIconVisible: false });
  }

  render() {
    const { id, text, status } = this.props.todo;
    const classes = `task ${status}`;
    let deleteElement;
    if (this.state.isDeleteIconVisible) {
      deleteElement = <Delete delete={() => this.delete(id)} />;
    }
    return (
      <div
        className={classes}
        onMouseOver={this.showDeleteIcon}
        onMouseLeave={this.hideDeleteIcon}
      >
        <div className="indicator"></div>
        <span className="todoText" id={id} onClick={this.handleClick}>
          {text}
        </span>
        {deleteElement}
      </div>
    );
  }
}
export default TodoItem;
