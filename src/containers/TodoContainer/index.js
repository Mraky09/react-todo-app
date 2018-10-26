import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import TodoList from '../../components/TodoList';
import AddTodo from '../../components/AddTodo';

import {
  Column,
  Columns
} from 'bloomer';

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newTodo = {
      title: event.target.value,
      id: uuidv4()
    };
    this.setState({
      newTodo
    });
  }

  handleSubmit(event) {
    this.setState({
      newTodo: {
        title: ''
      },
      todos: [...this.state.todos, this.state.newTodo]
    });
  }

  render() {
    const { todos, newTodo } = this.state;
    return (
      <Columns isCentered>
        <Column isSize='1/3'>
          <AddTodo onChange={this.handleChange} onSubmit={this.handleSubmit} newTodo={newTodo} />
        </Column>
        <Column>
          <TodoList todos={todos} />
        </Column>
      </Columns>
    );
  }
}


export default TodoContainer;
