import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import {
  Field,
  Control,
  Input,
  Icon
} from 'bloomer';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: {
        id: uuidv4(),
        title: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetNewTodoState = this.resetNewTodoState.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodo: Object.assign({}, this.state.newTodo, { title: event.target.value })
    });
  }

  resetNewTodoState() {
    this.setState({
      newTodo: {
        id: uuidv4(),
        title: ''
      }
    });
  }

  render() {
    const {addTodo} = this.props;
    return (
      <Field>
        <Control hasIcons>
          <Input isColor="success" placeholder="Add todo" value={this.state.newTodo.title} onChange={this.handleChange} onKeyPress={(event) => {
            if (event.key === "Enter") {
              addTodo(this.state.newTodo);
              this.resetNewTodoState();
            }
          }}/>
          <Icon isSize='small' isAlign='left'>
            <span className="fa fa-user" aria-hidden="true" />
          </Icon>
        </Control>
      </Field>
    );
  }
}

export default AddTodo;
