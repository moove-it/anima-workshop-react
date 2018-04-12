import React from 'react';
import ToDoItem from '../todo-item/TodoItem';

const ToDoList = ({ todos, onRemove, onComplete }) => {
  return (
    <div className="flex flex-column">
      {todos.map(({ value, status, id }) => (
        <ToDoItem
          key={id}
          value={value}
          status={status}
          onRemove={() => onRemove({ id })}
          onComplete={() => onComplete({ id })}
        />
      ))}
    </div>
  );
};

ToDoList.propTypes = {};

export default ToDoList;
