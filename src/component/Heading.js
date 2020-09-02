import React from 'react';
import Input from './Input';
import Delete from './Delete';
import './todo.css';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showHeader: true, isDeleteIconVisible: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
  }

  handleClick() {
    this.setState({ showHeader: false });
  }

  handleKeyPress(heading) {
    this.props.updateHeading(heading);
    this.setState({ showHeader: true });
  }

  showDelete() {
    this.setState({ isDeleteIconVisible: true });
  }

  hideDelete() {
    this.setState({ isDeleteIconVisible: false });
  }

  render() {
    const deleteIcon = this.state.isDeleteIconVisible ? (
      <Delete delete={this.props.deleteAllItems} />
    ) : (
      ''
    );
    if (this.state.showHeader) {
      return (
        <div
          className="task"
          onMouseOver={this.showDelete}
          onMouseLeave={this.hideDelete}
        >
          <h2 onClick={this.handleClick}>{this.props.heading}</h2>
          {deleteIcon}
        </div>
      );
    }
    return (
      <Input
        value={this.props.heading}
        onKeyPress={this.handleKeyPress}
        className="heading-input"
      />
    );
  }
}

export default Heading;
