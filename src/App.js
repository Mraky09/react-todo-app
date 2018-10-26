import React, { Component } from 'react';
import './App.css';
import TodoContainer from './containers/TodoContainer';
import {
  Container
} from 'bloomer';

class App extends Component {
  render() {
    return (
      <Container>
        <TodoContainer />
      </Container>
    );
  }
}

export default App;
