import React from 'react';
import {
  Field,
  Control,
  Input,
  Icon,
  Button
} from 'bloomer';

const AddTodo = ({ newTodo, onChange, onSubmit }) => {
  return (
    <Field>
      <Control hasIcons>
        <Input isColor="success" placeholder="Add todo" value={newTodo.title} onChange={onChange} onKeyPress={(event) => {
          if (event.key === "Enter") {
            onSubmit()
          }
        }}/>
        <Icon isSize='small' isAlign='left'>
          <span className="fa fa-user" aria-hidden="true" />
        </Icon>
      </Control>
    </Field>
  );
}

export default AddTodo;
