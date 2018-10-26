import React from 'react';

const TodoItem = ({ todo }) => (
  <div className="w-full lg:flex">
    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        {/* <div className="text-black font-bold text-xl mb-2">{todo.title}</div> */}
        <p className="text-grey-darker text-base">{todo.title}</p>

      </div>
    </div>
  </div>
);

export default TodoItem;
