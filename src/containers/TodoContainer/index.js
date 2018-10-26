import React, { Component } from 'react';
import TodoList from '../../components/TodoList';
import AddTodo from '../AddTodo';

import {
  Column,
  Columns
} from 'bloomer';

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    const { todos, newTodo } = this.state;
    return (
      <Columns isCentered>
        <Column isSize='1/3'>
          <AddTodo onChange={this.handleChange} addTodo={this.addTodo} newTodo={newTodo} />
        </Column>
        <Column>
          <TodoList todos={todos} />
        </Column>
      </Columns>
    );
  }
}


export default TodoContainer;
