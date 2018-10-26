import React from 'react';
import {
  Box,
  Icon
} from 'bloomer';

const TodoItem = ({ todo }) => (
  <Box>
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            {todo.title}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <Icon isSize="small" className="fa fa-home" />
          </div>
        </nav>
      </div>
    </article>
  </Box>
);

export default TodoItem;
