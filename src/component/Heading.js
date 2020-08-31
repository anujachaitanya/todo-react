import React from 'react';
import Input from './Input';
import './todo.css';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showHeader: true };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick() {
    this.setState({ showHeader: false });
  }

  handleKeyPress(heading) {
    this.props.updateHeading(heading);
    this.setState({ showHeader: true });
  }

  render() {
    if (this.state.showHeader) {
      return <h2 onClick={this.handleClick}>{this.props.heading}</h2>;
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
