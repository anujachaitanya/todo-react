import React from 'react';
import Input from './component/Input';
import TodoList from './component/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '', todo: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(input) {
    this.setState({ input });
  }

  handleKeyPress(todoText) {
    const todo = this.state.todo.slice();
    todo.push({ text: todoText, done: false, id: new Date().getTime() });
    this.setState({ input: '', todo });
  }

  handleClick(todoId) {
    const newTodo = this.state.todo.map((todo) => {
      if (todo.id == todoId) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({ todo: newTodo });
  }

  render() {
    return (
      <div className="container">
        <h2>TODO</h2>
        <TodoList todoList={this.state.todo} onClick={this.handleClick} />
        <Input
          value={this.state.input}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default App;
